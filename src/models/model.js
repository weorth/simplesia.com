
export default class Model {
  id = ''

  created = ''
  creator = ''

  modified = ''
  modifier = ''

  constructor(id, created = '', creator = '') {
    this.id = id

    this.created = created
    this.creator = creator
  }
}
