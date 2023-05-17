import { isSchema } from 'yup'

export const isReference = (schema: any) => schema?.__isYupRef === true

export const isLazy = (schema: any) => {
  if (isSchema(schema) === false) {
    return false
  }
  return schema.type === 'lazy'
}
