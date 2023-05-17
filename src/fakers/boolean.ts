import { AnyObject, boolean, Flags, Maybe } from 'yup'
import { datatype } from '../install'
import { BaseFaker } from './base'
import { fakeDedicatedTest, addFaker } from './base'

export class BooleanFaker<
  TType extends Maybe<boolean> = boolean | undefined,
  TContext = AnyObject,
  TDefault = undefined,
  TFlags extends Flags = '',
> extends BaseFaker<TType, TContext, TDefault, TFlags> {
  doFake() {
    return datatype.boolean()
  }
}

export const installBooleanFaker = () => {
  addFaker(boolean, BooleanFaker)

  fakeDedicatedTest(boolean, 'is-value', schema => {
    const isValueTest = schema.tests.find(test => test.OPTIONS?.name === 'is-value')!
    return isValueTest.OPTIONS?.params?.value === 'true'
  })
}
