import React from 'react';
import { Link } from 'react-router-dom';
import phoneCall from '../../../Images/EceraWork_Banner/phone-call.png';
import guarantee from '../../../Images/EceraWork_Banner/guarantee.png';
import owner from '../../../Images/EceraWork_Banner/owner.png';
import professional from '../../../Images/EceraWork_Banner/professional.png';

const ContactUs_Section = () => {
    return (<>
        <section className='2xl:w-[1200px] xl:w-3/4 lg:w-4/5 w-11/12 mx-auto my-20 text-center text-gray-500'>
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
        <section className='2xl:w-[1200px] xl:w-3/4 lg:w-4/5 w-11/12 rounded-3xl bg-blue-50 mx-auto mt-28 mb-20 pt-16 pb-20 px-5'>
            <h1 className='text-center md:text-5xl text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 pb-16'>
                Ready to discuss your project ?
            </h1>
            <div className='w-full flex items-center justify-center md:gap-x-12 gap-x-6'>
                <Link
                    to={'/get-estimate'}
                    className='bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-cyan-500 hover:to-blue-600 text-white text-lg font-medium py-3 sm:w-40 w-full text-center shadow-black/20 shadow-xl rounded-lg'
                >
                    Get the Quote
                </Link>
                <Link
                    to={'/contact'}
                    className='bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-blue-600 hover:to-cyan-500 text-white text-lg font-medium py-3 sm:w-40 w-full text-center shadow-black/20 shadow-xl rounded-lg'
                >
                    Contact Us
                </Link>
            </div>
        </section>
    </>);
};

export default ContactUs_Section;