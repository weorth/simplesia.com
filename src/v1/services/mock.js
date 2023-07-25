
import { error, uuid } from './utils'

import Account from '@models/account'
import Language from '@models/language'
import Product from '@models/product'
import Service from './service'

export default class MockService extends Service {
  _accounts = {
    '1': Account('1', 'one@email.com', 'password', 'Test 1', 'en'),
    '2': Account('2', 'one@email.com', 'password', 'Test 2', 'en'),
    '3': Account('3', 'one@email.com', 'password', 'Test 3', 'br'),
  }

  _invoices = {}

  _languages = [
    Language('en', 'us'),
    Language('pt', 'br'),
  ]

  _products = [
    Product('h_age_cl_all_1', 'h_age_cl', 'Something here...', 'image', 750, 0.002, 0.0),
    Product('h_body_pe_all_1', 'h_body_pe', 'Something here...', 'image', 750, 0.002, 0.0),
    Product('h_emotion_cl_all_1', 'h_emotion_cl', 'Something here...', 'image', 750, 0.002, 0.0),
    Product('h_face_od_all_1', 'h_face_od', 'Something here...', 'image', 750, 0.002, 0.0),
    Product('h_hair_od_all_1', 'h_hair_od', 'Something here...', 'image', 750, 0.002, 0.0),
    Product('h_hair_type_cl_all_1', 'h_hair_type_cl', 'Something here...', 'image', 750, 0.002, 0.0),
    Product('h_hand_pe_all_1', 'h_hand_pe', 'Something here...', 'image', 750, 0.002, 0.0),

    Product('v_damage_od_br_1', 'v_damage_od_br', 'Something here...', 'image', 1500, 0.0025, 0.0),
    Product('v_dashboard_od_br_1', 'v_dashboard_od_br', 'Something here...', 'image', 1500, 0.0025, 0.0),
    Product('v_odometer_digits_od_br_1', 'v_odometer_digits_od_br', 'Something here...', 'image', 1500, 0.0025, 0.0),
    Product('v_plate_od_br_1', 'v_plate_od_br', 'Something here...', 'image', 1500, 0.0025, 0.0),
    Product('v_plate_digits_od_br_1', 'v_plate_digits_od_br', 'Something here...', 'image', 1500, 0.0025, 0.0),
    Product('v_side_cl_br_1', 'v_side_cl_br', 'Something here...', 'image', 1500, 0.0025, 0.0),
    Product('v_type_cl_br_1', 'v_type_cl_br', 'Something here...', 'image', 1500, 0.0025, 0.0),
  ]

  _tickets = {}

  _tokens = new Set()

  _usage = {}

  /* Helpers */

  _find_account_by_email(email) {
    const accounts = Object.values(this._accounts)
    return accounts.find(a => a.email === email)
  }

  /* Public */

  // Misc.

  languages() {
    return this._languages
  }

  products() {
    return this._products
  }

  // Account

  forgot(email) {
    const account = this._find_account_by_email(email)
    account.password = uuid()
    this._accounts[account.id] = account
    return account.password
  }

  login(email, password) {
    const account = this._find_account_by_email(email)
    if (account.password !== password) {
      error(401, 'Unauthorized')
    }
  }

  register(email, password, name, language) {
    const account = Account(uuid(), email, password, name, language)
    this._accounts[account.id] = account
    return account
  }

  reset(email, code, password) {
    const account = this._find_account_by_email(email)
    if (account.password !== code) {
      error(403, 'Forbidden')
    }

    account.password = password
    this._accounts[account.id] = account
}

  /* Private */

  // Account

  account(accountId) {
    return this._accounts[accountId]
  }

  language(accountId, language) {
    this._accounts[accountId].language = language
  }

  logout(token) {
    if (!this._tokens.delete(token)) {
      error(400, 'Bad Request')
    }
  }

  update(accountId, account) {
    this._accounts[accountId] = account
  }

  // Billing

  invoice(accountId, month, year) {
    // TODO: make this charge a random usage
    console.log(accountId, month, year)
    error(500, 'Internal Server Error')
  }

  invoices(accountId) {
    const invoices = Object.values(this._invoices)
    return invoices.filter(i => i.account === accountId)
  }

  payment(invoiceId) {
    this._invoices[invoiceId].status = 'paid'
  }

  signup(accountId, street1, street2, city, state, zip) {
    const account = this._accounts[accountId]
    account.city = city
    account.state = state
    account.street1 = street1
    account.street2 = street2
    account.zip = zip

    if (!!account.city && !!account.state && !!account.street1 && !!account.zip) {
      account.key = uuid()
      account.token = 'STRIPE_TOKEN_HERE'
    }

    this._accounts[accountId] = account
  }

  // Support

  message(ticketId, message) {
    this._tickets[ticketId].messages.push(message)
  }

  ticket(ticket) {
    this._tickets[ticket.id] = ticket
  }

  tickets(accountId) {
    const tickets = Object.values(this._tickets)
    return tickets.filter(t => t.account === accountId)
  }
}
