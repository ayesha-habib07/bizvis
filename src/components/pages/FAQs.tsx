import Head from 'next/head';
import FAQList from '../common/FAQList';
import CTAButton from '../common/CTAButton';
import CorneredCTASection from '../common/CorneredCTASection';
import Footer from '../common/Footer';

export default function FAQs() {
    return (
        <>
            <div className=' bg-[#0D1224]  lg:px-[260px] px-4 py-8 lg:px-[260px] lg:py-[220px]'>
                <Head>
                    <title>Bizvis - FAQs</title>
                </Head>
                {/* <main className="min-h-screen bg-[#0D1224] !py-0 text-white"> */}
                    <FAQList />


                {/* </main> */}
            </div>
            <CorneredCTASection />



        </>
    );
}
