import { primaryContact, siteConfig } from '../data/site'

export const contactMethods = ['WhatsApp', 'Teléfono', 'Correo'] as const
export const quoteNeeds = [
  'Reparación',
  'Instalación',
  'Mantenimiento o diagnóstico',
  'Repuesto o componente',
  'Otra consulta',
] as const

export type ContactMethod = (typeof contactMethods)[number]
export type QuoteNeed = (typeof quoteNeeds)[number]

export const quoteFieldLimits = {
  name: 80,
  locality: 100,
  contactDetail: 160,
  equipmentType: 160,
  description: 2000,
  company: 120,
  brand: 120,
  model: 120,
  partNumber: 120,
} as const

export interface QuoteRequest {
  name: string
  locality: string
  contactMethod: ContactMethod | ''
  contactDetail: string
  equipmentType: string
  need: QuoteNeed | ''
  description: string
  company?: string
  brand?: string
  model?: string
  partNumber?: string
  urgency?: string
  consent: boolean
}

export type QuoteRequestErrors = Partial<Record<keyof QuoteRequest, string>>

export interface FormspreeSubmission {
  subject: string
  name: string
  email?: string
  message: string
}

export function parseContactMethod(value: string): ContactMethod | '' {
  return contactMethods.includes(value as ContactMethod) ? (value as ContactMethod) : ''
}

export function parseQuoteNeed(value: string): QuoteNeed | '' {
  return quoteNeeds.includes(value as QuoteNeed) ? (value as QuoteNeed) : ''
}

export function validateQuoteRequest(request: QuoteRequest): QuoteRequestErrors {
  const errors: QuoteRequestErrors = {}
  const name = request.name.trim()
  const locality = request.locality.trim()
  const contactDetail = request.contactDetail.trim()
  const contactDigits = contactDetail.replace(/\D/g, '')
  const equipmentType = request.equipmentType.trim()
  const description = request.description.trim()

  if (!name) errors.name = 'Ingrese su nombre.'
  else if (name.length > quoteFieldLimits.name) errors.name = `El nombre no puede superar ${quoteFieldLimits.name} caracteres.`

  if (!locality) errors.locality = 'Ingrese su localidad.'
  else if (locality.length > quoteFieldLimits.locality) errors.locality = `La localidad no puede superar ${quoteFieldLimits.locality} caracteres.`

  if (!request.contactMethod) errors.contactMethod = 'Seleccione un medio de contacto.'

  if (!contactDetail) {
    errors.contactDetail = 'Ingrese un teléfono o correo de contacto.'
  } else if (contactDetail.length > quoteFieldLimits.contactDetail) {
    errors.contactDetail = `El dato de contacto no puede superar ${quoteFieldLimits.contactDetail} caracteres.`
  } else if (request.contactMethod === 'Correo' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contactDetail)) {
    errors.contactDetail = 'Ingrese un correo electrónico válido.'
  } else if (
    (request.contactMethod === 'WhatsApp' || request.contactMethod === 'Teléfono')
    && (
      !/^\+?[\d\s().-]+$/.test(contactDetail)
      || contactDigits.length < 6
      || contactDigits.length > 15
    )
  ) {
    errors.contactDetail = 'Ingrese un número de teléfono válido.'
  }

  if (!equipmentType) errors.equipmentType = 'Indique el tipo de equipo o producto.'
  else if (equipmentType.length > quoteFieldLimits.equipmentType) errors.equipmentType = `El equipo o producto no puede superar ${quoteFieldLimits.equipmentType} caracteres.`

  if (!request.need) errors.need = 'Seleccione la necesidad principal.'

  if (!description) errors.description = 'Describa brevemente la consulta.'
  else if (description.length > quoteFieldLimits.description) errors.description = `La descripción no puede superar ${quoteFieldLimits.description} caracteres.`

  if (request.company && request.company.trim().length > quoteFieldLimits.company) errors.company = `La empresa no puede superar ${quoteFieldLimits.company} caracteres.`
  if (request.brand && request.brand.trim().length > quoteFieldLimits.brand) errors.brand = `La marca no puede superar ${quoteFieldLimits.brand} caracteres.`
  if (request.model && request.model.trim().length > quoteFieldLimits.model) errors.model = `El modelo no puede superar ${quoteFieldLimits.model} caracteres.`
  if (request.partNumber && request.partNumber.trim().length > quoteFieldLimits.partNumber) errors.partNumber = `El número de pieza no puede superar ${quoteFieldLimits.partNumber} caracteres.`
  if (!request.consent) errors.consent = 'Debe aceptar el envío de la consulta con estos datos.'

  return errors
}

export function whatsappUrl(message: string, whatsappNumber = primaryContact.whatsapp): string {
  const text = encodeURIComponent(message.trim())
  return `https://wa.me/${whatsappNumber}?text=${text}`
}

export function telUrl(phone: string): string {
  const digits = phone.replace(/\D/g, '')
  return `tel:+${digits}`
}

export function mailUrl(subject: string, body?: string): string {
  const params = new URLSearchParams({ subject })
  if (body) params.set('body', body)
  return `mailto:${siteConfig.email}?${params.toString()}`
}

export function generateQuoteSubject(req: QuoteRequest): string {
  return `[EAD] ${req.need} · ${req.name.trim()} · ${req.locality.trim()}`
}

export function generateQuoteMessage(req: QuoteRequest): string {
  const lines: string[] = [
    siteConfig.name.toUpperCase(),
    'NUEVA CONSULTA DESDE LA WEB',
    '========================================',
    '',
    'CONTACTO',
    `Nombre: ${req.name.trim()}`,
    `Localidad: ${req.locality.trim()}`,
  ]

  if (req.company) lines.push(`Empresa: ${req.company.trim()}`)

  lines.push(
    `Medio preferido: ${req.contactMethod}`,
    `Dato para responder: ${req.contactDetail.trim()}`,
    '',
    'EQUIPO O PRODUCTO',
    `Tipo: ${req.equipmentType.trim()}`,
  )

  if (req.brand) lines.push(`Marca: ${req.brand.trim()}`)
  if (req.model) lines.push(`Modelo: ${req.model.trim()}`)
  if (req.partNumber) lines.push(`Número de pieza: ${req.partNumber.trim()}`)

  lines.push(
    ``,
    'CONSULTA',
    `Necesidad: ${req.need}`,
    `Urgencia: ${req.urgency?.trim() || 'Sin especificar'}`,
    '',
    'Descripción:',
    req.description.trim(),
    '',
    '----------------------------------------',
    'Estado: pendiente de evaluación por EAD Oleohidráulica.',
    'Consentimiento: aceptado para este envío.',
    `Esta consulta no constituye diagnóstico, aceptación del trabajo ni presupuesto definitivo.`,
    `Enviada desde el sitio web de ${siteConfig.name}.`,
  )

  return lines.join('\n')
}

export function createFormspreeSubmission(req: QuoteRequest): FormspreeSubmission {
  return {
    subject: generateQuoteSubject(req),
    name: req.name.trim(),
    ...(req.contactMethod === 'Correo' ? { email: req.contactDetail.trim() } : {}),
    message: generateQuoteMessage(req),
  }
}
