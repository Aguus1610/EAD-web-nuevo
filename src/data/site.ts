export interface ContactPerson {
  name: string
  phone: string
  whatsapp: string
}

export interface EmailJsConfig {
  serviceId: string
  templateId: string
  publicKey: string
}

export interface SiteConfig {
  name: string
  description: string
  address: string
  locality: string
  province: string
  country: string
  contacts: readonly [ContactPerson, ...ContactPerson[]]
  email: string
  adminEmail: string
  emailJs: EmailJsConfig
  hours: string
  openingHoursSchema: string
  instagram: string
  instagramHandle: string
  yearsExperience: number
  areaServed: string
  mapUrl: string
  latitude: number
  longitude: number
  siteUrl: string
  commercialRelationshipText: string
}

export const siteConfig: SiteConfig = {
  name: 'EAD Oleohidráulica',
  description:
    'Taller especializado en sistemas oleohidráulicos en Colonia Barón, La Pampa: diagnóstico, reparación, instalación y mantenimiento de grúas articuladas, hidroelevadores y componentes hidráulicos. Servicio técnico oficial de Hidro-Grubert y Palfinger.',
  address: 'España 246',
  locality: 'Colonia Barón',
  province: 'La Pampa',
  country: 'Argentina',
  contacts: [
    {
      name: 'Agustín Deux',
      phone: '+54 9 2302 672827',
      whatsapp: '5492302672827',
    },
    {
      name: 'Enzo Deux',
      phone: '+54 9 2302 592703',
      whatsapp: '5492302592703',
    },
  ],
  /** Correo público que se muestra en el sitio. */
  email: 'hydropampa@hotmail.com',
  /** Destino interno de las consultas del formulario; se fija en la plantilla de EmailJS. */
  adminEmail: 'adm201364@gmail.com',
  emailJs: {
    serviceId: 'service_oh4erk7',
    templateId: 'template_ddtz01q',
    publicKey: 'SHCCKv__9-9XVNQDv',
  },
  hours: 'Lun–Vie 8:00–12:00 y 15:00–19:00',
  openingHoursSchema: 'Mo-Fr 08:00-12:00,15:00-19:00',
  instagram: 'https://instagram.com/oleohidraulica_ead',
  instagramHandle: '@oleohidraulica_ead',
  yearsExperience: 25,
  areaServed: 'La Pampa y la región',
  mapUrl: 'https://www.google.com/maps/place/EAD+Oleohidraulica/@-36.1515067,-63.8518741,20.56z/data=!4m22!1m15!4m14!1m6!1m2!1s0x95c311d5bf08af8f:0x18bb540d73606fe4!2sEAD+Oleohidraulica,+Espa%C3%B1a+246,+L6315+Col.+Baron,+La+Pampa!2m2!1d-63.8516893!2d-36.1515528!1m6!1m2!1s0x95c311d5bf08af8f:0x18bb540d73606fe4!2sEAD+Oleohidraulica,+Espa%C3%B1a+246,+L6315+Col.+Baron,+La+Pampa!2m2!1d-63.8516893!2d-36.1515528!3m5!1s0x95c311d5bf08af8f:0x18bb540d73606fe4!8m2!3d-36.1515528!4d-63.8516893!16s%2Fg%2F11spf1cm0g?entry=ttu&g_ep=EgoyMDI2MDcyMC4wIKXMDSoASAFQAw%3D%3D',
  latitude: -36.1515528,
  longitude: -63.8516893,
  siteUrl: 'https://aguus1610.github.io/EAD-web-nuevo',
  commercialRelationshipText: 'Servicio técnico oficial de Hidro-Grubert y Palfinger.',
}

export const primaryContact = siteConfig.contacts[0]
