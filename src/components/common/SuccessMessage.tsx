'use client';

import Image from 'next/image';

type SuccessMessageProps = {
  title?: string;
  message?: string;
  imageSrc?: string;
};

const SuccessMessage = ({
  title = 'Thank you!',
  message = 'Thank you for joining Bizvis and the future of customer and business connections!',
  imageSrc = '/welcome.png',
}: SuccessMessageProps) => {
  return (
    <div className="  text-center py-16 px-6">
      <div className="flex justify-center mb-4">
        <Image src={imageSrc} alt="Success" width={200} height={200} />
      </div>
      <h2 className="text-3xl text-[#029CF6] font-bold mb-4">
        <span role="img" aria-label="celebrate">🎉</span> {title}
      </h2>
      <p className="text-lg">{message}</p>
    </div>
  );
};

export default SuccessMessage;
