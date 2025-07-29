const SubmitButton = ({ text }: { text: string }) => {
  return (
    <div className="sm:col-span-2 mt-4">
      <button
        type="submit"
        className="w-full bg-[#184FB9] text-white font-semibold py-3 px-8 rounded-full hover:bg-[#143e91] transition-colors"
      >
        {text}
      </button>
    </div>
  );
};

export default SubmitButton;
