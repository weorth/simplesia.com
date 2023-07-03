<script setup>
import { useRouter } from 'vue-router'

import Expandable from '../../components/Expandable.vue'
import Page from '../../components/Page.vue'

const router = useRouter()

function onSave(ev) {
  ev.preventDefault()
  ev.stopPropagation()

  router.push('/private/billing')
}
</script>

<template>
  <Page>
    <div class="align-center flex-row justify-space-between">
      <h1>Keys</h1>
      <button @click="onSave">Save Changes</button>
    </div>
    <Expandable title="Payment Information">
      <form>
        <fieldset>
          <legend>Personal Information</legend>
          <div class="flex-row">
            <div class="flex-full field">
              <label>First Name:</label>
              <input id="fname" name="fname" type="text" />
            </div>
            <div class="flex-full field">
              <label>Last Name:</label>
              <input id="lname" name="lname" type="text" />
            </div>
          </div>
          <div class="field">
            <label>Street 1:</label>
            <input id="street1" name="street1" type="text" />
          </div>
          <div class="field">
            <label>Street 2:</label>
            <input id="street2" name="street2" type="text" />
          </div>
          <div class="flex-row">
            <div class="flex-full field">
              <label>City:</label>
              <input id="city" name="city" type="text" />
            </div>
            <div class="flex-full field">
              <label>State:</label>
              <input id="state" name="state" type="text" />
            </div>
            <div class="field">
              <label>Zip:</label>
              <input id="zip" name="zip" type="text" />
            </div>
          </div>
        </fieldset>
        <fieldset>
          <legend>Credit Card Information</legend>
          <div class="flex-row">
            <div class="flex-full field">
              <label>Card Number:</label>
              <input id="pan" name="pan" type="password" />
            </div>
            <div class="field">
              <label>CCV:</label>
              <input id="ccv" name="ccv" type="text" />
            </div>
          </div>
          <div class="flex-row">
            <div class="flex-full field">
              <label>Year:</label>
              <input id="year" name="year" type="text" />
            </div>
            <div class="flex-full field">
              <label>Month:</label>
              <input id="month" name="month" type="text" />
            </div>
          </div>
        </fieldset>
      </form>
    </Expandable>
    <h2>Invoices</h2>
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
        <td>
          <router-link to="/private/invoice">View Details</router-link>
        </td>
      </tr>
      <tr>
        <td>2023</td>
        <td>05</td>
        <td>$225.03</td>
        <td>Paid</td>
        <td>
          <router-link to="/private/invoice">View Details</router-link>
        </td>
      </tr>
      <tr>
        <td>2023</td>
        <td>05</td>
        <td>$113.28</td>
        <td>Paid</td>
        <td>
          <router-link to="/private/invoice">View Details</router-link>
        </td>
      </tr>
    </table>
  </Page>
</template>

<style lang="scss" scoped>
button {
  padding: 0.25em 0.5em !important;
}

form {
  field {
    width: 100%;
  }
}

table {
  width: 100%;

  @media (max-width: $sm) {
    width: 80vw;
  }
}

.flex-row {
  @media (max-width: $sm) {
    flex-direction: column;
  }
}
</style>
