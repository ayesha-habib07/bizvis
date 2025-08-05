import CTAButton from "../common/CTAButton";

const CustomerSignUpForm = () => {
    return (
        <section
            className="min-h-screen flex items-center justify-center px-[24px] py-[30px] bg-[#203F64]"
            
        >
            <div className="w-full max-w-4xl text-white">
                {/* Heading */}
                <div className="text-start md:text-center mb-[30px]">
                    <h2 className="text-[24px] md:text-[40px]  lg:text-5xl font-bold leading-tight">
                        Unlock Early <br />
                        <span className="text-[#4DEF08]">Unlock Early Access to Bizvis.</span>
                    </h2>

                </div>

                {/* Form */}
                <form className="grid grid-cols-1 sm:grid-cols-2 gap-6 backdrop-blur-md  ">
                    {/* Business Name */}
                    <div className="flex flex-col">
                        <label className="mb-1 text-sm font-medium">Full Name</label>
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




                    {/* Question Title */}
                    <p className="sm:col-span-2 font-medium">
                        What types of places are you most excited to preview live on Bizvis?
                    </p>

                    {/* Each checkbox item on its own line */}
                    <div className="sm:col-span-2 flex flex-col gap-3 text-white">
                        {[
                            "Nightlife – Bars, clubs, lounges, and nightlife venues",
                            "Restaurants – Dining spots, cafés, food halls, etc.",
                            "Gyms – Fitness centers, boutique studios, yoga classes",
                            "Events & Festivals – Live music, pop-ups, public gatherings",
                            "Retail Experiences – In-store events, new drops, shopping energy"
                        ].map((option, index) => (
                            <label key={index} className="flex items-start gap-2">
                                <input
                                    type="checkbox"
                                    name="placeOptions"
                                    value={option}
                                    className="mt-1 accent-[#4DEF08]"
                                />
                                <span className="text-sm">{option}</span>
                            </label>
                        ))}
                    </div>

                    {/* Submit button (full width) */}
                    <div className="sm:col-span-2 mt-4 text-center">
                        <span>
                            <CTAButton text="Submit" bgClass="bg-[#4DEF0866] " />
                        </span>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default CustomerSignUpForm;
