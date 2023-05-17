<template lang="pug">
Link(label="Custom" level="2")
template(v-for="schemas, type of schemasOfType" :key="type")
  Link(:label="type" level="3")

  template(v-for="schema, label of schemas" :key="schema")
    demo-generator(:label="label + ''" :snippet="schema")
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import './string-json'
import './custom-date'

export default defineComponent({
  setup() {
    const schemasOfType = {
      'Custom.fakeDedicatedTest': {
        'Custom.fakeDedicatedTest.yup.string.json': `
// fake a list of emails and stringify it.
const schema = string().json(
  array().defined().of(
    string().defined().email()
  )
)
`.trim(),
      },
      'Custom.addFaker': {
        'Custom.addFaker.customMixed': `
// just like yup.mixed
const schema = customMixed()
  .oneOf(['foo', 42])
`.trim(),
      },
    }

    return {
      schemasOfType,
    }
  },
})
</script>
