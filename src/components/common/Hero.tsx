// components/Hero.tsx
import CTAButton from "../common/CTAButton";

interface HeroProps {
  title: string;
  subtitle: string;
  description: string;
  showCustomerBtn?: boolean;
  showBusinessBtn?: boolean;
}

export default function Hero({
  title,
  subtitle,
  description,
  showCustomerBtn = true,
  showBusinessBtn = true,
}: HeroProps) {
  return (
    <section
      className="relative w-full min-h-screen text-white flex items-center justify-center px-10 lg:px-[110px] py-16"
      style={{
        background:
          "linear-gradient(108.03deg, #020820 1.07%, rgba(2, 8, 32, 0.9) 20.31%, #020820 39.55%, rgba(2, 8, 32, 0.95) 58.79%, rgba(2, 8, 32, 0.9) 78.03%, #020820 97.27%)",
      }}
    >
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between max-w-6xl w-full gap-10">
        {/* Left: Text */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h1 className="text-3xl md:text-4xl font-extrabold leading-snug sm:text-[26px]">
            {title}
            <br />
            <span className="text-[#4DEF08]">{subtitle}</span>
          </h1>

          <p className="mt-4 text-sm md:text-base text-[#FFFFFF] height-[30px] text-[18px]">
            {description}
          </p>

          <p className="mt-2 font-semibold text-sm md:text-base">
            <span className="underline">Sign up now</span> for early access and be first to stream, promote, and grow with Bizvis.
          </p>
        </div>

        {/* Right: Video Icon and CTA */}
        <div className="w-full lg:w-1/2 flex flex-col items-start lg:items-center justify-start lg:justify-center">
          <div className="w-14 h-14 min-w-[56px] min-h-[56px] rounded-full bg-blue-500 flex items-center justify-center text-white text-2xl">
            ▶
          </div>

          <span className="mt-2 font-semibold text-sm">Watch Video</span>

          <div className="mt-6 flex flex-col md:flex-row gap-4 items-start justify-start lg:hidden">
            {showCustomerBtn && (
              <CTAButton
                text="Customer Early Access – Sign Up Now"
                bgClass="bg-[#4DEF08]"
                textColor="black"
              />
            )}
            {showBusinessBtn && (
              <CTAButton
                text="Business Early Access – Sign Up Now"
                bgClass="bg-[#F6D412]"
                textColor="black"
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
