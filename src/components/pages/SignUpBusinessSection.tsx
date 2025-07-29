'use client'
import { useRef, useState, useEffect } from 'react'
import SignUpBusinessCard from '../common/SignUpBusinessCard'

const cards = [
  {
    bgImage: "/tasteful-district.png",
    title: "Taste District",
    subtitle: "Restaurant",
    icon: "/tasteIcon.png"
  },
  {
    bgImage: "/pulse-fitness.png",
    title: "PulseFit",
    subtitle: "Gym / Studio",
    icon: "/pulseIcon.png"
  },
  {
    bgImage: "/club-tempo.png",
    title: "Club Tempo",
    subtitle: "Nightclub",
    icon: "/clubIcon.png"
  },
  {
    bgImage: "/style.png",
    title: "StyleBay",
    subtitle:"Retail",
    icon: "/styleIcon.png"
  }
]

const SignUpBusinessSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)

  const handleScroll = () => {
    if (scrollRef.current) {
      const scrollLeft = scrollRef.current.scrollLeft
      const width = scrollRef.current.offsetWidth
      const index = Math.round(scrollLeft / width)
      setActiveIndex(index)
    }
  }

  useEffect(() => {
    const ref = scrollRef.current
    if (ref) {
      ref.addEventListener('scroll', handleScroll)
      return () => ref.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <section className='lg:px-[110px] lg:py-[60px] px-4 py-8 flex flex-col gap-6 text-center' style={{
        background:
          "linear-gradient(108.03deg, #020820 1.07%, rgba(2, 8, 32, 0.9) 20.31%, #020820 39.55%, rgba(2, 8, 32, 0.95) 58.79%, rgba(2, 8, 32, 0.9) 78.03%, #020820 97.27%)",
      }}>
      <div>
        <h2 className="text-2xl font-bold text-white lg:text-5xl">Built for <br /> <span className='text-[#029CF6]'>Businesses Like Yours</span></h2>
        <p className="text-white text-[18px]">Bizvis is designed for any physical space where business is conducted. These venues are just a glimpse—official launch partners will be announced.</p>
      </div>

      <div
        ref={scrollRef}
        className="flex md:grid md:grid-cols-3 overflow-x-auto md:overflow-visible gap-4 snap-x snap-mandatory scroll-smooth -mx-1 px-1 scrollbar-hide"
      >
        {cards.map((card, i) => (
          <div
            key={i}
            className="snap-start shrink-0 w-[90%] sm:w-[80%] md:w-auto"
          >
            <SignUpBusinessCard
              bgImage={card.bgImage}
              title={card.title}
              subtitle={card.subtitle}
              icon={card.icon}
            />
          </div>
        ))}
      </div>

      {/* Dots for small devices only */}
        <div className="flex justify-center mt-4 md:hidden">
          {cards.map((_, i) => (
            <div
              key={i}
              className={`h-2 w-2 mx-1 rounded-full transition-all duration-300 ${activeIndex === i ? 'bg-[#029CF6] scale-125' : 'bg-gray-300'
                }`}
            ></div>
          ))}
        </div>
     
    </section>
  )
}

export default SignUpBusinessSection
