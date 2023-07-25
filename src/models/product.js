
import Model from '@/models/model'

export default class Product extends Model {
  category = ''
  cost = 0.0
  latency = 0
  status = ''
  tax = 0.0

  description = ''
  image = ''
  name = ''

  constructor(id, category, name, description, image, latency, cost, tax) {
    super(id)

    this.category = category
    this.cost = cost
    this.latency = latency
    this.status = 'active' // or 'inactive'
    this.tax = tax

    this.description = description
    this.image = image
    this.name = name
  }
}
