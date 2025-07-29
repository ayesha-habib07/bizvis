'use client';
import { useModal } from '../context/ModalProvider';

type CTAButtonProps = {
  text: string;
  modalType: 'investment' | 'partner'; // add more as needed
  bgClass: string;
  textColor?: string;
};
export default function CTAButton({ text, modalType, bgClass, textColor = "text-white" }: CTAButtonProps) {
  const { openModal } = useModal();

  const handleClick = () => {
    if (modalType) {
      openModal(modalType); // 👈 only open modal if modalType is provided
    }
  };

  return (
    <button
      className={`${bgClass} ${textColor} border-1 border-[#029CF666] outline-none rounded-tr-sm rounded-tl-sm rounded-bl-sm rounded-br-xl px-6 py-2.5 text-sm hover:opacity-90 whitespace-nowrap`}
      onClick={handleClick}
    >
      {text}
    </button>
  );
}
