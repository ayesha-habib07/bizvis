'use client'
import React, { useEffect, useRef, useState } from 'react'
import FeedbackCard from '../common/FeedbackCard'


const cards = [
    {
        icon: "/chris.png",
        name: "Chris D.",
        feedback: `I hate when I get to the gym and it’s packed. Being able to check the crowd before I leave the house? That’s next level!`,
        line: "/line.png",
        quotation: "/quotation.png"
    },
    {
        icon: "/lauren.png",
        name: "Lauren K.",
        feedback: `Honestly, this app sounds like exactly what I’ve been needing. No more random guesses - just real info, when i need it.`,
        line: "/line.png",
        quotation: "/quotation.png"
    },
    {
        icon: "/ryan.png",
        name: "Ryan S.",
        feedback: `I’m always deciding where to eat last minute. Being able to check if it’s packed or chill in real time? Total game-changer`,
        line: "/line.png",
        quotation: "/quotation.png"
    }
]

const CustomerSignUpFeedbackPage = () => {
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
        <section className='lg:px-[110px] lg:py-[60px] px-[24px] py-[30px]  flex flex-col lg:gap-[50px] gap-[22px]  md:text-center text-start bg-[#020820]' >
            <div className='lg:pb-[50px] pb-[22px]'>
                <h2 className="text-[24px] font-bold text-white lg:text-5xl lg:pb-[14px] pb-1.5">Exciting Feedback <span className='text-[#4DEF08]'>About <br /> the Concept</span></h2>
                <p className="text-white md:text-[18px] text-[14px]">Genuine comments from early supporters sharing their thoughts on what's coming.</p>
            </div>

            <div
                ref={scrollRef}
                className="flex md:grid md:grid-cols-3 overflow-x-auto md:overflow-visible gap-[10px] md:gap-[24px] snap-x snap-mandatory scroll-smooth  scrollbar-hide"
            >
                {cards.map((card, i) => (
                    <div
                        key={i}
                        className="snap-start shrink-0 w-[90%]  md:w-auto"
                    >
                        <FeedbackCard 
                            icon={card.icon}
                            name={card.name}
                            feedback={card.feedback}
                            line={card.line}
                            quotation={card.quotation}
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

export default CustomerSignUpFeedbackPage

