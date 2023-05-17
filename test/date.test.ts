import { date } from 'yup'
import { fake } from '../src'
import { SAFE_COUNT } from './constant'

it('should works with default', () => {
  const defaultData = new Date()
  const defaultCb = jest.fn(() => defaultData)
  const schema = date().default(defaultCb)
  let count = 0
  let actual
  do {
    actual = fake(schema)
  } while (defaultCb.mock.calls.length === 0 && ++count < SAFE_COUNT)
  expect(actual).toBeInstanceOf(Date)
  expect(actual!.toISOString()).toBe(defaultData.toISOString())
})

it('should works with date', () => {
  const schema = date().defined()
  const actual = fake(schema)
  expect(schema.isValidSync(actual)).toBe(true)
})

it('should sometimes fake string type date when not in strict mode', () => {
  const schema = date().defined()
  let count = 0
  let actual
  do {
    actual = fake(schema)
  } while (actual instanceof Date && ++count < SAFE_COUNT)
  expect(typeof actual).toBe('string')
  expect(schema.isValidSync(actual)).toBe(true)
})

it('should not fake string type date when set strict option to true', () => {
  const schema = date().defined()
  let count = 0
  let actual
  do {
    actual = fake(schema, { strict: true })
  } while (actual instanceof Date && ++count < SAFE_COUNT)
  expect(actual instanceof Date).toBe(true)
  expect(schema.isValidSync(actual)).toBe(true)
})

it('should works with min', () => {
  const now = new Date().toISOString()
  const schema = date().defined().min(now)
  const actual = fake(schema)
  expect(schema.isValidSync(actual)).toBe(true)
})

it('should works with max', () => {
  const now = new Date().toISOString()
  const schema = date().defined().max(now)
  const actual = fake(schema)
  expect(schema.isValidSync(actual)).toBe(true)
})

it('should works with min, max', () => {
  const now = new Date().toISOString()
  const schema = date().defined().min(now).max(now)
  const actual = fake(schema)
  expect(schema.isValidSync(actual)).toBe(true)
})
