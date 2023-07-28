
<script setup>
defineProps({
  actions: { default: () => [], type: Array },
  title: { required: true, type: String },
})
</script>

<template>
  <div class="title-bar">
    <h1 class="title"><t :t="title" /></h1>
    <div v-if="actions.length" class="actions">
      <flat-button
        v-for="(action, idx) in actions"
        :key="idx"
        :label="action.label"
        :onClick="action.onClick"
        :secondary="action.secondary" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.title-bar {
  @include flex(row);
    @include flex-between;

  .actions {
    @include flex(row);
    @include flex-center;
  }
}
</style>
