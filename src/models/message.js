
import Model from '@/models/model'

export default class Message extends Model {
  account = ''
  ticket = ''

  body = ''

  constructor(id, account, ticket, body) {
    super(id)

    this.account = account
    this.ticket = ticket

    this.body = body
  }
}
