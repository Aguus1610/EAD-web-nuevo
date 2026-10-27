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
    'Las líneas de grúas articuladas que trabajamos son Hidro-Grubert y Palfinger. Modelos, disponibilidad y repuestos se confirman bajo consulta.',
  items: [
    {
      brand: 'hidro-grubert',
      title: 'Grúas articuladas Hidro-Grubert',
      badge: 'Línea Hidro-Grubert',
      description:
        'Grúas articuladas Hidro-Grubert para montaje vehicular. Repuestos originales y consultas sobre equipos de la línea.',
      image: media.gruaHidroGrubertN15000,
      websiteUrl: 'https://www.palfinger.com/ar/es/nuestros-productos/gruas/gruas-articuladas.html',
      ctaLabel: 'Consultar por Hidro-Grubert',
      ctaHref: '/contacto?tipo=Repuesto%20o%20componente&marca=Hidro-Grubert',
    },
    {
      brand: 'palfinger',
      title: 'Grúas articuladas Palfinger',
      badge: 'Línea Palfinger',
      description:
        'Grúas articuladas Palfinger para transporte, construcción y agroindustria. Repuestos originales y consultas bajo pedido.',
      image: media.gruaPalfingerPkk26000,
      websiteUrl: 'https://www.palfinger.com/ar/es/nuestros-productos/gruas/gruas-articuladas.html',
      ctaLabel: 'Consultar por Palfinger',
      ctaHref: '/contacto?tipo=Repuesto%20o%20componente&marca=Palfinger',
    },
  ],
}
