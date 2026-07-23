export interface Brand {
  id: 'hidro-grubert' | 'palfinger'
  name: string
  description: string
}

export const brands: Brand[] = [
  {
    id: 'hidro-grubert',
    name: 'Hidro-Grubert',
    description: 'Repuestos originales y consultas sobre equipos Hidro-Grubert.',
  },
  {
    id: 'palfinger',
    name: 'Palfinger',
    description: 'Repuestos originales y consultas sobre equipos Palfinger.',
  },
]
