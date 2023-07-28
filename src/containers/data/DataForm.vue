
<script setup>
import { ref } from 'vue'

const props = defineProps({
  fields: Array,
  onChange: Function,
  onSubmit: Function,
})

const data = {}
const form = ref(null)

function handleChange(name, value) {
  data[name] = value
  try {
    props.onChange(name, value)
  } catch {
    // Not provided.
  }
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
      <row-layout v-if="Array.isArray(field)">
        <input-factory
          v-for="(subField, idx2) in field"
          :field="subField"
          :key="idx+'-'+idx2"
          :onChange="handleChange" />
      </row-layout>
      <input-factory v-else
        :field="field"
        :onChange="handleChange" />
    </div>
    <div v-if="onSubmit" class="actions">
      <flat-button
        label="submit"
        :onClick="handleSubmit" />
    </div>
  </form>
</template>

<style lang="scss" scoped>
.form {
  .actions {
    @include flex(row);
    @include flex-center;
  }

  .row {
    @include flex-between;

    flex: 1;

    .form-field {
      flex: 1;
      margin-right: 1em;

      &:last-child {
        margin-right: 0;
      }
    }
  }
}
</style>
