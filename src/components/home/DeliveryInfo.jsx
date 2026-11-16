import { MapPin, MessageCircle, Truck } from 'lucide-react'
import { site } from '../../data/site'

const steps = [
  {
    icon: MapPin,
    title: 'Tell us where you stay',
    text: 'Send us your area or suburb on WhatsApp along with the pieces you like.',
  },
  {
    icon: MessageCircle,
    title: 'Get your delivery quote',
    text: 'Delivery is priced on the distance to your home. We confirm the cost before you pay.',
  },
  {
    icon: Truck,
    title: 'We arrange delivery',
    text: 'We agree a delivery date that suits you and bring your furniture to your door.',
  },
]

/** Homepage section explaining distance-based, arranged delivery. */
export default function DeliveryInfo() {
  return (
    <section className="bg-olive text-ivory-light">
      <div className="container-wide grid gap-12 py-20 lg:grid-cols-12 lg:py-24">
        <div className="lg:col-span-5">
          <p className="eyebrow text-sand">Delivery</p>
          <h2 className="display-md mt-6">Delivery is arranged around where you stay.</h2>
          <p className="mt-6 max-w-md text-[16px] leading-relaxed text-ivory/80">{site.deliveryNote}</p>
          <a
            href={site.contact.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 border border-ivory-light/60 px-6 py-3 text-[12px] font-medium uppercase tracking-[0.18em] transition-colors hover:bg-ivory-light hover:text-charcoal"
          >
            <MessageCircle size={16} strokeWidth={1.6} aria-hidden="true" />
            Arrange delivery · {site.contact.whatsapp}
          </a>
        </div>

        <ol className="grid gap-8 sm:grid-cols-3 lg:col-span-7">
          {steps.map(({ icon: Icon, title, text }, i) => (
            <li key={title} className="border-t border-ivory-light/25 pt-6">
              <Icon size={22} strokeWidth={1.3} className="text-sand" aria-hidden="true" />
              <p className="mt-4 text-[11px] uppercase tracking-[0.2em] text-sand">Step {i + 1}</p>
              <h3 className="mt-2 font-serif text-2xl">{title}</h3>
              <p className="mt-3 text-[14px] leading-relaxed text-ivory/75">{text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
