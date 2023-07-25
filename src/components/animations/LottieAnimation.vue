
<script setup>
defineProps({ src: String })
</script>

<template>
  <lottie-player
    autoplay
    background="transparent"
    loop
    speed="1"
    :src="src"
    style="width: 100%; height: 100%;"></lottie-player>
</template>

<style lang="scss" scoped>
</style>
