 import CustomerImage from "@/components/pages/CustomerImagePage";
import CustomerSignUpFeedbackPage from "@/components/pages/CustomerSignUpFeedbackPage";
import CustomerSignUpForm from "@/components/pages/CustomerSignUpFormPage";
import CustomerSignUpHero from "@/components/pages/CustomerSignUpHero";
import SignUpFoundingCustomerPage from "@/components/pages/SignUpFoundingCustomerPage";
import CorneredCTASection from "@/components/common/CorneredCTASection";

 export default function CustomerLandingPage() {
    return(
        <>
        <CustomerSignUpHero />
        <CustomerImage />
        
        <SignUpFoundingCustomerPage />
        <CustomerSignUpFeedbackPage />
        <CustomerSignUpForm />
        <CorneredCTASection />
        </>
    )
}