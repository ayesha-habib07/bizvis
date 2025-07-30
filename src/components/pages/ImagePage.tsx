import ImageSection from "../common/ImageSection";

export default function ImagePage() {
  return (
    <div>
      <ImageSection
        src="/Desktop.png"
        alt="Hero Desktop"
        height={800}
        width={1440}
        maxHeight="600px"
        
      />
    </div>
  );
}
