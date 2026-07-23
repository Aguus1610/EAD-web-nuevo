export interface ProductCategory {
  id: string
  title: string
  summary: string
  examples: string[]
}

export const productCategories: ProductCategory[] = [
  {
    id: 'repuestos-hidro-grubert',
    title: 'Repuestos Hidro-Grubert',
    summary: 'Repuestos originales Hidro-Grubert. Compatibilidad y disponibilidad bajo consulta.',
    examples: [],
  },
  {
    id: 'repuestos-palfinger',
    title: 'Repuestos Palfinger',
    summary: 'Repuestos originales Palfinger. Compatibilidad y disponibilidad bajo consulta.',
    examples: [],
  },
  {
    id: 'componentes-hidraulicos',
    title: 'Componentes hidráulicos',
    summary: 'Componentes para mantenimiento, reparación e integración de sistemas oleohidráulicos en general.',
    examples: [],
  },
  {
    id: 'implementos',
    title: 'Implementos',
    summary: 'Implementos hidráulicos y accesorios para equipos de transporte, construcción y agroindustria, disponibles bajo consulta.',
    examples: [],
  },
]
