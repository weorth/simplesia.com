
<script setup>
import { ref } from 'vue'

const props = defineProps({
  cols: { default: 50, type: [Number, String] },
  max: { default: 1000, type: [Number, String] },
  min: { default: 0, type: [Number, String] },
  name: { required: true, type: String },
  onChange: Function,
  required: { default: false, type: Boolean },
  rows: { default: 4, type: [Number, String] },
  type: { default: 'text', type: String },
  value: String,
})

const inputRef = ref(null)

function handleChange(name, value) {
  props.onChange(name, value)
}

function handleValidate() {
  const input = inputRef.value
  input.checkValidity()
  input.reportValidity()
}
</script>

<template>
  <textarea
    @change="ev => handleValidate()"
    @input="ev => handleChange(name, ev.target.value)"
    :cols="cols"
    :maxlength="max"
    :minlength="min"
    :name="name"
    ref="inputRef"
    :rows="rows"
    :required="required"
    :type="type"
    :value="value" />
</template>

<style lang="scss" scoped>
textarea {
  @include form-field;
}
</style>
