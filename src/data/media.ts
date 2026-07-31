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

  workshopOverview: {
    id: 'taller-vista-general',
    src: '/assets/workshop/taller-vista-general.webp',
    alt: 'Interior del taller con un brazo hidráulico blanco, bancos de trabajo y estanterías.',
    width: 1200, height: 540, orientation: 'landscape',
    position: '50% 52%',
  },
  workshopHydraulicArm: {
    id: 'taller-brazo-hidraulico',
    src: '/assets/workshop/taller-brazo-hidraulico.webp',
    alt: 'Brazo articulado blanco dentro del taller, con herramientas y equipos al fondo.',
    width: 1200, height: 540, orientation: 'landscape',
    position: '48% 52%',
  },
  tallerPanoramica: {
    id: 'taller-panoramica-2',
    src: '/assets/workshop/taller-panoramica-2.webp',
    alt: 'Vista panorámica del taller con bancos de trabajo, equipos y componentes hidráulicos.',
    width: 2000, height: 900, orientation: 'landscape',
    position: '50% 52%',
  },
  tallerVehiculo1: {
    id: 'taller-vehiculo-1',
    src: '/assets/workshop/taller-vehiculo-1.webp',
    alt: 'Vehículo con equipo hidráulico montado dentro del taller.',
    width: 2000, height: 900, orientation: 'landscape',
    position: '50% 48%',
  },
  tallerVehiculo2: {
    id: 'taller-vehiculo-2',
    src: '/assets/workshop/taller-vehiculo-2.webp',
    alt: 'Equipo oleohidráulico instalado sobre un vehículo en proceso de trabajo.',
    width: 2000, height: 900, orientation: 'landscape',
    position: '50% 48%',
  },

  // ═══════════════════════════ GRÚAS Y ELEVACIÓN ═══════════════════════════

  gruaEnU: {
    id: 'grua-en-u',
    src: '/assets/workshop/grua-en-u.webp',
    alt: 'Grúa articulada plegada en U dentro del taller, mostrando la estructura del equipo.',
    width: 2000, height: 1000, orientation: 'landscape',
    position: '50% 48%',
  },
  cablePulleysHook: {
    id: 'cable-poleas-gancho',
    src: '/assets/workshop/cable-poleas-gancho.webp',
    alt: 'Cable de acero, poleas negras y gancho rojo de un equipo de elevación.',
    width: 506, height: 900, orientation: 'portrait',
    position: '50% 48%',
  },
  workshopLiftPlatform: {
    id: 'plataforma-elevadora-taller',
    src: '/assets/workshop/plataforma-elevadora-taller.webp',
    alt: 'Plataforma elevadora remolcable blanca con el brazo plegado dentro del taller.',
    width: 1200, height: 675, orientation: 'landscape',
    position: '50% 48%',
  },

  // ════════════════════════ REPARACIÓN Y MECANIZADO ════════════════════════

  bombaHidraulica: {
    id: 'bomba-hidraulica',
    src: '/assets/workshop/bomba-hidraulica.webp',
    alt: 'Bomba hidráulica desmontada sobre un banco de trabajo del taller.',
    width: 1600, height: 1200, orientation: 'landscape',
    position: '50% 48%',
  },
  gearAssembly: {
    id: 'conjunto-engranajes',
    src: '/assets/workshop/conjunto-engranajes.webp',
    alt: 'Carcasa abierta con engranajes de un componente hidráulico sobre mesa de trabajo.',
    width: 506, height: 900, orientation: 'portrait',
    position: '50% 52%',
  },
  ringGearBushing: {
    id: 'corona-y-buje',
    src: '/assets/workshop/corona-y-buje.webp',
    alt: 'Detalle de un buje cobrizo y una corona dentada sobre una estructura blanca.',
    width: 506, height: 900, orientation: 'portrait',
    position: '50% 48%',
  },
  weldedStructure: {
    id: 'soldadura-estructura',
    src: '/assets/workshop/soldadura-estructura.webp',
    alt: 'Detalle de uniones soldadas sobre una estructura metálica pintada de blanco.',
    width: 600, height: 1067, orientation: 'portrait',
    position: '50% 48%',
  },

  // ════════════════════════════ INSTALACIONES ══════════════════════════════

  installedWorkshopEquipment: {
    id: 'equipo-instalado-taller',
    src: '/assets/workshop/equipo-instalado-taller.webp',
    alt: 'Equipo oleohidráulico Hidro-Grubert instalado sobre un vehículo dentro del taller.',
    width: 600, height: 1067, orientation: 'portrait',
    position: '50% 48%',
  },
  installedHydraulicTank: {
    id: 'deposito-hidraulico-instalado',
    src: '/assets/workshop/deposito-hidraulico-instalado.webp',
    alt: 'Depósito hidráulico negro instalado detrás de la cabina de un camión.',
    width: 506, height: 900, orientation: 'portrait',
    position: '50% 48%',
  },

  // ════════════════════ MANTENIMIENTO, DIAGNÓSTICO Y SERVICIO ══════════════

  mantenimiento: {
    id: 'mantenimiento',
    src: '/assets/workshop/mantenimiento.webp',
    alt: 'Técnico realizando tareas de mantenimiento sobre un componente hidráulico en el taller.',
    width: 1260, height: 946, orientation: 'landscape',
    position: '50% 48%',
  },
  servicio: {
    id: 'servicio',
    src: '/assets/workshop/servicio.webp',
    alt: 'Trabajo de servicio técnico sobre un equipo hidráulico dentro del taller.',
    width: 1260, height: 946, orientation: 'landscape',
    position: '50% 48%',
  },
  hydraulicCylinderOutside: {
    id: 'cilindro-hidraulico-exterior',
    src: '/assets/workshop/cilindro-hidraulico-exterior.webp',
    alt: 'Cilindro hidráulico extendido en el exterior del taller, para revisión.',
    width: 600, height: 1334, orientation: 'portrait',
    position: '50% 48%',
  },
  hidraulicaMovil: {
    id: 'hidraulica-movil',
    src: '/assets/workshop/hidraulica-movil.webp',
    alt: 'Equipo de hidráulica móvil con mangueras y acoples en zona de trabajo.',
    width: 897, height: 564, orientation: 'landscape',
    position: '50% 48%',
  },
  ingenieriaTaller: {
    id: 'ingenieria-taller',
    src: '/assets/workshop/ingenieria-taller.webp',
    alt: 'Componente hidráulico en proceso de evaluación técnica sobre banco del taller.',
    width: 1200, height: 1242, orientation: 'portrait',
    position: '50% 48%',
  },

  // ═══════════════════ REPUESTOS, FILTROS E IMPLEMENTOS ════════════════════

  componentesHidraulicos: {
    id: 'componentes-hidraulicos',
    src: '/assets/workshop/componentes-hidraulicos.webp',
    alt: 'Acoples hidráulicos metálicos ordenados sobre un banco de trabajo.',
    width: 1200, height: 540, orientation: 'landscape',
    position: '50% 48%',
  },
  filtrosEstanteria: {
    id: 'filtros-estanteria',
    src: '/assets/workshop/filtros-estanteria.webp',
    alt: 'Filtros hidráulicos originales en caja sobre una estantería del taller.',
    width: 1200, height: 906, orientation: 'landscape',
    position: '50% 48%',
  },
  filtrosDetalle: {
    id: 'filtros-detalle',
    src: '/assets/workshop/filtros-detalle.webp',
    alt: 'Filtros oleohidráulicos alineados sobre superficie de trabajo.',
    width: 1600, height: 402, orientation: 'landscape',
    position: '50% 48%',
  },
  manguerasTaller: {
    id: 'mangueras-taller',
    src: '/assets/workshop/mangueras-taller.webp',
    alt: 'Mangueras hidráulicas de distintos diámetros organizadas en el taller.',
    width: 1600, height: 900, orientation: 'landscape',
    position: '50% 48%',
  },
  valvulasDetalle: {
    id: 'valvulas-detalle',
    src: '/assets/workshop/valvulas-detalle.webp',
    alt: 'Válvulas hidráulicas metálicas con conexiones roscadas.',
    width: 512, height: 463, orientation: 'landscape',
  },
  repuestosEstanteria: {
    id: 'repuestos-estanteria',
    src: '/assets/workshop/repuestos-estanteria.webp',
    alt: 'Estantería del taller con repuestos hidráulicos clasificados en cajas.',
    width: 512, height: 180, orientation: 'landscape',
    position: '50% 48%',
  },
  repuestosTablero: {
    id: 'repuestos-tablero',
    src: '/assets/workshop/repuestos-tablero.webp',
    alt: 'Tablero con repuestos y conexiones hidráulicas para consulta.',
    width: 225, height: 225, orientation: 'landscape',
    position: '50% 50%',
  },

  // ════════════════════════════ EQUIPOS Y MARCAS ═══════════════════════════

  hidrogrubert93: {
    id: 'hidrogrubert-93',
    src: '/assets/workshop/hidrogrubert-93.webp',
    alt: 'Equipo Hidro-Grubert, grúa articulada para montaje vehicular.',
    width: 853, height: 900, orientation: 'portrait',
    position: '50% 48%',
  },
  hidrogrubert97: {
    id: 'hidrogrubert-97',
    src: '/assets/workshop/hidrogrubert-97.webp',
    alt: 'Equipo Hidro-Grubert, sistema de elevación oleohidráulico para camión.',
    width: 1348, height: 900, orientation: 'landscape',
    position: '50% 48%',
  },
  hidrogrubert104: {
    id: 'hidrogrubert-104',
    src: '/assets/workshop/hidrogrubert-104.webp',
    alt: 'Equipo Hidro-Grubert, brazo articulado de alta capacidad de carga.',
    width: 1348, height: 900, orientation: 'landscape',
    position: '50% 48%',
  },
  pk61502Title: {
    id: 'pk-61502-title',
    src: '/assets/workshop/pk-61502-title.webp',
    alt: 'Grúa Palfinger PK 61502, equipo de elevación de alto rendimiento.',
    width: 1600, height: 800, orientation: 'landscape',
    position: '50% 48%',
  },
  pkk26000: {
    id: 'pkk-26000',
    src: '/assets/workshop/pkk-26000.webp',
    alt: 'Grúa Palfinger PKK 26000, equipo articulado para aplicaciones pesadas.',
    width: 1282, height: 900, orientation: 'landscape',
    position: '50% 48%',
  },
  tractorPalf: {
    id: 'tractor-palf',
    src: '/assets/workshop/tractor-palf.webp',
    alt: 'Tractor agrícola equipado con grúa Palfinger en zona rural.',
    width: 1600, height: 800, orientation: 'landscape',
    position: '50% 48%',
  },

  // ═══════════════════════ TELÉFONO (4 que quedaron) ═══════════════════════

  phoneA_02: {
    id: 'taller-20251030-02',
    src: '/assets/workshop/taller-20251030-02.webp',
    alt: 'Vista del taller con equipos hidráulicos y bancos de trabajo.',
    width: 2000, height: 900, orientation: 'landscape',
    position: '50% 52%',
  },
  phoneA_03: {
    id: 'taller-20251030-03',
    src: '/assets/workshop/taller-20251030-03.webp',
    alt: 'Interior del taller con componentes oleohidráulicos en preparación.',
    width: 2000, height: 900, orientation: 'landscape',
    position: '50% 52%',
  },
  phoneD_01: {
    id: 'taller-20251211-01',
    src: '/assets/workshop/taller-20251211-01.webp',
    alt: 'Trabajo de taller con equipos oleohidráulicos y herramientas.',
    width: 2000, height: 900, orientation: 'landscape',
    position: '50% 52%',
  },
  phoneF_02: {
    id: 'taller-20260107-02',
    src: '/assets/workshop/taller-20260107-02.webp',
    alt: 'Panorámica del espacio de trabajo con vehículos y componentes.',
    width: 2000, height: 1125, orientation: 'landscape',
    position: '50% 52%',
  },
} as const satisfies Record<string, MediaImage>

// ═══════════════════════════════════════════════════════════════════════════
//  POOL ROTATIVO (galería de Empresa)
// ═══════════════════════════════════════════════════════════════════════════

export const workshopGalleryPool: readonly MediaImage[] = Object.values(media)

// ═══════════════════════════════════════════════════════════════════════════
//  HERO POR PÁGINA
// ═══════════════════════════════════════════════════════════════════════════

export const routeMedia = {
  home: media.phoneF_02,
  company: media.phoneF_02,
  services: media.gruaEnU,
  products: media.manguerasTaller,
  work: media.tallerVehiculo1,
  contact: media.workshopHydraulicArm,
} as const

// ═══════════════════════════════════════════════════════════════════════════
//  FOTOS POR SERVICIO
// ═══════════════════════════════════════════════════════════════════════════

export const serviceMedia = {
  repair: {
    hero: media.ingenieriaTaller,
    card: media.bombaHidraulica,
    supporting: [media.gearAssembly, media.ringGearBushing, media.weldedStructure],
  },
  installation: {
    hero: media.installedWorkshopEquipment,
    card: media.installedHydraulicTank,
    supporting: [media.workshopLiftPlatform, media.tallerVehiculo2, media.hidraulicaMovil],
  },
  maintenance: {
    hero: media.mantenimiento,
    card: media.hydraulicCylinderOutside,
    supporting: [media.servicio, media.hidraulicaMovil, media.phoneD_01],
  },
  parts: {
    hero: media.filtrosEstanteria,
    card: media.repuestosEstanteria,
    supporting: [media.manguerasTaller, media.filtrosDetalle, media.valvulasDetalle],
  },
} as const satisfies Record<
  ServiceIconVariant,
  { hero: MediaImage; card: MediaImage; supporting: readonly MediaImage[] }
>

// ═══════════════════════════════════════════════════════════════════════════
//  FOTOS POR CATEGORÍA DE PRODUCTO
// ═══════════════════════════════════════════════════════════════════════════

export const productMedia = {
  'repuestos-hidro-grubert': media.hidrogrubert97,
  'repuestos-palfinger': media.pk61502Title,
  'componentes-hidraulicos': media.componentesHidraulicos,
  implementos: media.filtrosDetalle,
} as const satisfies Record<ProductCategoryId, MediaImage>

// ═══════════════════════════════════════════════════════════════════════════
//  EVIDENCIA EN HOME (sin proyectos publicados aún)
// ═══════════════════════════════════════════════════════════════════════════

export const homeEvidenceMedia = [
  media.phoneF_02,
  media.phoneA_02,
  media.phoneD_01,
] as const

// ═══════════════════════════════════════════════════════════════════════════
//  ARCHIVO DE TRABAJOS (sin publicaciones aún)
// ═══════════════════════════════════════════════════════════════════════════

export const workArchiveMedia = [
  media.weldedStructure,
  media.bombaHidraulica,
  media.hydraulicCylinderOutside,
  media.tallerVehiculo1,
  media.servicio,
  media.gearAssembly,
] as const

// ═══════════════════════════════════════════════════════════════════════════
//  ACOMPAÑAMIENTO — formulario de contacto
// ═══════════════════════════════════════════════════════════════════════════

export const contactSupportMedia = media.hydraulicCylinderOutside

// ═══════════════════════════════════════════════════════════════════════════
//  GALERÍA DE EQUIPOS — página Empresa
// ═══════════════════════════════════════════════════════════════════════════

export const brandEquipmentGallery = [
  media.pk61502Title,
  media.tractorPalf,
  media.hidrogrubert97,
  media.pkk26000,
  media.hidrogrubert93,
  media.hidrogrubert104,
] as const
