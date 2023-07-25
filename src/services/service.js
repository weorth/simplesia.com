
export default class Service {
  headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  }
  host = ''

  constructor(host) {
    this.host = host
  }

  async _req(method, route, body, headers = {}) {
    const url = `${this.host}${route}`

    const res = await fetch(url, {
      body: JSON.stringify(body) || body,
      headers,
      method,
    })
    if (!res.ok) {
      throw new Error(`${res.status || 500} ${res.statusText || 'Unknown'}`)
    }
    return res.json()
  }

  async delete(route) {
    return this.do('DELETE', route, null, this.headers)
  }

  async get(route) {
    return this.do('GET', route, null, this.headers)
  }

  async post(route, body) {
    return this.do('POST', route, body, this.headers)
  }

  async put(route, body) {
    return this.do('PUT', route, body, this.headers)
  }

  setToken(token) {
    this.headers['Authorization'] = `Bearer ${token}`
  }

  unsetToken() {
    delete this.headers['Authorization']
  }

  async upload(route, file) {
    console.error(`${route} ${file}`)
  }
}
