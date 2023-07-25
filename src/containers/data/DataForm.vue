
<script setup>
import { ref } from 'vue'

const props = defineProps({
  fields: Array,
  onSubmit: Function,
})

const data = {}
const form = ref(null)
const textFields = new Set([
  'number',
  'password',
  'text',
])

function handleChange(name, value) {
  data[name] = value
}

function handleSubmit() {
  props.onSubmit(data)
}
</script>

<template>
  <form
    @submit.prevent.stop="handleSubmit"
    class="form"
    ref="form">
    <div
      v-for="(field, idx) in fields"
      class="form-field"
      :key="idx">
      <label>
        <t :t="field.label" />
      </label>
      <select-input
        v-if="field.type === 'select'"
        :name="field.name"
        :onChange="handleChange"
        :options="field.options"
        :type="field.type"
        :value="field.value" />
      <textarea-input
        v-if="field.type === 'textarea'"
        :name="field.name"
        :onChange="handleChange"
        :type="field.type"
        :value="field.value" />
      <text-input
        v-if="textFields.has(field.type)"
        :name="field.name"
        :onChange="handleChange"
        :type="field.type"
        :value="field.value" />
    </div>
    <div class="actions">
      <flat-button :onClick="handleSubmit" label="submit" />
    </div>
  </form>
</template>

<style lang="scss" scoped>
.form {
  &-field {
    @include flex(column);

    margin-bottom: 1em;
  }

  .actions {
    @include flex(row);
    @include flex-center;
  }
}
</style>
