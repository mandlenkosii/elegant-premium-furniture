import { Link } from 'react-router-dom'

/**
 * Elegant & Premium bed-and-chaise mark, cut from the brand logo
 * (public/brand/logo-original.jpg) with a transparent background.
 */
export function LogoMark({ light = false, className = '' }) {
  return (
    <img
      src={light ? '/brand/logo-mark-light.png' : '/brand/logo-mark-dark.png'}
      alt=""
      aria-hidden="true"
      className={`w-auto select-none ${className}`}
      draggable="false"
    />
  )
}

/**
 * Brand lockup: mark + wordmark + slogan.
 * Default (header/menus): compact on phones so it fits between the header icons.
 * `light` (footer, dark backgrounds): light colours, always full size.
 */
export default function Logo({ light = false, className = '' }) {
  const mark = light ? 'h-11' : 'h-7 sm:h-11'
  const word = light ? 'text-[1.3rem] text-ivory-light' : 'text-[0.95rem] sm:text-[1.3rem] text-charcoal'
  const sub = light ? 'block text-ivory/70' : 'hidden sm:block text-taupe'
  const slogan = light ? 'block text-sand' : 'hidden sm:block text-olive'

  return (
    <Link
      to="/"
      aria-label="Elegant & Premium Furniture — home"
      className={`inline-flex shrink-0 items-center ${light ? 'gap-3' : 'gap-2 sm:gap-3'} ${className}`}
    >
      <LogoMark light={light} className={mark} />
      <span className="flex flex-col leading-none">
        <span className={`font-logo uppercase tracking-[0.04em] whitespace-nowrap ${word}`}>Elegant &amp; Premium</span>
        <span className={`mt-1 text-[9.5px] font-medium uppercase tracking-[0.42em] ${sub}`}>Furniture</span>
        <span className={`mt-1 font-serif text-[12px] italic ${slogan}`}>Where luxury meets comfort</span>
      </span>
    </Link>
  )
}
