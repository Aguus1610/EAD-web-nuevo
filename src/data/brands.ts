export interface Brand {
  id: 'hidro-grubert' | 'palfinger'
  name: string
  description: string
  website: string
  instagram: string
}

export const brands: Brand[] = [
  {
    id: 'hidro-grubert',
    name: 'Hidro-Grubert',
    description: 'Repuestos originales y consultas sobre equipos Hidro-Grubert.',
    website: 'https://www.palfinger.com',
    instagram: 'https://www.instagram.com/hidrogrubert/',
  },
  {
    id: 'palfinger',
    name: 'Palfinger',
    description: 'Repuestos originales y consultas sobre equipos Palfinger.',
    website: 'https://www.palfinger.com',
    instagram: 'https://instagram.com/palfingerag',
  },
]
