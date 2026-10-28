import type { Brand } from './brands'
import { media, type MediaImage } from './media'

export interface CraneLine {
  brand: Brand['id']
  title: string
  badge: string
  description: string
  image: MediaImage
  websiteUrl: string
  ctaLabel: string
  ctaHref: string
}

export interface CraneLineSection {
  heading: string
  intro: string
  items: readonly CraneLine[]
}

export const craneLineSection: CraneLineSection = {
  heading: 'Línea de productos y equipos',
  intro:
    'Trabajamos las líneas de grúas articuladas Hidro-Grubert y Palfinger: instalación, integración, diagnóstico, reparación, mantenimiento y repuestos originales. Modelos, disponibilidad y plazos se confirman bajo consulta.',
  items: [
    {
      brand: 'hidro-grubert',
      title: 'Grúas articuladas Hidro-Grubert',
      badge: 'Línea Hidro-Grubert',
      description:
        'Grúas articuladas e hidroelevadores Hidro-Grubert para montaje vehicular. Instalación, integración, diagnóstico y repuestos originales de la línea.',
      image: media.gruaHidroGrubertN15000,
      websiteUrl: 'https://www.palfinger.com/ar/es/nuestros-productos/gruas/gruas-articuladas.html',
      ctaLabel: 'Consultá por Hidro-Grubert',
      ctaHref: '/contacto?tipo=Repuesto%20o%20componente&marca=Hidro-Grubert',
    },
    {
      brand: 'palfinger',
      title: 'Grúas articuladas Palfinger',
      badge: 'Línea Palfinger',
      description:
        'Grúas articuladas Palfinger para transporte, construcción y agroindustria. Repuestos originales, diagnóstico y reparaciones de la línea, con software oficial.',
      image: media.gruaPalfingerPkk26000,
      websiteUrl: 'https://www.palfinger.com/ar/es/nuestros-productos/gruas/gruas-articuladas.html',
      ctaLabel: 'Consultá por Palfinger',
      ctaHref: '/contacto?tipo=Repuesto%20o%20componente&marca=Palfinger',
    },
  ],
}
