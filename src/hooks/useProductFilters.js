import { useMemo, useState } from 'react'
import { searchProducts } from '../data/products'

export const priceBands = [
  { id: 'under-2k', label: 'Under R2,000', min: 0, max: 1999 },
  { id: '2k-5k', label: 'R2,000 – R5,000', min: 2000, max: 5000 },
  { id: '5k-8k', label: 'R5,000 – R8,000', min: 5001, max: 8000 },
  { id: '8k-10k', label: 'R8,000 – R10,000', min: 8001, max: 10000 },
]

export const sortOptions = [
  { id: 'featured', label: 'Featured' },
  { id: 'newest', label: 'New arrivals' },
  { id: 'price-asc', label: 'Price: low to high' },
  { id: 'price-desc', label: 'Price: high to low' },
  { id: 'name', label: 'Name: A – Z' },
]

const sorters = {
  featured: (a, b) => Number(b.featured) - Number(a.featured) || Number(b.bestseller) - Number(a.bestseller),
  newest: (a, b) => Number(b.isNew) - Number(a.isNew),
  'price-asc': (a, b) => a.price - b.price,
  'price-desc': (a, b) => b.price - a.price,
  name: (a, b) => a.name.localeCompare(b.name),
}

/** Search, type filter, price filter and sorting for a list of products. */
export function useProductFilters(products, initial = {}) {
  const [query, setQuery] = useState(initial.query ?? '')
  const [types, setTypes] = useState(initial.types ?? [])
  const [bands, setBands] = useState([])
  const [sort, setSort] = useState('featured')

  const toggle = (setter) => (value) =>
    setter((prev) => (prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]))

  const results = useMemo(() => {
    let list = searchProducts(query, products)
    if (types.length) list = list.filter((p) => types.includes(p.type))
    if (bands.length) {
      const ranges = priceBands.filter((b) => bands.includes(b.id))
      list = list.filter((p) => ranges.some((r) => p.price >= r.min && p.price <= r.max))
    }
    return [...list].sort(sorters[sort])
  }, [products, query, types, bands, sort])

  const activeCount = types.length + bands.length + (query.trim() ? 1 : 0)

  const clear = () => {
    setQuery('')
    setTypes([])
    setBands([])
  }

  return {
    query,
    setQuery,
    types,
    toggleType: toggle(setTypes),
    bands,
    toggleBand: toggle(setBands),
    sort,
    setSort,
    results,
    activeCount,
    clear,
  }
}
