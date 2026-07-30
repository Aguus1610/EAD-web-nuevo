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
  workshopOverview: {
    id: 'taller-vista-general',
    src: '/assets/workshop/taller-vista-general.webp',
    alt: 'Interior del taller con un brazo hidráulico blanco, bancos de trabajo y estanterías.',
    width: 1200,
    height: 540,
    orientation: 'landscape',
    position: '48% 50%',
  },
  workshopHydraulicArm: {
    id: 'taller-brazo-hidraulico',
    src: '/assets/workshop/taller-brazo-hidraulico.webp',
    alt: 'Brazo articulado blanco dentro del taller, con herramientas y equipos al fondo.',
    width: 1200,
    height: 540,
    orientation: 'landscape',
    position: '48% 50%',
  },
  redArticulatedCrane: {
    id: 'grua-articulada-roja',
    src: '/assets/workshop/grua-articulada-roja.webp',
    alt: 'Grúa articulada roja dentro del taller, rodeada de estructuras metálicas.',
    width: 1200,
    height: 540,
    orientation: 'landscape',
    position: '52% 50%',
  },
  hydraulicComponents: {
    id: 'componentes-hidraulicos',
    src: '/assets/workshop/componentes-hidraulicos.webp',
    alt: 'Acoples hidráulicos metálicos ordenados sobre un banco de trabajo.',
    width: 1200,
    height: 540,
    orientation: 'landscape',
  },
  organizedParts: {
    id: 'repuestos-organizados',
    src: '/assets/workshop/repuestos-organizados.webp',
    alt: 'Estantería del taller con cajas de repuestos y conexiones hidráulicas clasificadas.',
    width: 1200,
    height: 540,
    orientation: 'landscape',
  },
  gearAssembly: {
    id: 'conjunto-engranajes',
    src: '/assets/workshop/conjunto-engranajes.webp',
    alt: 'Carcasa abierta y engranajes de un componente hidráulico sobre una mesa de trabajo.',
    width: 506,
    height: 900,
    orientation: 'portrait',
    position: '50% 52%',
  },
  cablePulleysHook: {
    id: 'cable-poleas-gancho',
    src: '/assets/workshop/cable-poleas-gancho.webp',
    alt: 'Cable de acero, poleas negras y gancho rojo de un equipo de elevación.',
    width: 506,
    height: 900,
    orientation: 'portrait',
  },
  workshopLiftPlatform: {
    id: 'plataforma-elevadora-taller',
    src: '/assets/workshop/plataforma-elevadora-taller.webp',
    alt: 'Plataforma elevadora remolcable blanca con el brazo plegado dentro del taller.',
    width: 1200,
    height: 675,
    orientation: 'landscape',
  },
  metalStructurePreparation: {
    id: 'estructura-metalica-preparacion',
    src: '/assets/workshop/estructura-metalica-preparacion.webp',
    alt: 'Estructura metálica sin pintar apoyada al aire libre durante su preparación.',
    width: 506,
    height: 900,
    orientation: 'portrait',
    position: '50% 45%',
  },
  ringGearBushing: {
    id: 'corona-y-buje',
    src: '/assets/workshop/corona-y-buje.webp',
    alt: 'Detalle de un buje de tono cobrizo y una corona dentada sobre una estructura blanca.',
    width: 506,
    height: 900,
    orientation: 'portrait',
    position: '50% 48%',
  },
  installedHydraulicTank: {
    id: 'deposito-hidraulico-instalado',
    src: '/assets/workshop/deposito-hidraulico-instalado.webp',
    alt: 'Depósito hidráulico negro instalado detrás de la cabina de un camión.',
    width: 506,
    height: 900,
    orientation: 'portrait',
  },
  hydraulicCouplingPanel: {
    id: 'panel-acoples-hidraulicos',
    src: '/assets/workshop/panel-acoples-hidraulicos.webp',
    alt: 'Panel negro con acoples hidráulicos, conexiones y una palanca central azul.',
    width: 1200,
    height: 675,
    orientation: 'landscape',
  },
  installedWorkshopEquipment: {
    id: 'equipo-instalado-taller',
    src: '/assets/workshop/equipo-instalado-taller.webp',
    alt: 'Equipo oleohidráulico Hidro-Grubert instalado sobre un vehículo dentro del taller.',
    width: 600,
    height: 1067,
    orientation: 'portrait',
    position: '50% 48%',
  },
  componentMachining: {
    id: 'mecanizado-componente',
    src: '/assets/workshop/mecanizado-componente.webp',
    alt: 'Mecanizado de una conexión metálica en un componente hidráulico sujeto a una máquina de banco.',
    width: 600,
    height: 1067,
    orientation: 'portrait',
    position: '50% 42%',
  },
  paintedStructureOutside: {
    id: 'estructura-pintada-exterior',
    src: '/assets/workshop/estructura-pintada-exterior.webp',
    alt: 'Estructura de elevación blanca pintada y apoyada frente al taller.',
    width: 1200,
    height: 675,
    orientation: 'landscape',
    position: '48% 50%',
  },
  weldedStructure: {
    id: 'soldadura-estructura',
    src: '/assets/workshop/soldadura-estructura.webp',
    alt: 'Detalle de uniones soldadas sobre una estructura metálica pintada de blanco.',
    width: 600,
    height: 1067,
    orientation: 'portrait',
    position: '50% 48%',
  },
  equipmentGauges: {
    id: 'indicadores-equipo',
    src: '/assets/workshop/indicadores-equipo.webp',
    alt: 'Manómetro e indicador digital montados en el panel de un equipo hidráulico.',
    width: 600,
    height: 1333,
    orientation: 'portrait',
    position: '50% 48%',
  },
  redJointDetail: {
    id: 'articulacion-roja-detalle',
    src: '/assets/workshop/articulacion-roja-detalle.webp',
    alt: 'Detalle de una articulación metálica negra sobre una estructura roja.',
    width: 1200,
    height: 540,
    orientation: 'landscape',
  },
  wornCylinderRod: {
    id: 'vastago-desgastado',
    src: '/assets/workshop/vastago-desgastado.webp',
    alt: 'Vástago metálico con desgaste visible apoyado sobre un banco de trabajo.',
    width: 600,
    height: 1333,
    orientation: 'portrait',
    position: '50% 42%',
  },
  cylinderRodSurface: {
    id: 'superficie-vastago',
    src: '/assets/workshop/superficie-vastago.webp',
    alt: 'Primer plano de marcas de desgaste sobre la superficie de un vástago hidráulico.',
    width: 1200,
    height: 540,
    orientation: 'landscape',
  },
  hydraulicCylinderOutside: {
    id: 'cilindro-hidraulico-exterior',
    src: '/assets/workshop/cilindro-hidraulico-exterior.webp',
    alt: 'Cilindro hidráulico extendido en el exterior del taller, con un vehículo al fondo.',
    width: 600,
    height: 1334,
    orientation: 'portrait',
    position: '50% 48%',
  },
  equipmentHourMeter: {
    id: 'medidor-horas-equipo',
    src: '/assets/workshop/medidor-horas-equipo.webp',
    alt: 'Medidor de horas instalado en la estructura metálica de un equipo.',
    width: 600,
    height: 1334,
    orientation: 'portrait',
    position: '50% 42%',
  },
} as const satisfies Record<string, MediaImage>

export const workshopGalleryPool: readonly MediaImage[] = Object.values(media)

export const routeMedia = {
  home: media.workshopOverview,
  company: media.workshopHydraulicArm,
  services: media.redArticulatedCrane,
  products: media.hydraulicComponents,
  work: media.paintedStructureOutside,
  contact: media.hydraulicCouplingPanel,
} as const

export const serviceMedia = {
  repair: {
    hero: media.componentMachining,
    card: media.wornCylinderRod,
    supporting: [media.cylinderRodSurface, media.gearAssembly, media.ringGearBushing],
  },
  installation: {
    hero: media.installedWorkshopEquipment,
    card: media.installedHydraulicTank,
    supporting: [media.paintedStructureOutside, media.weldedStructure, media.workshopLiftPlatform],
  },
  maintenance: {
    hero: media.equipmentGauges,
    card: media.equipmentHourMeter,
    supporting: [media.hydraulicCouplingPanel, media.redJointDetail, media.hydraulicCylinderOutside],
  },
  parts: {
    hero: media.organizedParts,
    card: media.hydraulicComponents,
    supporting: [media.hydraulicComponents, media.ringGearBushing, media.cablePulleysHook],
  },
} as const satisfies Record<
  ServiceIconVariant,
  { hero: MediaImage; card: MediaImage; supporting: readonly MediaImage[] }
>

export const productMedia = {
  'repuestos-hidro-grubert': media.installedWorkshopEquipment,
  'repuestos-palfinger': media.organizedParts,
  'componentes-hidraulicos': media.hydraulicComponents,
  implementos: media.cablePulleysHook,
} as const satisfies Record<ProductCategoryId, MediaImage>

export const homeEvidenceMedia = [
  media.paintedStructureOutside,
  media.componentMachining,
  media.redJointDetail,
] as const

export const workArchiveMedia = [
  media.weldedStructure,
  media.cylinderRodSurface,
  media.hydraulicCylinderOutside,
  media.metalStructurePreparation,
  media.equipmentGauges,
  media.gearAssembly,
] as const

export const contactSupportMedia = media.hydraulicCylinderOutside
