<script setup>
import Page from '../../components/Page.vue'

function onSubmit(ev) {
  ev.preventDefault()
  ev.stopPropagation()

  console.log('submit')
}
</script>

<template>
  <Page>
    <div class="align-center flex-row justify-space-between">
      <h1>Keys</h1>
      <button @click="onSubmit">Add Key</button>
    </div>
    <table>
      <tr>
        <th>Product</th>
        <th>Key</th>
        <th>Requests</th>
        <th></th>
      </tr>
      <tr>
        <td>License plates (BR)</td>
        <td>71db8e5f-436f-4d45-8879-d68dacddf2b7</td>
        <td>12,345</td>
        <td><a href="#">Delete</a></td>
      </tr>
      <tr>
        <td>Traffic signs (BR)</td>
        <td>972a1b5e-612d-4126-844f-669da0a20937</td>
        <td>10,807</td>
        <td><a href="#">Delete</a></td>
      </tr>
      <tr>
        <td>Vehicle damage</td>
        <td>9d19de0c-abbe-45ad-9c4f-1a434fdc216e</td>
        <td>457</td>
        <td><a href="#">Delete</a></td>
      </tr>
    </table>
  </Page>
</template>

<style lang="scss" scoped>
button {
  padding: 0.25em 0.5em !important;
}

table {
  width: 100%;

  @media (max-width: $sm) {
    width: 80vw;
  }
}
</style>
