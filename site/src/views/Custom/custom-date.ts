import { DateSchema } from 'yup'
import { addFaker, DateFaker } from 'yup-schema-faker'

// Define a custom schema
class CustomDateSchema extends DateSchema {
  static create() {
    return new CustomDateSchema()
  }

  constructor() {
    super()
  }

  // yup-schema-faker use type to distinguish different schema
  // Here we just rename it to simulate that it is not built-in schema
  type = 'custom-date'
}
const customDate = () => new CustomDateSchema()

// Since the type of CustomMixedSchema is changed, you must have to register it to distinguish the schema.
// We register the custom schema and simply use the existing faker to fake the schema.
addFaker(customDate, DateFaker)

// Expose to window for demo
;(window as any).customDate = customDate
