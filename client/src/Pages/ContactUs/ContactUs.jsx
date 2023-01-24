import React from 'react';
import ContactSideButton from '../Shared/ContactSideButton/ContactSideButton';
import Header from '../Shared/Header/Header';
import PageTitle from '../Shared/PageTitle';
import banner from '../../Images/packages-bg.jpg';
import hpImg from '../../Images/hp-img-closer-bg.png';
import qnaImg from '../../Images/qna.png';
import { Link } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';

const ContactUs = () => {
    return (<>
        <PageTitle title='Contact Us'></PageTitle>
        <Header />
        <ContactSideButton />
        <div>
            <section
                className='py-24 bg-no-repeat bg-center bg-cover text-center'
                style={{ backgroundImage: `url(${banner})` }}
            >
                <h1 className='md:text-5xl text-3xl font-semibold text-white uppercase'>
                    Contact US
                </h1>
                <p className='text-gray-400 text-base pt-10 pb-5'>
                    <Link className='hover:text-gray-200 duration-300 mr-2' to='/'>Home</Link>
                    /<span className='text-gray-100 ml-2'>Contact Us</span>
                </p>
            </section>
            <section className='py-10 2xl:w-[1100px] xl:w-4/5 md:w-11/12 w-[95%] mx-auto'>
                <h1 className='text-center md:text-[40px] md:leading-snug text-3xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500'>
                    Get In Touch
                </h1>
                <p className='text-xl font-medium text-center text-gray-600'>
                    Give us a call or send us an email and we will get back to you.
                </p>
                <div className='mt-10 grid md:grid-cols-3 grid-cols-1 md:w-full sm:w-4/5 w-full mx-auto gap-5'>
                    <div className='border rounded p-7'>
                        <svg
                            className='w-14 h-14 mx-auto p-3 rounded-full bg-gradient-to-r from-blue-800 to-cyan-500 text-white'
                            viewBox="0 0 24 24">
                            <path fill="currentColor" d="M15,12H17A5,5 0 0,0 12,7V9A3,3 0 0,1 15,12M19,12H21C21,7 16.97,3 12,3V5C15.86,5 19,8.13 19,12M20,15.5C18.75,15.5 17.55,15.3 16.43,14.93C16.08,14.82 15.69,14.9 15.41,15.18L13.21,17.38C10.38,15.94 8.06,13.62 6.62,10.79L8.82,8.59C9.1,8.31 9.18,7.92 9.07,7.57C8.7,6.45 8.5,5.25 8.5,4A1,1 0 0,0 7.5,3H4A1,1 0 0,0 3,4A17,17 0 0,0 20,21A1,1 0 0,0 21,20V16.5A1,1 0 0,0 20,15.5Z" />
                        </svg>
                        <p className='text-center text-lg font-medium mt-5 text-gray-600'>
                            Have questions? Call Us.
                        </p>
                        <p className='text-center text-base mt-3 text-gray-500'>
                            <a href='tel:+12486771972'>
                                +1 2486771972
                            </a>
                        </p>
                    </div>
                    <div className='border rounded p-7'>
                        <svg
                            className='w-14 h-14 mx-auto p-3 rounded-full bg-gradient-to-r from-blue-800 to-cyan-500 text-white'
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none" viewBox="0 0 24 24"
                            stroke="currentColor" strokeWidth={2}
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <p className='text-center text-lg font-medium mt-5 text-gray-600'>
                            Email Us
                        </p>
                        <p className='text-center text-base mt-3 text-gray-500'>
                            <a href='mailto:sales@ecerasystem.com'>
                                sales@ecerasystem.com
                            </a>
                        </p>
                    </div>
                    <div className='border rounded p-7'>
                        <svg
                            className='w-14 h-14 mx-auto p-3 rounded-full bg-gradient-to-r from-blue-800 to-cyan-500 text-white'
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                            stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                        </svg>
                        <p className='text-center text-lg font-medium mt-5 text-gray-600'>
                            Address
                        </p>
                        <p className='text-center text-base mt-3 text-gray-500'>
                            33405 Colony Park Drive Farmington Hills MI 48331
                        </p>
                    </div>
                </div>
            </section>
            <section className='my-16 2xl:w-[1100px] sm:w-4/5 w-[95%] md:px-8 md:py-12 py-10 px-5 mx-auto border-[3px] border-cyan-500 rounded-xl relative'>
                <div className='absolute -top-12 left-0 right-0 w-max mx-auto bg-white border-cyan-500 border-[3px] rounded-xl p-5'>
                    <h1 className='text-center md:text-4xl text-3xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500'>Follow Us</h1>
                </div>
                <p className='text-lg text-center font-medium text-gray-500 lg:mx-24 mt-5'>
                    Our Goal Is To Help Our Companies Maintain Or Achieve Best- In-Class Positions In Their Respective Industries And Our Team Works.
                </p>
                <ul className='list-none flex items-center justify-center gap-10 mt-10'>
                    <li>
                        <a
                            href="https://www.facebook.com/ecerasystem/"
                            target="blank"
                        >
                            <i className="fa-brands fa-facebook text-5xl text-blue-600"></i>
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://www.linkedin.com/company/ecera/"
                            target="blank"
                        >
                            <i className="fa-brands fa-linkedin-in text-5xl text-[#0A66C2]"></i>
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://www.instagram.com/ecerasystem/"
                            target="blank"
                        >
                            <i className="fa-brands fa-instagram text-5xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text"></i>
                        </a>
                    </li>
                </ul>
            </section>
            <section className='pb-10' >
                <div className='2xl:w-[1100px] lg:w-4/5 md:w-3/5 sm:w-4/5 w-[92%] mx-auto mb-28 pt-5'>
                    <h1 className='text-center md:text-[40px] text-3xl font-medium  text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 mb-3'>
                        Office Locations
                    </h1>
                    <div className='grid lg:grid-cols-2 grid-cols-1 lg:gap-10 gap-5'>
                        <ul className='flex flex-col gap-y-3 mt-8 sm:p-8 p-6 rounded-lg shadow-[0px_0px_20px_rgb(0,0,0,0.1)]'>
                            <li className='text-xl font-medium text-gray-600'>
                                India - Office
                            </li>
                            <li className='flex items-start gap-3 text-base text-gray-500'>
                                <svg className="w-6 h-6"
                                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
                                </svg>
                                Ecera System Pvt.Ltd, 3 Peer nagar, Uttar Pradesh, India - 233001
                            </li>
                            <li className='flex items-center gap-3 text-gray-500'>
                                <svg
                                    className='w-6 h-6'
                                    viewBox="0 0 24 24">
                                    <path fill="currentColor" d="M15,12H17A5,5 0 0,0 12,7V9A3,3 0 0,1 15,12M19,12H21C21,7 16.97,3 12,3V5C15.86,5 19,8.13 19,12M20,15.5C18.75,15.5 17.55,15.3 16.43,14.93C16.08,14.82 15.69,14.9 15.41,15.18L13.21,17.38C10.38,15.94 8.06,13.62 6.62,10.79L8.82,8.59C9.1,8.31 9.18,7.92 9.07,7.57C8.7,6.45 8.5,5.25 8.5,4A1,1 0 0,0 7.5,3H4A1,1 0 0,0 3,4A17,17 0 0,0 20,21A1,1 0 0,0 21,20V16.5A1,1 0 0,0 20,15.5Z" />
                                </svg>
                                Phone: +1 248-677-1972
                            </li>
                            <li className='flex items-center gap-3 text-gray-500'>
                                <svg
                                    className='w-6 h-6'
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor" strokeWidth={2}
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                Email: sales@ecerasystem.com
                            </li>
                            <li>
                                <a className='w-max flex items-center gap-3 text-blue-600' href="/contact/#">
                                    <svg
                                        className='w-6 h-6'
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                                        stroke="currentColor"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                    </svg>
                                    See on map
                                </a>
                            </li>
                        </ul>
                        <ul className='flex flex-col gap-y-3 mt-8 sm:p-8 p-6 rounded-lg shadow-[0px_0px_20px_rgb(0,0,0,0.1)]'>
                            <li className='text-xl font-medium text-gray-600'>
                                United States - Office
                            </li>
                            <li className='flex items-start gap-3 text-base text-gray-500'>
                                <svg className="w-6 h-6"
                                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
                                </svg>
                                33405 Colony Park Drive Farmington Hills MI 48331
                            </li>
                            <li className='flex items-center gap-3 text-gray-500'>
                                <svg
                                    className='w-6 h-6'
                                    viewBox="0 0 24 24">
                                    <path fill="currentColor" d="M15,12H17A5,5 0 0,0 12,7V9A3,3 0 0,1 15,12M19,12H21C21,7 16.97,3 12,3V5C15.86,5 19,8.13 19,12M20,15.5C18.75,15.5 17.55,15.3 16.43,14.93C16.08,14.82 15.69,14.9 15.41,15.18L13.21,17.38C10.38,15.94 8.06,13.62 6.62,10.79L8.82,8.59C9.1,8.31 9.18,7.92 9.07,7.57C8.7,6.45 8.5,5.25 8.5,4A1,1 0 0,0 7.5,3H4A1,1 0 0,0 3,4A17,17 0 0,0 20,21A1,1 0 0,0 21,20V16.5A1,1 0 0,0 20,15.5Z" />
                                </svg>
                                Phone: +1 248-677-1972
                            </li>
                            <li className='flex items-center gap-3 text-gray-500'>
                                <svg
                                    className='w-6 h-6'
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor" strokeWidth={2}
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                Email: sales@ecerasystem.com
                            </li>
                            <li>
                                <a className='w-max flex items-center gap-3 text-blue-600' href="/contact/#">
                                    <svg
                                        className='w-6 h-6'
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                                        stroke="currentColor"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                    </svg>
                                    See on map
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='2xl:w-[1100px] sm:w-4/5 w-11/12 mx-auto bg-radial rounded-xl flex justify-center md:px-8 md:py-14 py-10 px-5'>
                    <ul className='flex flex-col gap-5 text-white'>
                        <li>
                            <h2 className='md:text-4xl text-3xl font-medium text-center pb-5 text-white'>
                                Email Addresses
                            </h2>
                        </li>
                        <li className='flex items-center gap-x-2 font-medium'>
                            <span>General Inquires</span> -
                            <a href="mailto:info@ecerasystem.com" className='text-gray-200 font-normal'>
                                info@ecerasystem.com
                            </a>
                        </li>
                        <li className='flex items-center gap-x-2 font-medium'>
                            <span>Jobs</span> -
                            <a href="mailto:careers@ecerasystem.com" className='text-gray-200 font-normal'>
                                careers@ecerasystem.com
                            </a>
                        </li>
                        <li className='flex items-center gap-x-2 font-medium'>
                            <span>Sales and Services</span> -
                            <a href="mailto:sales@ecerasystem.com" className='text-gray-200 font-normal'>
                                sales@ecerasystem.com
                            </a>
                        </li>
                    </ul>
                </div>
            </section>
            <section
                className='pb-14 pt-44 bg-no-repeat bg-cover'
                style={{ backgroundImage: `url(${hpImg})` }}
            >
                <div className='2xl:w-[1100px] xl:w-4/5 lg:w-11/12 md:w-4/5 w-11/12 mx-auto flex lg:flex-row flex-col-reverse justify-between'>
                    <div className='lg:w-1/2 w-full lg:text-start text-center'>
                        <h2 className='text-4xl text-blue-900'>
                            Questions? We'll put you on the right path.
                        </h2>
                        <p className='text-base text-gray-500 my-5'>
                            Ask about Ecera System products, pricing, implementation, or anything else. Our highly trained reps are standing by, ready to help.
                        </p>
                        <div className='flex items-center lg:justify-start justify-center gap-x-6'>
                            <button className='text-lg font-medium py-2 px-6 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-cyan-500 hover:to-blue-600 text-white rounded-lg'>
                                Contact Us
                            </button>
                            <button className='text-lg font-medium py-1 bg-transparent text-blue-700 rounded-lg'>
                                Editions & Pricing
                            </button>
                        </div>
                    </div>
                    <div className='lg:w-1/2 w-full'>
                        <img src={qnaImg} alt="" className='max-w-full max-h-full mx-auto' />
                    </div>
                </div>
            </section>
        </div>
        <Footer />
    </>);
};

export default ContactUs;