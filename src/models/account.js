
import Model from '@/models/model'

export default class Account extends Model {
  country = ''
  status = ''
  tax = 0.0

  email = ''
  name = ''
  password = ''

  key = ''
  token = ''

  city = ''
  state = ''
  street1 = ''
  street2 = ''
  zip = ''

  constructor(id, email, password, name, country) {
    super(id)

    this.country = country
    this.status = 'open' // or 'active', 'reset', 'suspended'
    this.tax = 0.0

    this.email = email
    this.password = password
    this.name = name
  }
}
