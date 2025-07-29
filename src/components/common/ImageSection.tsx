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
  height = 803,
  width = 1440,
  maxHeight = "700px",
}: ImageSectionProps) {
  return (
    <section className="w-full bg-black">
      <div className="w-full max-w-[1440px] ">
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className={`w-full h-auto object-cover max-h-[${maxHeight}]`}
        />
      </div>
    </section>
  );
}
