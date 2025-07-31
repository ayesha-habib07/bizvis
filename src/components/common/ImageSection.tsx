import Image from "next/image";

interface ImageSectionProps {
  src: string;
  alt: string;
  height?: number;
  width?: number;
  maxHeight?: string;
  
}

export default function ImageSection({
  src,
  alt,
  height = 550,
  width = 1440,
  maxHeight = "600px",
}: ImageSectionProps) {
  return (
    <section className=" bg-black">
      <div className="w-full " >
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className={`w-full  object-cover max-h-[${maxHeight}]`}
        />
      </div>
    </section>
  );
}
