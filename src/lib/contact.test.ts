import { describe, expect, it } from 'vitest'
import { siteConfig } from '../data/site'
import {
  createFormspreeSubmission,
  generateQuoteMessage,
  generateQuoteSubject,
  mailUrl,
  parseContactMethod,
  parseQuoteNeed,
  quoteFieldLimits,
  telUrl,
  validateQuoteRequest,
  whatsappUrl,
  type QuoteRequest,
} from './contact'

const validRequest: QuoteRequest = {
  name: 'Ana',
  locality: 'General Pico',
  contactMethod: 'Correo',
  contactDetail: 'ana@example.com',
  equipmentType: 'Hidroelevador',
  need: 'Mantenimiento o diagnóstico',
  description: 'Consulta preventiva',
  consent: true,
}

describe('whatsappUrl', () => {
  it('generates correct URL with message', () => {
    const url = whatsappUrl('Hola, necesito un presupuesto')
    expect(url).toContain('wa.me/5492302672827')
    expect(url).toContain(encodeURIComponent('Hola, necesito un presupuesto'))
  })

  it('can target a secondary contact', () => {
    const url = whatsappUrl('Hola', '5492302592703')
    expect(url).toContain('wa.me/5492302592703')
  })
})

describe('telUrl', () => {
  it('generates tel URL from formatted phone', () => {
    expect(telUrl('+54 9 2302 672827')).toBe('tel:+5492302672827')
  })
})

describe('mailUrl', () => {
  it('generates a mailto URL for the public contact address', () => {
    const url = mailUrl('Consulta técnica', 'Necesito información')
    expect(url).toContain(`mailto:${siteConfig.email}`)
    expect(url).toContain('subject=Consulta+t%C3%A9cnica')
    expect(url).toContain('body=Necesito+informaci%C3%B3n')
  })
})

describe('generateQuoteMessage', () => {
  it('includes basic required fields', () => {
    const msg = generateQuoteMessage({
      name: 'Juan',
      locality: 'Colonia Barón',
      contactMethod: 'WhatsApp',
      contactDetail: '+54 2302 000000',
      equipmentType: 'Hidrogrúa',
      need: 'Reparación',
      description: 'No levanta carga',
      consent: true,
    })
    expect(msg).toContain('Juan')
    expect(msg).toContain('Colonia Barón')
    expect(msg).toContain('Hidrogrúa')
    expect(msg).toContain('Reparación')
    expect(msg).toContain('No levanta carga')
    expect(msg).toContain('WhatsApp')
    expect(msg).toContain('no constituye diagnóstico')
    expect(msg).toContain('Consentimiento: aceptado')
    expect(msg).toContain('Urgencia: Sin especificar')
    expect(msg.indexOf('\nCONTACTO\n')).toBeLessThan(msg.indexOf('\nEQUIPO O PRODUCTO\n'))
    expect(msg.indexOf('\nEQUIPO O PRODUCTO\n')).toBeLessThan(msg.indexOf('\nCONSULTA\n'))
  })

  it('includes optional fields when provided', () => {
    const msg = generateQuoteMessage({
      name: 'María',
      locality: 'Santa Rosa',
      contactMethod: 'Teléfono',
      contactDetail: '+54 2954 000000',
      equipmentType: 'Sistema oleohidráulico',
      need: 'Repuesto o componente',
      description: 'Necesito un cilindro',
      company: 'Taller Mecánico',
      brand: 'Hidro-Grubert',
      model: 'HG-2000',
      partNumber: 'ABC-123',
      urgency: 'Esta semana',
      consent: true,
    })
    expect(msg).toContain('Taller Mecánico')
    expect(msg).toContain('Hidro-Grubert')
    expect(msg).toContain('HG-2000')
    expect(msg).toContain('ABC-123')
    expect(msg).toContain('Esta semana')
  })
})

describe('Formspree submission', () => {
  it('builds a recognizable subject and structured message', () => {
    expect(generateQuoteSubject(validRequest)).toBe(
      '[EAD] Mantenimiento o diagnóstico · Ana · General Pico',
    )
    expect(createFormspreeSubmission(validRequest)).toEqual({
      subject: '[EAD] Mantenimiento o diagnóstico · Ana · General Pico',
      name: 'Ana',
      email: 'ana@example.com',
      message: generateQuoteMessage(validRequest),
    })
  })

  it('only sets Reply-To when the preferred channel is email', () => {
    const submission = createFormspreeSubmission({
      ...validRequest,
      contactMethod: 'WhatsApp',
      contactDetail: '+54 2302 000000',
    })

    expect(submission).not.toHaveProperty('email')
  })
})

describe('validateQuoteRequest', () => {
  it('reports required fields and consent', () => {
    const errors = validateQuoteRequest({
      name: '',
      locality: '',
      contactMethod: '',
      contactDetail: '',
      equipmentType: '',
      need: '',
      description: '',
      consent: false,
    })

    expect(Object.keys(errors)).toHaveLength(8)
    expect(errors.contactDetail).toBeDefined()
    expect(errors.consent).toBeDefined()
  })

  it('accepts a complete request', () => {
    expect(validateQuoteRequest(validRequest)).toEqual({})
  })

  it('validates the contact detail according to the selected channel', () => {
    expect(validateQuoteRequest({ ...validRequest, contactDetail: 'correo-invalido' }).contactDetail).toBe(
      'Ingrese un correo electrónico válido.',
    )
    expect(
      validateQuoteRequest({
        ...validRequest,
        contactMethod: 'WhatsApp',
        contactDetail: 'sin número',
      }).contactDetail,
    ).toBe('Ingrese un número de teléfono válido.')
    expect(
      validateQuoteRequest({
        ...validRequest,
        contactMethod: 'Teléfono',
        contactDetail: '......',
      }).contactDetail,
    ).toBe('Ingrese un número de teléfono válido.')
  })

  it('rejects unsupported options parsed from untrusted form data', () => {
    expect(parseContactMethod('SMS')).toBe('')
    expect(parseQuoteNeed('Compra inmediata')).toBe('')
    expect(
      validateQuoteRequest({
        ...validRequest,
        contactMethod: parseContactMethod('SMS'),
        need: parseQuoteNeed('Compra inmediata'),
      }),
    ).toMatchObject({ contactMethod: expect.any(String), need: expect.any(String) })
  })

  it('enforces field length limits', () => {
    const errors = validateQuoteRequest({
      ...validRequest,
      name: 'A'.repeat(quoteFieldLimits.name + 1),
      description: 'D'.repeat(quoteFieldLimits.description + 1),
    })

    expect(errors.name).toContain(`${quoteFieldLimits.name}`)
    expect(errors.description).toContain(`${quoteFieldLimits.description}`)
  })
})

describe('contact form configuration', () => {
  it('uses the approved public Formspree endpoint and fallback email', () => {
    expect(siteConfig.contactFormEndpoint).toBe('https://formspree.io/f/xqerjrnp')
    expect(siteConfig.adminEmail).toBe('adm201364@gmail.com')
  })
})
