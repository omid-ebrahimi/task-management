import { useLocation } from 'react-router-dom'

export function usePathTitle() {
  const { pathname } = useLocation()
  const pathTitle = pathname.split('/')[1]

  return pathTitle ? pathTitle[0].toUpperCase() + pathTitle.substring(1) : ''
}
