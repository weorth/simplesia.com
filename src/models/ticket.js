
import Model from '@/models/model'

export default class Ticket extends Model {
  account = ''
  status = ''

  body = ''
  title = ''

  messages = []

  constructor(id, account, body, title) {
    super(id)

    this.account = account
    this.status = 'open' // or 'close'

    this.body = body
    this.title = title

    this.messages = []
  }
}
