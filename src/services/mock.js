
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
      if (retry) throw new Error('401 Unauthorized')

      this.token = localStorage.getItem('simplesia.token')
      return this.authorize(true)
    }
    return true
  }

  // Account

  async getAccount() {
    this.authorize()
    return this.account
  }

  async putAccount(account) {
    this.authorize()
    this.account = account
  }

  async postBilling(number, expMo, expYr, cvc) {
    this.authorize()
    if (!number) throw new Error('missing number')
    if (!expMo) throw new Error('missing expiration month')
    if (!expYr) throw new Error('missing expiration year')
    if (!cvc) throw new Error('missing cvc')
    this.account.status = 'active'
    this.account.token = uuid()
  }

  async getLogout() {
    this.token = ''
    localStorage.removeItem('simplesia.token')
  }

  // Billing

  async getInvoices(accountId) {
    this.authorize()
    return this.invoices.filter(o => has(o, 'account', accountId))
  }

  async getUsages(accountId) {
    this.authorize()
    return this.usages.filter(o => has(o, 'account', accountId))
  }

  // Support

  async getMessages(ticketId) {
    this.authorize()
    return this.tickets.filter(o => has(o, 'ticketId', ticketId))
  }

  async getTickets(accountId) {
    this.authorize()
    return this.tickets.filter(o => has(o, 'account', accountId))
  }

  async postTicket(accountId, title, body) {
    this.authorize()
    const ticket = new Ticket(uuid(), accountId, body, title)
    this.tickets.push(ticket)
    return ticket
  }

  // Public

  async getProducts() {
    return this.products
  }

  async postForgot(email) {
    this.code = this.account.email === email ? 'DEMO_CODE' : ''
  }

  async postLogin(email, password) {
    if (this.account.email === email && this.account.password === password) {
      this.token = uuid()
      localStorage.setItem('simplesia.token', this.token)

      this.account.key = uuid()
      this.account.token = uuid()
      return this.account
    } else {
      this.token = ''
      localStorage.setItem('simplesia.token', null)
      throw new Error('401 Unauthorized')
    }
  }

  async postRegister(account) {
    this.account = account
  }

  async postReset(email, code, password) {
    if (this.account.email === email && this.code === code) {
      this.account.password = password
      this.code = ''
    } else {
      throw new Error('401 Unauthorized')
    }
  }
}
