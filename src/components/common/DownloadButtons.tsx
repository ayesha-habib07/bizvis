// components/DownloadButtons.tsx
const DownloadButtons = () => {
  return (
    <div className="flex gap-4 mt-6">
      <img
        src="/apple-store-button.png"
        alt="Download on the App Store"
        className="h-10 object-contain"
      />
      <img
        src="/play-store-button.png"
        alt="Get it on Google Play"
        className="h-10 object-contain"
      />
    </div>
  );
};

export default DownloadButtons;
