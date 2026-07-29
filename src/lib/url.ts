export function withBase(path: string): string {
  if (!path.startsWith('/') || path.startsWith('//')) return path

  const base = import.meta.env.BASE_URL.replace(/\/$/, '')
  return path === '/' ? `${base}/` : `${base}${path}`
}
