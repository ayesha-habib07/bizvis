import Image from "next/image";

const Mobile = () => {
  return (
    <div className="bg-[#020820] w-full px-4 py-12 md:py-20"  style={{
        background:
          "linear-gradient(108.03deg, #020820 1.07%, rgba(2, 8, 32, 0.9) 20.31%, #020820 39.55%, rgba(2, 8, 32, 0.95) 58.79%, rgba(2, 8, 32, 0.9) 78.03%, #020820 97.27%)",
      }}>
      <div className="flex flex-col  items-center max-w-7xl mx-auto gap-8">
        {/* Text Section */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Smarter Decisions, <br />
            <span className="text-[#029CF6]">Informed Experience</span>
          </h2>
          <p className="mt-4 text-[#D6D5D9] text-base sm:text-lg">
            Explore real-time event details, book your ride, and unlock exclusive deals—all in one place! See it live before you go. 🎉🚗✨
          </p>
        </div>

        {/* Image Section */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <Image
            src="/mobiles.png"
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

export default Mobile;
