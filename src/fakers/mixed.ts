import { datatype } from '../install'
import { boolean, number, string, date, mixed, Maybe, AnyObject, Flags, Schema } from 'yup'
import { BaseFaker, addFaker } from './base'
import type { Options } from '../type'

const schemaConstructors: (() => Schema)[] = [boolean, number, string, date]

type AnyPresentValue = {}

export class MixedFaker<
  TType extends Maybe<AnyPresentValue> = AnyPresentValue | undefined,
  TContext = AnyObject,
  TDefault = undefined,
  TFlags extends Flags = '',
> extends BaseFaker<TType, TContext, TDefault, TFlags> {
  doFake(options?: Options) {
    let randomSchema = schemaConstructors[datatype.number({ min: 0, max: schemaConstructors.length - 1 })]()

    if (this.schema.tests.some(test => ['required', 'defined'].includes(test.OPTIONS?.name!))) {
      randomSchema = randomSchema.required()
    }

    if (this.schema.spec.nullable) {
      /* istanbul ignore next */
      randomSchema = randomSchema.nullable()
    }

    if (this.schema.spec.default) {
      randomSchema.spec.default = this.schema.spec.default
    }

    return MixedFaker.rootFake(randomSchema, options)
  }
}

export const installMixedFaker = () => {
  addFaker(mixed, MixedFaker)
}
