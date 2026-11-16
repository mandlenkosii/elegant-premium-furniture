import { BedSingle, MessageCircle } from 'lucide-react'
import Image from '../common/Image'
import Button from '../common/Button'
import { images } from '../../data/images'
import { site } from '../../data/site'

const offering = [
  'Single beds, bunk beds and mattresses',
  'Study desks and chairs',
  'Wardrobes, bedside tables and storage',
  'Lounge and kitchen furniture for shared spaces',
]

/** Homepage section: furniture for student accommodation providers. */
export default function StudentAccommodation() {
  return (
    <section className="bg-ivory">
      <div className="container-wide grid items-center gap-12 py-20 lg:grid-cols-12 lg:gap-16 lg:py-28">
        <div className="grid grid-cols-5 gap-4 lg:col-span-6">
          <Image
            id={images.studentBunk}
            alt="A student room with a black metal bunk bed and folded towels"
            sizes="(min-width: 1024px) 30vw, 60vw"
            className="col-span-3 aspect-[3/4]"
          />
          <Image
            id={images.studentRoom}
            alt="A simple bedroom with a single bed, bedside table and desk lamp"
            sizes="(min-width: 1024px) 20vw, 40vw"
            className="col-span-2 mt-16 aspect-[3/4]"
          />
        </div>

        <div className="lg:col-span-5 lg:col-start-8">
          <p className="eyebrow flex items-center gap-2">
            <BedSingle size={15} strokeWidth={1.4} aria-hidden="true" />
            Student accommodation
          </p>
          <h2 className="display-md mt-6">Furniture for student accommodation.</h2>
          <p className="mt-6 text-[16px] leading-relaxed text-taupe">
            We cater for student accommodation — from a single room to a full residence. Shop single beds, bunk beds and
            study desks online, or WhatsApp us for bulk pricing for landlords, property owners and student residences.
            Delivery is arranged to suit your location.
          </p>
          <ul className="mt-8 space-y-3 border-t border-charcoal/10 pt-6 text-[15px]">
            {offering.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-[0.6em] h-1.5 w-1.5 shrink-0 rounded-full bg-olive" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              href={site.contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-olive px-7 py-4 text-[12px] font-medium uppercase tracking-[0.18em] text-ivory-light transition-colors hover:bg-charcoal"
            >
              <MessageCircle size={16} strokeWidth={1.6} aria-hidden="true" />
              Get a student quote
            </a>
            <Button to="/collections/student-living" variant="outline">
              Shop student furniture
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
