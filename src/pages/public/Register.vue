<script setup>
import { useRouter } from 'vue-router'

import Page from '../../components/Page.vue'

const router = useRouter()

function onSubmit(ev) {
  ev.preventDefault()
  ev.stopPropagation()

  router.push('/private')
}
</script>

<template>
  <Page>
    <div class="align-center flex-col flex-full justify-center centered">
      <div class="card">
        <form>
          <fieldset>
            <legend><t tag="register" /></legend>
            <div class="field">
              <label><t tag="email" />:</label>
              <input id="email" name="email" type="email" />
            </div>
            <div class="field">
              <label><t tag="username" />:</label>
              <input id="username" name="username" type="text" />
            </div>
            <div class="field">
              <label><t tag="password" />:</label>
              <input id="password" name="password" type="password" />
            </div>
            <div class="field">
              <label><t tag="password.confirmation" />:</label>
              <input id="confirm" name="confirm" type="password" />
            </div>
          </fieldset>
          <div class="align-center flex-col justify-center">
            <button @click="onSubmit"><t tag="submit" /></button>
            <router-link to="/login"><t tag="login.needed" /></router-link>
          </div>
        </form>
      </div>
    </div>
  </Page>
</template>

<style lang="scss" scoped>
.page {
  height: 90vh;
  margin: 0 auto;
  max-width: 80vw;

  .card {
    width: 33vw;

    @media (max-width: $sm) {
      width: 90vw;
    }
  }

  .centered {
    height: 90vh;
  }
}
</style>
