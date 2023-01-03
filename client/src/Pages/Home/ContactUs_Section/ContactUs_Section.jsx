import React from 'react';
import { Link } from 'react-router-dom';

const ContactUs_Section = () => {
    return (<>
        <section className='xl:w-3/4 lg:w-4/5 w-11/12 rounded-3xl bg-blue-50 mx-auto my-20 pt-16 pb-20 px-5'>
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