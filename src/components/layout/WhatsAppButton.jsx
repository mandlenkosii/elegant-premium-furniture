import { MessageCircle } from 'lucide-react'
import { site } from '../../data/site'

/** Floating WhatsApp shortcut, shown on every page. */
export default function WhatsAppButton() {
  return (
    <a
      href={site.contact.whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Chat with us on WhatsApp: ${site.contact.whatsapp}`}
      className="fixed bottom-5 right-5 z-40 flex items-center gap-2 rounded-full bg-olive px-4 py-3 text-[13px] font-medium text-ivory-light shadow-lg transition-colors hover:bg-charcoal sm:bottom-7 sm:right-7"
    >
      <MessageCircle size={20} strokeWidth={1.6} aria-hidden="true" />
      <span className="hidden sm:inline">WhatsApp {site.contact.whatsapp}</span>
    </a>
  )
}
