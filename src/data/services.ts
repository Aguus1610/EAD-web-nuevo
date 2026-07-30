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
      'Diagnóstico y reparación de sistemas y equipos oleohidráulicos según la necesidad de cada caso.',
    description: [
      'Evaluamos el equipo para identificar la falla y definir el alcance de la intervención.',
      'El trabajo y los componentes necesarios se confirman mediante un presupuesto previo.',
    ],
    scope: [
      'Diagnóstico de fallas oleohidráulicas',
      'Reparación de equipos y componentes',
      'Reacondicionamiento sujeto a evaluación',
    ],
    cta: { label: 'Consultar reparación', href: '/contacto?tipo=Reparación' },
  },
  {
    slug: 'instalaciones',
    icon: 'installation',
    title: 'Instalaciones',
    summary:
      'Instalación e integración de equipos oleohidráulicos sobre vehículos, sujetas a evaluación técnica.',
    description: [
      'Evaluamos el equipo y el vehículo antes de definir el alcance de cada instalación o integración.',
      'La compatibilidad y los trabajos necesarios se confirman en el presupuesto.',
    ],
    scope: [
      'Instalaciones de equipos oleohidráulicos',
      'Integraciones vehiculares',
      'Adecuaciones sujetas a evaluación',
    ],
    cta: { label: 'Consultar instalación', href: '/contacto?tipo=Instalación' },
  },
  {
    slug: 'mantenimiento',
    icon: 'maintenance',
    title: 'Mantenimiento y diagnóstico',
    summary:
      'Diagnóstico y mantenimiento preventivo o correctivo de sistemas oleohidráulicos.',
    description: [
      'Revisamos el funcionamiento del sistema y definimos las tareas de mantenimiento necesarias.',
      'La frecuencia y el alcance dependen del equipo, su uso y su estado.',
    ],
    scope: [
      'Diagnóstico de funcionamiento',
      'Mantenimiento preventivo',
      'Mantenimiento correctivo',
    ],
    cta: { label: 'Solicitar diagnóstico', href: '/contacto?tipo=Mantenimiento%20o%20diagnóstico' },
  },
  {
    slug: 'repuestos',
    icon: 'parts',
    title: 'Repuestos e implementos',
    summary:
      'Provisión de repuestos originales Hidro-Grubert y Palfinger, componentes hidráulicos e implementos bajo consulta.',
    description: [
      'Gestionamos consultas de repuestos originales Hidro-Grubert y Palfinger, componentes e implementos hidráulicos.',
      'Para identificar la necesidad solicitamos marca, modelo y, cuando esté disponible, el número de pieza.',
      'La compatibilidad y los plazos de entrega se confirman en cada caso, ya que dependen del modelo, la marca y la disponibilidad del fabricante.',
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
