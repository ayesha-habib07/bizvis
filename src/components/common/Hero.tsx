// components/Hero.tsx
import { Link } from "lucide-react";
import CTAButton from "../common/CTAButton";

interface HeroProps {
  title: string;
  subtitle: string;
  description: string;
  showCustomerBtn?: boolean;
  showBusinessBtn?: boolean;
  responsiveButtons?: boolean;
  imageSrc?: string;
  imageAlt?: string;
}

export default function Hero({
  title,
  subtitle,
  description,
  showCustomerBtn = true,
  showBusinessBtn = true,
  responsiveButtons = false,
  imageSrc,
  imageAlt,


}: HeroProps) {
  return (
    <section
      className="bg-[#020820]  relative w-full min-h-screen text-white flex justify-center flex-col  py-[30px] px-[24px] md:px-[60px] lg:px-[110px]   lg:py-[60px]"

    >
      <div className="relative z-10 flex flex-col lg:flex-row items-start justify-between  w-full gap-10">
        {/* Left: Text */}
        <div className="w-full lg:w-1/2 text-start lg:text-left gap-[20px]" >
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-semibold leading-[37px] md:leading-[55px]  lg:leading-[76px] sm:text-[26px]">
            {title}
            <br />
            <span className="text-[#4DEF08]">{subtitle}</span>
          </h1>

          <p className=" md:text-[18px] text-[#FFFFFF] height-[30px] text-[14px]">
            {description}
          </p>

          <p className="font-semibold text-sm md:text-base">
            <span className="underline">Sign up now</span> for early access and be first to stream, promote, and grow with Bizvis.
          </p>


        </div>


        <div className="w-[116px] h-[116px] lg:w-1/2 flex flex-col items-start lg:items-center justify-start lg:justify-center">
          {imageSrc ? (
            <img
              src={imageSrc}
              alt={imageAlt || "Hero image"}
              className=" rounded-xl shadow-lg"
            />
          ) : (
            <>

              <span className="mt-2 font-semibold text-sm text-white">Watch Video</span>
            </>
          )}
        </div>




      </div>
      <div className={` mt-[20px] flex flex-col md:flex-row gap-4 items-start justify-start ${responsiveButtons ? "" : "lg:hidden"
        }`}>
        {showCustomerBtn && (


       
            <CTAButton

 href="/customerSignUp"
              text="Customer Early Access – Sign Up Now"
              bgClass="bg-[#4DEF0866]"
              textColor="black"
            />

        )}
        {showBusinessBtn && (
         
            <CTAButton
            href="/businessSignUp"
              text="Business Early Access – Sign Up Now"
              bgClass="bg-[#029CF666]"
              textColor="black"
            />
         

        )}
      </div>


    </section>
  );
}
