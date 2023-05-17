import { mixed, array, Flags, ArraySchema } from 'yup'
import { datatype } from '../install'
import { BaseFaker } from './base'
import { addFaker, globalOptions } from './base'
import type { Options } from '../type'

export class ArrayFaker<
  TIn extends any[] | null | undefined,
  TContext,
  TDefault = undefined,
  TFlags extends Flags = '',
> extends BaseFaker<TIn, TContext, TDefault, TFlags> {
  doFake(options?: Options) {
    const min =
      ((this.schema.tests.find(test => test.OPTIONS?.name === 'length')?.OPTIONS?.params?.length as number) ||
        undefined) ??
      ((this.schema.tests.find(test => test.OPTIONS?.name === 'min')?.OPTIONS?.params?.min as number) || undefined) ??
      0
    const max =
      ((this.schema.tests.find(test => test.OPTIONS?.name === 'length')?.OPTIONS?.params?.length as number) ||
        undefined) ??
      ((this.schema.tests.find(test => test.OPTIONS?.name === 'max')?.OPTIONS?.params?.max as number) || undefined) ??
      min + 10

    let array = Array(datatype.number({ min, max })).fill(null)
    const innerSchema = (this.schema as ArraySchema<TIn, TContext, TDefault, TFlags>).innerType
    if (innerSchema) {
      array = array.map(() => ArrayFaker.rootFake(innerSchema, options))
    } else {
      array = array.map(() => ArrayFaker.rootFake(mixed(), options))
    }

    if ((this.schema.spec.strict || globalOptions.strict) !== true && datatype.float({ min: 0, max: 1 }) > 0.9) {
      return JSON.stringify(array)
    }

    return array
  }
}

export const installArrayFaker = () => {
  addFaker(array, ArrayFaker)
}
