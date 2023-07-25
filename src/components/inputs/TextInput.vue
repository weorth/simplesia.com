
<script setup>
import { ref } from 'vue'

const props = defineProps({
  max: { default: 255, type: [Number, String] },
  min: { default: 0, type: [Number, String] },
  name: { required: true, type: String },
  onChange: Function,
  required: { default: false, type: Boolean },
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
  <input
    @change="ev => handleValidate()"
    @input="ev => handleChange(name, ev.target.value)"
    :maxlength="max"
    :minlength="min"
    :name="name"
    ref="inputRef"
    :required="required"
    type="text"
    :value="value" />
</template>

<style lang="scss" scoped>
input {
  @include form-field;
}
</style>
