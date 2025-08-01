import Hero from "../common/Hero";

export default function BusinessLanding() {
  return (
    <>
      <Hero
       heroType="business"
        description="Direct marketing, drive more traffic, and boost revenue — all through real-time streaming, AI-powered insights, and smart analytics. Gain a deeper understanding of your customer patterns and preferences to grow smarter with Bizvis."
        showCustomerBtn={false}
        showBusinessBtn={true}
        responsiveButtons={true}
        imageSrc="/businessVideoIcon.png"
        imageAlt="Business and Main Hero"
        backgroundImage="/businessHero.png"
      />
    </>
  );
}
