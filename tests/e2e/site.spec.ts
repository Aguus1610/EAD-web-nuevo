import { expect, test } from '@playwright/test'

const routes = [
  '',
  'empresa',
  'servicios',
  'servicios/reparacion-integral',
  'servicios/instalaciones',
  'servicios/mantenimiento',
  'servicios/repuestos',
  'productos',
  'trabajos',
  'contacto',
  '404',
]

for (const route of routes) {
  test(`${route || 'inicio'} loads without horizontal overflow`, async ({ page }) => {
    const response = await page.goto(route)
    if (route === '404') expect(response?.status(), route).toBe(404)
    else expect(response?.ok(), route).toBeTruthy()
    await page.waitForLoadState('networkidle')
    await expect(page.locator('main h1')).toHaveCount(1)
    const overflowingElements = await page.evaluate(() => {
      const viewportWidth = document.documentElement.clientWidth
      return Array.from(document.querySelectorAll<HTMLElement>('body *'))
        .filter((element) => {
          const rect = element.getBoundingClientRect()
          return rect.right > viewportWidth + 1 || rect.left < -1
        })
        .map((element) => ({
          tag: element.tagName,
          id: element.id,
          className: String(element.className).slice(0, 120),
          text: (element.textContent ?? '').trim().slice(0, 80),
        }))
        .slice(0, 10)
    })
    expect(overflowingElements, `${route || 'inicio'} has horizontal overflow`).toEqual([])
  })
}

test('metadata uses the confirmed canonical base', async ({ page }) => {
  await page.goto('contacto')
  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute('href', 'https://aguus1610.github.io/EAD-web-nuevo/contacto')
  await expect(page.locator('meta[property="og:image"]')).toHaveAttribute('content', /\/EAD-web-nuevo\/assets\/brand\//)
})

test('indexable pages have unique metadata and valid structured data', async ({ page }) => {
  const titles = new Set<string>()
  const descriptions = new Set<string>()

  for (const route of routes.filter((path) => path !== '404')) {
    await page.goto(route)
    const title = await page.title()
    const description = await page.locator('meta[name="description"]').getAttribute('content')
    const canonical = await page.locator('link[rel="canonical"]').getAttribute('href')
    const jsonLd = await page.locator('script[type="application/ld+json"]').textContent()

    expect(title, route || 'inicio').not.toBe('')
    expect(description, route || 'inicio').toBeTruthy()
    expect(canonical, route || 'inicio').toMatch(/^https:\/\/aguus1610\.github\.io\/EAD-web-nuevo\//)
    expect(() => JSON.parse(jsonLd ?? '')).not.toThrow()
    expect(titles.has(title), `duplicate title: ${title}`).toBeFalsy()
    expect(descriptions.has(description ?? ''), `duplicate description: ${description}`).toBeFalsy()
    titles.add(title)
    descriptions.add(description ?? '')
  }
})

test('sitemap, robots and 404 directives are coherent', async ({ page, request }) => {
  const sitemap = await request.get('sitemap.xml')
  expect(sitemap.ok()).toBeTruthy()
  const sitemapBody = await sitemap.text()
  expect(sitemapBody).toContain('https://aguus1610.github.io/EAD-web-nuevo/contacto')
  expect(sitemapBody).not.toContain('/404')

  const robots = await request.get('robots.txt')
  expect(robots.ok()).toBeTruthy()
  expect(await robots.text()).toContain('https://aguus1610.github.io/EAD-web-nuevo/sitemap.xml')

  const response = await page.goto('404')
  expect(response?.status()).toBe(404)
  await expect(page.locator('meta[name="robots"]')).toHaveAttribute('content', 'noindex, nofollow')
})

test('internal navigation remains under the GitHub Pages base path', async ({ page }) => {
  await page.goto('')
  const internalLinks = page.locator('a[href^="/EAD-web-nuevo"]')
  expect(await internalLinks.count()).toBeGreaterThan(0)
  await expect(page.locator('a[href="/contacto"]')).toHaveCount(0)
})

test('contact form reports errors and creates a reviewable WhatsApp message', async ({ page }) => {
  await page.goto('contacto?tipo=Repuesto%20o%20componente&equipo=Repuestos%20Palfinger&marca=Palfinger')

  await expect(page.getByLabel('Necesidad principal *')).toHaveValue('Repuesto o componente')
  await expect(page.getByLabel('Equipo o producto *')).toHaveValue('Repuestos Palfinger')
  await expect(page.getByLabel('Marca (opcional)')).toHaveValue('Palfinger')

  await page.getByRole('button', { name: 'Abrir mensaje en WhatsApp' }).click()
  await expect(page.getByLabel('Nombre *')).toBeFocused()
  await expect(page.locator('#error-name')).toBeVisible()

  await page.getByLabel('Nombre *').fill('Ana')
  await page.getByLabel('Localidad *').fill('General Pico')
  await page.getByLabel('Teléfono o correo de contacto *').fill('+54 2302 000000')
  await page.getByLabel('Descripción *').fill('Necesito verificar compatibilidad.')
  await page.getByLabel(/Acepto enviar la consulta/).check()

  const popupPromise = page.waitForEvent('popup')
  await page.getByRole('button', { name: 'Abrir mensaje en WhatsApp' }).click()
  const popup = await popupPromise
  expect(popup.url()).toMatch(/(?:wa\.me\/5492302672827|api\.whatsapp\.com\/send\/\?phone=5492302672827)/)
  await popup.close()

  await expect(page.locator('#quote-preview')).toHaveValue(/Ana/)
  await expect(page.locator('#quote-preview')).toHaveValue(/Palfinger/)
  await expect(page.locator('#quote-status')).toContainText('Revise el mensaje')
})

test('contact channels and external location are explicit', async ({ page }) => {
  await page.goto('contacto')
  const contactChannels = page.locator('section[aria-labelledby="contact-channels-heading"]')

  await expect(contactChannels.getByRole('link', { name: 'Llamar a Agustín Deux al +54 9 2302 672827' })).toHaveAttribute('href', 'tel:+5492302672827')
  await expect(contactChannels.getByRole('link', { name: 'Abrir WhatsApp de Agustín Deux al +54 9 2302 672827' })).toHaveAttribute('href', /wa\.me\/5492302672827/)
  await expect(contactChannels.getByRole('link', { name: 'Llamar a Enzo Deux al +54 9 2302 592703' })).toHaveAttribute('href', 'tel:+5492302592703')
  await expect(contactChannels.getByRole('link', { name: 'Abrir WhatsApp de Enzo Deux al +54 9 2302 592703' })).toHaveAttribute('href', /wa\.me\/5492302592703/)
  await expect(page.getByRole('link', { name: 'Abrir ubicación' })).toHaveAttribute('href', /google\.com\/maps/)
  await expect(page.getByRole('link', { name: 'Abrir Instagram de EAD Oleohidráulica' })).toHaveAttribute('href', 'https://instagram.com/oleohidraulica_ead')
})

test('basic accessibility contracts are present', async ({ page }) => {
  await page.goto('contacto')
  const violations = await page.evaluate(() => {
    const issues: string[] = []
    for (const image of document.querySelectorAll('img')) {
      if (!image.hasAttribute('alt')) issues.push(`Image without alt: ${image.src}`)
      if (!image.hasAttribute('width') || !image.hasAttribute('height')) issues.push(`Image without dimensions: ${image.src}`)
    }
    for (const control of document.querySelectorAll<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>('form input, form select, form textarea')) {
      if (control.labels?.length === 0) issues.push(`Unlabelled control: ${control.name}`)
    }
    if (document.querySelectorAll('main').length !== 1) issues.push('Expected one main landmark')
    return issues
  })
  expect(violations).toEqual([])

  await page.goto('')
  await page.keyboard.press('Tab')
  await expect(page.getByRole('link', { name: 'Saltar al contenido' })).toBeFocused()
})

test('mobile navigation opens, closes with Escape, and restores focus', async ({ page, isMobile }) => {
  test.skip(!isMobile, 'Mobile-only navigation behavior')
  await page.goto('')
  const toggle = page.locator('#menu-toggle')
  await expect(toggle).toHaveAccessibleName('Abrir menú')
  await toggle.click()
  await expect(toggle).toHaveAttribute('aria-expanded', 'true')
  await expect(toggle).toHaveAccessibleName('Cerrar menú')
  await expect(page.getByRole('dialog', { name: 'Navegación' })).toBeVisible()
  await page.keyboard.press('Escape')
  await expect(toggle).toHaveAttribute('aria-expanded', 'false')
  await expect(toggle).toBeFocused()
})
