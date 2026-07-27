import { siteConfig } from '../data/site'

export interface QuoteRequest {
  name: string
  locality: string
  contactMethod: string
  contactDetail: string
  equipmentType: string
  need: string
  description: string
  company?: string
  brand?: string
  model?: string
  partNumber?: string
  urgency?: string
  consent: boolean
}

export type QuoteRequestErrors = Partial<Record<keyof QuoteRequest, string>>

export function validateQuoteRequest(request: QuoteRequest): QuoteRequestErrors {
  const errors: QuoteRequestErrors = {}

  if (!request.name.trim()) errors.name = 'Ingrese su nombre.'
  if (!request.locality.trim()) errors.locality = 'Ingrese su localidad.'
  if (!request.contactMethod.trim()) errors.contactMethod = 'Seleccione un medio de contacto.'
  if (!request.contactDetail.trim()) errors.contactDetail = 'Ingrese un teléfono o correo de contacto.'
  if (!request.equipmentType.trim()) errors.equipmentType = 'Indique el tipo de equipo o producto.'
  if (!request.need.trim()) errors.need = 'Seleccione la necesidad principal.'
  if (!request.description.trim()) errors.description = 'Describa brevemente la consulta.'
  if (!request.consent) errors.consent = 'Debe aceptar el envío de la consulta con estos datos.'

  return errors
}

export function whatsappUrl(message: string): string {
  const text = encodeURIComponent(message.trim())
  return `https://wa.me/${siteConfig.whatsapp}?text=${text}`
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

export function adminMailUrl(body: string): string {
  const subject = `Consulta web — ${siteConfig.name}`
  const params = new URLSearchParams({ subject, body })
  return `mailto:${siteConfig.adminEmail}?${params.toString()}`
}

export function generateQuoteMessage(req: QuoteRequest): string {
  const lines: string[] = [
    `Hola, soy ${req.name} de ${req.locality}.`,
    ``,
    `Medio de contacto: ${req.contactMethod} (${req.contactDetail})`,
    `Tipo de equipo o producto: ${req.equipmentType}`,
    `Necesidad: ${req.need}`,
    `Descripción: ${req.description}`,
  ]

  if (req.company) lines.push(`Empresa: ${req.company}`)
  if (req.brand) lines.push(`Marca: ${req.brand}`)
  if (req.model) lines.push(`Modelo: ${req.model}`)
  if (req.partNumber) lines.push(`Número de pieza: ${req.partNumber}`)
  if (req.urgency) lines.push(`Urgencia: ${req.urgency}`)

  lines.push(``, `-- Generado desde el sitio web de ${siteConfig.name}`)

  return lines.join('\n')
}
