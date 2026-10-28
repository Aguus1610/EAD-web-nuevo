import { siteConfig } from './site'

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
    description: string
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
      `Somos un taller especializado en sistemas oleohidráulicos con base en ${siteConfig.locality}, ${siteConfig.province}. Con más de ${siteConfig.yearsExperience} años en el rubro, diagnosticamos, reparamos, instalamos y mantenemos la hidráulica de equipos de transporte, construcción, agroindustria y flotas de ${siteConfig.areaServed}.`,
      'Trabajamos grúas articuladas Hidro-Grubert y Palfinger, hidroelevadores, equipos de batea y volcadores, bombas, cilindros, válvulas, comandos y tomas de fuerza. Atendemos en el taller y a campo, según el equipo y la necesidad.',
      'El taller tiene espacio para camiones y grúas montadas, bancos de trabajo y sector de armado, prensado de mangueras de alta presión y diagnóstico con software oficial. Cada trabajo se hace con componentes adecuados y queda definido en el presupuesto antes de empezar.',
      siteConfig.commercialRelationshipText,
      'Cada intervención se presupuesta por escrito y se respalda con garantía sobre el trabajo realizado. Nuestro compromiso es devolver el equipo funcionando, explicar lo que se hizo y seguir cerca para lo que venga.',
    ],
  },
  experience: {
    heading: 'Trayectoria y capacidades',
    years: siteConfig.yearsExperience,
    yearsLabel: 'años de experiencia en el rubro',
    highlights: [
      siteConfig.commercialRelationshipText,
      'Grúas articuladas, hidroelevadores, bateas y volcadores, bombas, cilindros y válvulas',
      `Atención en taller y a campo en ${siteConfig.areaServed}`,
      'Diagnóstico con software oficial y prensado de mangueras de alta presión',
      'Espacio para camiones y grúas montadas, con bancos de trabajo y sector de armado',
      'Presupuesto por escrito y garantía sobre el trabajo realizado',
    ],
  },
  process: {
    heading: 'Cómo trabajamos',
    steps: [
      {
        title: 'Recepción y consulta',
        description:
          'Contanos por teléfono, WhatsApp o correo qué le pasa al equipo. Te pedimos los datos básicos del equipo y de la necesidad para arrancar bien orientados.',
      },
      {
        title: 'Diagnóstico y presupuesto',
        description:
          'Revisamos el equipo, identificamos la falla o definimos el alcance y te pasamos un presupuesto claro antes de tocar nada. Nada se hace sin tu aprobación.',
      },
      {
        title: 'Ejecución del trabajo',
        description:
          'Trabajamos en el taller o a campo, según el caso, con componentes adecuados y control de cada etapa. Si aparece algo nuevo, te avisamos antes de sumarlo.',
      },
      {
        title: 'Entrega y seguimiento',
        description:
          'Te devolvemos el equipo funcionando, te explicamos qué se hizo y qué conviene vigilar, y quedamos a disposición para lo que necesites después.',
      },
    ],
  },
  gallery: {
    heading: 'Nuestro taller',
    description:
      'Fotos reales de nuestro día a día: grúas, hidroelevadores, componentes, trabajos en el taller y salidas a campo. El registro se renueva a medida que incorporamos nuevas imágenes.',
    emptyMessage:
      'Estamos preparando el registro fotográfico del taller. Las imágenes se publicarán una vez autorizadas.',
  },
  location: {
    heading: 'Dónde estamos',
    paragraphs: [
      `Estamos en ${siteConfig.address}, ${siteConfig.locality}, ${siteConfig.province}. Atendemos de lunes a viernes de 8:00 a 12:00 y de 15:00 a 19:00.`,
      `Recibimos equipos de ${siteConfig.areaServed} y coordinamos trabajos a campo cuando el equipo no puede llegar al taller. Escribinos por WhatsApp o llamanos y coordinamos el ingreso y los tiempos.`,
    ],
  },
  finalCta: {
    heading: '¿Querés saber más?',
    text: 'Mirá los trabajos que publicamos o escribinos los datos de tu equipo: te respondemos y te pasamos un presupuesto sin compromiso.',
    cta: { label: 'Solicitar presupuesto', href: '/contacto' },
    secondaryCta: { label: 'Ver trabajos', href: '/trabajos' },
  },
}
