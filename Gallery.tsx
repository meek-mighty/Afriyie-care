import blanketWrap from 'data-url:../assets/images/blanket-wrap.jpg'
import parkWalk from 'data-url:../assets/images/park-walk.jpg'
import wheelchairElbow from 'data-url:../assets/images/wheelchair-elbow.jpg'
import cleanBlueShirt from 'data-url:../assets/images/clean-blue-shirt.jpg'
import cleanOfficeTeam from 'data-url:../assets/images/clean-office-team.jpg'
import cleanVacuum from 'data-url:../assets/images/clean-vacuum.jpg'
import garden from 'data-url:../assets/images/garden.jpg'
import parkBench from 'data-url:../assets/images/park-bench.jpg'
import hugWalker from 'data-url:../assets/images/hug-walker.jpg'
import cleanOrangeGloves from 'data-url:../assets/images/clean-orange-gloves.jpg'

const ROW1 = [blanketWrap, parkWalk, wheelchairElbow, cleanBlueShirt, cleanOfficeTeam]
const ROW2 = [cleanVacuum, garden, parkBench, hugWalker, cleanOrangeGloves]

function Row({ images, reverse = false }: { images: string[]; reverse?: boolean }) {
  const doubled = [...images, ...images]
  return (
    <div className="overflow-hidden group/row">
      <div
        className="flex gap-4 w-max marquee-track group-hover/row:[animation-play-state:paused]"
        style={reverse ? { animationDirection: 'reverse' } : undefined}
      >
        {doubled.map((src, i) => (
          <div key={i} className="w-56 h-40 md:w-72 md:h-48 rounded-2xl overflow-hidden shrink-0">
            <img src={src} alt="" className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" />
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Gallery() {
  return (
    <section id="gallery" className="py-28 md:py-36">
      <div className="max-w-6xl mx-auto px-6 mb-14 reveal">
        <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--gold-600)]">
          Moments
        </span>
        <h2 className="font-display text-4xl md:text-5xl text-[var(--pine-900)] mt-3">
          Every visit, a little brighter
        </h2>
      </div>

      <div className="flex flex-col gap-4 reveal reveal-delay-1">
        <Row images={ROW1} />
        <Row images={ROW2} reverse />
      </div>
    </section>
  )
}
