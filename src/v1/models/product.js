
export default class Product {
  id = ''

  cost = 0.0
  latency = 0
  status = ''
  tax = 0.0

  description = ''
  image = ''
  name = ''

  constructor(id, name, description, image, latency, cost, tax) {
    this.id = id

    this.cost = cost
    this.latency = latency
    this.status = 'active'
    this.tax = tax

    this.description = description
    this.image = image
    this.name = name
  }
}
