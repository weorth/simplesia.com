
<script setup>
defineProps({
  label: String,
  onClick: Function,
  qty: { default: 1, type: Number },

  blue: { default: true, type: Boolean },
  green: Boolean,
  red: Boolean,
  white: Boolean,
  yellow: Boolean,
})
</script>

<template>
  <button
    @click.prevent.stop="onClick"
    :class="{
      'blue': blue,
      'green': green,
      'red': red,
      'white': white,
      'yellow': yellow,
    }">
    <t :t="label" :qty="qty" />
  </button>
</template>

<style lang="scss" scoped>
button {
  border: none;
  border-radius: 10px;
  color: $white;
  cursor: pointer;
  font-size: 1.25em;
  margin: 1em;
  outline: none;
  padding: 1em 2em;
  text-align: center;

  @media (max-width: $sm) {
    margin: 1vh 2vw;
    width: 100%;
  }

  &:active, &:hover {
    background-color: $green;
    color: $white;
  }

  &.blue {
    @include button($blue, $white);
  }

  &.green {
    @include button($green, $white);
  }

  &.red {
    @include button($red, $white);
  }

  &.white {
    @include button($white, $blue);
  }

  &.yellow {
    @include button($yellow, $blue);
  }
}
</style>
