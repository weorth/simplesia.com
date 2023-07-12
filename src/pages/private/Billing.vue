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
      <h1><t tag="billing" /></h1>
      <button @click="onSave"><t tag="save" /></button>
    </div>
    <Expandable title="payment.information">
      <form>
        <fieldset>
          <legend><t tag="personal.information" /></legend>
          <div class="flex-row">
            <div class="flex-full field">
              <label><t tag="name.first" />:</label>
              <input id="fname" name="fname" type="text" />
            </div>
            <div class="flex-full field">
              <label><t tag="name.last" />:</label>
              <input id="lname" name="lname" type="text" />
            </div>
          </div>
          <div class="field">
            <label><t tag="street.1" />:</label>
            <input id="street1" name="street1" type="text" />
          </div>
          <div class="field">
            <label><t tag="street.2" />:</label>
            <input id="street2" name="street2" type="text" />
          </div>
          <div class="flex-row">
            <div class="flex-full field">
              <label><t tag="city" />:</label>
              <input id="city" name="city" type="text" />
            </div>
            <div class="flex-full field">
              <label><t tag="state" />:</label>
              <input id="state" name="state" type="text" />
            </div>
            <div class="field">
              <label><t tag="zip" />:</label>
              <input id="zip" name="zip" type="text" />
            </div>
          </div>
        </fieldset>
        <fieldset>
          <legend><t tag="cc.information" /></legend>
          <div class="flex-row">
            <div class="flex-full field">
              <label><t tag="pan" />:</label>
              <input id="pan" name="pan" type="password" />
            </div>
            <div class="field">
              <label><t tag="ccv" />:</label>
              <input id="ccv" name="ccv" type="text" />
            </div>
          </div>
          <div class="flex-row">
            <div class="flex-full field">
              <label><t tag="year" />:</label>
              <input id="year" name="year" type="text" />
            </div>
            <div class="flex-full field">
              <label><t tag="month" />:</label>
              <input id="month" name="month" type="text" />
            </div>
          </div>
        </fieldset>
      </form>
    </Expandable>
    <h2><t tag="invoice" qty="2" /></h2>
    <table>
      <tr>
        <th><t tag="year" /></th>
        <th><t tag="month" /></th>
        <th><t tag="cost" /></th>
        <th><t tag="status" /></th>
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
          <router-link to="/private/invoice"><t tag="view" /></router-link>
        </td>
      </tr>
      <tr>
        <td>2023</td>
        <td>05</td>
        <td>$225.03</td>
        <td>Paid</td>
        <td>
          <router-link to="/private/invoice"><t tag="view" /></router-link>
        </td>
      </tr>
      <tr>
        <td>2023</td>
        <td>05</td>
        <td>$113.28</td>
        <td>Paid</td>
        <td>
          <router-link to="/private/invoice"><t tag="view" /></router-link>
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
