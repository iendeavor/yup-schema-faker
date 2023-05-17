import { DateSchema } from 'yup'
import { addFaker, fake, DateFaker } from '../../src'

// create new schema type: https://github.com/jquense/yup/blob/v1.0.0/docs/extending.md#creating-new-schema-types
class CustomDateSchema extends DateSchema {
  static create() {
    return new CustomDateSchema()
  }

  constructor() {
    super()
  }

  type = 'custom-date'
}

const customDate = () => new CustomDateSchema()

// define and register custom faker
const CustomMixedSchemaFaker = DateFaker
addFaker(customDate, CustomMixedSchemaFaker)

it('should be a valid schema constructor', () => {
  const schema = customDate().oneOf([new Date()])

  const actual = fake(schema)

  expect(schema.isValidSync(actual)).toBe(true)
})
