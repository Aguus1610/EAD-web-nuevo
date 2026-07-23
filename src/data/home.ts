import { siteConfig } from './site'
import { services as serviceEntries } from './services'

export interface HomeContent {
  hero: {
    title: string
    subtitle: string
    ctaPrimary: { label: string; href: string }
    ctaSecondary: { label: string; href: string }
  }
  trust: {
    text: string
  }
  services: {
    heading: string
    items: { title: string; summary: string; href: string; icon: 'repair' | 'installation' | 'maintenance' | 'parts' }[]
  }
  brands: {
    heading: string
    note: string
  }
  projects: {
    heading: string
    emptyMessage: string
  }
  location: {
    heading: string
    text: string
  }
  finalCta: {
    heading: string
    text: string
    cta: { label: string; href: string }
  }
}

export const homeContent: HomeContent = {
  hero: {
    title: 'Soluciones oleohidráulicas profesionales en La Pampa',
    subtitle:
      `Reparación, instalación y mantenimiento de sistemas hidráulicos. ${siteConfig.commercialRelationshipText}`,
    ctaPrimary: { label: 'Solicitar presupuesto', href: '/contacto' },
    ctaSecondary: { label: 'Ver servicios', href: '/servicios' },
  },
  trust: {
    text: `Más de ${siteConfig.yearsExperience} años de experiencia en el rubro oleohidráulico, con atención en ${siteConfig.areaServed}.`,
  },
  services: {
    heading: 'Servicios especializados',
    items: serviceEntries.map(({ title, summary, slug, icon }) => ({
      title,
      summary,
      href: `/servicios/${slug}`,
      icon,
    })),
  },
  brands: {
    heading: 'Representaciones oficiales',
    note: 'Disponibilidad y compatibilidad de repuestos se confirman bajo consulta.',
  },
  projects: {
    heading: 'Trabajos realizados',
    emptyMessage:
      'Estamos preparando el portfolio con imágenes de trabajos reales. Mientras tanto, conocé nuestros servicios o consultanos directamente.',
  },
  location: {
    heading: 'Colonia Barón, La Pampa',
    text: `Atendemos consultas de ${siteConfig.areaServed}. Cada trabajo se coordina según el equipo y la necesidad planteada.`,
  },
  finalCta: {
    heading: '¿Necesita una solución hidráulica?',
    text: 'Contáctenos por WhatsApp, teléfono o correo para recibir asesoramiento personalizado.',
    cta: { label: 'Escribirnos por WhatsApp', href: '/contacto' },
  },
}
