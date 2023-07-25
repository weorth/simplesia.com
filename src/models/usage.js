
import Model from '@/models/model'

export default class Usage extends Model {
  account = ''
  product = ''

  month = 0
  requests = 0
  year = 0

  constructor(id, account, product, month, year, requests) {
    super(id)

    this.account = account
    this.product = product

    this.month = month
    this.requests = requests
    this.year = year
  }
}
