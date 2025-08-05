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
    <section className='lg:px-[110px] lg:py-[60px] px-[24px] py-[30px] flex flex-col md:gap-10 gap-[22px] md:text-center  text-startx  bg-[#020820]'>
      <div>
        <h2 className="text-[24px] font-bold text-white lg:text-5xl md:text-[40px]">Built for <br /> <span className='text-[#029CF6]'>Businesses Like Yours</span></h2>
        <p className="text-white md:text-[18px] text-[14px]">Bizvis is designed for any physical space where business is conducted. These venues are just a glimpse—official launch partners will be announced.</p>
      </div>

      <div
        ref={scrollRef}
        className="flex md:grid lg:grid-cols-4 md:grid-cols-2 overflow-x-auto md:overflow-visible md:gap-6 snap-x snap-mandatory scroll-smooth -mx-1 px-1 scrollbar-hide"
      >
        {cards.map((card, i) => (
          <div
            key={i}
            className="snap-start shrink-0 w-[100%] "
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
