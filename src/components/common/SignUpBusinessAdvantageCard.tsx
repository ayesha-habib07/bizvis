import Image from "next/image";

type BusinessCardProps = {
  title: string;
  subtitle: string;
  icon: string;
  bgColor?: string;
};

const SignUpBusinessAdvantageCard = ({
  title,
  subtitle,
  icon,
  bgColor='bg-[#029CF6]'
}: BusinessCardProps) => {
  return (
    <div className=" border border-white rounded-tl-[14px] rounded-tr-[14px] rounded-bl-[14px] rounded-br-[44px] overflow-hidden shadow-lg max-w-sm mx-auto hover:scale-105 transition-transform duration-300 p-[30px]">
      
      {/* Content wrapper */}
      <div className="flex flex-col items-start space-y-3">
        
        {/* Icon */}
        <div className={` ${bgColor}    p-2  rounded-full`}>
          <Image
            src={icon}
            alt="Icon"
            width={30}
            height={30}
            className="object-contain"
          />
        </div>

        {/* Title */}
        <h3 className="text-white text-[16px] font-semibold">{title}</h3>

        {/* Subtitle */}
        <p className="text-[12px] sm:text-sm text-white">{subtitle}</p>
      </div>
    </div>
  );
};

export default SignUpBusinessAdvantageCard;
