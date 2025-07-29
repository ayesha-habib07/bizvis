import CTAButton from "../common/CTAButton";
import DownloadButtons from "../common/DownloadButtons";

const ComingSoon = () => {
  return (
    <div className="w-full flex flex-col lg:flex-row  gap-6 relative overflow-hidden  lg:px-0 ">
      {/* Left Section */}
      <div className="w-full lg:w-[70%] bg-gradient-to-br from-[#01132b] to-[#033561] lg:rounded-r-[40px] lg:rounded-l-none text-white flex flex-col justify-center px-[30px] py-10 lg:py-[81px] lg:pl-[165px]">
        <h2 className="text-2xl lg:text-4xl font-semibold mb-4">
          <span className="text-[#029CF6]">Coming Soon</span> to <br />
          App Store and <br />
          Play Store
        </h2>

        <div className="mt-6 space-y-4 flex flex-col"><span>
          <CTAButton text="Business Early Access – Sign Up Now" bgClass="bg-[#029CF666]" /></span>
          <span><CTAButton text="Customer Early Access – Sign Up Now" bgClass="bg-[#4DEF0866]" /></span>
        </div>

        <div className="mt-6">
          <DownloadButtons />
        </div>
      </div>

      {/* Right Placeholder for large screens */}
      <div className="hidden lg:flex w-[30%] bg-gradient-to-br from-[#01132b] to-[#033561] rounded-l-[40px] p-6 text-white items-center justify-center" />

      {/* Paragraph Box */}
      <div className="bg-white text-gray-700 rounded-2xl shadow-lg p-6 lg:p-10 w-full max-w-md mx-auto lg:mx-0 z-10 mt-6 lg:absolute lg:top-[15%] lg:right-[10%]">
        <p className="text-[18px] lg:text-xl font-medium">
          Bizvis is redefining how businesses and customers connect—smarter,
          faster, and powered by AI. Join us early and experience the future of
          seamless connections.
        </p>
      </div>
    </div>
  );
};

export default ComingSoon;
