
<script setup>
defineProps({
  field: Object,
  onChange: Function,
})
</script>

<template>
  <div class="form-field">
    <label>
      <t :t="field.label || field.name" />
    </label>
    <select-input
      v-if="field.type === 'select'"
      :name="field.name"
      :onChange="onChange"
      :options="field.options"
      :required="field.required"
      :value="field.value" />
    <textarea-input
      v-else-if="field.type === 'textarea'"
      :max="field.max"
      :min="field.min"
      :name="field.name"
      :onChange="onChange"
      :required="field.required"
      :type="field.type"
      :value="field.value" />
    <text-input
      v-else
      :max="field.max"
      :min="field.min"
      :name="field.name"
      :onChange="onChange"
      :required="field.required"
      :type="field.type"
      :value="field.value" />
  </div>
</template>

<style lang="scss" scoped>
.form {
  &-field {
    @include flex(column);

    margin-bottom: 1em;
  }
}
</style>
