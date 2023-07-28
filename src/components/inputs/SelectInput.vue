
<script setup>
import { ref } from 'vue'

const props = defineProps({
  name: { required: true, type: String },
  onChange: Function,
  options: Array,
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
  <select
    @change="ev => handleValidate()"
    @input="ev => handleChange(name, ev.target.value)"
    :name="name"
    ref="inputRef"
    :required="required"
    :value="value">
    <option value=""></option>
    <option
      v-for="(option, idx) in options"
      :key="idx"
      :value="option.value">
      <t :t="option.label" />
    </option>
  </select>
</template>

<style lang="scss" scoped>
select {
  @include form-field;
}
</style>
