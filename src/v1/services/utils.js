
import { v4 } from 'uuid'

export function error(code, message) {
  throw new Error(`${code} ${message}`)
}

export function uuid() {
  return v4()
}
