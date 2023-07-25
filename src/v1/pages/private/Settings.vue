<script setup>
import { ref } from 'vue'
import { User } from '@/mock'

import Flags from '@/components/Flags.vue'
import Page from '@/components/Page.vue'

const selected = ref('profile')

const user = User

function onSave() {
  alert('Saved!')
}

function onSelect(tab) {
  selected.value = tab
}
</script>

<template>
  <Page>
    <div class="flex-col justify-space-between">
      <h1><t tag="settings" /></h1>
      <div class="tabs">
        <div class="tab-list">
          <div @click="onSelect('profile')" :class="['tab', {'active': selected == 'profile'}]">
            <t tag="profile" />
          </div>
          <div @click="onSelect('language')" :class="['tab', {'active': selected == 'language'}]">
            <t tag="language" />
          </div>
        </div>
        <div class="tab-body">
          <div v-if="selected == 'profile'">
            <form>
              <fieldset>
                <legend><t tag="personal.information" /></legend>
                <div class="flex-row">
                  <div class="flex-full field">
                    <label><t tag="name.first" />:</label>
                    <input id="fname" name="fname" type="text" :value="user.fname" />
                  </div>
                  <div class="flex-full field">
                    <label><t tag="name.last" />:</label>
                    <input id="lname" name="lname" type="text" :value="user.lname" />
                  </div>
                </div>
                <div class="field">
                  <label><t tag="street.1" />:</label>
                  <input id="street1" name="street1" type="text" :value="user.street1" />
                </div>
                <div class="field">
                  <label><t tag="street.2" />:</label>
                  <input id="street2" name="street2" type="text" :value="user.street2" />
                </div>
                <div class="flex-row">
                  <div class="flex-full field">
                    <label><t tag="city" />:</label>
                    <input id="city" name="city" type="text" :value="user.city" />
                  </div>
                  <div class="flex-full field">
                    <label><t tag="state" />:</label>
                    <input id="state" name="state" type="text" :value="user.state" />
                  </div>
                  <div class="field">
                    <label><t tag="zip" />:</label>
                    <input id="zip" name="zip" type="text" :value="user.zip" />
                  </div>
                </div>
              </fieldset>
            </form>
            <div class="flex-row justify-space-around">
              <button @click.prevent.stop="onSave"><t tag="save" /></button>
            </div>
          </div>
          <div v-if="selected == 'language'">
            <Flags bigger />
          </div>
        </div>
      </div>
    </div>
  </Page>
</template>

<style lang="scss" scoped>
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

.cc {
  border: 1px solid $black;

  &.hide { border-color: $green; }
  &.show { border-color: $red; }
}

.flex-row {
  @media (max-width: $sm) {
    flex-direction: column;
  }
}
</style>
