
<script setup>
defineProps({
  error: { required: true, type: Object },
})
</script>

<template>
  <div class="error">
    <span v-if="error.code" class="code">{{ error.code }}</span>
    <span v-if="error.message" class="message">{{ error.message }}</span>
  </div>
</template>

<style lang="scss" scoped>
.error {
  background-color: $red;
  color: $white;
  margin-bottom: 1em;
  padding: 2em;

  .code {
    font-weight: bold;
    margin-right: 1em;
  }

  .message {
    font-weight: normal;
  }
}
</style>
