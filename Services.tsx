import feeding from 'data-url:../assets/images/feeding.jpg'
import wheelchairPortrait from 'data-url:../assets/images/wheelchair-portrait.jpg'
import cleanGreenTeam from 'data-url:../assets/images/clean-green-team.jpg'
import cleanWindow from 'data-url:../assets/images/clean-window.jpg'
import Spotlight from './Spotlight'

const CAREGIVING = [
  'Personal care & bathing assistance',
  'Meal prep & feeding support',
  'Mobility & transfer assistance',
  'Medication reminders',
  'Companionship & light conversation',
  'Transportation to appointments',
]

const CLEANING = [
  'Deep cleaning & recurring visits',
  'Kitchen & bathroom sanitizing',
  'Laundry & linen changes',
  'Window & surface detailing',
  'Move-in / move-out cleaning',
  'Office & commercial spaces',
]

function ServiceCard({
  eyebrow,
  title,
  desc,
  items,
  img,
  imgAlt,
  reverse = false,
}: {
  eyebrow: string
  title: string
  desc: string
  items: string[]
  img: string
  imgAlt: string
  reverse?: boolean
}) {
  return (
    <div
      className={`grid md:grid-cols-2 gap-10 md:gap-16 items-center ${
        reverse ? 'md:[&>*:first-child]:order-2' : ''
      }`}
    >
      <div className="clip-reveal">
        <div className="relative rounded-[2rem] overflow-hidden aspect-[4/3] group lift-card">
          <img
            src={img}
            alt={imgAlt}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--pine-950)]/40 via-transparent to-transparent" />
        </div>
      </div>

      <div className="reveal reveal-delay-1">
        <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--gold-600)]">
          {eyebrow}
        </span>
        <h3 className="font-display text-3xl md:text-4xl text-[var(--pine-900)] mt-3 mb-4">
          {title}
        </h3>
        <p className="text-[var(--ink-soft)] leading-relaxed mb-6">{desc}</p>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
          {items.map((item) => (
            <li key={item} className="flex items-start gap-2.5 text-sm text-[var(--ink)]">
              <svg width="14" height="14" viewBox="0 0 14 14" className="mt-1 shrink-0" fill="none">
                <path d="M2 7.5L5.2 10.5L12 3" stroke="var(--gold-600)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default function Services() {
  return (
    <section id="services" className="relative py-28 md:py-36">
      <div className="max-w-6xl mx-auto px-6">
        <div className="reveal max-w-xl mb-20">
          <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--gold-600)]">
            What we do
          </span>
          <h2 className="font-display text-4xl md:text-5xl text-[var(--pine-900)] mt-3">
            Two services. One promise: <span className="italic">show up, and care.</span>
          </h2>
        </div>

        <div className="flex flex-col gap-24 md:gap-32">
          <ServiceCard
            eyebrow="01 — Home &amp; Companion Care"
            title="Caregiving that respects independence"
            desc="Our trained caregivers support seniors and adults who need a hand at home, from daily personal care to simply having someone to talk to over lunch. Every plan is built around the person, not a checklist."
            items={CAREGIVING}
            img={feeding}
            imgAlt="Caregiver helping a client with a meal"
          />
          <ServiceCard
            eyebrow="02 — Home &amp; Office Cleaning"
            title="A cleaner space, every single time"
            desc="Our cleaning crews treat your home like their own — thorough, careful, and consistent, whether it's a weekly refresh or a one-time deep clean before guests arrive."
            items={CLEANING}
            img={cleanWindow}
            imgAlt="Home cleaning specialist wiping a window"
            reverse
          />
        </div>

        {/* small supporting strip */}
        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[wheelchairPortrait, feeding, cleanGreenTeam, cleanWindow].map((src, i) => (
            <Spotlight key={i} className={`reveal reveal-delay-${Math.min(i + 1, 4)} rounded-2xl overflow-hidden aspect-square lift-card`}>
              <img src={src} alt="" className="w-full h-full object-cover relative z-[1] hover:scale-110 transition-transform duration-700" />
            </Spotlight>
          ))}
        </div>
      </div>
    </section>
  )
}
