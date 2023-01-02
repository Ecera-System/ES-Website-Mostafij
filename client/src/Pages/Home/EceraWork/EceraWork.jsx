import React, { useState } from 'react';
import banner from '../../../Images/EceraWork_Banner/EcearWork_Banner.jpg';

const EceraWork = () => {
    const [isOver, setIsOver] = useState('');

    return (
        <section className='xl:w-3/4 lg:w-4/5 w-11/12 mx-auto pt-20'>
            <h1 className='text-center md:text-[40px] text-3xl font-semibold leading-none text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500'>
                How Ecera does it...
            </h1>
            <div className='mt-14 grid md:grid-cols-2 grid-cols-1 items-center md:gap-0 gap-10'>
                <div className='rounded-2xl overflow-hidden relative' style={{ boxShadow: '0 4px 30px 10px rgb(0 0 0 0.30)' }}>
                    <img className='w-full h-auto' src={banner} alt="" />
                    <div
                        className='absolute top-0 left-0 w-full h-full bg-[#000066b3] flex items-center justify-center'
                    >
                        <p className='text-white p-8 text-center text-lg font-medium'>
                            {
                                isOver ?
                                    isOver :
                                    'Ecera System helps your Business to setup Competitive And Interactive Websites and Mobile Apps incorporating the latest technology.'
                            }
                        </p>
                    </div>
                </div>
                <ul className='md:text-lg text-base font-bold uppercase text-gray-600 xl:pl-20 md:pl-10 flex flex-col lg:gap-8 gap-6'>
                    <li
                        className='hover:text-blue-600 duration-300 cursor-pointer'
                        onMouseOver={() =>
                            setIsOver('Ecera System helps your Business to setup Competitive and Interactive Websites and Mobile Apps incorporating the latest technology.')
                        }
                    >
                        Custom Website Design & Development
                    </li>
                    <li
                        className='hover:text-blue-600 duration-300 cursor-pointer'
                        onMouseOver={() =>
                            setIsOver('Ecera System helps your business to establish a better Digital Reach via incorporating competitive Digital Marketing Services leveraging the highly used Social and Digital Media Platforms')
                        }
                    >
                        Revamp your Digital Reach
                    </li>
                    <li
                        className='hover:text-blue-600 duration-300 cursor-pointer'
                        onMouseOver={() =>
                            setIsOver("Using Ecera System's Remote Employee services you can hire effective and efficient employees at an affordable rate")
                        }
                    >
                        Hire a Competitive Workforce
                    </li>
                    <li
                        className='hover:text-blue-600 duration-300 cursor-pointer'
                        onMouseOver={() =>
                            setIsOver("Customize your plan to meet all your business needs. From Professional and Competitive Websites to a renewd Digital Presence to hiring a competitive work force that fits your budget. You want it, we probably got it !!")
                        }
                    >
                        A one Stop Solution to all your Business Needs
                    </li>
                </ul>
            </div>
        </section >
    );
};

export default EceraWork;