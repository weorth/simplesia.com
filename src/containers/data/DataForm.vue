
<script setup>
import { onMounted, ref } from 'vue'

const props = defineProps({
  fields: Array,
  onChange: Function,
  onSubmit: Function,
})

const data = {}
const form = ref(null)
const loading = ref(false)

function handleChange(name, value) {
  data[name] = value
  try {
    props.onChange(name, value)
  } catch {
    // Not provided.
  }
}

async function handleSubmit() {
  try {
    loading.value = true
    await props.onSubmit(data)
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  for (let field of props.fields) {
    data[field.name] = field.value || undefined
  }
})
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
        :disabled="loading"
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
