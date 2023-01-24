import React from 'react';

const EceraWork = () => {
    return (
        <section className='pt-28 pb-20 bg-gray-50'>
            <div className='2xl:w-[1200px] xl:w-3/4 lg:w-4/5 md:w-11/12 sm:w-4/5 w-11/12 mx-auto'>
                <div className='mb-16'>
                    <h1 className='text-center md:text-[40px] text-3xl font-semibold leading-none text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500'>
                        We don't just build websites we build websites that sell.
                    </h1>
                    <h4 className='text-center mt-3 md:text-xl text-lg font-normal text-gray-600'>
                        Ecera system supports you for your all round business solutions.
                    </h4>
                </div>
                <div className="w-full grid md:grid-cols-2 grid-cols-1 gap-10 text-gray-500">
                    <div className="w-full rounded-lg border bg-white p-4 sm:p-8 lg:px-6 xl:px-8">
                        <div className="faq-btn flex w-full text-left">
                            <div className="mr-5 flex h-10 w-full max-w-[40px] items-center justify-center text-blue-200" >
                                <i className="fa-solid fa-angles-down text-2xl"></i>
                            </div>
                            <div className="w-full">
                                <h4 className="text-lg font-semibold text-black">
                                    Custom Website Design & Development
                                </h4>
                            </div>
                        </div>
                        <div className="faq-content pl-[62px]">
                            <p className="py-3 text-base leading-relaxed text-body-color">
                                Ecera System helps your Business to setup Competitive and Interactive Websites and Mobile Apps incorporating the latest technology.
                            </p>
                        </div>
                    </div>
                    <div className="w-full rounded-lg border bg-white p-4 sm:p-8 lg:px-6 xl:px-8" >
                        <div className="faq-btn flex w-full text-left">
                            <div className="mr-5 flex h-10 w-full max-w-[40px] items-center justify-center text-blue-200" >
                                <i className="fa-solid fa-angles-down text-2xl"></i>
                            </div>
                            <div className="w-full">
                                <h4 className="text-lg font-semibold text-black">
                                    Revamp your Digital Reach
                                </h4>
                            </div>
                        </div>
                        <div x-show="openFaq2" className="faq-content pl-[62px]">
                            <p className="py-3 text-base leading-relaxed text-body-color">
                                Ecera System helps your business to establish a better Digital Reach via incorporating competitive Digital Marketing Services leveraging the highly used Social and Digital Media Platforms
                            </p>
                        </div>
                    </div>
                    <div className="w-full rounded-lg border bg-white p-4 sm:p-8 lg:px-6 xl:px-8">
                        <div className="faq-btn flex w-full text-left">
                            <div className="mr-5 flex h-10 w-full max-w-[40px] items-center justify-center text-blue-200" >
                                <i className="fa-solid fa-angles-down text-2xl"></i>
                            </div>
                            <div className="w-full">
                                <h4 className="text-lg font-semibold text-black">
                                    Hire a competitive workforce
                                </h4>
                            </div>
                        </div>
                        <div x-show="openFaq3" className="faq-content pl-[62px]">
                            <p className="py-3 text-base leading-relaxed text-body-color">
                                Using Ecera System's Remote Employee services you can hire effective and efficient employees at an affordable rate
                            </p>
                        </div>
                    </div>
                    <div className="w-full rounded-lg border bg-white p-4 sm:p-8 lg:px-6 xl:px-8">
                        <div className="faq-btn flex w-full text-left">
                            <div className="mr-5 flex h-10 w-full max-w-[40px] items-center justify-center text-blue-200" >
                                <i className="fa-solid fa-angles-down text-2xl"></i>
                            </div>
                            <div className="w-full">
                                <h4 className="text-lg font-semibold text-black">
                                    A one Stop Solution to all your Business Needs
                                </h4>
                            </div>
                        </div>
                        <div x-show="openFaq3" className="faq-content pl-[62px]">
                            <p className="py-3 text-base leading-relaxed text-body-color">
                                Customize your plan to meet all your business needs. From Professional and Competitive Websites to a renewd Digital Presence to hiring a competitive work force that fits your budget. You want it, we probably got it !!
                            </p>
                        </div>
                    </div>
                </div >
            </div >
        </section>
    );
};

export default EceraWork;