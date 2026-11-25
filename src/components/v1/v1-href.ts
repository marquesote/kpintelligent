/* The original site (V1) lives under /v1 so it can be compared with the current one: its internal links
   ('/', '/#section', '/soluciones/...') are moved under /v1. Anchors on the same page ('#x') and external links stay. */
export function v1Href(href: string): string {
  if (href === '/') return '/v1'
  if (href.startsWith('/#')) return `/v1${href.slice(1)}`
  if (href.startsWith('/soluciones/')) return `/v1${href}`
  return href
}
