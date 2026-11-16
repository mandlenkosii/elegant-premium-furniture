/**
 * Site-wide copy and contact details.
 * Email is still a placeholder — replace `email` / `tradeEmail` when available.
 */
const WHATSAPP_DISPLAY = '078 865 9516'
const WHATSAPP_INTL = '27788659516' // 078 865 9516 in international format for wa.me links

export const site = {
  name: 'Elegant & Premium Furniture',
  tagline: 'Where luxury meets comfort.',
  announcement: 'Online shop only · No showroom at the moment · WhatsApp us on 078 865 9516',
  onlineNotice:
    'We are an online shop. There is no physical showroom at the moment — browse online and order or ask questions via WhatsApp.',
  deliveryNote:
    'Delivery is subject to the distance of where you stay and can be arranged. Send us your area on WhatsApp and we will confirm the delivery cost and date before you pay.',
  intro:
    'An online furniture shop offering elegant, premium pieces and bespoke furniture for homes and businesses across South Africa — where luxury meets comfort.',
  contact: {
    phone: WHATSAPP_DISPLAY,
    whatsapp: WHATSAPP_DISPLAY,
    whatsappUrl: `https://wa.me/${WHATSAPP_INTL}`,
    phoneUrl: `tel:+${WHATSAPP_INTL}`,
    email: 'Email coming soon',
    tradeEmail: 'Email coming soon',
    address: 'Online shop — no showroom at the moment',
    hours: 'WhatsApp messages answered Mon – Sat',
  },
  socials: [
    { label: 'Instagram', href: '#' },
    { label: 'Pinterest', href: '#' },
    { label: 'Facebook', href: 'https://www.facebook.com/share/19XXCqQ3tw/' },
  ],
}

export const mainNav = [
  { label: 'Shop', to: '/shop', mega: true },
  { label: 'Living', to: '/collections/living-room' },
  { label: 'Bedroom', to: '/collections/bedroom' },
  { label: 'Dining', to: '/collections/dining' },
  { label: 'Bespoke', to: '/bespoke' },
  { label: 'Our Story', to: '/our-story' },
]

export const secondaryNav = [
  { label: 'Our Projects', to: '/projects' },
  { label: 'Trade & Commercial', to: '/trade' },
  { label: 'Contact', to: '/contact' },
]

/** Budget choices on the bespoke quotation form (single custom pieces). */
export const bespokeBudgetRanges = [
  'Under R2,000',
  'R2,000 – R4,000',
  'R4,000 – R6,000',
  'R6,000 – R8,000',
  'R8,000 – R10,000',
  'Over R10,000 (several pieces)',
]

/** Budget choices on the trade enquiry form (bulk and commercial orders). */
export const budgetRanges = [
  'Under R10,000',
  'R10,000 – R25,000',
  'R25,000 – R50,000',
  'R50,000 – R100,000',
  'R100,000 – R250,000',
  'R250,000+',
]
