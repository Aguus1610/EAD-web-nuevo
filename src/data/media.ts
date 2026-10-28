import type { ProductCategoryId } from './productCategories'
import type { ServiceIconVariant } from './services'

export interface MediaImage {
  readonly id: string
  readonly src: string
  readonly alt: string
  readonly width: number
  readonly height: number
  readonly orientation: 'landscape' | 'portrait'
  readonly position?: string
}

export const media = {
  // ════════════════════════════════ TALLER ════════════════════════════════

  tallerExterior: {
    id: 'taller-exterior-atardecer',
    src: '/assets/workshop/taller-exterior-atardecer.webp',
    alt: 'Camión con grúa Palfinger en el acceso del taller EAD al atardecer, con otra grúa montada en el interior.',
    width: 1600, height: 900, orientation: 'landscape',
    position: '50% 45%',
  },
  tallerGruas: {
    id: 'taller-gruas-atardecer',
    src: '/assets/workshop/taller-gruas-atardecer.webp',
    alt: 'Grúa Palfinger en primer plano sobre la caja de un camión y el taller EAD con otra grúa adentro, al atardecer.',
    width: 1600, height: 900, orientation: 'landscape',
    position: '50% 45%',
  },
  tallerInteriorGeneral: {
    id: 'taller-interior-general',
    src: '/assets/workshop/taller-interior-general.webp',
    alt: 'Interior del taller EAD con la grúa Hidro-Grubert N-7000 montada sobre un camión, bancos de trabajo y entrepiso.',
    width: 1200, height: 540, orientation: 'landscape',
    position: '50% 50%',
  },
  tallerInteriorGrua: {
    id: 'taller-interior-grua',
    src: '/assets/workshop/taller-interior-grua.webp',
    alt: 'Brazo blanco Hidro-Grubert en primer plano dentro del taller, con el entrepiso y las herramientas al fondo.',
    width: 1200, height: 540, orientation: 'landscape',
    position: '50% 50%',
  },
  tallerGruaPalfingerAtardecer: {
    id: 'taller-grua-palfinger-atardecer',
    src: '/assets/workshop/taller-grua-palfinger-atardecer.webp',
    alt: 'Grúa Palfinger roja sobre la caja de un camión en el acceso del taller EAD, al atardecer.',
    width: 1600, height: 900, orientation: 'landscape',
    position: '50% 50%',
  },
  tallerAtardecerCamiones: {
    id: 'taller-atardecer-camiones',
    src: '/assets/workshop/taller-atardecer-camiones.webp',
    alt: 'Atardecer en el acceso del taller EAD, con un camión con grúa y otro vehículo estacionado junto al edificio.',
    width: 1600, height: 900, orientation: 'landscape',
    position: '50% 55%',
  },
  tallerFachadaEad: {
    id: 'taller-fachada-ead',
    src: '/assets/workshop/taller-fachada-ead.webp',
    alt: 'Fachada del taller EAD en Colonia Barón con el cartel de servicio técnico oficial Hidro-Grubert y Palfinger.',
    width: 900, height: 1600, orientation: 'portrait',
    position: '50% 40%',
  },
  tallerInteriorPalfinger: {
    id: 'taller-interior-palfinger',
    src: '/assets/workshop/taller-interior-palfinger.webp',
    alt: 'Grúa Palfinger roja en el acceso del taller EAD al atardecer, con un cono de seguridad y otra grúa en el interior.',
    width: 900, height: 1600, orientation: 'portrait',
    position: '50% 50%',
  },

  // ════════════════════════════ SERVICIO A CAMPO ═══════════════════════════

  servicioACampo: {
    id: 'servicio-a-campo',
    src: '/assets/workshop/servicio-a-campo.webp',
    alt: 'Camión de EAD con el sello de servicio técnico oficial Hidro-Grubert y Palfinger junto a un hidroelevador Hidro-Grubert en un campo.',
    width: 900, height: 1600, orientation: 'portrait',
    position: '50% 45%',
  },
  servicioCampoHidrogrubert: {
    id: 'servicio-campo-hidrogrubert',
    src: '/assets/workshop/servicio-campo-hidrogrubert.webp',
    alt: 'Camioneta de servicio de EAD con el sello de servicio técnico oficial, junto a un hidroelevador Hidro-Grubert en el campo.',
    width: 900, height: 1600, orientation: 'portrait',
    position: '50% 45%',
  },

  // ═══════════════════════════ TRABAJOS EN CAMPO ═══════════════════════════

  gruaElevandoBatea: {
    id: 'grua-elevando-batea',
    src: '/assets/workshop/grua-elevando-batea.webp',
    alt: 'Grúa hidráulica naranja elevando una batea metálica en el acceso del taller EAD, con un camión blanco al fondo.',
    width: 900, height: 1600, orientation: 'portrait',
    position: '50% 45%',
  },

  // ════════════════════════════ ELEVACIÓN ══════════════════════════════════

  hidroelevadorTaller: {
    id: 'hidroelevador-bl12-taller',
    src: '/assets/workshop/hidroelevador-bl12-taller.webp',
    alt: 'Hidroelevador BL-12/TA Hidro-Grubert en el taller, con un técnico trabajando junto a la base.',
    width: 1600, height: 900, orientation: 'landscape',
    position: '50% 50%',
  },
  hidroelevadorServicioOficial: {
    id: 'hidroelevador-bl12-servicio-oficial',
    src: '/assets/workshop/hidroelevador-bl12-servicio-oficial.webp',
    alt: 'Calcomanía de EAD como servicio técnico oficial Hidro-Grubert y Palfinger sobre el brazo de un hidroelevador.',
    width: 900, height: 1600, orientation: 'portrait',
    position: '50% 42%',
  },
  hidroelevadorBrazo: {
    id: 'hidroelevador-bl12-brazo',
    src: '/assets/workshop/hidroelevador-bl12-brazo.webp',
    alt: 'Brazo blanco de hidroelevador con el logotipo Hidro-Grubert dentro del taller.',
    width: 1600, height: 900, orientation: 'landscape',
    position: '50% 50%',
  },
  hidroelevadorDetalle: {
    id: 'hidroelevador-bl12-detalle',
    src: '/assets/workshop/hidroelevador-bl12-detalle.webp',
    alt: 'Detalle del brazo y las etiquetas de seguridad de un hidroelevador Hidro-Grubert.',
    width: 1600, height: 900, orientation: 'landscape',
    position: '50% 50%',
  },
  hidroelevadorPluma: {
    id: 'hidroelevador-bl12-pluma',
    src: '/assets/workshop/hidroelevador-bl12-pluma.webp',
    alt: 'Pluma blanca BL-12/TA de un hidroelevador Hidro-Grubert dentro del taller.',
    width: 900, height: 1600, orientation: 'portrait',
    position: '50% 50%',
  },
  hidroelevadorGh: {
    id: 'hidroelevador-gh-rojo',
    src: '/assets/workshop/hidroelevador-gh-rojo.webp',
    alt: 'Base de grúa con comando hidráulico y calcomanía de EAD sobre la caja de un camión.',
    width: 900, height: 1600, orientation: 'portrait',
    position: '50% 45%',
  },

  // ═══════════════════════════ GRÚAS HIDRO-GRUBERT ═════════════════════════

  gruaHidroGrubertN15000: {
    id: 'grua-hidrogrubert-n15000',
    src: '/assets/workshop/grua-hidrogrubert-n15000.webp',
    alt: 'Grúa Hidro-Grubert N-15000 montada sobre un camión blanco, con el brazo extendido contra un cielo nublado.',
    width: 2000, height: 1000, orientation: 'landscape',
    position: '50% 40%',
  },
  gruaHidroGrubertN7000: {
    id: 'grua-hidrogrubert-n7000',
    src: '/assets/workshop/grua-hidrogrubert-n7000.webp',
    alt: 'Grúa Hidro-Grubert N-7000 con cilindros y comandos hidráulicos dentro del taller.',
    width: 900, height: 1600, orientation: 'portrait',
    position: '50% 45%',
  },
  gruaHidroGrubertControles: {
    id: 'grua-hidrogrubert-controles',
    src: '/assets/workshop/grua-hidrogrubert-controles.webp',
    alt: 'Comandos y mangueras de una grúa Hidro-Grubert N-0020 en el taller.',
    width: 900, height: 1600, orientation: 'portrait',
    position: '50% 50%',
  },
  gruaHidroGrubertExterior: {
    id: 'grua-hidrogrubert-n7000-exterior',
    src: '/assets/workshop/grua-hidrogrubert-n7000-exterior.webp',
    alt: 'Grúa Hidro-Grubert N-7000 montada sobre un camión, con la indicación de carga máxima en el brazo.',
    width: 900, height: 1600, orientation: 'portrait',
    position: '50% 45%',
  },
  gruaHidroGrubertN15000Detalle: {
    id: 'grua-hidrogrubert-n15000-detalle',
    src: '/assets/workshop/grua-hidrogrubert-n15000-detalle.webp',
    alt: 'Brazo de grúa Hidro-Grubert N-15000 montado sobre un camión, con el logotipo de la marca y cielo despejado.',
    width: 900, height: 1600, orientation: 'portrait',
    position: '50% 45%',
  },
  gruaHidroGrubertTaller: {
    id: 'grua-hidrogrubert-taller',
    src: '/assets/workshop/grua-hidrogrubert-taller.webp',
    alt: 'Camión con grúa Hidro-Grubert frente al taller EAD, con el cartel de servicio técnico oficial al fondo.',
    width: 900, height: 1600, orientation: 'portrait',
    position: '50% 45%',
  },
  gruaHidroGrubertN25000Taller: {
    id: 'grua-hidrogrubert-n25000-taller',
    src: '/assets/workshop/grua-hidrogrubert-n25000-taller.webp',
    alt: 'Grúa Hidro-Grubert N-25000 montada sobre un camión frente al cartel del taller EAD.',
    width: 900, height: 1600, orientation: 'portrait',
    position: '50% 45%',
  },

  // ═══════════════════════════ GRÚAS PALFINGER ═════════════════════════════

  gruaPalfingerPkk26000: {
    id: 'grua-palfinger-pkk26000',
    src: '/assets/workshop/grua-palfinger-pkk26000.webp',
    alt: 'Grúa Palfinger PKK 26000 naranja montada sobre un camión blanco.',
    width: 1600, height: 900, orientation: 'landscape',
    position: '50% 50%',
  },
  gruaPalfingerPk13501: {
    id: 'grua-palfinger-pk13501',
    src: '/assets/workshop/grua-palfinger-pk13501.webp',
    alt: 'Brazo de grúa Palfinger PK 13.501 SLD3 con el logotipo de la marca.',
    width: 1600, height: 900, orientation: 'landscape',
    position: '50% 45%',
  },
  gruaPalfingerMontada: {
    id: 'grua-palfinger-montada',
    src: '/assets/workshop/grua-palfinger-montada.webp',
    alt: 'Camión con grúa Palfinger extendida frente al taller EAD, con cielo despejado.',
    width: 1600, height: 900, orientation: 'landscape',
    position: '50% 45%',
  },
  gruaPalfingerTecnico: {
    id: 'grua-palfinger-tecnico',
    src: '/assets/workshop/grua-palfinger-tecnico.webp',
    alt: 'Técnico con campera Palfinger revisando una grúa PK 24.001 SLD5 elevada.',
    width: 1600, height: 900, orientation: 'landscape',
    position: '50% 50%',
  },
  gruaPalfingerControl: {
    id: 'grua-palfinger-control',
    src: '/assets/workshop/grua-palfinger-control.webp',
    alt: 'Control remoto Palfinger en primer plano con la grúa montada sobre un camión al fondo.',
    width: 900, height: 1600, orientation: 'portrait',
    position: '50% 45%',
  },
  controlRemotoPalfinger: {
    id: 'control-remoto-palfinger',
    src: '/assets/workshop/control-remoto-palfinger.webp',
    alt: 'Control remoto Palfinger sobre una superficie metálica, con la grúa elevada al fondo.',
    width: 1600, height: 900, orientation: 'landscape',
    position: '50% 45%',
  },

  // ════════════════════════ REPARACIÓN Y MECANIZADO ════════════════════════

  conjuntoEngranajesCorona: {
    id: 'conjunto-engranajes-corona',
    src: '/assets/workshop/conjunto-engranajes-corona.webp',
    alt: 'Corona dentada con buje de bronce sobre una estructura blanca, lista para revisión.',
    width: 900, height: 1600, orientation: 'portrait',
    position: '50% 50%',
  },
  bombasHydronit: {
    id: 'bombas-hidraulicas-hydronit',
    src: '/assets/workshop/bombas-hidraulicas-hydronit.webp',
    alt: 'Dos bombas hidráulicas Hydronit desmontadas sobre el banco de trabajo.',
    width: 900, height: 1600, orientation: 'portrait',
    position: '50% 50%',
  },
  bombasDetalle: {
    id: 'bombas-hidraulicas-detalle',
    src: '/assets/workshop/bombas-hidraulicas-detalle.webp',
    alt: 'Detalle de cuerpos de bombas hidráulicas Hydronit con acoples roscados.',
    width: 900, height: 1600, orientation: 'portrait',
    position: '50% 50%',
  },

  // ════════════════════════════ INSTALACIONES ══════════════════════════════

  equipoBateaTanque: {
    id: 'equipo-batea-tanque',
    src: '/assets/workshop/equipo-batea-tanque.webp',
    alt: 'Tanque hidráulico negro instalado sobre la caja de un camión, con calcomanía de EAD.',
    width: 900, height: 1600, orientation: 'portrait',
    position: '50% 45%',
  },
  equipoBateaConexiones: {
    id: 'equipo-batea-conexiones',
    src: '/assets/workshop/equipo-batea-conexiones.webp',
    alt: 'Mangueras y conexiones sobre el tanque hidráulico de un equipo de batea.',
    width: 900, height: 1600, orientation: 'portrait',
    position: '50% 45%',
  },
  equipoBateaAcoples: {
    id: 'equipo-batea-acoples',
    src: '/assets/workshop/equipo-batea-acoples.webp',
    alt: 'Acoples rápidos macho y hembra instalados en el tanque hidráulico de un camión.',
    width: 1600, height: 900, orientation: 'landscape',
    position: '50% 50%',
  },
  equipoBateaVolcador: {
    id: 'equipo-batea-volcador',
    src: '/assets/workshop/equipo-batea-volcador.webp',
    alt: 'Batea azul elevada por un cilindro hidráulico Binotto, junto al tanque con identificación de EAD.',
    width: 900, height: 1600, orientation: 'portrait',
    position: '50% 45%',
  },
  portaescaleraDetalle: {
    id: 'portaescalera-detalle',
    src: '/assets/workshop/portaescalera-detalle.webp',
    alt: 'Portaescalera metálico instalado sobre la caja de un vehículo utilitario.',
    width: 900, height: 1600, orientation: 'portrait',
    position: '50% 45%',
  },
  portaescaleraInstalado: {
    id: 'portaescalera-instalado',
    src: '/assets/workshop/portaescalera-instalado.webp',
    alt: 'Vehículo utilitario blanco con hidroelevador Palfinger y portaescalera montados, al atardecer.',
    width: 900, height: 1600, orientation: 'portrait',
    position: '50% 45%',
  },
  portaescaleraPalfinger: {
    id: 'portaescalera-palfinger-pb13',
    src: '/assets/workshop/portaescalera-palfinger-pb13.webp',
    alt: 'Vehículo utilitario con hidroelevador Palfinger PB 13 AT 1 y portaescalera instalados, junto a un edificio.',
    width: 1600, height: 900, orientation: 'landscape',
    position: '50% 55%',
  },
  portaescaleraTrasera: {
    id: 'portaescalera-palfinger-trasera',
    src: '/assets/workshop/portaescalera-palfinger-trasera.webp',
    alt: 'Vista lateral del vehículo utilitario con portaescalera e hidroelevador Palfinger montados sobre la caja.',
    width: 1600, height: 900, orientation: 'landscape',
    position: '50% 55%',
  },

  // ═════════════════════ MANTENIMIENTO Y DIAGNÓSTICO ═══════════════════════

  diagnosticoPalfinger: {
    id: 'diagnostico-palfinger',
    src: '/assets/workshop/diagnostico-palfinger.webp',
    alt: 'Notebook de EAD con el software de diagnóstico Palfinger y el cable de conexión sobre una manta roja.',
    width: 900, height: 1600, orientation: 'portrait',
    position: '50% 30%',
  },
} as const satisfies Record<string, MediaImage>

// ═══════════════════════════════════════════════════════════════════════════
//  POOL ROTATIVO (galería de Empresa)
// ═══════════════════════════════════════════════════════════════════════════

export const workshopGalleryPool: readonly MediaImage[] = Object.values(media).filter(
  (image) => image.id !== 'servicio-a-campo',
)

// ═══════════════════════════════════════════════════════════════════════════
//  HERO POR PÁGINA
// ═══════════════════════════════════════════════════════════════════════════

export const routeMedia = {
  home: media.tallerExterior,
  company: media.servicioACampo,
  services: media.gruaPalfingerTecnico,
  products: media.controlRemotoPalfinger,
  work: media.tallerGruas,
  contact: media.tallerInteriorGrua,
} as const

// ═══════════════════════════════════════════════════════════════════════════
//  FOTOS POR SERVICIO
// ═══════════════════════════════════════════════════════════════════════════

export const serviceMedia = {
  repair: {
    hero: media.conjuntoEngranajesCorona,
    card: media.hidroelevadorBrazo,
    supporting: [media.bombasHydronit, media.hidroelevadorGh, media.tallerInteriorGrua],
  },
  installation: {
    hero: media.portaescaleraPalfinger,
    card: media.portaescaleraTrasera,
    supporting: [media.hidroelevadorTaller, media.equipoBateaTanque, media.equipoBateaVolcador],
  },
  maintenance: {
    hero: media.gruaPalfingerTecnico,
    card: media.gruaPalfingerPk13501,
    supporting: [media.diagnosticoPalfinger, media.hidroelevadorServicioOficial, media.gruaHidroGrubertControles],
  },
  parts: {
    hero: media.controlRemotoPalfinger,
    card: media.equipoBateaAcoples,
    supporting: [media.bombasDetalle, media.equipoBateaConexiones, media.conjuntoEngranajesCorona],
  },
} as const satisfies Record<
  ServiceIconVariant,
  { hero: MediaImage; card: MediaImage; supporting: readonly MediaImage[] }
>

// ═══════════════════════════════════════════════════════════════════════════
//  FOTOS POR CATEGORÍA DE PRODUCTO
// ═══════════════════════════════════════════════════════════════════════════

export const productMedia = {
  'repuestos-hidro-grubert': media.gruaHidroGrubertN15000,
  'repuestos-palfinger': media.gruaPalfingerPk13501,
  'componentes-hidraulicos': media.bombasHydronit,
  implementos: media.portaescaleraPalfinger,
} as const satisfies Record<ProductCategoryId, MediaImage>

// ═══════════════════════════════════════════════════════════════════════════
//  EVIDENCIA EN HOME (sin proyectos publicados aún)
// ═══════════════════════════════════════════════════════════════════════════

export const homeEvidenceMedia = [
  media.tallerGruaPalfingerAtardecer,
  media.tallerFachadaEad,
  media.gruaHidroGrubertN25000Taller,
] as const

// ═══════════════════════════════════════════════════════════════════════════
//  ARCHIVO DE TRABAJOS (sin publicaciones aún)
// ═══════════════════════════════════════════════════════════════════════════

export const workArchiveMedia = [
  media.tallerAtardecerCamiones,
  media.gruaHidroGrubertTaller,
  media.gruaElevandoBatea,
  media.servicioCampoHidrogrubert,
  media.equipoBateaVolcador,
  media.diagnosticoPalfinger,
] as const

// ═══════════════════════════════════════════════════════════════════════════
//  ACOMPAÑAMIENTO — formulario de contacto
// ═══════════════════════════════════════════════════════════════════════════

export const contactSupportMedia = media.diagnosticoPalfinger
