"use client"
import Link from "next/link"
import CTAButton from "../common/CTAButton"
import SignUpBusinessAdvantageCard from "../common/SignUpBusinessAdvantageCard";
import { useRef, useState, useEffect, use } from "react";        


const cards = [
  {
    title: "Founding Member Badge",
    subtitle:"Your legacy status forever in-app",
    icon: "/badge.png"
  },
  {
    title: "Early Beta Access",
    subtitle:" Be first to experience Bizvis",
    icon: "/camera-solid.png"
  },
  {
    title: "VIP SMS Invites",
    subtitle:"Get launch drops and perks via text ",
    icon: "/horn.png"
  },
  {

    title: "Local Venue Perks",
    subtitle:"Free access, discounts, and more (coming soon)Share feedback to shape Business.",
    icon: "/messages.png"
  }
]
const SignUpFoundingCustomerPage = () => {
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
        <>
            <section className='lg:px-[110px] lg:py-[60px] px-4 py-8 flex flex-col lg:gap-[60px] gap-[24px] md:text-center text-start bg-[#020820]' >
                <div>
                    <h2 className="text-[24px] font-bold text-white lg:text-[48px]">Founding Customers Perks — <br /> <span className='text-[#4DEF08]'>For Early Signups Only</span></h2>
                </div>

                <div
                    ref={scrollRef}
                    className="flex md:grid md:grid-cols-3 overflow-x-auto md:overflow-visible gap-[24px] snap-x snap-mandatory scroll-smooth -mx-1 px-1 scrollbar-hide"
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
                                bgColor="bg-[#4DEF08]"
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

               <Link href="/customerSignUp"><CTAButton  text="Customer Early Access – Sign Up Now" bgClass="bg-[#4DEF0866]" /></Link>


            </section>
        </>
    )
}

export default SignUpFoundingCustomerPage