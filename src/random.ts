import { datatype, faker } from './install'
import RandExp from 'randexp'

export const randexp = (pattern: string | RegExp, flags?: string) => {
  const randexp = new RandExp(pattern, flags)
  randexp.randInt = (from, to) => datatype.number({ min: from, max: to })
  return randexp.gen()
}

export const seed = (value: number) => {
  faker.seed.call(faker, [value])
}
