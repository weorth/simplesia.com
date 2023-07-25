
import { v4 } from 'uuid'

function getPathParts(path) {
  return Array.isArray(path) ? path : path.split('.')
}

function getPathResult(obj, keys) {
  return keys.reduce((prev, key) => prev && prev[key], obj)
}

export function get(obj, path, init = undefined) {
  if (!obj || !path) return init
  const keys = getPathParts(path)
  const result = getPathResult(obj, keys)
  return !result ? init : result
}

export function has(obj, path) {
  if (!obj || !path) return false
  const keys = getPathParts(path)
  const result = getPathResult(obj, keys)
  return !!result
}

export function merge(a, b) {
  if (!(a instanceof Object) || !(b instanceof Object)) return undefined
  return { ...a, ...b }
}

export function random(max = 1000000) {
  return Math.ceil(Math.random() * max)
}

export function route() {
  return location.hash.replace('#', '')
}

export function uuid() {
  return v4()
}

export default {
  get,
  has,
  merge,
  random,
  route,
  uuid,
}
