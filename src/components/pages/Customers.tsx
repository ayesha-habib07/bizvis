import Image from "next/image"
import CTAButton from "../common/CTAButton"

const Customers = () => {
  const cards = [
    {
      title: 'See Before You Decide',
      description:
        'Use real-time live streams to explore businesses before you visit—AI helps match you with the right fit.',
      icon: '/customer3.svg',
    },
    {
      title:'Enhanced Decision-Making',
      description:'Compare, engage, and make choices that feel right with AI-assisted recommendations.',
      icon: '/customer1.svg',
    },
    {
      title:'Direct Communication',
      description:'Chat live with businesses and Peer customers, ask questions, and make informed decisions—all in one place.',
      icon: '/customer2.svg',
    }

  ]
  return (
    <div
      className="w-full  lg:py-[86px] lg:px-[110px] px-[24px] py-[20px] "
       style={{
        background:
          "linear-gradient(108.03deg, #020820 1.07%, rgba(2, 8, 32, 0.9) 20.31%, #020820 39.55%, rgba(2, 8, 32, 0.95) 58.79%, rgba(2, 8, 32, 0.9) 78.03%, #020820 97.27%)",
      }}
    >
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10">
        
        {/* Left content */}
        <div className="w-full lg:w-1/2 flex flex-col items-start gap-6">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            For Customers
          </h2>

          {/* Image grid or slider */}
          <div className="grid grid-cols-1 sm:grid-cols-1 gap-4">
            {
              cards.map((card, index) => {
                return (
                  <div key={index} className="max-w-[440px] rounded-2xl shadow-md flex flex-col md:flex-row items-start gap-3">
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
                      <h3 className="text-[16px] font-semibold text-white">{card.title}</h3>
                      <p className="text-[14px] text-gray-300 mt-2">{card.description}</p>
                    </div>
                  </div>
                )
              })
            }
          </div>

         <CTAButton text="Customer Early Access – Sign Up Now" bgClass="bg-[#4DEF0866]" />
          <p className="text-[#FFFFFF]">Join the first waveof real-time explorers.</p>
        </div>

        {/* Right content */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <Image
            src="/Mobile.png"
            alt="Laptop"
            width={312}
            height={627}
            className="w-full max-w-[312px] h-auto"
          />
        </div>

      </div>

    </div>
  )
}

export default Customers
