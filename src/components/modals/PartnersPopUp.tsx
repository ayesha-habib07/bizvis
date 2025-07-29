'use client';
import SubmitButton from '../common/SubmitButton'
import { useModal } from '../context/ModalProvider'
import { useState, useEffect } from 'react';

const PartnerPopUp = () => {
    const [submitted, setSubmitted] = useState(false);
    const [hasMounted, setHasMounted] = useState(false);
    const { modalType, closeModal } = useModal();

    useEffect(() => {
        setHasMounted(true);
    }, []);

    if (modalType !== 'partner') return null;

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setTimeout(() => {
            setSubmitted(true);
        }, 1000);
    };

    return (
        <>
            <section className="fixed inset-0 z-50 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center px-4 overflow-y-auto">
                <div className="bg-[#284497] rounded-[32px] max-w-4xl p-6  text-white relative">
                    <button onClick={closeModal} className="absolute top-4 right-6 text-3xl">&times;</button>
                    {hasMounted && submitted ? (
                        <div className="text-center py-16 px-6">
                            <h2 className="text-3xl text-[#029CF6] font-bold mb-4">
                                <span role="img" aria-label="celebrate">🎉</span> Thank you!
                            </h2>
                            <p className="text-lg">
                                We’ve received your interest. We’ll be in touch shortly.
                            </p>
                        </div>
                    ) : (
                        <>


                            <h2 className='lg:text-4xl text-2xl  pt-6'>Partner with Bizvis —  <span className='text-[#029CF6]'>Let’s Build the Future Together</span></h2>
                            <p className='text-[20px] '>This officially opens a dialogue between Bizvis and the potential partner, showing intent to work together — whether that’s through camera integration, technology, promotion, or data-sharing.</p>




                            <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-4 backdrop-blur-md  pt-8 ">
                                {/* Business Name */}
                                <div className="flex flex-col">
                                    <label className="mb-1 text-sm font-medium">Full Name</label>
                                    <input
                                        type="text"
                                        placeholder="Enter full name"
                                        className="p-3 rounded-lg bg-[#ffffff15] text-white placeholder-gray-300 outline-none border border-transparent focus:border-[#29b6f6]"
                                    />
                                </div>

                                {/* Your Name */}
                                <div className="flex flex-col">
                                    <label className="mb-1 text-sm font-medium">Email Address</label>
                                    <input
                                        type="email"
                                        placeholder="Enter your email address"
                                        className="p-3 rounded-lg bg-[#ffffff15] text-white placeholder-gray-300 outline-none border border-transparent focus:border-[#29b6f6]"
                                    />
                                </div>



                                {/* Zip Code / City */}
                                <div className="flex flex-col">
                                    <label className="mb-1 text-sm font-medium">Linkedin or Website(Optional)</label>
                                    <input
                                        type="text"
                                        placeholder="Enter links"
                                        className="p-3 rounded-lg bg-[#ffffff15] text-white placeholder-gray-300 outline-none border border-transparent focus:border-[#29b6f6]"
                                    />
                                </div>

                                {/* Business Type */}
                                <div className="flex flex-col">
                                    <label className="mb-1 text-sm font-medium">Type of partnership</label>
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

                                <div className="flex flex-col sm:col-span-2">
                                    <label className="mb-1 text-sm font-medium">Website / LinkedIn(Optional) </label>
                                    <input
                                        type="text"
                                        placeholder="Enter links"
                                        className="p-3 rounded-lg bg-[#ffffff15] text-white placeholder-gray-300 outline-none border border-transparent focus:border-[#29b6f6]"
                                    />
                                </div>


                                {/* Tell us why you're here */}
                                <div className="flex flex-col sm:col-span-2">
                                    <label className="mb-1 text-sm font-medium">
                                        Tell us why you’re idea
                                    </label>
                                    <textarea
                                        rows={4}
                                        placeholder="Write"
                                        className="p-3 rounded-lg border-1 border-[#878787]  text-[#878787] placeholder-gray-300 outline-none  focus:border-[#29b6f6] resize-none"
                                    ></textarea>
                                </div>
                                <div className="flex flex-col sm:col-span-2">
                                    <label className="mb-1 text-sm font-medium">Availability for a quick call?</label>

                                    <div className="flex items-center gap-4 mt-2">
                                        <label className="flex items-center gap-2 text-white">
                                            <input
                                                type="radio"
                                                name="availability"
                                                value="yes"
                                                className="accent-[#29b6f6]"
                                            />
                                            Yes
                                        </label>

                                        <label className="flex items-center gap-2 text-white">
                                            <input
                                                type="radio"
                                                name="availability"
                                                value="no"
                                                className="accent-[#29b6f6]"
                                            />
                                            No
                                        </label>
                                    </div>
                                </div>




                                {/* Submit button (full width) */}
                                <div className="w-full sm:col-span-2 mt-4">
                                    <SubmitButton text='Send Proposal' />
                                </div>

                            </form>
                        </>
                    )}
                </div>
            </section>

        </>
    )
}

export default PartnerPopUp