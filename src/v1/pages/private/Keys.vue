<script setup>
import { ref } from 'vue'
import { User } from '@/mock'

import { ClipboardDocumentIcon } from '@heroicons/vue/24/solid'
import Code from '@/components/Code.vue'
import Page from '@/components/Page.vue'

const hasCopied = ref(false)
const hasPaymentMethod = ref(User.pan.length)
const selected = ref('usage')
const user = User

const codeGo = `
package main

import (
  "fmt"
  "ioutil"
  "net/http"
)

func request() {
  // Replace "x_xx_xxxx-xxx_x" with the desired API name.
  request, err := http.NewRequest("GET", "https://x_xx_xxxx-xxx_x.apis.simplesia.com", nil)
  if err != nil {
    panic(err)
  }

  request.Header.Add("Accept", "application/json")
  // Replace "XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX" with your Key.
  request.Header.Add("Authorization", "Bearer XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX")
  request.Header.Add("Content-Type", "application/json")

  response, err := http.Do(request)
  if err != nil {
    panic(err)
  }
  defer response.Body.Close()

  body, err := ioutil.ReadAll(response.Body)
  if err != nil {
    panic(err)
  }
  fmt.Println(body)
}

func main() {
  request()
}
`
const codeJavaScript = `
async function request() {
  const headers = new Headers()
  headers.append('Accept', 'application/json')
  // Replace "XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX" with your Key.
  headers.append('Authorization', 'Bearer XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX')
  headers.append('Content-Type', 'application/json')

  let response = await fetch(
    // Replace "x_xx_xxxx-xxx_x" with the desired API name.
    'https://x_xx_xxxx-xxx_x.apis.simplesia.com',
    {
      method: 'GET',
      headers,
    },
  )
  if (response.status == 200) {
    console.log(await response.json())
  }
}

request()
`
const codePython = `
import requests

def request():
  headers = {
    'Accept': 'application/json',
    # Replace "XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX" with your Key.
    'Authorization': f'Bearer XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX',
    'Content-Type': 'application/json',
  }

  # Replace "x_xx_xxxx-xxx_x" with the desired API name.
  response = requests.get('https://x_xx_xxxx-xxx_x.apis.simplesia.com', headers=headers)
  if response.ok:
    print(response.json())

if __name__ == '__main__':
  request()
`

let timeout
function onCopy() {
  if (timeout) {
    clearTimeout(timeout)
  }

  navigator.clipboard.writeText(user.key)
  hasCopied.value = true
  timeout = setTimeout(() => hasCopied.value = false, 3000)
}

function onSelect(tab) {
  selected.value = tab
}
</script>

<template>
  <Page>
    <div class="align-center flex-row justify-space-between">
      <h1><t tag="usage" /></h1>
    </div>
    <div class="tabs">
      <div class="tab-list">
        <div @click="onSelect('usage')" :class="['tab', {'active': selected == 'usage'}]">
          <t tag="code" />
        </div>
        <div @click="onSelect('key')" :class="['tab', {'active': selected == 'key'}]">
          <t tag="key" />
        </div>
      </div>
      <div class="tab-body">
        <div v-if="selected == 'key'">
          <div v-if="hasPaymentMethod">
            <div class="align-center flex-row key justify-center">
              <span>{{ user.key }}</span>
              <div @click.prevent.stop="onCopy" class="icon">
                <ClipboardDocumentIcon />
                <span v-if="hasCopied" class="small thin"><t tag="copied" /></span>
              </div>
            </div>
          </div>
          <div v-else class="flex-row justify-space-around required">
            <div class="align-center flex-col justify-space-around">
              <t tag="cc.required" />
              <router-link to="/private/billing" class="m p">
                <t tag="goto.billing" />
              </router-link>
            </div>
          </div>
        </div>
        <div v-if="selected == 'usage'">
          <div class="code">
            <h2>Go</h2>
            <Code :code="codeGo" language="go" />
          </div>
          <div class="code">
            <h2>JavaScript</h2>
            <Code :code="codeJavaScript" language="javascript" />
          </div>
          <div class="code">
            <h2>Python</h2>
            <Code :code="codePython" language="python" />
          </div>
        </div>
      </div>
    </div>
  </Page>
</template>

<style lang="scss" scoped>
button {
  padding: 0.25em 0.5em !important;
}

svg {
  height: 24px;
  margin-left: 0.5em;
  width: 24px;
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

.icon {
  cursor: pointer;
}

.key {
  border: 1px dashed $grayer;
  border-radius: 1em;
  font-size: 2em;
  padding: 2em;
  text-align: center;
}

.required {
  border: 1px solid $grayer;
  border-radius: 1em;
  padding: 2em;
}

.small {
  font-size: 0.5em;
}
</style>
