export type ProductCategoryId =
  | 'repuestos-hidro-grubert'
  | 'repuestos-palfinger'
  | 'componentes-hidraulicos'
  | 'implementos'

export type ProductIconVariant = 'hidro-grubert' | 'palfinger' | 'components' | 'implements'

export interface ProductCategory {
  id: ProductCategoryId
  icon: ProductIconVariant
  title: string
  summary: string
  examples: string[]
}

export const productCategories: ProductCategory[] = [
  {
    id: 'repuestos-hidro-grubert',
    icon: 'hidro-grubert',
    title: 'Repuestos Hidro-Grubert',
    summary: 'Repuestos originales Hidro-Grubert. Compatibilidad y disponibilidad bajo consulta.',
    examples: [],
  },
  {
    id: 'repuestos-palfinger',
    icon: 'palfinger',
    title: 'Repuestos Palfinger',
    summary: 'Repuestos originales Palfinger. Compatibilidad y disponibilidad bajo consulta.',
    examples: [],
  },
  {
    id: 'componentes-hidraulicos',
    icon: 'components',
    title: 'Componentes hidráulicos',
    summary: 'Componentes para mantenimiento, reparación e integración de sistemas oleohidráulicos en general.',
    examples: [],
  },
  {
    id: 'implementos',
    icon: 'implements',
    title: 'Implementos',
    summary: 'Implementos hidráulicos y accesorios para equipos de transporte, construcción y agroindustria, disponibles bajo consulta.',
    examples: [],
  },
]
