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
            <legend>Login</legend>
            <div class="field">
              <label>Username:</label>
              <input id="username" name="username" type="text" />
            </div>
            <div class="field">
              <label>Password:</label>
              <input id="password" name="password" type="password" />
            </div>
          </fieldset>
          <div class="align-center flex-col justify-center">
            <button @click="onSubmit">Submit</button>
            <router-link to="/register">Need an account? Register</router-link>
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
