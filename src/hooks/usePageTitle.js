import { useEffect } from 'react'

export function usePageTitle(title) {
  useEffect(() => {
    document.title = title ? `${title} — Elegant & Premium Furniture` : 'Elegant & Premium Furniture — Where luxury meets comfort'
  }, [title])
}
