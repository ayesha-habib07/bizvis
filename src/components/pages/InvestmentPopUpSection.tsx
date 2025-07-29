'use client';

import { useState } from 'react';
import CTAButton from '@/components/common/CTAButton';
import InvestmentPopUp from '../modals/InvestmentPopUp';

const InvestmentPopUpSection = () => {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <>
      {/* Button that opens popup */}
      <div className="text-center mt-6">
        <button onClick={() => setShowPopup(true)}>
          <CTAButton
            text="Investment Opportunities"
            bgClass="bg-[#F6D412]"
            textColor="text-black"
          />
        </button>
      </div>

      {/* Conditional Popup */}
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full bg-[#284497] rounded-lg overflow-y-auto max-h-[90vh]">
            {/* Close Button */}
            <button
              onClick={() => setShowPopup(false)}
              className="absolute top-4 right-4 text-white text-2xl font-bold"
            >
              &times;
            </button>

            {/* Pop-up content */}
            <InvestmentPopUp />
          </div>
        </div>
      )}
    </>
  );
};

export default InvestmentPopUpSection;
