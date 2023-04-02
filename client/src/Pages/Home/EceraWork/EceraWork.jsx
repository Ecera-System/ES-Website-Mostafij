import React, { useState } from 'react';

const EceraWork = () => {
    const [isOver, setIsOver] = useState('');

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
                <div className='mt-14 grid md:grid-cols-2 grid-cols-1 items-center md:gap-0 gap-10'>
                    <div className='rounded-2xl overflow-hidden relative' style={{ boxShadow: '0 4px 30px 10px rgb(0 0 0 0.30)' }}>
                        <img loading='lazy' className='w-full h-auto' src='/Images/EceraWork_Banner/EcearWork_Banner.jpg' alt="" />
                        <div
                            className='absolute top-0 left-0 w-full h-full bg-[#000066cb] flex items-center justify-center'
                        >
                            <p className='text-white p-8 text-center text-lg font-medium'>
                                {
                                    isOver ?
                                        isOver :
                                        'Ecera System helps your Business to setup Competitive And Interactive Websites and Mobile Apps incorporating the latest technology'
                                }
                            </p>
                        </div>
                    </div>
                    <ul className='md:text-lg text-base font-bold uppercase text-gray-600 xl:pl-16 md:pl-10 flex flex-col lg:gap-8 gap-6'>
                        <li
                            className='hover:text-blue-600 duration-300 cursor-pointer flex items-start gap-2'
                            onMouseOver={() =>
                                setIsOver('Ecera System helps your Business to setup Competitive and Interactive Websites and Mobile Apps incorporating the latest technology.')
                            }
                        >
                            <i className="fa-solid fa-arrow-left-long mt-1.5"></i>
                            Custom Website Design & Development
                        </li>
                        <li
                            className='hover:text-blue-600 duration-300 cursor-pointer flex items-start gap-2'
                            onMouseOver={() =>
                                setIsOver('Ecera System helps your business to establish a better Digital Reach via incorporating competitive Digital Marketing Services leveraging the highly used Social and Digital Media Platforms')
                            }
                        >
                            <i className="fa-solid fa-arrow-left-long mt-1.5"></i>
                            Revamp your Digital Reach
                        </li>
                        <li
                            className='hover:text-blue-600 duration-300 cursor-pointer flex items-start gap-2'
                            onMouseOver={() =>
                                setIsOver("Using Ecera System's Remote Employee services you can hire effective and efficient employees at an affordable rate")
                            }
                        >
                            <i className="fa-solid fa-arrow-left-long mt-1.5"></i>
                            Hire a Competitive Workforce
                        </li>
                        <li
                            className='hover:text-blue-600 duration-300 cursor-pointer flex items-start gap-2'
                            onMouseOver={() =>
                                setIsOver("Customize your plan to meet all your business needs. From Professional and Competitive Websites to a renewd Digital Presence to hiring a competitive work force that fits your budget. You want it, we probably got it !!")
                            }
                        >
                            <i className="fa-solid fa-arrow-left-long mt-1.5"></i>
                            A one Stop Solution to all your Business Needs
                        </li>
                    </ul>
                </div>
            </div >
        </section>
    );
};

export default EceraWork;