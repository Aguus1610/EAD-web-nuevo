import { expect, test, type Page } from '@playwright/test'

const formspreeEndpoint = 'https://formspree.io/f/xqerjrnp'
const playwrightHost = process.env.PLAYWRIGHT_HOST ?? '127.0.0.1'
const playwrightPort = process.env.PLAYWRIGHT_PORT ?? '4321'
const baseURL = `http://${playwrightHost}:${playwrightPort}/EAD-web-nuevo/`

async function completeQuoteForm(page: Page, contactMethod: 'Correo' | 'WhatsApp' = 'Correo') {
  await page.getByLabel('Nombre *').fill('Ana')
  await page.getByLabel('Localidad *').fill('General Pico')
  await page.getByLabel(contactMethod, { exact: true }).check()
  await page
    .getByLabel(contactMethod === 'Correo' ? 'Correo electrónico *' : 'Teléfono de contacto *')
    .fill(contactMethod === 'Correo' ? 'ana@example.com' : '+54 2302 000000')
  await page.getByLabel('Equipo o producto *').fill('Hidroelevador')
  await page.getByLabel('Necesidad principal *').selectOption('Mantenimiento o diagnóstico')
  await page.getByLabel('Descripción *').fill('Necesito verificar el equipo.')
  await acceptConsent(page)
}

async function acceptConsent(page: Page) {
  const consent = page.getByLabel(/Acepto enviar la consulta/)
  await consent.focus()
  await page.keyboard.press('Space')
  await expect(consent).toBeChecked()
}

test.beforeEach(async ({ context }) => {
  await context.route('https://formspree.io/**', (route) => route.abort('blockedbyclient'))
  await context.route(/https:\/\/(?:wa\.me|api\.whatsapp\.com)\/.*/, (route) => route.abort('blockedbyclient'))
})

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
    const hero = page.locator('main > section').first()
    if (route === '404') {
      await expect(hero.locator('.photo-frame')).toHaveCount(0)
      await expect(hero.getByText('Ruta interrumpida')).toBeVisible()
    } else {
      const heroImage = hero.locator('.photo-frame img')
      await expect(heroImage).toHaveCount(1)
      const attributes = await heroImage.evaluate((image) => ({
        src: image.getAttribute('src'),
        width: image.getAttribute('width'),
        height: image.getAttribute('height'),
      }))
      expect(attributes.src, route || 'inicio').toMatch(/\/EAD-web-nuevo\/assets\/workshop\/.+\.webp$/)
      expect(attributes.width, route || 'inicio').toMatch(/^\d+$/)
      expect(attributes.height, route || 'inicio').toMatch(/^\d+$/)
    }
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

test('workshop gallery renders six real images', async ({ page }) => {
  await page.goto('empresa')
  const gallery = page.locator('section').filter({ has: page.getByRole('heading', { name: 'Nuestro taller' }) })
  const images = gallery.locator('img')

  await expect(images).toHaveCount(6)
  for (let index = 0; index < 6; index += 1) {
    await images.nth(index).scrollIntoViewIfNeeded()
  }
  await expect.poll(() => images.evaluateAll((elements) =>
    elements.every((element) => {
      const image = element as HTMLImageElement
      return image.complete && image.naturalWidth > 0
    }),
  )).toBe(true)
  const sources = await images.evaluateAll((elements) => elements.map((element) => element.getAttribute('src')))

  expect(new Set(sources).size).toBe(6)
  expect(sources.every((src) => src?.startsWith('/EAD-web-nuevo/assets/workshop/'))).toBeTruthy()
})

test('service and product cards use four distinct technical symbols', async ({ page }) => {
  await page.goto('servicios')
  const serviceIcons = await page.locator('[data-service-icon]').evaluateAll((icons) =>
    icons.map((icon) => icon.getAttribute('data-service-icon')),
  )
  expect(new Set(serviceIcons).size).toBe(4)

  await page.goto('productos')
  const productIcons = await page.locator('[data-product-icon]').evaluateAll((icons) =>
    icons.map((icon) => icon.getAttribute('data-product-icon')),
  )
  expect(new Set(productIcons).size).toBe(4)
})

test('indexable pages have unique metadata and valid structured data', async ({ page }) => {
  test.setTimeout(60_000)
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

  await page.evaluate(() => {
    const openedUrls: string[] = []
    Object.assign(window, { __openedUrls: openedUrls })
    window.open = ((url?: string | URL) => {
      openedUrls.push(String(url))
      return window
    }) as typeof window.open
  })

  await expect(page.getByLabel('Necesidad principal *')).toHaveValue('Repuesto o componente')
  await expect(page.getByLabel('Equipo o producto *')).toHaveValue('Repuestos Palfinger')
  await expect(page.getByLabel('Marca (opcional)')).toHaveValue('Palfinger')

  await page.getByRole('button', { name: 'Abrir mensaje en WhatsApp' }).click()
  await expect(page.getByLabel('Nombre *')).toBeFocused()
  await expect(page.locator('#error-name')).toBeVisible()

  await page.getByLabel('Nombre *').fill('Ana')
  await page.getByLabel('Localidad *').fill('General Pico')
  await page.getByLabel('Teléfono de contacto *').fill('+54 2302 000000')
  await page.getByLabel('Descripción *').fill('Necesito verificar compatibilidad.')
  await acceptConsent(page)

  await page.getByRole('button', { name: 'Abrir mensaje en WhatsApp' }).click()
  const openedUrl = await page.evaluate(
    () => (window as unknown as { __openedUrls: string[] }).__openedUrls[0],
  )
  expect(openedUrl).toMatch(/^https:\/\/wa\.me\/5492302672827\?text=/)
  expect(decodeURIComponent(openedUrl)).toContain('Ana')
  expect(decodeURIComponent(openedUrl)).toContain('Palfinger')

  await expect(page.locator('#quote-preview')).toHaveValue(/Ana/)
  await expect(page.locator('#quote-preview')).toHaveValue(/Palfinger/)
  await expect(page.locator('#quote-status')).toContainText('Se abrió WhatsApp')
})

test('contact form sends one structured request to Formspree', async ({ page }) => {
  let requestCount = 0
  let requestBody = ''
  let requestAccept = ''
  let releaseResponse!: () => void
  const responseGate = new Promise<void>((resolve) => {
    releaseResponse = resolve
  })

  await page.route(formspreeEndpoint, async (route) => {
    requestCount += 1
    requestBody = route.request().postData() ?? ''
    requestAccept = route.request().headers().accept ?? ''
    await responseGate
    await route.fulfill({
      status: 200,
      contentType: 'application/json',
      headers: { 'access-control-allow-origin': '*' },
      body: JSON.stringify({ ok: true }),
    })
  })

  await page.goto('contacto')
  await completeQuoteForm(page)
  const submitButton = page.getByRole('button', { name: 'Enviar consulta por correo' })
  await submitButton.click()
  await page.locator('#quote-form').evaluate((form: HTMLFormElement) => form.requestSubmit())
  await expect.poll(() => requestCount).toBe(1)
  await expect(page.getByLabel('Nombre *')).toBeDisabled()
  releaseResponse()

  await expect(page.locator('#quote-status')).toContainText('Formspree recibió la consulta para procesarla')
  expect(requestCount).toBe(1)
  expect(requestAccept).toContain('application/json')
  const submittedFields = Array.from(requestBody.matchAll(/name="([^"]+)"/g), ([, name]) => name)
  expect(submittedFields).toEqual(['subject', 'name', 'email', 'message', '_gotcha'])
  expect(requestBody).toContain('[EAD] Mantenimiento o diagn')
  expect(requestBody).toContain('NUEVA CONSULTA DESDE LA WEB')
  expect(requestBody).toContain('CONTACTO')
  expect(requestBody).toContain('EQUIPO O PRODUCTO')
  expect(requestBody).toContain('Consentimiento: aceptado')
  expect(requestBody).not.toContain('name="contactMethod"')
  expect(requestBody).not.toContain('name="equipmentType"')
  await expect(page.getByLabel('Nombre *')).toHaveValue('')
  await expect(page.locator('#quote-preview-wrapper')).toBeHidden()
  await expect(submitButton).toBeEnabled()
})

for (const { responseStatus, expectedMessage } of [
  { responseStatus: 422, expectedMessage: 'no pudo procesar los datos' },
  { responseStatus: 429, expectedMessage: 'límite temporal de envíos' },
  { responseStatus: 503, expectedMessage: 'no está disponible en este momento' },
]) {
  test(`contact form preserves data after a ${responseStatus} response`, async ({ page }) => {
    await page.route(formspreeEndpoint, (route) =>
      route.fulfill({
        status: responseStatus,
        contentType: 'application/json',
        headers: { 'access-control-allow-origin': '*' },
        body: JSON.stringify({ ok: false }),
      }),
    )

    await page.goto('contacto')
    await completeQuoteForm(page)
    await page.getByRole('button', { name: 'Enviar consulta por correo' }).click()

    await expect(page.locator('#quote-status')).toContainText(expectedMessage)
    await expect(page.getByLabel('Nombre *')).toHaveValue('Ana')
    await expect(page.locator('#quote-preview-wrapper')).toBeVisible()
    await expect(page.getByRole('button', { name: 'Enviar consulta por correo' })).toBeEnabled()
  })
}

test('contact form reports a timeout and preserves the draft', async ({ page }) => {
  await page.route(formspreeEndpoint, async (route) => {
    await new Promise((resolve) => setTimeout(resolve, 150))
    if (!route.request().failure()) await route.abort('timedout')
  })

  await page.goto('contacto')
  await page.locator('#quote-form').evaluate((form) => {
    form.dataset.timeoutMs = '25'
  })
  await completeQuoteForm(page)
  await page.getByRole('button', { name: 'Enviar consulta por correo' }).click()

  await expect(page.locator('#quote-status')).toContainText('El envío tardó demasiado')
  await expect(page.getByLabel('Nombre *')).toHaveValue('Ana')
  await expect(page.getByRole('button', { name: 'Enviar consulta por correo' })).toBeEnabled()
})

test('contact form reports a network failure and preserves the draft', async ({ page }) => {
  await page.route(formspreeEndpoint, (route) => route.abort('failed'))

  await page.goto('contacto')
  await completeQuoteForm(page)
  await page.getByRole('button', { name: 'Enviar consulta por correo' }).click()

  await expect(page.locator('#quote-status')).toContainText('No se pudo conectar con el servicio de correo')
  await expect(page.getByLabel('Nombre *')).toHaveValue('Ana')
  await expect(page.getByRole('button', { name: 'Enviar consulta por correo' })).toBeEnabled()
})

test('contact form reports when WhatsApp is blocked', async ({ page }) => {
  await page.goto('contacto')
  await completeQuoteForm(page, 'WhatsApp')
  await page.evaluate(() => {
    window.open = () => null
  })

  await page.getByRole('button', { name: 'Abrir mensaje en WhatsApp' }).click()
  await expect(page.locator('#quote-status')).toContainText('bloqueó la apertura de WhatsApp')
  await expect(page.locator('#quote-preview-wrapper')).toBeVisible()
})

test('native validation blocks invalid data and permits a complete submission without JavaScript', async ({ browser }, testInfo) => {
  test.skip(testInfo.project.name !== 'desktop-chromium', 'One browser is enough for the no-JavaScript fallback')
  const context = await browser.newContext({ javaScriptEnabled: false, baseURL, reducedMotion: 'reduce' })
  const page = await context.newPage()
  let requestCount = 0
  let requestBody = ''
  await page.route(formspreeEndpoint, async (route) => {
    requestCount += 1
    requestBody = route.request().postData() ?? ''
    await route.fulfill({ status: 200, body: 'ok' })
  })

  await page.goto('contacto')
  await expect(page.locator('#send-whatsapp')).toBeHidden()
  await expect(page.getByRole('link', { name: /canal directo/ })).toBeVisible()
  await page.getByRole('button', { name: 'Enviar consulta por correo' }).click()

  await expect(page.getByLabel('Nombre *')).toBeFocused()
  expect(requestCount).toBe(0)

  await page.getByLabel('Nombre *').fill('Ana')
  await page.getByLabel('Localidad *').fill('General Pico')
  await page.getByLabel('Teléfono o correo de contacto *').fill('......')
  await page.getByLabel('Equipo o producto *').fill('Hidroelevador')
  await page.getByLabel('Necesidad principal *').selectOption('Mantenimiento o diagnóstico')
  await page.getByLabel('Descripción *').fill('Necesito verificar el equipo.')
  await acceptConsent(page)
  await page.getByRole('button', { name: 'Enviar consulta por correo' }).click()

  await expect(page.getByLabel('Teléfono o correo de contacto *')).toBeFocused()
  expect(requestCount).toBe(0)

  await page.getByLabel('Correo', { exact: true }).check()
  await page.getByLabel('Teléfono o correo de contacto *').fill('ana@example.com')
  await page.getByRole('button', { name: 'Enviar consulta por correo' }).click()

  expect(requestCount).toBe(1)
  expect(new URLSearchParams(requestBody).get('contactDetail')).toBe('ana@example.com')
  await context.close()
})

test('contact channels and external location are explicit', async ({ page }) => {
  await page.goto('contacto')
  const contactChannels = page.locator('section[aria-labelledby="contact-channels-heading"]')

  await expect(contactChannels.getByRole('link', { name: 'Llamar a Agustín Deux al +54 9 2302 672827' })).toHaveAttribute('href', 'tel:+5492302672827')
  await expect(contactChannels.getByRole('link', { name: 'Abrir WhatsApp de Agustín Deux al +54 9 2302 672827' })).toHaveAttribute('href', /wa\.me\/5492302672827/)
  await expect(contactChannels.getByRole('link', { name: 'Llamar a Enzo Deux al +54 9 2302 592703' })).toHaveAttribute('href', 'tel:+5492302592703')
  await expect(contactChannels.getByRole('link', { name: 'Abrir WhatsApp de Enzo Deux al +54 9 2302 592703' })).toHaveAttribute('href', /wa\.me\/5492302592703/)
  await expect(page.getByRole('link', { name: 'Abrir ubicación' })).toHaveAttribute('href', /google\.com\/maps/)
  await expect(contactChannels.getByRole('link', { name: 'Abrir Instagram de EAD Oleohidráulica', exact: true })).toHaveAttribute('href', 'https://instagram.com/oleohidraulica_ead')
  const footerInstagram = page.locator('footer').getByRole('link', { name: 'Abrir Instagram de EAD Oleohidráulica: @oleohidraulica_ead' })
  await expect(footerInstagram).toHaveAttribute('href', 'https://instagram.com/oleohidraulica_ead')
  await expect(footerInstagram).toContainText('@oleohidraulica_ead')
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
      if (control.hidden || control.type === 'hidden' || control.getAttribute('aria-hidden') === 'true') continue
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
