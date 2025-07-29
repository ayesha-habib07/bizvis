'use client'
import Link from 'next/link'
import { useRef, useState, useEffect } from 'react'
import SignUpBusinessAdvantageCard from '../common/SignUpBusinessAdvantageCard'
import CTAButton from '../common/CTAButton';

const cards = [
  {
    title: "Founding Venue Badge",
    subtitle:"Your venue gets premium status in the app",
    icon: "/badge.png"
  },
  {
    title: "Free Setup Support",
    subtitle:"Hardware setup included for pilot locations",
    icon: "/camera-solid.png"
  },
  {
    title: "Launch Promotion",
    subtitle:"Featured in our first market rollout",
    icon: "/horn.png"
  },
  {

    title: "Influence the Product",
    subtitle:"Share feedback to shape Business tools",
    icon: "/messages.png"
  }
]

const SignUpBusinessAdvantageSection = () => {
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
        <h2 className="text-2xl font-bold text-white lg:text-5xl">Early Access <span className='text-[#029CF6]'>Real Advantage  </span></h2>
        <p className="text-white text-[18px]">Founding Venue Partners receive exclusive launch benefits and priority visibility</p>
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
            <SignUpBusinessAdvantageCard
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

       <Link href= "/businessSignUp"><CTAButton text="Business Early Access – Sign Up Now" bgClass="bg-[#029CF666]" /></Link>
     
    </section>
  )
}

export default SignUpBusinessAdvantageSection
