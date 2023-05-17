import { datatype } from '../install'
import { Flags, isSchema, Schema } from 'yup'
import type { AnySchema } from 'yup'
import type { Fake, Options } from '../type'

export const globalOptions = { strict: false }

const SAFE_COUNT = 99999
export abstract class BaseFaker<TType = any, C = any, D = any, F extends Flags = Flags> {
  static rootFake: Fake<AnySchema>

  static dedicatedTests: { [schema: string]: { [name: string]: (schema: AnySchema) => any } } = {}

  protected schema: Schema<TType, C, D, F>

  constructor(schema: Schema<TType, C, D, F>) {
    this.schema = schema
  }

  fake(options?: Options) {
    const fns = [
      this.fakeDefault,
      this.fakeUndefined,
      this.fakeNullable,
      this.fakeOneOf,
      this.fakeNotOneOf,
      this.fakeDedicatedTest,
    ]
    for (const fn of fns) {
      const [hasFaked, result] = fn.call(this, options)
      if (hasFaked) return result
    }

    return this.doFake(options)
  }

  protected fakeDefault(): [boolean, any?] {
    if (datatype.float({ min: 0, max: 1 }) > 0.9 && this.schema.spec.default !== undefined)
      return [
        true,
        typeof this.schema.spec.default === 'function' ? this.schema.spec.default() : this.schema.spec.default,
      ]

    return [false]
  }

  protected fakeUndefined(): [boolean, any?] {
    if (this.schema.spec.default === undefined && this.schema.spec.optional && datatype.float({ min: 0, max: 1 }) > 0.9)
      return [true, undefined]

    return [false]
  }

  protected fakeNullable(): [boolean, any?] {
    if (datatype.float({ min: 0, max: 1 }) > 0.9 && this.schema.spec.nullable) return [true, null]

    return [false]
  }

  protected fakeOneOf(): [boolean, any?] {
    const next = this.schema.clone()
    const oneOf = (next as any)._whitelist.describe()
    if (oneOf.length) return [true, oneOf[datatype.number({ min: 0, max: oneOf.length - 1 })]]

    return [false]
  }

  protected fakeNotOneOf(options?: Options): [boolean, any?] {
    const next = this.schema.clone()
    const notOneOf = (next as any)._blacklist.describe()
    if (notOneOf.length) {
      let safeCount = 0
      let data
      do {
        data = this.doFake(options)
      } while (++safeCount < SAFE_COUNT && notOneOf.includes(data))
      return [true, data]
    }

    return [false]
  }

  protected fakeDedicatedTest(): [boolean, any?] {
    const dedicatedTest = this.schema.tests.find(
      test => BaseFaker.dedicatedTests[this.schema.type]?.[test.OPTIONS?.name!] !== undefined,
    )
    if (dedicatedTest)
      return [true, BaseFaker.dedicatedTests[this.schema.type][dedicatedTest.OPTIONS?.name!](this.schema)]

    return [false]
  }

  protected doFake(_options?: Options) {}
}

export function fakeDedicatedTest<SchemaConstructor extends (...args: any[]) => Schema>(
  schemaConstructor: SchemaConstructor,
  name: string,
  fakeFn: (schema: ReturnType<SchemaConstructor>) => ReturnType<ReturnType<SchemaConstructor>['cast']>,
) {
  if (schemaConstructor === undefined || isSchema(schemaConstructor) === false)
    throw new TypeError('You must provide a yup schema constructor function')
  if (typeof name !== 'string') throw new TypeError('A Method name must be provided')
  if (typeof fakeFn !== 'function') throw new TypeError('Method function must be provided')

  const schemaType = schemaConstructor().type
  BaseFaker.dedicatedTests[schemaType] = BaseFaker.dedicatedTests[schemaType] ?? {}
  BaseFaker.dedicatedTests[schemaType][name] = fakeFn as any
}

export const typeToFaker = new Map<String, any>()
export function addFaker<S extends Schema, Faker>(schemaConstructor: (...arg: any[]) => S, fakerConstructor: Faker) {
  if (schemaConstructor === undefined || isSchema(schemaConstructor) === false)
    throw new TypeError('You must provide a yup schema constructor function')

  const schemaType = schemaConstructor().type
  typeToFaker.set(schemaType, fakerConstructor)
}
