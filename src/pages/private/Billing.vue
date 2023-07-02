<script setup>
import Page from '../../components/Page.vue'
</script>

<template>
  <Page>
    <h1>Billing</h1>
    <table>
      <tr>
        <th>Year</th>
        <th>Month</th>
        <th>Amount</th>
        <th>Status</th>
        <th></th>
      </tr>
      <tr>
        <td>2023</td>
        <td>07</td>
        <td>$12.34</td>
        <td>In Progress</td>
        <td></td>
      </tr>
      <tr>
        <td>2023</td>
        <td>06</td>
        <td>$234.45</td>
        <td>Waiting</td>
        <td><a href="#">View</a></td>
      </tr>
      <tr>
        <td>2023</td>
        <td>05</td>
        <td>$225.03</td>
        <td>Paid</td>
        <td><a href="#">View</a></td>
      </tr>
      <tr>
        <td>2023</td>
        <td>05</td>
        <td>$113.28</td>
        <td>Paid</td>
        <td><a href="#">View</a></td>
      </tr>
    </table>
  </Page>
</template>

<style lang="scss" scoped>
table {
  width: 100%;

  @media (max-width: $sm) {
    width: 80vw;
  }
}
</style>
