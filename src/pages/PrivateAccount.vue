
<script setup>
import { AppStore } from '@/core/store'
import { computed, onMounted, ref } from 'vue'
import { Countries } from '@/i18n/constants'
import { useRouter } from 'vue-router'

const app = AppStore()
const data = ref({})
const router = useRouter()

const profileFields = computed(() => {
  return [
    [
      { label: 'name', name: 'name', required: true, type: 'text', value: data.value['name'] },
      { label: 'email', name: 'email', required: true, type: 'email', value: data.value['email'] },
    ],

    { label: 'street1', name: 'street1', required: true, type: 'text', value: data.value['street1'] },
    { label: 'street2', name: 'street2', required: true, type: 'text', value: data.value['street2'] },
    [
      { label: 'city', name: 'city', required: true, type: 'text', value: data.value['city'] },
      { label: 'state', name: 'state', required: true, type: 'text', value: data.value['state'] },
      { label: 'zip', name: 'zip', required: true, type: 'text', value: data.value['zip'] },
    ],
  ]
})
const settingsFields = computed(() => {
  const options = Countries.map(country => ({ label: country.code, value: country.toCode() }))
    .sort((a, b) => {
      if (a.label > b.label) return 1
      if (a.label < b.label) return -1
      return 0
    })

  return [
    { label: 'country', name: 'country', type: 'select', options, value: data.value['country'] },
  ]
})

function handleChange(name, value) {
  data.value[name] = value
}

async function handleLogout() {
  await app.logout()
  router.push('/')
}

async function handleSave() {
  await app.update(data.value)
  alert('Saved!')
}

onMounted(async () => {
  const account = await app.me
  data.value = account
})
</script>

<template>
  <app-sentry>
    <full-page>
      <title-bar
        :actions="[
          {label: 'save', onClick: handleSave, secondary: false},
          {label: 'logout', onClick: handleLogout, secondary: true},
        ]"
        title="account" />
      <tabs-list>
        <tab-item active title="profile">
          <data-form :fields="profileFields" :onChange="handleChange" />
        </tab-item>
        <tab-item title="settings">
          <data-form :fields="settingsFields" :onChange="handleChange" />
        </tab-item>
      </tabs-list>
    </full-page>
  </app-sentry>
</template>

<style lang="scss" scoped>
</style>
