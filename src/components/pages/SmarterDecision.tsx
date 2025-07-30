import Image from "next/image";

const SmarterDecision = () => {
  return (
    <div className="bg-[#020820] w-full lg:px-[114px] lg:pt-[128px] lg:pb-[109px] md:py-20 md:px-[60px] px-[24px] pt-[88px] pb-[36px]"  >
      <div className="flex flex-col  items-center  mx-auto gap-[25px]">
        {/* Text Section */}
        <div className="w-full  text-left lg:text-center">
          <h2 className="text-[24px]  md:text-5xl font-bold text-white leading-tight">
            Smarter Decisions,
            <span className="text-[#029CF6]">Informed Experience</span>
          </h2>
          <p className=" text-[#D6D5D9] text-[12px] md:text-[18px] sm:text-lg">
            Explore real-time event details, book your ride, and unlock exclusive deals—all in one place! See it live before you go. 🎉🚗✨
          </p>
        </div>

        {/* Image Section */}
        <div className="w-full  flex justify-center">
          <Image
            src="/mobiles.png"
            alt="Mobile preview"
            width={400}
            height={400}
            className="w-full  sm:max-w-[400px] lg:max-w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default SmarterDecision;
