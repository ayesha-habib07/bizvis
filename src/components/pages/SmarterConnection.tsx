import Image from "next/image";

const SmarterDecision = () => {
  return (
    <div className="bg-[#020820] w-full px-4 lg:px-[100px] pt-[27px]  lg:pb-[93px]    py-12 md:px-[60px] md:py-20"  >
      <div className="flex flex-col md:items-center  items-start  mx-auto gap-8">
        {/* Text Section */}
        <div className="w-full   md:!text-center lg:text-left">
          <h2 className="text-[24px] md:text-[40px] lg:text-5xl font-bold text-white leading-tight" >
            The Future of
             <span className="text-[#029CF6]"> Smarter  <br/> Connections </span> is here
          </h2>
          <p className="mt-4 text-[#D6D5D9] text-base  md-text-[18px] text-[12px]">
            Bizvis puts your business in the spotlight, helping you attract the right customers and grow with precision
          </p>
        </div>

        {/* Image Section */}
        <div className="w-full flex justify-center">
          <Image
            src="/laptop.png"
            alt="Mobile preview"
            width={400}
            height={400}
            className="w-full max-w-[300px] sm:max-w-[400px] lg:max-w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default SmarterDecision;
