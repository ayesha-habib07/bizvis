import CTAButton from "../common/CTAButton";

const SignUpBusinessForm = () => {
    return (
        <section
            className="min-h-screen flex items-center justify-center lg:px-[310px] px-[24px] py-[30px] bg-[#203F64]"
           
        >
            <div className="w-full  text-white  lg:gap-[36px]">
                {/* Heading */}
                <div className="md:text-center mb-[30px] md:mb-0 text-start">
                    <h2 className="text-[24px]  md:text-5xl font-bold leading-tight">
                        Showcase Your Space. <br />
                        <span className="text-[#29b6f6]">Drive More Foot Traffic.</span>
                    </h2>
                    <p className="lg:text-[20px] text-[14px] text-gray-300">
                        Early access for venues to join the future of live visibility.
                    </p>
                </div>

                {/* Form */}
                <form className="grid grid-cols-1 sm:grid-cols-2 gap-[24px] backdrop-blur-md">
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
