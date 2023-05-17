# Yup-schema-faker

> Yup-schema-faker will generate you a fake data based on your [yup](https://github.com/jquense/yup) schema.

[Showcase & Playground](https://iendeavor.github.io/yup-schema-faker/)

Key features:

- Extensible: you can fake for your own schemas, methods or override existing ones.

## Version Compatibiility

| yup                                                                  | @types/yup                                          | yup-schema-faker                                                      |
| -------------------------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------------------------- |
| [~0.28.x](https://github.com/jquense/yup/tree/v0.28.5)               | [~0.28.x](https://www.npmjs.com/package/@types/yup) | [~2.28.x](https://github.com/iendeavor/yup-schema-faker/tree/v2.28.x) |
| [~0.29.x](https://github.com/jquense/yup/tree/v0.29.3)               | [~0.29.x](https://www.npmjs.com/package/@types/yup) | [~2.29.x](https://github.com/iendeavor/yup-schema-faker/tree/v2.29.x) |
| [>= 0.32.0, <= 0.32.10](https://github.com/jquense/yup/tree/v0.32.9) | N/A                                                 | [~2.32.x](https://github.com/iendeavor/yup-schema-faker/tree/v2.32.x) |
| [>= 0.32.11, < 1.0.0](https://github.com/jquense/yup/tree/v0.32.11)  | N/A                                                 | [^5.x.x](https://github.com/iendeavor/yup-schema-faker/tree/v5.x.x)   |
| [^1.0.0](https://github.com/jquense/yup/tree/master)                 | N/A                                                 | [^6.x.x](https://github.com/iendeavor/yup-schema-faker/tree/v6.x.x)   |

## Getting Started

Install `yup-schema-faker` and its peer dependencies with your favorite package manager:

```sh
pnpm add yup@^1.0.0
pnpm add -D yup-schema-faker@^6.0.0
pnpm add -D @faker-js/faker@^7.4.0
pnpm add -D randexp@^0.5.3
```

Usage:

```typescript
import { object, string, number, date } from 'yup'
import { install, fake } from 'yup-schema-faker'
import { faker } from '@faker-js/faker'
// import { faker } from '@faker-js/faker/locale/ja'

// Before using it, you need to install all built-in fakers:
install(faker)

// If you have extended fakers, you need to install them here, too:
//
// addFaker(boolean, BooleanFaker)
//
// fakeDedicatedTest(boolean, 'is-value', schema => {
//   const isValueTest = schema.tests.find(test => test.OPTIONS.name === 'is-value')!
//   return isValueTest.OPTIONS.params?.value === 'true'
// })

// Define schema:
const userSchema = object({
  name: string().required(),
  age: number().required().positive().integer(),
  email: string().email(),
  website: string().url().nullable(),
  createdOn: date().default(() => new Date()),
}).noUnknown()

// Fake data:
const fakeUser = fake(userSchema)
// {
//   "name": " Assumenda eos volup",
//   "age": 73684592,
//   "email": "Frederic.Keebler8@hotmail.com",
//   "website": "https://well-worn-co-producer.org",
//   "createdOn": "Fri Jun 09 2006 19:49:16 GMT+0800 (台北標準時間)",
// }
```

## API

### `fake`

Pass a yup schema and return a fake data.

Function signature:

```typescript
interface Options {
  // please see https://github.com/jquense/yup#schemastrictenabled-boolean--false-schema
  strict?: boolean

  // External values that used to resolve conditions and references.
  // please see https://github.com/jquense/yup#schemacastvalue-any-options---infertypeschema
  context?: object
}

function fake<Schema etends AnySchema>(schema: Schema, options?: Options): ReturnType<Schema['cast']>;
```

Example:

```typescript
const schema1 = yup.number().required()
fake(schema1)
// 763 or "971235"
fake(schema1, { strict: true })
// 9102

const schema2 = object({
  baz: ref('foo.bar'),
  foo: object({
    bar: string(),
  }),
  x: ref('$x'),
})
const context = { x: 5 }
fake(schema2, { context })
// {
//   foo: {
//     bar: 'Sit atque temporibus',
//   },
//   baz: 'Sit atque temporibus',
//   x: 5,
// }
```

### `fakeDedicatedTest`

Similar to [`addMethod`](https://github.com/jquense/yup#addmethodschematype-schema-name-string-method--schema-void), you
can use `fakeDedicatedTest` to fake extended methods.

Function signature:

```typescript
function fakeDedicatedTest<SchemaConstructor extends (...args: any[]) => AnySchema>(
  schemaConstructor: SchemaConstructor,
  name: string,
  fakeFn: (schema: ReturnType<SchemaConstructor>) => ReturnType<ReturnType<SchemaConstructor>['cast']>,
)
```

Example: [`string.json` example](./site/src/views/Custom/string-json.ts)

### `addFaker`

You can [create new schemas](https://github.com/jquense/yup/blob/master/docs/extending.md#creating-new-schema-types) in
yup. Similarly, you can use addFaker to create corresponding fakers for these schemas.

Function signature:

```typescript
function addFaker<S extends Schema, Faker>(schemaConstructor: (...arg: any[]) => S, fakerConstructor: Faker)
```

Example: [customDate example](./site/src/views/Custom/custom-date.ts)

### `seed`

If you want to produce consistent results, you can set your own seed with integer:

```javascript
import { seed, fake } from 'yup-schema-faker'
import { string } from 'yup'

seed(123)
const first = fake(string())

seed(123)
const second = fake(string())

console.log(first === second) // true
```

## Supported yup API

- yup
  - ✅ yup.ref(path: string, options: { contextPrefix: string }): Ref
  - ✅ yup.lazy((value: any) => Schema): Lazy
- mixed
  - ✅ mixed.strict(isStrict: boolean = false): Schema
  - ✅ mixed.default(value: any): Schema
  - ✅ mixed.nullable(isNullable: boolean = true): Schema
  - ✅ mixed.required(message?: string | function): Schema
  - ✅ mixed.notRequired(): Schema Alias: optional()
  - ✅ mixed.defined(): Schema
  - ✅ mixed.oneOf(arrayOfValues: Array<any>, message?: string | function): Schema Alias: equals
  - ✅ mixed.notOneOf(arrayOfValues: Array<any>, message?: string | function)
  - ✅ mixed.when(keys: string | Array<string>, builder: object | (value, schema)=> Schema): Schema
- string
  - ✅ string.required(message?: string | function): Schema
  - ✅ string.length(limit: number | Ref, message?: string | function): Schema
  - ✅ string.min(limit: number | Ref, message?: string | function): Schema
  - ✅ string.max(limit: number | Ref, message?: string | function): Schema
  - ✅ string.matches(regex: Regex, message?: string | function): Schema
  - ❌ string.matches(regex: Regex, options: { message: string, excludeEmptyString: bool }): Schema
    > this feature cannot be detected, use another schema to achieve this behavior
  - ✅ string.email(message?: string | function): Schema
  - ✅ string.url(message?: string | function): Schema
  - ✅ string.uuid(message?: string | function): Schema
  - ✅ string.trim(message?: string | function): Schema
    > generate trimmed string iff in strict mode
  - ✅ string.lowercase(message?: string | function): Schema
    > generate lowercase string iff in strict mode
  - ✅ string.uppercase(message?: string | function): Schema
    > generate uppercase string iff in strict mode
- number
  - ✅ number.min(limit: number | Ref, message?: string | function): Schema
  - ✅ number.max(limit: number | Ref, message?: string | function): Schema
  - ✅ number.lessThan(max: number | Ref, message?: string | function): Schema
  - ✅ number.moreThan(min: number | Ref, message?: string | function): Schema
  - ✅ number.positive(message?: string | function): Schema
  - ✅ number.negative(message?: string | function): Schema
  - ✅ number.integer(message?: string | function): Schema
- boolean
  - ✅ boolean.isTrue(message?: string | function): Schema
  - ✅ boolean.isFalse(message?: string | function): Schema
- date
  - ✅ date.min(limit: Date | string | Ref, message?: string | function): Schema
  - ✅ date.max(limit: Date | string | Ref, message?: string | function): Schema
- array
  - ✅ array.of(type: Schema): Schema
  - ✅ array.length(length: number | Ref, message?: string | function): Schema
  - ✅ array.min(limit: number | Ref, message?: string | function): Schema
  - ✅ array.max(limit: number | Ref, message?: string | function): Schema
- object
  - ✅ object.shape(fields: object, noSortEdges?: Array<[string, string]>): Schema
  - ✅ object.noUnknown(onlyKnownKeys: boolean = true, message?: string | function): Schema

## About

<a href="https://www.buymeacoffee.com/iendeavor" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/default-orange.png" alt="Buy Me A Coffee" height="41" width="174"></a>

Distributed under the MIT license. See LICENSE for more information.

https://github.com/iendeavor
