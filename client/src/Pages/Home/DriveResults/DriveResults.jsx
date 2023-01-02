import React from 'react';
import { Link } from 'react-router-dom';
import banner from '../../../Images/DriveResults_Banner/DriveResults_banner.jpg';

const DriveResults = () => {
    return (
        <section
            className='w-full bg-cover bg-no-repeat py-12 mt-14'
            style={{ backgroundImage: `url(${banner})` }}
        >
            <div className='xl:w-3/5 lg:w-3/4 md:w-4/5 w-11/12 mx-auto'>
                <h1 className='text-center md:text-[40px] text-3xl font-semibold leading-none text-gray-100 pb-2'>
                    We partner with our clients to drive results
                </h1>
                <div className='text-gray-100 mt-8 flex md:flex-row flex-col justify-center items-center xl:gap-24 lg:gap-20 md:gap-10 gap-8'>
                    <div className='text-center'>
                        <p className='text-lg'>Expert</p>
                        <h4 className='text-2xl font-medium py-1'>Team Members</h4>
                        <p className='text-4xl font-medium text-sky-400 mt-2'>--</p>
                    </div>
                    <div className='text-center'>
                        <p className='text-lg'>Results-Driven</p>
                        <h4 className='text-2xl font-medium py-1'>Proactive Approach</h4>
                        <p className='text-4xl font-medium text-sky-400 mt-2'>--</p>
                    </div>
                    <div className='text-center'>
                        <p className='text-lg'>Streamlined</p>
                        <h4 className='text-2xl font-medium py-1'>Execution</h4>
                        <p className='text-4xl font-medium text-sky-400 mt-2'>--</p>
                    </div>
                </div>

                <div className='mt-12'>
                    <h2 className='text-center md:text-3xl text-xl font-semibold leading-none text-gray-100 mb-8'>
                        Ready to discuss your project?
                    </h2>
                    <div className='text-center'>
                        <Link
                            to={'/get-estimate'}
                            className='text-base uppercase font-medium py-2 px-8 rounded text-gray-100 hover:text-[#020925] hover:bg-white duration-300 border-2 border-gray-100 inline-block mx-auto'
                        >
                            Request a quote
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DriveResults;