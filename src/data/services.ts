export type ServiceIconVariant = 'repair' | 'installation' | 'maintenance' | 'parts'
export const serviceSlugs = ['reparacion-integral', 'instalaciones', 'mantenimiento', 'repuestos'] as const
export type ServiceSlug = typeof serviceSlugs[number]

export interface ServiceEntry {
  slug: ServiceSlug
  icon: ServiceIconVariant
  title: string
  summary: string
  description: string[]
  scope: string[]
  cta: { label: string; href: string }
}

export const services: ServiceEntry[] = [
  {
    slug: 'reparacion-integral',
    icon: 'repair',
    title: 'Reparación integral',
    summary:
      'Diagnóstico y reparación de sistemas oleohidráulicos: grúas articuladas, hidroelevadores, bombas, cilindros y válvulas.',
    description: [
      'Revisamos el equipo en el taller o a campo para identificar la falla y entender qué está pasando. Usamos diagnóstico con software oficial cuando el equipo lo permite.',
      'Definimos el alcance, los componentes necesarios y el plazo, y te pasamos un presupuesto por escrito antes de empezar. Si durante el trabajo aparece algo nuevo, te avisamos antes de sumarlo.',
    ],
    scope: [
      'Diagnóstico de fallas oleohidráulicas',
      'Reparación de grúas articuladas e hidroelevadores',
      'Reparación de bombas, cilindros y válvulas',
      'Reacondicionamiento de componentes sujeto a evaluación',
    ],
    cta: { label: 'Consultar reparación', href: '/contacto?tipo=Reparación' },
  },
  {
    slug: 'instalaciones',
    icon: 'installation',
    title: 'Instalaciones',
    summary:
      'Instalación e integración de grúas articuladas, hidroelevadores, bateas y accesorios hidráulicos sobre camiones y equipos.',
    description: [
      'Evaluamos el equipo y el vehículo para definir el montaje, la integración hidráulica y la toma de fuerza, siempre que la compatibilidad lo permita.',
      'Cada instalación se presupuesta por escrito con el alcance, los componentes y los tiempos. La compatibilidad se confirma antes de comprometer el trabajo.',
    ],
    scope: [
      'Instalación de grúas articuladas',
      'Montaje de hidroelevadores y accesorios',
      'Integración de tomas de fuerza y comandos',
      'Adecuaciones sujetas a evaluación técnica',
    ],
    cta: { label: 'Consultar instalación', href: '/contacto?tipo=Instalación' },
  },
  {
    slug: 'mantenimiento',
    icon: 'maintenance',
    title: 'Mantenimiento y diagnóstico',
    summary:
      'Mantenimiento preventivo y correctivo de sistemas oleohidráulicos para evitar paradas y alargar la vida del equipo.',
    description: [
      'Revisamos el funcionamiento del sistema, controlamos mangueras, conexiones, niveles y comandos, y definimos qué mantenimiento conviene hacer.',
      'La frecuencia y el alcance dependen del equipo, su uso y su estado: te armamos un plan simple para que el mantenimiento sea previsible y no una urgencia.',
    ],
    scope: [
      'Diagnóstico de funcionamiento',
      'Mantenimiento preventivo programado',
      'Control y reemplazo de mangueras de alta presión',
      'Mantenimiento correctivo',
    ],
    cta: { label: 'Solicitar diagnóstico', href: '/contacto?tipo=Mantenimiento%20o%20diagnóstico' },
  },
  {
    slug: 'repuestos',
    icon: 'parts',
    title: 'Repuestos e implementos',
    summary:
      'Repuestos originales Hidro-Grubert y Palfinger, componentes hidráulicos e implementos, con compatibilidad confirmada en cada consulta.',
    description: [
      'Gestionamos consultas de repuestos originales Hidro-Grubert y Palfinger, componentes e implementos hidráulicos para equipos de transporte, construcción y agro.',
      'Para identificar la pieza pedimos marca, modelo y, cuando lo tengas, el número de pieza. Si tenés fotos, ayudan un montón.',
      'La compatibilidad y los plazos de entrega se confirman en cada caso, porque dependen del modelo, la marca y la disponibilidad del fabricante.',
    ],
    scope: [
      'Repuestos originales Hidro-Grubert',
      'Repuestos originales Palfinger',
      'Componentes hidráulicos bajo consulta',
      'Implementos hidráulicos bajo consulta',
    ],
    cta: { label: 'Consultar repuestos', href: '/contacto?tipo=Repuesto%20o%20componente' },
  },
]

export function getServiceBySlug(slug: string): ServiceEntry | undefined {
  return services.find((s) => s.slug === slug)
}
