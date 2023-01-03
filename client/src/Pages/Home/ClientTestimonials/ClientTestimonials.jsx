import React from 'react';
import billSmith from '../../../Images/Testimonials/bill-smith.png';
import isacRedman from '../../../Images/Testimonials/isac-redman.png';
import ronndaZezula from '../../../Images/Testimonials/ronnda-zezula.png';
import phoneCall from '../../../Images/EceraWork_Banner/phone-call.png';
import guarantee from '../../../Images/EceraWork_Banner/guarantee.png';
import owner from '../../../Images/EceraWork_Banner/owner.png';
import professional from '../../../Images/EceraWork_Banner/professional.png';

const ClientTestimonials = () => {
    return (<>
        <section className='xl:w-3/4 lg:w-4/5 w-11/12 mx-auto my-20 text-center text-gray-500'>
            <h1 className='md:text-5xl text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500'>
                What Makes Us Stand Out
            </h1>
            <p className='text-lg mt-5'>
                Our team of expert web designers and developers are the secret to our success. Each creative web expert in our team of is fully capable of delivering the best website solutions to help your brand grow exponentially. We are determined to get you the finest services for your business and we work hard to maintain that.
            </p>
            <div className='lg:w-[800px] md:w-full mx-auto flex md:flex-row flex-col justify-between md:gap-5 gap-10 mt-10'>
                <div>
                    <div className='w-[88px] h-[88px] mx-auto mb-5'>
                        <img src={phoneCall} alt="" />
                    </div>
                    <p className='text-base font-medium'>
                        Constant Client
                    </p>
                    <p className='text-base font-medium'>
                        Coordination
                    </p>
                </div>
                <div className='w-0.5 hidden md:block bg-gray-300'></div>
                <div>
                    <div className='w-[88px] h-[88px] mx-auto mb-5'>
                        <img src={guarantee} alt="" />
                    </div>
                    <p className='text-base font-medium'>
                        Supreme Customer
                    </p>
                    <p className='text-base font-medium'>
                        Satisfaction
                    </p>
                </div>
                <div className='w-0.5 hidden md:block bg-gray-300'></div>
                <div>
                    <div className='w-[88px] h-[88px] mx-auto mb-5'>
                        <img src={owner} alt="" />
                    </div>
                    <p className='text-base font-medium'>
                        100% Ownership
                    </p>
                    <p className='text-base font-medium'>
                        Rights
                    </p>
                </div>
                <div className='w-0.5 hidden md:block bg-gray-300'></div>
                <div>
                    <div className='w-[88px] h-[88px] mx-auto mb-5'>
                        <img src={professional} alt="" />
                    </div>
                    <p className='text-base font-medium'>
                        Industry Proven
                    </p>
                    <p className='text-base font-medium'>
                        Professionals
                    </p>
                </div>
            </div>
        </section>
        <section className='w-full py-12 mb-20 bg-blue-400 text-white'>
            <h1 className='text-center text-[40px] font-semibold'>
                Our clients speak
            </h1>
            <p className='text-center text-lg font-medium'>
                We have been working with clients around the world
            </p>
            <div className='mt-24 mb-10 xl:w-[90%] lg:w-4/5 w-11/12 mx-auto grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-10 gap-y-24 items-start text-center'>
                <div className='px-6 pb-8 pt-12 rounded-tl-[3rem] rounded-br-[3rem] border relative'>
                    <div className='absolute -top-1/4 left-1/2 translate-x-[-50%] w-24 h-24 border-[3px] rounded-full'>
                        <img src={billSmith} alt="" className='w-full h-full rounded-full' />
                    </div>
                    <h4 className='text-lg font-medium uppercase'>Bill Smith</h4>
                    <p className='text-base font-medium'>Business Owner</p>
                    <p className='text-base mt-5 text-start'>
                        <span className='relative mr-2'>
                            <i className="fa-solid fa-quote-left absolute -bottom-6 -left-2 text-8xl text-white/20"></i>
                        </span>
                        I contacted these guys to revamp my business website and the revamp was done within 2 weeks as per my requirements. People behind The Designs Zone are best at what they do.
                    </p>

                    <div className="absolute -bottom-[34px] left-[30px] w-0 h-0 border-b-[34px] border-b-transparent border-l-[34px]">
                        <div className="relative top-0 -left-8 w-0 h-0 border-b-[28px] border-b-transparent border-l-[28px] border-l-blue-400"></div>
                    </div>
                </div>
                <div className='px-6 pb-8 pt-12 rounded-tl-[3rem] rounded-br-[3rem] border relative'>
                    <div className='absolute -top-1/4 left-1/2 translate-x-[-50%] w-24 h-24 border-[3px] rounded-full'>
                        <img src={ronndaZezula} alt="" className='w-full h-full rounded-full' />
                    </div>
                    <h4 className='text-lg font-medium uppercase'>Ronnda Zezula</h4>
                    <p className='text-base font-medium'>Entrepreneur</p>
                    <p className='text-base mt-5 text-start'>
                        <span className='relative mr-2'>
                            <i className="fa-solid fa-quote-left absolute -bottom-6 -left-2 text-8xl text-white/20"></i>
                        </span>
                        My wife needed a website for her home-based business and I got it made for her with the help of The Designs Zone. I was kept in loop at all times and the website turned out amazing.
                    </p>

                    <div className="absolute -bottom-[34px] left-[30px] w-0 h-0 border-b-[34px] border-b-transparent border-l-[34px]">
                        <div className="relative top-0 -left-8 w-0 h-0 border-b-[28px] border-b-transparent border-l-[28px] border-l-blue-400"></div>
                    </div>
                </div>
                <div className='px-6 pb-8 pt-12 rounded-tl-[3rem] rounded-br-[3rem] border relative'>
                    <div className='absolute -top-1/4 left-1/2 translate-x-[-50%] w-24 h-24 border-[3px] rounded-full'>
                        <img src={isacRedman} alt="" className='w-full h-full rounded-full' />
                    </div>
                    <h4 className='text-lg font-medium uppercase'>Isac Redman</h4>
                    <p className='text-base font-medium'>Entrepreneur</p>
                    <p className='text-base mt-5 text-start'>
                        <span className='relative mr-2'>
                            <i className="fa-solid fa-quote-left absolute -bottom-6 -left-2 text-8xl text-white/20"></i>
                        </span>
                        I found The Designs Zone through some searching on Google. The account managers, designers and sales person, all are very humble, polite and a masters in their field. Thank you for such creative work.
                    </p>

                    <div className="absolute -bottom-[34px] left-[30px] w-0 h-0 border-b-[34px] border-b-transparent border-l-[34px]">
                        <div className="relative top-0 -left-8 w-0 h-0 border-b-[28px] border-b-transparent border-l-[28px] border-l-blue-400"></div>
                    </div>
                </div>
            </div>
        </section>
    </>);
};

export default ClientTestimonials;