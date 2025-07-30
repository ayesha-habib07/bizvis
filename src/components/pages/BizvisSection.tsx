'use client'
import Image from 'next/image'
import { useRef, useState, useEffect } from 'react'

const BizvisSection = () => {
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

  const cards = [
    {
      title: 'See Before You Go',
      description:
        'Customers get a live view of restaurants, gyms, nightlife, and events before making a decision. No more guesswork—experience the vibe, crowd, and atmosphere in real-time.',
      icon: '/eye.png',
    },
    {
      title: 'Real-Time Vibes',
      description:
        'Access current visuals of the place before visiting. Know how crowded it is, how the environment looks, and decide with confidence.',
      icon: '/phone.png',
    },
    {
      title: 'Transparent Choices',
      description:
        'Make better decisions with honest, real-time previews of venues and businesses around you — anytime, anywhere.',
      icon: '/boost.png',
    },
  ]

  return (
    <section
      className="py-[30px] px-[24px] md:px-[60px] lg:px-16"
      style={{
        background:
          'linear-gradient(108.03deg, #020820 1.07%, rgba(2, 8, 32, 0.9) 20.31%, #020820 39.55%, rgba(2, 8, 32, 0.95) 58.79%, rgba(2, 8, 32, 0.9) 78.03%, #020820 97.27%)',
      }}
    >
      <div className="mx-auto">
        {/* Heading */}
        <div className="md:text-center pb-[22px] md:pb-[59px]">
          <h2 className="text-[24px] md:text-5xl font-bold text-[#D6D5D9]">
            What is <span className="text-[#029CF6]">Bizvis?</span>
          </h2>
          <p className="mt-2 text-[#D6D5D9] text-[14px] md:text-[24px]">
            Connecting Customers and Businesses in Real-Time
          </p>
        </div>

        {/* Cards container */}
<div
  ref={scrollRef}
  className="flex md:grid md:grid-cols-3 overflow-x-auto md:overflow-visible gap-4 snap-x snap-mandatory scroll-smooth px-2"
>
  {cards.map((card, i) => (
    <div
      key={i}
      className="snap-center w-full sm:w-[90%] md:w-auto flex-shrink-0"
    >
      <div className="border-1 rounded-tl-[14px] rounded-tr-[14px] rounded-bl-[14px] rounded-br-[44px] flex md:flex-row flex-col justify-between text-white md:pt-[43px] pt-[29px] md:px-[32px] px-[14px] p-5 md:p-[20px] md:pb-[46px] pb-[25px] rounded-2xl shadow-md w-full gap-6 h-full bg-[#041227]">
        <div>
          <h3 className="text-[16px] font-semibold">{card.title}</h3>
          <p className="text-[12px] mt-[19px]">{card.description}</p>
        </div>
        <div>
          <div className="bg-[#029CF6] p-4 rounded-full flex items-center justify-center w-12 h-12">
            <Image
              src={card.icon}
              alt={card.title}
              width={48}
              height={48}
              className="object-contain"
            />
          </div>
        </div>
      </div>
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
      </div>
    </section>
  )
}

export default BizvisSection
