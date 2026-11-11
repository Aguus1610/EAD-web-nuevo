const STORAGE_KEY = 'ead-theme'
type Theme = 'light' | 'dark'

const root = document.documentElement
const media = window.matchMedia('(prefers-color-scheme: dark)')
const themeColor = document.querySelector<HTMLMetaElement>('meta[name="theme-color"]')
const buttons = Array.from(document.querySelectorAll<HTMLButtonElement>('[data-theme-toggle]'))

const readStoredTheme = (): Theme | null => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    return stored === 'light' || stored === 'dark' ? stored : null
  } catch {
    return null
  }
}

const currentTheme = (): Theme => (root.dataset.theme === 'dark' ? 'dark' : 'light')

const applyTheme = (theme: Theme, persist: boolean) => {
  const isDark = theme === 'dark'

  root.dataset.theme = theme
  root.style.setProperty('color-scheme', theme)

  if (persist) {
    try {
      localStorage.setItem(STORAGE_KEY, theme)
    } catch {
      // El tema sigue funcionando aunque el navegador bloquee el almacenamiento.
    }
  }

  if (themeColor) {
    themeColor.content = isDark ? '#07123f' : '#f5f7fb'
  }

  for (const button of buttons) {
    button.setAttribute('aria-pressed', String(isDark))
    button.title = isDark ? 'Activar tema claro' : 'Activar tema oscuro'
  }
}

for (const button of buttons) {
  button.addEventListener('click', () => {
    applyTheme(currentTheme() === 'dark' ? 'light' : 'dark', true)
  })
}

media.addEventListener('change', (event) => {
  if (readStoredTheme()) return
  applyTheme(event.matches ? 'dark' : 'light', false)
})

applyTheme(currentTheme(), false)
