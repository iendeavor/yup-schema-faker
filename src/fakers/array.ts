import { mixed, array } from 'yup'
import { datatype } from '../faker'
import { MixedFaker } from './mixed'
import { addFaker, globalOptions } from './base'
import { isStrict } from '../util'

import type { Schema, ArraySchema } from 'yup'
import type { Options } from '../type'

export class ArrayFaker extends MixedFaker<ArraySchema<Schema<unknown>>> {
  doFake(options?: Options) {
    const min =
      ((this.schema.tests.find(test => test.OPTIONS.name === 'length')?.OPTIONS.params?.length as number) ||
        undefined) ??
      ((this.schema.tests.find(test => test.OPTIONS.name === 'min')?.OPTIONS.params?.min as number) || undefined) ??
      0
    const max =
      ((this.schema.tests.find(test => test.OPTIONS.name === 'length')?.OPTIONS.params?.length as number) ||
        undefined) ??
      ((this.schema.tests.find(test => test.OPTIONS.name === 'max')?.OPTIONS.params?.max as number) || undefined) ??
      min + 10

    let array = Array(datatype.number({ min, max })).fill(null)
    const innerSchema = this.schema.innerType
    if (innerSchema) {
      array = array.map(() => ArrayFaker.rootFake(this.schema.innerType!, options))
    } else {
      array = array.map(() => ArrayFaker.rootFake(mixed(), options))
    }

    if ((isStrict(this.schema) || globalOptions.strict) !== true && datatype.float({ min: 0, max: 1 }) > 0.9) {
      return JSON.stringify(array)
    }

    return array
  }
}

addFaker(array, ArrayFaker)
