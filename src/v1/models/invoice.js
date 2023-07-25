
export default class Invoice {
  id = ''

  account = ''
  status = ''

  cost = 0.0
  tax = 0.0

  month = 0
  year = 0

  products = []

  constructor(id, account, month, year, products) {
    this.id = id

    this.account = account
    this.status = 'unpaid'

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
