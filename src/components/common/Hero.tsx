// components/Hero.tsx

import { Main } from "next/document";
import CTAButton from "../common/CTAButton";
import Header from "./Header";
import MainHeroHeading from "./MainHeroHeading";
import CustomerHeading from "./CustomerHeading";
import BusinessHeading from "./BusinessHeading";
interface HeroProps {

  heroType?: "main" | "customer" | "business";
  description: string;
  showCustomerBtn?: boolean;
  showBusinessBtn?: boolean;
  responsiveButtons?: boolean;
  imageSrc?: string;
  imageAlt?: string;
  backgroundImage?: string;
}

export default function Hero({
  heroType = "main",
  description,
  showCustomerBtn = true,
  showBusinessBtn = true,
  responsiveButtons = false,
  imageSrc,
  imageAlt,
  backgroundImage


}: HeroProps) {
  const renderHeading = () => {
    switch (heroType) {
      case "customer":
        return <CustomerHeading />;
      case "business":
        return <BusinessHeading />;
      case "main":
      default:
        return <MainHeroHeading />;
    }
  };
  return (
    <>

      <section

        style={{
          backgroundImage: `linear-gradient(108.03deg, #020820 1.07%, rgba(2, 8, 32, 0.65) 20.31%, #020820 39.55%, rgba(2, 8, 32, 0.65) 58.79%, rgba(2, 8, 32, 0.65) 78.03%, #020820 97.27%), url(${backgroundImage || '/HeroImage.png'})`,
        }}

      >
        <Header />

        <div className="relative w-full min-h-screen text-white flex flex-col justify-start lg:justify-center 
             bg-cover bg-center bg-no-repeat pb-[30px] px-[24px] md:px-[60px] lg:px-[110px] pt-[10px] lg:pt-[20px]">


          <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-stretch justify-between w-full gap-10">



            {/* Left: Text */}
            <div className="w-full lg:w-1/2 text-start lg:text-left gap-[20px]" >
               {renderHeading()}

              <p className=" md:text-[18px] text-[#FFFFFF] height-[30px] text-[14px]">
                {description}
              </p>

              <p className="font-semibold text-sm md:text-base">
                <span className="underline">Sign up now</span> for early access and be first to stream, promote, and grow with Bizvis.
              </p>


            </div>


            <div className="w-full lg:w-1/2 flex justify-start md:justify:center !items-center">
              {imageSrc ? (
                <div className="w-full lg:w-1/2 flex justify-start items-center md:items-center md:justify-center">
                  <img
                    src={imageSrc}
                    alt={imageAlt || "Hero image"}
                    className=" rounded-xl shadow-lg"
                  />
                </div>
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

        </div>
      </section>

    </>
  );
}
