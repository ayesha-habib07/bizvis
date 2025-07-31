'use client';

import { useModal } from '../context/ModalProvider';
import { useRouter } from 'next/navigation';

type CTAButtonProps = {
  text: string;
  modalType?: 'investment' | 'partner'; // Optional modal
  href?: string; // Optional route
  bgClass: string;
  textColor?: string;
};

export default function CTAButton({
  text,
  modalType,
  href,
  bgClass,
  textColor = 'text-white',
}: CTAButtonProps) {
  const { openModal } = useModal();
  const router = useRouter();

  const handleClick = () => {
    if (modalType) {
      openModal(modalType);
    } else if (href) {
      router.push(href);
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`${bgClass} ${textColor} border border-[#029CF666] outline-none rounded-tr-sm rounded-tl-sm rounded-bl-sm rounded-br-xl px-[25px] py-[10px] text-sm hover:opacity-90 whitespace-nowrap`}
    >
      {text}
    </button>
  );
}
