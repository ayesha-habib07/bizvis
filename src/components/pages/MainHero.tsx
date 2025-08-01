// pages/business.tsx
import Hero from "../common/Hero";

export default function MainHero() {
  return (
    <div>
      <Hero
       heroType="main"
        description="Bizvis lets people explore restaurants, gyms, events, and more — live and in real time — before they decide where to go. For businesses, it’s the fastest way to showcase your space, post instant ads, attract more traffic, and get chosen by customers.Sign up now for early access and be first to stream, promote, and grow with Bizvis."
        showCustomerBtn={true}
        showBusinessBtn={true}
        responsiveButtons={false}
        imageSrc="/businessVideoIcon.png"
        imageAlt="Business and Main Hero"
      />
    </div>
  );
}
