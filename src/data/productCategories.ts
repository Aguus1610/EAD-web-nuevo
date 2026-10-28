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
    summary: 'Repuestos originales Hidro-Grubert para grúas articuladas e hidroelevadores. Consultá compatibilidad y disponibilidad.',
    examples: ['Grúas articuladas', 'Hidroelevadores', 'Otros equipos de la línea Hidro-Grubert'],
  },
  {
    id: 'repuestos-palfinger',
    icon: 'palfinger',
    title: 'Repuestos Palfinger',
    summary: 'Repuestos originales Palfinger para grúas articuladas. Consultá compatibilidad y disponibilidad.',
    examples: ['Grúas articuladas Palfinger', 'Componentes de la línea', 'Otros equipos Palfinger'],
  },
  {
    id: 'componentes-hidraulicos',
    icon: 'components',
    title: 'Componentes hidráulicos',
    summary: 'Componentes para mantenimiento, reparación e integración: bombas, cilindros, válvulas, mangueras y acoples.',
    examples: ['Bombas y cilindros', 'Válvulas y mandos', 'Mangueras de alta presión', 'Acoples y conexiones'],
  },
  {
    id: 'implementos',
    icon: 'implements',
    title: 'Implementos',
    summary: 'Implementos hidráulicos y accesorios para equipos de transporte, construcción y agroindustria, bajo consulta.',
    examples: ['Bateas y volcadores', 'Tomas de fuerza', 'Accesorios hidráulicos'],
  },
]
