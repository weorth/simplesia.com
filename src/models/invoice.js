
import Model from '@/models/model'

export default class Invoice extends Model {
  account = ''
  status = ''

  cost = 0.0
  tax = 0.0

  month = 0
  year = 0

  products = []

  constructor(id, account, month, year, products) {
    super(id)

    this.account = account
    this.status = 'unpaid' // or 'paid'

    this.cost = 0.0
    this.tax = 0.0

    this.month = month
    this.year = year

    this.products = products

    this.products.forEach(p => {
      this.cost += p.cost
      this.tax += p.tax
    })
  }
}
