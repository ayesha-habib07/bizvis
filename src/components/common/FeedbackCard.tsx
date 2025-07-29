import Image from "next/image";

type FeedbackCardProps = {
  icon: string;
  name: string;
  feedback: string;
  line: string;
  quotation: string;
};

const FeedbackCard = ({ icon, name, feedback, line, quotation }: FeedbackCardProps) => {
  return (
    <div className="items-center h-[327px] w-[391px] bg-[#4D53B0] flex flex-col sm:flex-row gap-4  p-[20px] rounded-xl shadow-md max-w-2xl mx-auto border border-white rounded-tl-[14px] rounded-tr-[14px] rounded-bl-[14px] rounded-br-[44px]">
      {/* Left Section */}
      <div className="flex flex-col items-center sm:items-start gap-3">
        <Image src={icon} alt="User Icon" width={90} height={90} className="object-contain" />

        <Image src={line} alt="Decorative Line" width={90} height={10} className="object-contain" />

        <h3 className="text-[20px] font-semibold text-white">{name}</h3>
      </div>

      {/* Right Section */}
      <div className="flex-1 flex flex-col gap-3">
        <Image src={quotation} alt="Quotation Mark" width={25} height={25} className="object-contain" />

        <p className="text-start text-[16px] sm:text-base text-white leading-relaxed pb-1.5">
          {feedback}
        </p>
      </div>
    </div>
  );
};

export default FeedbackCard;
