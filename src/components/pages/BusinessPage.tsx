import Image from "next/image"
import CTAButton from "../common/CTAButton"
import Link from "next/link"

const BusinessPage = () => {
  const cards = [
    {
      title: 'Real-Time Live Stream Messaging',
      description:
        'Let customers experience your offerings like never before—show your business in action.',
      icon: '/icon1.svg',
    },
    {
      title: 'AI-Powered Insights',
      description:
        'Share only what you want. Highlight key features of your business while keeping the rest private.',
      icon: '/icon2.svg',
    },
    {
      title: 'Customizable Privacy Controls:',
      description:
        'Share only what you want. Highlight key features of your business while keeping the rest private.',
      icon: '/icon3.svg',
    },
    {
      title: 'Boost Visibility',
      description:
        'Attract more foot traffic, engage potential customers instantly, through Customer to Business live chat feature and stand out from the competition with sponsorships, premium ad placements, and featured listings.',
      icon: '/icon4.svg',
    },

    {
      title: 'Choose Your Tier Package',
      description:
        `Choose the Plan That Fits Your Flow Stream smarter. Whether you're just starting or scaling big, pick the perfect subscription plan to match your business needs.`,
      icon: '/icon5.svg',
    },
  ]

  return (
    <div
      className="w-full  py-10 md:px-[60px] lg:py-[88px] lg:px-[110px]  px-[24px] bg-[#020820]"
     
    >
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-[24px] md:gap-[42px]">

        {/* Left content */}
        <div className="w-full lg:w-1/2 flex flex-col items-start gap-6">
          <h2 className="text-[24px] md:text-[40px] lg:text-5xl font-bold md:pb-[40px] pb-[24px] text-white">
            For <span className="text-[#029CF6] ">Businesses</span>
          </h2>

          {/* Image grid or slider */}


          <div className="grid grid-cols-1 sm:grid-cols-1 gap-[30px]">
            {cards.map((card, index) => {
              return (
                <div key={index} className="max-w-[440px] rounded-2xl shadow-md flex flex-col md:flex-row items-start  gap-3">
                  <div className="flex-shrink-0">
                    <Image
                      src={card.icon}
                      alt={card.title}
                      width={48}
                      height={48}
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="text-[14px] font-semibold text-white">{card.title}</h3>
                    <p className="text-[12px] text-gray-300 mt-2">{card.description}</p>
                  </div>
                </div>
              )

            })}

          </div>
<Link href="/businessSignUp">
<CTAButton text="Business Early Access – Sign Up Now" bgClass="bg-[#029CF666]" />
</Link>
          
          <p className="text-[#FFFFFF]">Be first to showcase your venue in real time.</p>
        </div>

        {/* Right content */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <Image
            src="/laptop.png"
            alt="Laptop"
            width={680}
            height={507}
            className="w-full max-w-[680px] h-auto"
          />
        </div>

      </div>

    </div>
  )
}

export default BusinessPage
