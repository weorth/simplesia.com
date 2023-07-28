
<script setup>
defineProps({
  field: Object,
  onChange: Function,
})
</script>

<template>
  <div class="form-field">
    <label>
      <t :t="field.label" />
    </label>
    <select-input
      v-if="field.type === 'select'"
      :name="field.name"
      :onChange="onChange"
      :options="field.options"
      :value="field.value" />
    <textarea-input
      v-else-if="field.type === 'textarea'"
      :name="field.name"
      :onChange="onChange"
      :type="field.type"
      :value="field.value" />
    <text-input
      v-else
      :name="field.name"
      :onChange="onChange"
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
