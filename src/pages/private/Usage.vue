<script setup>
import { ref } from 'vue'

import LineGraph from '../../components/LineGraph.vue'
import Page from '../../components/Page.vue'

const data = ref({
  datasets: [
    { data: [567, 5000, 10000, 12345], label: 'License plates (BR)' },
    { data: [245, 3000, 8000, 10807], label: 'Traffic signs (BR)' },
    { data: [35, 245, 333, 457], label: 'Vehicle damage' },
  ],
  labels: ['2023-04', '2023-05', '2023-06', '2023-07'],
})
</script>

<template>
  <Page>
    <h1>Usage</h1>
    <div class="flex-row">
      <div class="flex-full">
        <LineGraph :data="data" />
      </div>
      <div class="flex-full">
        <table>
          <tr>
            <th>Product</th>
            <th>Requests</th>
            <th>Cost</th>
          </tr>
          <tr>
            <td>License plates (BR)</td>
            <td>12,345</td>
            <td>$234.45</td>
          </tr>
          <tr>
            <td>Traffic signs (BR)</td>
            <td>10,807</td>
            <td>$201.18</td>
          </tr>
          <tr>
            <td>Vehicle damage</td>
            <td>457</td>
            <td>$7.38</td>
          </tr>
        </table>
      </div>
    </div>
  </Page>
</template>

<style lang="scss" scoped>
table {
  width: 100%;

  @media (max-width: $sm) {
    width: 80vw;
  }
}

.flex-row {
  @media (max-width: $sm) {
    align-items: center;
    flex-direction: column;
  }
}
</style>
