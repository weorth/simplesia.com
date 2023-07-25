
export default class Ticket {
  id = ''

  account = ''
  status = ''

  body = ''
  title = ''

  messages = []

  constructor(id, account, body, title) {
    this.id = id

    this.account = account
    this.status = 'open'

    this.body = body
    this.title = title

    this.messages = []
  }
}
