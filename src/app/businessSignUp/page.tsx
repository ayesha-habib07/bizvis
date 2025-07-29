import BusinessSignUpHero from "@/components/pages/BusinessSignUpHero";
import SignUpImage from "@/components/pages/BusinessImagePage";
import SignUpBusinessSection from "@/components/pages/SignUpBusinessSection";
import SignUpBusinessAdvantageSection from "@/components/pages/SignUpBusinessAdvantageSection";
import SignUpBusinessForm from "@/components/pages/SignUpBusinessForm";
import CorneredCTASection from "@/components/common/CorneredCTASection";


export default function BusinessLandingPage() {
    return (
        <>

            <BusinessSignUpHero />
            <SignUpImage />
            <SignUpBusinessSection />
            <SignUpBusinessAdvantageSection />
            <SignUpBusinessForm />
            <CorneredCTASection />


        </>
    )
}
