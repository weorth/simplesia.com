
<script setup>
defineProps({
  message: { required: true, type: String },
})
</script>

<template>
  <div class="success">
    <t :t="message" />
  </div>
</template>

<style lang="scss" scoped>
.success {
  background-color: $green;
  color: $white;
  margin-bottom: 1em;
  padding: 2em;
}
</style>
