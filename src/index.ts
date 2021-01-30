import { AnySchema } from 'yup'
import Lazy from 'yup/lib/Lazy'
import Reference from 'yup/lib/Reference'
import { ArrayFaker } from './fakers/array'
import { BooleanFaker } from './fakers/boolean'
import { DateFaker } from './fakers/date'
import { MixedFaker } from './fakers/mixed'
import { NumberFaker } from './fakers/number'
import { ObjectFaker } from './fakers/object'
import { StringFaker } from './fakers/string'
import { Fake } from './type'

MixedFaker.rootFake = rootFake

export const typeToFaker = new Map<String, any>()
typeToFaker.set('array', ArrayFaker)
typeToFaker.set('boolean', BooleanFaker)
typeToFaker.set('date', DateFaker)
typeToFaker.set('number', NumberFaker)
typeToFaker.set('object', ObjectFaker)
typeToFaker.set('string', StringFaker)
typeToFaker.set('mixed', MixedFaker)

function rootFake<Schema extends AnySchema>(schema: Schema, parent?: any): ReturnType<Fake<Schema>> {
  if (schema instanceof Reference) {
    return schema.getValue(undefined, parent)
  }
  if (schema instanceof Lazy) {
    return rootFake(schema.resolve({}))
  }
  if ((schema as any).conditions.length) {
    return rootFake(schema.resolve({ parent }))
  }

  const faker = new (typeToFaker.get(schema.type) as typeof MixedFaker)(schema)
  return faker.fake()
}
export const fake = rootFake

export * from './type'
export * from './fakers/array'
export * from './fakers/boolean'
export * from './fakers/date'
export * from './fakers/number'
export * from './fakers/object'
export * from './fakers/string'
export * from './version'
