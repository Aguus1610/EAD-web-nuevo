import { describe, it, expect } from 'vitest'
import { whatsappUrl, telUrl, generateQuoteMessage, validateQuoteRequest } from './contact'

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
  })

  it('includes optional fields when provided', () => {
    const msg = generateQuoteMessage({
      name: 'María',
      locality: 'Santa Rosa',
      contactMethod: 'Teléfono',
      contactDetail: '+54 2954 000000',
      equipmentType: 'Sistema oleohidráulico',
      need: 'Repuesto',
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
    const errors = validateQuoteRequest({
      name: 'Ana',
      locality: 'General Pico',
      contactMethod: 'Correo',
      contactDetail: 'ana@example.com',
      equipmentType: 'Hidroelevador',
      need: 'Mantenimiento',
      description: 'Consulta preventiva',
      consent: true,
    })

    expect(errors).toEqual({})
  })
})
