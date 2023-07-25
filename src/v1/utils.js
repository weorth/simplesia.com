
export const URL = model => `https://${model}.apis.simplesia.com`

export function sanitize_code(code) {
  return String(code)
    .replace(/&/g, '&amp;')
    .replace(/>/g, '&gt;')
    .replace(/</g, '&lt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
}

export default {
  URL,
  sanitize_code,
}
