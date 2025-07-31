'use client';

import SubmitButton from "@/components/common/SubmitButton";
import SubNavbar from "@/components/common/SubNavbar";

import { useState } from "react";

const Contactus = () => {
  const [inquiryType, setInquiryType] = useState('');
  const [agreed, setAgreed] = useState(false);

  return (
    <>
     <SubNavbar />
    <section className="lg:px-[314px] px-8 py-4 lg:py-[45px] bg-[#020820] text-white">
     
      <div className="text-start md:text-center pb-[30px]">
        <h2 className="font-bold  md:text-4xl text-[26px] text-white pb-[14px]">
          Contact Us – Bizvis Inc.
        </h2>
        <p className="leading-[28px] md:text-[16px] text-[14px]">
          If you have questions about our platform, are interested in
          partnerships, investment opportunities, or early access, please fill
          out the form below and a member of our team will get back to you.
        </p>
      </div>

      {/* Form */}
      <form className="grid grid-cols-1 sm:grid-cols-2 gap-6 backdrop-blur-md ">
        {/* Full Name */}
        <div className="flex flex-col">
          <label className="mb-1 text-sm font-medium">Full Name</label>
          <input
            type="text"
            placeholder="Enter full name"
            className="p-3 rounded-lg border-1 border-[#878787] text-[#878787] placeholder-gray-300 outline-none  focus:border-[#29b6f6]"
          />
        </div>

        {/* Email */}
        <div className="flex flex-col">
          <label className="mb-1 text-sm font-medium">Email Address</label>
          <input
            type="email"
            placeholder="Enter your email address"
            className="p-3 rounded-lg border-1 border-[#878787] text-[#878787] placeholder-gray-300 outline-none focus:border-[#29b6f6]"
          />
        </div>

        {/* Organization */}
        <div className="flex flex-col sm:col-span-2">
          <label className="mb-1 text-sm font-medium">Organization</label>
          <input
            type="text"
            placeholder="Your business name or affiliation"
            className="p-3 rounded-lg border-1 border-[#878787] text-[#878787] placeholder-gray-300 outline-none focus:border-[#29b6f6]"
          />
        </div>

        {/* Inquiry Type */}
        <div className="flex flex-col sm:col-span-2">
          <label className="mb-2 text-sm font-medium">Inquiry Type</label>
          <div className="flex flex-wrap gap-7">
            {['Business Interest', 'Business Partnership', 'Invester Inquiry', 'Media / Press', 'Other'].map((type) => (
              <label key={type} className="flex items-center gap-2">
                <input
                  type="radio"
                  name="inquiry"
                  value={type}
                  checked={inquiryType === type}
                  onChange={() => setInquiryType(type)}
                  className="text-blue-500"
                />
                {type}
              </label>
            ))}
          </div>
        </div>

        {/* Tell us why you're here */}
        <div className="flex flex-col sm:col-span-2">
          <label className="mb-1 text-sm font-medium">
            Tell us why you're here
          </label>
          <textarea
            rows={4}
            placeholder="Enter your message or text here"
            className="p-3 rounded-lg border-1 border-[#878787]  text-[#878787] placeholder-gray-300 outline-none  focus:border-[#29b6f6] resize-none"
          ></textarea>
        </div>

        {/* Terms and Conditions */}
        <div className="flex items-start gap-2 sm:col-span-2">
          <input
            type="checkbox"
            id="terms"
            checked={agreed}
            onChange={(e) => setAgreed(e.target.checked)}
            className="mt-1"
          />
          <label htmlFor="terms" className="text-sm text-white">
            I have read and agree to the{" "}
            <a href="/terms-condition" className="underline text-[#29b6f6]">
              Terms of Use
            </a>{" "}
            and{" "}
            <a href="/privacy-policy" className="underline text-[#29b6f6]">
              Privacy Policy
            </a>
            .
          </label>
        </div>

        {/* Submit button */}
        {/* <div className="sm:col-span-2 mt-4 text-center bg-[#184FB9] py-4 rounded-full">
          <button className="text-semibold">Submit</button>
        </div> */}
        <SubmitButton  text='Submit'/>
      </form>

      <p className=" mt-6 text-sm">
        Note: This form is intended for general inquiries. If you wish to
        exercise your privacy rights or request data removal, please contact us
        directly at <span className="text-[#029CF6]">contact@bizvis.io</span>.
      </p>
    </section>
    </>
  );
};


export default Contactus;
