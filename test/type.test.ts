import { boolean, number, date, string, array, object } from 'yup'
import { fake } from '../src'
import { expectType, TypeOf } from 'ts-expect'

describe('type', () => {
  test('default', () => {
    const booleanSchema = boolean()
    const booleanActual = fake(booleanSchema)
    expectType<TypeOf<typeof booleanActual, boolean>>(true)
    expectType<TypeOf<typeof booleanActual, undefined>>(true)

    expectType<TypeOf<typeof booleanActual, null>>(false)
    expectType<TypeOf<typeof booleanActual, any>>(false)

    const numberSchema = number()
    const numberActual = fake(numberSchema)
    expectType<TypeOf<typeof numberActual, number>>(true)
    expectType<TypeOf<typeof numberActual, undefined>>(true)

    expectType<TypeOf<typeof numberActual, null>>(false)
    expectType<TypeOf<typeof numberActual, any>>(false)

    const stringSchema = string()
    const stringActual = fake(stringSchema)
    expectType<TypeOf<typeof stringActual, string>>(true)
    expectType<TypeOf<typeof stringActual, undefined>>(true)

    expectType<TypeOf<typeof stringActual, null>>(false)
    expectType<TypeOf<typeof stringActual, any>>(false)

    const dateSchema = date()
    const dateActual = fake(dateSchema)
    expectType<TypeOf<typeof dateActual, Date>>(true)
    expectType<TypeOf<typeof dateActual, undefined>>(true)

    expectType<TypeOf<typeof dateActual, null>>(false)
    expectType<TypeOf<typeof dateActual, any>>(false)
    expectType<TypeOf<typeof dateActual, string>>(false)

    const objectSchema = object().shape({
      booleanSchema,
      numberSchema,
      stringSchema,
      dateSchema,
    })
    const objectActual = fake(objectSchema)
    expectType<
      TypeOf<
        typeof objectActual,
        {
          booleanSchema: boolean | undefined
          numberSchema: number | undefined
          stringSchema: string | undefined
          dateSchema: Date | undefined
        }
      >
    >(true)

    expectType<TypeOf<typeof objectActual, undefined>>(false)
    expectType<TypeOf<typeof objectActual, null>>(false)
    expectType<TypeOf<typeof objectActual, any>>(false)

    const arraySchema = array().of(objectSchema)
    const arrayActual = fake(arraySchema)
    expectType<
      TypeOf<
        typeof arrayActual,
        | {
            booleanSchema?: boolean | undefined
            numberSchema?: number | undefined
            stringSchema?: string | undefined
            dateSchema?: Date | undefined
          }[]
      >
    >(true)
    expectType<TypeOf<typeof arrayActual, undefined>>(true)

    expectType<TypeOf<typeof arrayActual, null>>(false)
    expectType<TypeOf<typeof arrayActual, any>>(false)
  })

  test('optional', () => {
    const booleanSchema = boolean().optional()
    const booleanActual = fake(booleanSchema)
    expectType<TypeOf<typeof booleanActual, boolean>>(true)
    expectType<TypeOf<typeof booleanActual, undefined>>(true)

    expectType<TypeOf<typeof booleanActual, null>>(false)
    expectType<TypeOf<typeof booleanActual, any>>(false)

    const numberSchema = number().optional()
    const numberActual = fake(numberSchema)
    expectType<TypeOf<typeof numberActual, number>>(true)
    expectType<TypeOf<typeof numberActual, undefined>>(true)

    expectType<TypeOf<typeof numberActual, null>>(false)
    expectType<TypeOf<typeof numberActual, any>>(false)

    const stringSchema = string().optional()
    const stringActual = fake(stringSchema)
    expectType<TypeOf<typeof stringActual, string>>(true)
    expectType<TypeOf<typeof stringActual, undefined>>(true)

    expectType<TypeOf<typeof stringActual, null>>(false)
    expectType<TypeOf<typeof stringActual, any>>(false)

    const dateSchema = date().optional()
    const dateActual = fake(dateSchema)
    expectType<TypeOf<typeof dateActual, Date>>(true)
    expectType<TypeOf<typeof dateActual, undefined>>(true)

    expectType<TypeOf<typeof dateActual, null>>(false)
    expectType<TypeOf<typeof dateActual, any>>(false)
    expectType<TypeOf<typeof dateActual, string>>(false)

    const objectSchema = object().optional().shape({
      booleanSchema,
      numberSchema,
      stringSchema,
      dateSchema,
    })
    const objectActual = fake(objectSchema)
    expectType<
      TypeOf<
        typeof objectActual,
        {
          booleanSchema: boolean | undefined
          numberSchema: number | undefined
          stringSchema: string | undefined
          dateSchema: Date | undefined
        }
      >
    >(true)
    expectType<TypeOf<typeof objectActual, undefined>>(true)

    expectType<TypeOf<typeof objectActual, null>>(false)
    expectType<TypeOf<typeof objectActual, any>>(false)

    const arraySchema = array().optional().of(objectSchema)
    const arrayActual = fake(arraySchema)
    expectType<
      TypeOf<
        typeof arrayActual,
        | (
            | {
                booleanSchema?: boolean | undefined
                numberSchema?: number | undefined
                stringSchema?: string | undefined
                dateSchema?: Date | undefined
              }
            | undefined
          )[]
      >
    >(true)
    expectType<TypeOf<typeof arrayActual, undefined>>(true)

    expectType<TypeOf<typeof arrayActual, null>>(false)
    expectType<TypeOf<typeof arrayActual, any>>(false)
  })

  test('defined', () => {
    const booleanSchema = boolean().defined()
    const booleanActual = fake(booleanSchema)
    expectType<TypeOf<typeof booleanActual, boolean>>(true)

    expectType<TypeOf<typeof booleanActual, undefined>>(false)
    expectType<TypeOf<typeof booleanActual, null>>(false)
    expectType<TypeOf<typeof booleanActual, any>>(false)

    const numberSchema = number().defined()
    const numberActual = fake(numberSchema)
    expectType<TypeOf<typeof numberActual, number>>(true)

    expectType<TypeOf<typeof numberActual, undefined>>(false)
    expectType<TypeOf<typeof numberActual, null>>(false)
    expectType<TypeOf<typeof numberActual, any>>(false)

    const stringSchema = string().defined()
    const stringActual = fake(stringSchema)
    expectType<TypeOf<typeof stringActual, string>>(true)

    expectType<TypeOf<typeof stringActual, undefined>>(false)
    expectType<TypeOf<typeof stringActual, null>>(false)
    expectType<TypeOf<typeof stringActual, any>>(false)

    const dateSchema = date().defined()
    const dateActual = fake(dateSchema)
    expectType<TypeOf<typeof dateActual, Date>>(true)

    expectType<TypeOf<typeof dateActual, undefined>>(false)
    expectType<TypeOf<typeof dateActual, null>>(false)
    expectType<TypeOf<typeof dateActual, any>>(false)
    expectType<TypeOf<typeof dateActual, string>>(false)

    const objectSchema = object().defined().shape({
      booleanSchema,
      numberSchema,
      stringSchema,
      dateSchema,
    })
    const objectActual = fake(objectSchema)
    expectType<
      TypeOf<
        typeof objectActual,
        {
          booleanSchema: boolean
          numberSchema: number
          stringSchema: string
          dateSchema: Date
        }
      >
    >(true)

    expectType<TypeOf<typeof objectActual, undefined>>(false)
    expectType<TypeOf<typeof objectActual, null>>(false)
    expectType<TypeOf<typeof objectActual, any>>(false)

    const arraySchema = array().defined().of(objectSchema)
    const arrayActual = fake(arraySchema)
    expectType<
      TypeOf<
        typeof arrayActual,
        | {
            booleanSchema: boolean
            numberSchema: number
            stringSchema: string
            dateSchema: Date
          }[]
      >
    >(true)

    expectType<TypeOf<typeof arrayActual, undefined>>(false)
    expectType<TypeOf<typeof arrayActual, null>>(false)
    expectType<TypeOf<typeof arrayActual, any>>(false)
  })

  test('nullable', () => {
    const booleanSchema = boolean().nullable()
    const booleanActual = fake(booleanSchema)
    expectType<TypeOf<typeof booleanActual, boolean>>(true)
    expectType<TypeOf<typeof booleanActual, undefined>>(true)
    expectType<TypeOf<typeof booleanActual, null>>(true)

    expectType<TypeOf<typeof booleanActual, any>>(false)

    const numberSchema = number().nullable()
    const numberActual = fake(numberSchema)
    expectType<TypeOf<typeof numberActual, number>>(true)
    expectType<TypeOf<typeof numberActual, undefined>>(true)
    expectType<TypeOf<typeof numberActual, null>>(true)

    expectType<TypeOf<typeof numberActual, any>>(false)

    const stringSchema = string().nullable()
    const stringActual = fake(stringSchema)
    expectType<TypeOf<typeof stringActual, string>>(true)
    expectType<TypeOf<typeof stringActual, undefined>>(true)
    expectType<TypeOf<typeof stringActual, null>>(true)

    expectType<TypeOf<typeof stringActual, any>>(false)

    const dateSchema = date().nullable()
    const dateActual = fake(dateSchema)
    expectType<TypeOf<typeof dateActual, Date>>(true)
    expectType<TypeOf<typeof dateActual, undefined>>(true)
    expectType<TypeOf<typeof dateActual, null>>(true)

    expectType<TypeOf<typeof dateActual, any>>(false)
    expectType<TypeOf<typeof dateActual, string>>(false)

    const objectSchema = object().nullable().shape({
      booleanSchema,
      numberSchema,
      stringSchema,
      dateSchema,
    })
    const objectActual = fake(objectSchema)
    expectType<
      TypeOf<
        typeof objectActual,
        {
          booleanSchema: boolean | undefined
          numberSchema: number | undefined
          stringSchema: string | undefined
          dateSchema: Date | undefined
        }
      >
    >(true)
    expectType<TypeOf<typeof objectActual, null>>(true)

    expectType<TypeOf<typeof objectActual, undefined>>(false)
    expectType<TypeOf<typeof objectActual, any>>(false)

    const arraySchema = array().nullable().of(objectSchema)
    const arrayActual = fake(arraySchema)
    expectType<
      TypeOf<
        typeof arrayActual,
        | ({
            booleanSchema?: boolean | undefined
            numberSchema?: number | undefined
            stringSchema?: string | undefined
            dateSchema?: Date | undefined
          } | null)[]
      >
    >(true)
    expectType<TypeOf<typeof arrayActual, undefined>>(true)
    expectType<TypeOf<typeof arrayActual, null>>(true)

    expectType<TypeOf<typeof arrayActual, any>>(false)
  })

  test('defined but nullable', () => {
    const booleanSchema = boolean().defined().nullable()
    const booleanActual = fake(booleanSchema)
    expectType<TypeOf<typeof booleanActual, boolean>>(true)
    expectType<TypeOf<typeof booleanActual, null>>(true)

    expectType<TypeOf<typeof booleanActual, undefined>>(false)
    expectType<TypeOf<typeof booleanActual, any>>(false)

    const numberSchema = number().defined().nullable()
    const numberActual = fake(numberSchema)
    expectType<TypeOf<typeof numberActual, number>>(true)
    expectType<TypeOf<typeof numberActual, null>>(true)

    expectType<TypeOf<typeof numberActual, undefined>>(false)
    expectType<TypeOf<typeof numberActual, any>>(false)

    const stringSchema = string().defined().nullable()
    const stringActual = fake(stringSchema)
    expectType<TypeOf<typeof stringActual, string>>(true)
    expectType<TypeOf<typeof stringActual, null>>(true)

    expectType<TypeOf<typeof stringActual, undefined>>(false)
    expectType<TypeOf<typeof stringActual, any>>(false)

    const dateSchema = date().defined().nullable()
    const dateActual = fake(dateSchema)
    expectType<TypeOf<typeof dateActual, Date>>(true)
    expectType<TypeOf<typeof dateActual, null>>(true)

    expectType<TypeOf<typeof dateActual, undefined>>(false)
    expectType<TypeOf<typeof dateActual, any>>(false)
    expectType<TypeOf<typeof dateActual, string>>(false)

    const objectSchema = object().defined().nullable().shape({
      booleanSchema,
      numberSchema,
      stringSchema,
      dateSchema,
    })
    const objectActual = fake(objectSchema)
    expectType<
      TypeOf<
        typeof objectActual,
        {
          booleanSchema: boolean | null
          numberSchema: number | null
          stringSchema: string | null
          dateSchema: Date | null
        }
      >
    >(true)
    expectType<TypeOf<typeof objectActual, null>>(true)

    expectType<TypeOf<typeof objectActual, undefined>>(false)
    expectType<TypeOf<typeof objectActual, any>>(false)

    const arraySchema = array().defined().nullable().of(objectSchema)
    const arrayActual = fake(arraySchema)
    expectType<
      TypeOf<
        typeof arrayActual,
        | ({
            booleanSchema: boolean | null
            numberSchema: number | null
            stringSchema: string | null
            dateSchema: Date | null
          } | null)[]
      >
    >(true)
    expectType<TypeOf<typeof arrayActual, null>>(true)

    expectType<TypeOf<typeof arrayActual, undefined>>(false)
    expectType<TypeOf<typeof arrayActual, any>>(false)
  })
})
