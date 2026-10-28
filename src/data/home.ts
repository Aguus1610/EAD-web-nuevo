import { siteConfig } from './site'
import { services as serviceEntries } from './services'

export interface HomeContent {
  hero: {
    title: string
    owner: string
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
    title: 'EAD Oleohidráulica',
    owner: 'Enzo A. Deux',
    subtitle:
      `Diagnóstico, reparación, instalación y mantenimiento de sistemas hidráulicos. ${siteConfig.commercialRelationshipText}`,
    ctaPrimary: { label: 'Solicitar presupuesto', href: '/contacto' },
    ctaSecondary: { label: 'Ver servicios', href: '/servicios' },
  },
  trust: {
    text: `Más de ${siteConfig.yearsExperience} años en el rubro oleohidráulico, con atención en taller y a campo en ${siteConfig.areaServed}.`,
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
    heading: 'Servicio técnico oficial',
    note: 'Consultá disponibilidad y compatibilidad de repuestos; te lo confirmamos en cada consulta.',
  },
  projects: {
    heading: 'Trabajos realizados',
    emptyMessage:
      'Estamos preparando el portfolio con trabajos reales autorizados. Mientras tanto, mirá nuestros servicios o escribinos directamente.',
  },
  location: {
    heading: 'Colonia Barón, La Pampa',
    text: `Atendemos consultas de ${siteConfig.areaServed}, en taller y a campo. Cada trabajo se coordina según el equipo y la necesidad planteada.`,
  },
  finalCta: {
    heading: '¿Necesitás una solución hidráulica?',
    text: 'Escribinos por WhatsApp, llamanos o mandanos un correo: te asesoramos y te pasamos un presupuesto sin compromiso.',
    cta: { label: 'Escribinos por WhatsApp', href: '/contacto' },
  },
}
