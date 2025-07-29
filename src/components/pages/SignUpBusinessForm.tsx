import CTAButton from "../common/CTAButton";

const SignUpBusinessForm = () => {
    return (
        <section
            className="min-h-screen flex items-center justify-center px-4 py-16 bg-[#17315B]"
           
        >
            <div className="w-full max-w-4xl text-white">
                {/* Heading */}
                <div className="text-center mb-10">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
                        Showcase Your Space. <br />
                        <span className="text-[#29b6f6]">Drive More Foot Traffic.</span>
                    </h2>
                    <p className="mt-2 text-sm sm:text-base text-gray-300">
                        Early access for venues to join the future of live visibility.
                    </p>
                </div>

                {/* Form */}
                <form className="grid grid-cols-1 sm:grid-cols-2 gap-6 backdrop-blur-md p-6 sm:p-10 ">
                    {/* Business Name */}
                    <div className="flex flex-col">
                        <label className="mb-1 text-sm font-medium">Business Name</label>
                        <input
                            type="text"
                            placeholder="Enter your business name"
                            className="p-3 rounded-lg bg-[#ffffff15] text-white placeholder-gray-300 outline-none border border-transparent focus:border-[#29b6f6]"
                        />
                    </div>

                    {/* Your Name */}
                    <div className="flex flex-col">
                        <label className="mb-1 text-sm font-medium">Your Name</label>
                        <input
                            type="text"
                            placeholder="Enter your name"
                            className="p-3 rounded-lg bg-[#ffffff15] text-white placeholder-gray-300 outline-none border border-transparent focus:border-[#29b6f6]"
                        />
                    </div>
                    {/* Email Address (full width) */}
                    <div className="flex flex-col sm:col-span-2">
                        <label className="mb-1 text-sm font-medium">Email Address</label>
                        <input
                            type="email"
                            placeholder="Enter your email address"
                            className="p-3 rounded-lg bg-[#ffffff15] text-white placeholder-gray-300 outline-none border border-transparent focus:border-[#29b6f6]"
                        />
                    </div>

                    {/* Phone Number (full width) */}
                    <div className="flex flex-col sm:col-span-2">
                        <label className="mb-1 text-sm font-medium">Phone Number (Optional)</label>
                        <input
                            type="text"
                            placeholder="Enter phone number"
                            className="p-3 rounded-lg bg-[#ffffff15] text-white placeholder-gray-300 outline-none border border-transparent focus:border-[#29b6f6]"
                        />
                    </div>

                    {/* Zip Code / City */}
                    <div className="flex flex-col">
                        <label className="mb-1 text-sm font-medium">Zip Code / City</label>
                        <input
                            type="text"
                            placeholder="Enter code / name"
                            className="p-3 rounded-lg bg-[#ffffff15] text-white placeholder-gray-300 outline-none border border-transparent focus:border-[#29b6f6]"
                        />
                    </div>

                    {/* Business Type */}
                    <div className="flex flex-col">
                        <label className="mb-1 text-sm font-medium">Business Type</label>
                        <select
                            className="p-3 rounded-lg bg-[#ffffff15] text-white outline-none border border-transparent focus:border-[#29b6f6]"
                        >
                            <option className="text-black" value="">
                                Select Business Type
                            </option>
                            <option className="text-black" value="restaurant">
                                Restaurant
                            </option>
                            <option className="text-black" value="gym">
                                Gym / Studio
                            </option>
                            <option className="text-black" value="nightclub">
                                Nightclub
                            </option>
                            <option className="text-black" value="retail">
                                Retail
                            </option>
                        </select>
                    </div>

                    {/* Instagram */}
                    <div className="flex flex-col">
                        <label className="mb-1 text-sm font-medium">Instagram</label>
                        <input
                            type="text"
                            placeholder="Paste links"
                            className="p-3 rounded-lg bg-[#ffffff15] text-white placeholder-gray-300 outline-none border border-transparent focus:border-[#29b6f6]"
                        />
                    </div>

                    {/* Website */}
                    <div className="flex flex-col">
                        <label className="mb-1 text-sm font-medium">Website</label>
                        <input
                            type="text"
                            placeholder="Paste links"
                            className="p-3 rounded-lg bg-[#ffffff15] text-white placeholder-gray-300 outline-none border border-transparent focus:border-[#29b6f6]"
                        />
                    </div>

                    {/* Submit button (full width) */}
                    <div className="sm:col-span-2 mt-4 text-center">
                        <span>
                            <CTAButton text="Submit" bgClass="[#4DEF08] hover:bg-[#0288d1]" />
                        </span>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default SignUpBusinessForm;
