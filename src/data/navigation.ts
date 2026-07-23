export interface NavLink {
  label: string
  href: string
}

export interface NavGroup {
  label: string
  links: NavLink[]
}

export const mainNav: NavLink[] = [
  { label: 'Inicio', href: '/' },
  { label: 'Empresa', href: '/empresa' },
  { label: 'Servicios', href: '/servicios' },
  { label: 'Productos', href: '/productos' },
  { label: 'Trabajos', href: '/trabajos' },
  { label: 'Contacto', href: '/contacto' },
]

export const footerGroups: NavGroup[] = [
  {
    label: 'Servicios',
    links: [
      { label: 'Reparación integral', href: '/servicios/reparacion-integral' },
      { label: 'Instalaciones', href: '/servicios/instalaciones' },
      { label: 'Mantenimiento', href: '/servicios/mantenimiento' },
    ],
  },
  {
    label: 'Empresa',
    links: [
      { label: 'Sobre nosotros', href: '/empresa' },
      { label: 'Trabajos realizados', href: '/trabajos' },
      { label: 'Contacto', href: '/contacto' },
    ],
  },
]
