import Image from "next/image";

type BusinessCardProps = {
  title: string;
  subtitle: string;
  bgImage: string;
  icon: string;
};

const SignUpBusinessCard = ({
  title,
  subtitle,
  bgImage,
  icon,
}: BusinessCardProps) => {
  return (
    <div className="bg-[#02082000] border-1 border-white rounded-tl-[14px] rounded-tr-[14px] rounded-bl-[14px] rounded-br-[44px] overflow-hidden shadow-lg  max-w-sm mx-auto hover:scale-105 transition-transform duration-300" >
      {/* Background Image */}
      <div className="w-full h-[150px] sm:h-[180px] md:h-[200px] lg:h-[240px] relative">
        <Image
          src={bgImage}
          alt="Business Card Background"
          layout="fill"
          objectFit="cover"
        />
      </div>

      {/* Content */}
      <div className="flex items-start gap-4 p-4">
        {/* Icon */}
        <div className="rounded-full flex items-center justify-center p-2">
          <Image
            src={icon}
            alt="Icon"
            width={30}
            height={30}
            className="object-contain"
          />
        </div>

        {/* Text */}
        <div>
          <h3 className="text-[16px] sm:text-lg font-semibold text-white">{title}</h3>
          <p className="text-[12px] sm:text-sm text-white mt-1">{subtitle}</p>
        </div>
      </div>
    </div>
  );
};

export default SignUpBusinessCard;
