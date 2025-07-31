
import CTAButton from "./CTAButton";


export default function JoinFutureSection() {
  return (
    <div className="relative bg-[#020820] text-white overflow-hidden py-[30px] px-[24px]  md:px-[60px] ">
      {/* Content Container with Relative Position */}
      <div className="relative max-w-5xl mx-auto p-6 sm:p-10 bg-black flex flex-col gap-6 border border-white/10 rounded-xl">
        {/* Corner Images */}
        <img
          src="/top-left.png"
          alt="Corner TL"
          className="absolute top-0 left-0 w-8 h-8 sm:w-12 sm:h-12 object-contain"
        />
        <img
          src="/top-right.png"
          alt="Corner TR"
          className="absolute top-0 right-0 w-8 h-8 sm:w-12 sm:h-12 object-contain"
        />
        <img
          src="/bottom-left.png"
          alt="Corner BL"
          className="absolute bottom-0 left-0 w-8 h-8 sm:w-12 sm:h-12 object-contain"
        />
        <img
          src="/bottom-right.png"
          alt="Corner BR"
          className="absolute bottom-0 right-0 w-8 h-8 sm:w-12 sm:h-12 object-contain"
        />

        {/* Early Access Buttons */}
        <div className="flex flex-wrap gap-4 justify-center">
          
            <CTAButton href="/customerSignUp" text="Customer Early Access – Sign Up Now" bgClass="bg-[#029CF666]" />
         
       
            <CTAButton href="/businessSignUp" text="Business Early Access – Sign Up Now" bgClass="bg-[#4DEF0866]" />
     
        </div>

        {/* Description Text */}
        <p className="text-center text-sm sm:text-base text-[18px]">
          Whether you’re looking to discover places in real-time or promote your space live, sign up to be the first to use Bizvis.
        </p>

        {/* Heading */}
        <h2 className="text-center text-[28px] sm:text-3xl font-semibold">
          Join the Future of Live Access
        </h2>

        {/* Explore/Investment Buttons */}
        <div className="flex flex-wrap gap-4 justify-center">
          <CTAButton
            text="Investment Opportunities"
            modalType="investment"
            bgClass="bg-[#F6D412]"
            textColor="text-black"
          />

          <CTAButton
            text="Explore Partners"
            modalType="partner"
            bgClass="bg-[#029CF6]"
            textColor="text-black"
          />
        </div>
      </div>
    </div>
  );
}
