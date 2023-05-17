import { AnyObject, date as yupDate, Flags, Maybe } from 'yup'
import { datatype, faker } from '../install'
import { addFaker, globalOptions } from './base'
import { BaseFaker } from 'src'

const MIN = new Date(0).toISOString()
const MAX = new Date((Math.pow(2, 31) - 1) * 1000).toISOString()

export class DateFaker<
  TType extends Maybe<Date> = Date | undefined,
  TContext = AnyObject,
  TDefault = undefined,
  TFlags extends Flags = '',
> extends BaseFaker<TType, TContext, TDefault, TFlags> {
  doFake() {
    const min =
      (this.schema.tests.find(test => test.OPTIONS?.name === 'min')?.OPTIONS?.params?.min as string | undefined) ?? MIN
    const max =
      (this.schema.tests.find(test => test.OPTIONS?.name === 'max')?.OPTIONS?.params?.max as string | undefined) ?? MAX

    const result = faker.date.between(min, max)

    if ((this.schema.spec.strict || globalOptions.strict) !== true && datatype.float({ min: 0, max: 1 }) > 0.8) {
      return result.toISOString()
    }

    return result
  }
}

export const installDateFaker = () => {
  addFaker(yupDate, DateFaker)
}
