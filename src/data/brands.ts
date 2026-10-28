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
    description: 'Grúas articuladas e hidroelevadores Hidro-Grubert. Gestionamos repuestos originales y consultas sobre equipos de la marca.',
    website: 'https://www.palfinger.com',
    instagram: 'https://www.instagram.com/hidrogrubert/',
  },
  {
    id: 'palfinger',
    name: 'Palfinger',
    description: 'Grúas articuladas y equipos de elevación Palfinger. Gestionamos repuestos originales y consultas sobre equipos de la marca.',
    website: 'https://www.palfinger.com',
    instagram: 'https://instagram.com/palfingerag',
  },
]
