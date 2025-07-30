'use client';
import Image from 'next/image';
import SuccessMessage from '../common/SuccessMessage';

import SubmitButton from '../common/SubmitButton';
import { useModal } from '../context/ModalProvider';
import { useState, useEffect } from 'react';

const InvestmentPopUp = () => {
  const [submitted, setSubmitted] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);
  const { modalType, closeModal } = useModal();

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (modalType !== 'investment') return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setTimeout(() => {
      setSubmitted(true);
    }, 1000);
  };

  return (
    <section className="fixed inset-0 z-50 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center px-4 overflow-y-auto">
      <div className="bg-[#4353AF] rounded-[32px] max-w-[695px] max-h-[968px] mt-8 p-6 text-white relative">
        <button onClick={closeModal} className="absolute top-4 right-6 text-3xl">
          &times;
        </button>

        {hasMounted && submitted ? (
          <SuccessMessage />

        ) : (
          <>
            <h2 className="lg:text-4xl text-2xl pt-6">
              Become an Investor in the Future of how business{' '}
              <span className="text-[#029CF6]">and customers engage in real-time!</span>
            </h2>
            <p className="text-[20px]">
              Join our visionary investor circle and be part of transforming how people explore the world around them.
            </p>

            <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-4 backdrop-blur-md pt-8">
              <div className="flex flex-col">
                <label className="mb-1 text-sm font-medium">Full Name</label>
                <input
                  type="text"
                  required
                  placeholder="Enter full name"
                  className="p-3 rounded-lg bg-[#ffffff15] text-white placeholder-gray-300 outline-none border border-transparent focus:border-[#29b6f6]"
                />
              </div>

              <div className="flex flex-col">
                <label className="mb-1 text-sm font-medium">Email Address</label>
                <input
                  type="email"
                  required
                  placeholder="Enter your email address"
                  className="p-3 rounded-lg bg-[#ffffff15] text-white placeholder-gray-300 outline-none border border-transparent focus:border-[#29b6f6]"
                />
              </div>

              <div className="flex flex-col">
                <label className="mb-1 text-sm font-medium">LinkedIn or Website (Optional)</label>
                <input
                  type="text"
                  placeholder="Enter links"
                  className="p-3 rounded-lg bg-[#ffffff15] text-white placeholder-gray-300 outline-none border border-transparent focus:border-[#29b6f6]"
                />
              </div>

              <div className="flex flex-col">
                <label className="mb-1 text-sm font-medium">Type of Investor</label>
                <select className="p-3 rounded-lg bg-[#ffffff15] text-white outline-none border border-transparent focus:border-[#29b6f6]">
                  <option className="text-black" value="">Select Investor Type</option>
                  <option className="text-black" value="restaurant">Restaurant</option>
                  <option className="text-black" value="gym">Gym / Studio</option>
                  <option className="text-black" value="nightclub">Nightclub</option>
                  <option className="text-black" value="retail">Retail</option>
                </select>
              </div>

              <div className="flex flex-col sm:col-span-2">
                <label className="mb-1 text-sm font-medium">Tell us a bit about your interest</label>
                <textarea
                  rows={4}
                  placeholder="Write"
                  className="p-3 rounded-lg border-1 border-[#878787] text-[#878787] placeholder-gray-300 outline-none focus:border-[#29b6f6] resize-none"
                ></textarea>
              </div>

              <div className="w-full sm:col-span-2 mt-4">
                <SubmitButton text="Submit Interest" />
              </div>
            </form>
          </>
        )}
      </div>
    </section>
  );
};

export default InvestmentPopUp;
