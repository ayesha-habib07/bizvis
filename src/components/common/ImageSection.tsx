import Image from "next/image";

interface ImageSectionProps {
  src: string;
  alt: string;
  height?: number;
  width?: number;
  mobileHeight?: number; // add this for responsive behavior
}

export default function ImageSection({
  src,
  alt,

}: ImageSectionProps) {
  return (
    <section className="bg-black">
      <div className="relative w-full h-[207px] sm:h-[400px] md:h-[600px] lg:h-[803px]">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover w-full h-full"
          priority
        />
      </div>
    </section>
  );
}
