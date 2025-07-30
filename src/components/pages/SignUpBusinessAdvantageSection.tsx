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
    <section className='lg:px-[110px] lg:py-[60px] px-[24px] py-[30px] md:gap-10 gap-[22px] flex flex-col  md:text-center text-start bg-[#020820]' >
      <div>
        <h2 className="text-[24px] font-bold text-white md:text-5xl">Early Access <span className='text-[#029CF6]'>Real Advantage  </span></h2>
        <p className="text-white lg:text-[20px] text-[14px]">Founding Venue Partners receive exclusive launch benefits and priority visibility</p>
      </div>

      <div
        ref={scrollRef}
        className="flex md:grid md:grid-cols-2 lg:grid-cols-4 overflow-x-auto md:overflow-visible gap-[24px] snap-x snap-mandatory scroll-smooth -mx-1 px-1 scrollbar-hide"
      >
        {cards.map((card, i) => (
          <div
            key={i}
            className="snap-start shrink-0 w-[100%] md:w-auto"
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
