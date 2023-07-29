
<script setup>
defineProps({
  cols: Array,
  rows: Array,
})
</script>

<template>
  <table cellpadding="0" cellspacing="0">
    <tr>
      <th v-for="(col, idx) in cols" :key="idx">
        <t :t="col.label" :qty="col.qty" />
      </th>
    </tr>
    <tr v-for="(row, idx) in rows" :key="idx">
      <td v-for="(col, idx2) in cols" :key="idx+'-'+idx2">
        <span v-if="col.f"><currency :amount="row[col.field]" /></span>
        <span v-else-if="col.t"><t :ts="row[col.field].split('_')" /></span>
        <span v-else-if="col.products">
          <ul>
            <li v-for="(product, idx3) in row[col.field]" :key="idx+'-'+idx2+'-'+idx3">
              <row-layout>
                <t :ts="product.id.split('_')" />
                <currency :amount="product.cost + product.tax" />
              </row-layout>
            </li>
          </ul>
        </span>
        <span v-else>{{ row[col.field] }}</span>
      </td>
    </tr>
  </table>
</template>

<style lang="scss" scoped>
table {
  margin: 0;
  padding: 0;
  text-align: left;
  width: 100%;

  tr {
    &:hover td {
      color: $green;
    }

    &:nth-child(odd) {
      background-color: $gray;

      li {
        background-color: $white;
      }
    }

    th, td {
      padding: 0.25em;
    }

    td {
      li {
        background-color: $gray;
      }

      .row {
        @include flex-between;

        .currency {
          margin-right: 2em;
        }
      }
    }
  }
}
</style>
