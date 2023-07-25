
export default class Account {
  id = ''

  language = ''
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

  constructor(id, email, password, name, language) {
    this.id = id

    this.language = language
    this.status = 'guest'
    this.tax = 0.0

    this.email = email
    this.password = password
    this.name = name
  }
}
