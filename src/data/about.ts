export interface AboutContent {
  intro: {
    title: string
    paragraphs: string[]
  }
  experience: {
    heading: string
    years: number | null
    yearsLabel: string | null
    highlights: string[]
  }
  process: {
    heading: string
    steps: { title: string; description: string }[]
  }
  gallery: {
    heading: string
    emptyMessage: string
  }
  location: {
    heading: string
    paragraphs: string[]
  }
  finalCta: {
    heading: string
    text: string
    cta: { label: string; href: string }
    secondaryCta: { label: string; href: string }
  }
}

export const aboutContent: AboutContent = {
  intro: {
    title: 'EAD Oleohidráulica',
    paragraphs: [
      'EAD Oleohidráulica es un taller especializado con sede en Colonia Barón, La Pampa, dedicado a la reparación, instalación y mantenimiento de sistemas oleohidráulicos para equipos de transporte, construcción, agroindustria y flotas.',
      'Realizamos reparaciones, instalaciones, integraciones vehiculares y mantenimiento de sistemas oleohidráulicos.',
      siteConfig.commercialRelationshipText,
    ],
  },
  experience: {
    heading: 'Trayectoria y capacidades',
    years: siteConfig.yearsExperience,
    yearsLabel: 'años de experiencia en el rubro',
    highlights: [
      'Reparación, instalación y mantenimiento de sistemas oleohidráulicos',
      siteConfig.commercialRelationshipText,
      `Atención de consultas en ${siteConfig.areaServed}`,
      'Provisión de repuestos e implementos bajo consulta',
    ],
  },
  process: {
    heading: 'Cómo trabajamos',
    steps: [
      {
        title: 'Recepción y consulta',
        description:
          'Recibimos la consulta por teléfono, WhatsApp o correo y solicitamos los datos necesarios para comprender la necesidad.',
      },
      {
        title: 'Diagnóstico y presupuesto',
        description:
          'Evaluamos el equipo y presentamos el alcance y presupuesto antes de iniciar el trabajo.',
      },
      {
        title: 'Ejecución del trabajo',
        description:
          'Con el presupuesto aprobado, realizamos la reparación, instalación o mantenimiento acordado.',
      },
      {
        title: 'Entrega y seguimiento',
        description:
          'Al finalizar, comunicamos el trabajo realizado y las indicaciones aplicables al equipo.',
      },
    ],
  },
  gallery: {
    heading: 'Nuestro taller',
    emptyMessage:
      'Estamos preparando el registro fotográfico del taller. Las imágenes se publicarán una vez autorizadas.',
  },
  location: {
    heading: 'Dónde estamos',
    paragraphs: [
      `Estamos en ${siteConfig.address}, ${siteConfig.locality}, ${siteConfig.province}. Atendemos consultas de ${siteConfig.areaServed}.`,
    ],
  },
  finalCta: {
    heading: '¿Quiere saber más?',
    text: 'Conozca nuestros trabajos publicados o envíenos los datos de su equipo para evaluar la consulta.',
    cta: { label: 'Solicitar presupuesto', href: '/contacto' },
    secondaryCta: { label: 'Ver trabajos', href: '/trabajos' },
  },
}
import { siteConfig } from './site'
