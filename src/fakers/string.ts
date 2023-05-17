import { AnyObject, Flags, Maybe, string } from 'yup'
import { random, datatype, internet, lorem } from '../install'
import { randexp } from '../random'
import { BaseFaker } from './base'
import { fakeDedicatedTest, addFaker, globalOptions } from './base'

export class StringFaker<
  TType extends Maybe<string> = string | undefined,
  TContext = AnyObject,
  TDefault = undefined,
  TFlags extends Flags = '',
> extends BaseFaker<TType, TContext, TDefault, TFlags> {
  doFake() {
    const min =
      (this.schema.tests.find(test => test.OPTIONS?.name === 'length')?.OPTIONS?.params?.length as number) ??
      (this.schema.tests.find(test => test.OPTIONS?.name === 'min')?.OPTIONS?.params?.min as number) ??
      undefined
    const max =
      (this.schema.tests.find(test => test.OPTIONS?.name === 'length')?.OPTIONS?.params?.length as number) ??
      (this.schema.tests.find(test => test.OPTIONS?.name === 'max')?.OPTIONS?.params?.max as number) ??
      undefined

    if (
      min === undefined &&
      this.schema.tests.some(test => test.OPTIONS?.name === 'required') === false &&
      datatype.float({ min: 0, max: 1 }) > 0.9
    ) {
      return ''
    }

    // sentence and other function sometimes return undefined!
    let result = lorem.paragraph(max ?? min)
    if (datatype.float({ min: 0, max: 1 }) > 0.9) {
      result = lorem.paragraph(max ?? min) ?? result
    } else if (datatype.float({ min: 0, max: 1 }) > 0.9) {
      result = lorem.word(max ?? min) ?? result
    } else {
      result = lorem.sentence(max ?? min) ?? result
    }
    result = result.slice(0, max).trim()

    const shouldTrim =
      (this.schema.spec.strict || globalOptions.strict) && this.schema.tests.find(test => test.OPTIONS?.name === 'trim')
    if (shouldTrim) {
      result = result.trim() + random.alpha({ count: result.length })
    } else {
      result = ' '.repeat(datatype.number(max ?? min ?? 3)) + result + ' '.repeat(datatype.number(max ?? min ?? 3))
    }

    result = result.slice(0, max)

    const lowercase =
      (this.schema.spec.strict || globalOptions.strict) &&
      this.schema.tests.some(test => test.OPTIONS?.name === 'string_case') &&
      this.schema.isValidSync(result.toLowerCase())
    const uppercase =
      (this.schema.spec.strict || globalOptions.strict) &&
      this.schema.tests.some(test => test.OPTIONS?.name === 'string_case') &&
      this.schema.isValidSync(result.toUpperCase())
    result = lowercase ? result.toLowerCase() : uppercase ? result.toUpperCase() : result

    return result
  }
}

export const installStringFaker = () => {
  addFaker(string, StringFaker)

  fakeDedicatedTest(string, 'uuid', () => {
    return datatype.uuid()
  })

  fakeDedicatedTest(string, 'email', () => {
    return internet.email()
  })

  fakeDedicatedTest(string, 'url', () => {
    return internet.url()
  })

  fakeDedicatedTest(string, 'matches', schema => {
    const regexTest = schema.tests.find(test => test.OPTIONS?.name === 'matches')
    return randexp(regexTest?.OPTIONS?.params!.regex as RegExp)
  })
}
