
import Country from '@/i18n/models/country'

import en_us from '@/i18n/tokens/en_us.json'
import pt_br from '@/i18n/tokens/pt_br.json'

export const Countries = [
  new Country('us', 'en', en_us), // First is default!
  new Country('br', 'pt', pt_br),
]

export default {
  Countries,
}
