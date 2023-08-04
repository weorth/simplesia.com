
import { has, random, uuid } from '@/core/utils'
import Service from '@/services/service'

import Account from '@/models/account'
import Invoice from '@/models/invoice'
import Message from '@/models/message'
import Product from '@/models/product'
import Ticket from '@/models/ticket'
import Usage from '@/models/usage'

export default class Mock extends Service {
  account = null
  invoices = []
  messages = []
  products = []
  tickets = []
  usages = []

  code = ''
  token = ''

  constructor() {
    super()

    this.account = new Account(uuid(), 'test@email.com', 'password', 'Test Account', 'en_us')
    this.account.key = uuid()
    this.account.token = uuid()

    this.products = [
      new Product('h_age_cl_all_1', 'h', 'h_age_cl', 'none', 'https://placehold.co/400x300', 750, 0.002, 0.0),
      new Product('h_body_pe_all_1', 'h', 'h_body_pe', 'none', 'https://placehold.co/400x300', 750, 0.002, 0.0),
      new Product('h_emotion_cl_all_1', 'h', 'h_emotion_cl', 'none', 'https://placehold.co/400x300', 750, 0.002, 0.0),
      new Product('h_face_od_all_1', 'h', 'h_face_od', 'none', 'https://placehold.co/400x300', 750, 0.002, 0.0),
      new Product('h_hair_od_all_1', 'h', 'h_hair_od', 'none', 'https://placehold.co/400x300', 750, 0.002, 0.0),
      new Product('h_hair_type_cl_all_1', 'h', 'h_hair_type_cl', 'none', 'https://placehold.co/400x300', 750, 0.002, 0.0),
      new Product('h_hand_pe_all_1', 'h', 'h_hand_pe', 'none', 'https://placehold.co/400x300', 750, 0.002, 0.0),
      new Product('v_damage_od_br_1', 'v', 'v_damage_od_br', 'none', 'https://placehold.co/400x300', 1500, 0.0025, 0.0),
      new Product('v_dashboard_od_br_1', 'v', 'v_dashboard_od_br', 'none', 'https://placehold.co/400x300', 1500, 0.0025, 0.0),
      new Product('v_odometer_digits_od_br_1', 'v', 'v_odometer_digits_od_br', 'none', 'https://placehold.co/400x300', 1500, 0.0025, 0.0),
      new Product('v_plate_od_br_1', 'v', 'v_plate_od_br', 'none', 'https://placehold.co/400x300', 1500, 0.0025, 0.0),
      new Product('v_plate_digits_od_br_1', 'v', 'v_plate_digits_od_br', 'none', 'https://placehold.co/400x300', 1500, 0.0025, 0.0),
      new Product('v_side_cl_br_1', 'v', 'v_side_cl_br', 'none', 'https://placehold.co/400x300', 1500, 0.0025, 0.0),
      new Product('v_type_cl_br_1', 'v', 'v_type_cl_br', 'none', 'https://placehold.co/400x300', 1500, 0.0025, 0.0),
    ]

    const date = new Date()
    for (let year = 2021; year <= date.getFullYear(); year++) {
      const maxMonth = year === date.getFullYear() ? date.getMonth() : 12
      for (let month = 0; month <= maxMonth; month++) {
        const products = []
        for (let i = 0; i < random(4); i++) {
          const product = this.products[random(this.products.length-1)]
          const requests = random()

          products.push({
            id: product.id,
            cost: product.cost * requests,
            requests,
            tax: product.tax * requests,
          })
        }

        for (let product of products) {
          this.usages.push(new Usage(uuid(), this.account.id, product.id, month, year, product.requests))
        }

        const invoice = new Invoice(uuid(), this.account.id, month, year, products)
        invoice.status = year === date.getFullYear() && month == maxMonth ? 'unpaid' : 'paid'
        this.invoices.push(invoice)
      }
    }

    for (let i = 0; i < 3; i++) {
      const ticketId = uuid()
      const ticket = new Ticket(ticketId, this.account.id, `Body ${i}`, `Title ${i}`)
      ticket.status = 'done'
      this.tickets.push(ticket)

      for (let j = 0; j < 5; j++) {
        this.messages.push(new Message(uuid(), this.account.id, ticketId, `Message ${j}`))
      }
    }

    Mock._instance = this
  }

  authorize(retry = false) {
    if (!this.token || this.token === '') {
      if (retry) throw new Error(JSON.stringify({ code: 401, message: 'Unauthorized' }))

      this.token = localStorage.getItem('simplesia.token')
      return this.authorize(true)
    }
    return true
  }

  sleep(seconds = 1.5) {
    return new Promise(resolve => setTimeout(resolve, random(seconds * 1000)))
  }

  // Account

  async getAccount() {
    this.authorize()
    await this.sleep()
    return this.account
  }

  async putAccount(account) {
    this.authorize()
    await this.sleep()
    this.account = account
  }

  async postBilling(number, expMo, expYr, cvc) {
    this.authorize()
    await this.sleep()
    if (!number) throw new Error(JSON.stringify({ code: 400, message: 'missing number' }))
    if (!expMo) throw new Error(JSON.stringify({ code: 400, message: 'missing expiration month' }))
    if (!expYr) throw new Error(JSON.stringify({ code: 400, message: 'missing expiration year' }))
    if (!cvc) throw new Error(JSON.stringify({ code: 400, message: 'missing cvc' }))
    this.account.status = 'active'
    this.account.token = uuid()
  }

  async getLogout() {
    await this.sleep()
    this.token = ''
    localStorage.removeItem('simplesia.token')
  }

  // Billing

  async getInvoices(accountId) {
    this.authorize()
    await this.sleep()
    return this.invoices.filter(o => has(o, 'account', accountId))
  }

  async getUsages(accountId) {
    this.authorize()
    await this.sleep()
    return this.usages.filter(o => has(o, 'account', accountId))
  }

  // Support

  async getMessages(ticketId) {
    this.authorize()
    await this.sleep()
    return this.tickets.filter(o => has(o, 'ticketId', ticketId))
  }

  async getTickets(accountId) {
    this.authorize()
    await this.sleep()
    return this.tickets.filter(o => has(o, 'account', accountId))
  }

  async postTicket(accountId, title, body) {
    this.authorize()
    await this.sleep()
    const ticket = new Ticket(uuid(), accountId, body, title)
    this.tickets.push(ticket)
    return ticket
  }

  // Public

  async getProducts() {
    await this.sleep()
    return this.products
  }

  async postForgot(email) {
    await this.sleep()
    if (this.account.email === email) {
      this.account.status = 'reset'
      this.code = 'DEMO_CODE'
      return this.code
    } else {
      throw new Error(JSON.stringify({ code: 400, message: 'Bad Request' }))
    }
  }

  async postLogin(email, password) {
    await this.sleep()
    if (this.account.email === email && this.account.password === password) {
      this.token = uuid()
      localStorage.setItem('simplesia.token', this.token)

      this.account.key = uuid()
      this.account.token = uuid()
      return this.account
    } else {
      this.token = ''
      localStorage.removeItem('simplesia.token')
      throw new Error(JSON.stringify({ code: 401, message: 'Unauthorized' }))
    }
  }

  async postRegister(account) {
    await this.sleep()
    const requiredFields = ['country', 'email', 'name', 'password']
    for (let field of requiredFields) {
      if (!account[field]) {
        throw new Error(JSON.stringify({ code: 400, message: `missing ${field}`}))
      }
    }
    this.account = new Account(uuid(), account.email, account.password, account.name, account.country)
    this.account.key = uuid()
    this.account.status = 'active'
    this.account.token = uuid()

    this.code = ''

    this.token = uuid()
    localStorage.setItem('simplesia.token', this.token)

    return this.account
  }

  async postReset(email, code, password) {
    await this.sleep()
    if (this.account.email === email && this.code === code && this.account.status === 'reset') {
      this.account.password = password
      this.account.status = 'active'
      this.code = ''
    } else {
      throw new Error(JSON.stringify({ code: 401, message: 'Unauthorized' }))
    }
  }
}
