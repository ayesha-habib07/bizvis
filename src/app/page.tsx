import BizvisSection from "@/components/pages/BizvisSection";
import BusinessPage from "@/components/pages/BusinessPage";
import ImagePage from "@/components/pages/ImagePage";
import SmarterDecision from "@/components/pages/SmarterDecision";
import SmaterConnection from "@/components/pages/SmarterConnection";
import Customers from "@/components/pages/Customers";
import ComingSoon from "@/components/pages/ComingSoon";
import FAQs from "@/components/pages/FAQs";
import MainHero from "@/components/pages/MainHero";


export default function Home() {
  
  
  return (
    <>
      <MainHero />
      <ImagePage />
      <BizvisSection />
      <BusinessPage />
      <SmaterConnection />
      <Customers />
      <SmarterDecision />
      <ComingSoon />
      <FAQs />
    </>
  );
}
