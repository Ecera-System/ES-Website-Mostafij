import React, { useState } from 'react';
import ContactSideButton from '../Shared/ContactSideButton/ContactSideButton';
import Header from '../Shared/Header/Header';
import PageTitle from '../Shared/PageTitle';
import banner from '../../Images/packages-bg.jpg';
import './packages.css'
import Footer from '../Shared/Footer/Footer';
import { Link } from 'react-router-dom';
import offerArea from '../../Images/es-offers/offer-area.png';
import logoBg from '../../Images/es-offers/logo-bg.png';
import webTab from '../../Images/es-offers/web-tab-sprite.jpg';

const PackOffers = () => {
    const [openAns1, setOpenAns1] = useState(true);
    const [openAns2, setOpenAns2] = useState(false);
    const [openAns3, setOpenAns3] = useState(false);
    const [openAns4, setOpenAns4] = useState(false);


    return (<>
        <PageTitle title='Ecera System Offers'></PageTitle>
        <Header />
        <ContactSideButton />
        <div>
            <section className='w-full py-12 bg-no-repeat bg-center bg-cover text-center'
                style={{ backgroundImage: `url(${banner})` }}
            >
                <h1 className='md:text-3xl text-2xl font-semibold text-yellow-400'>
                    Delivering Best-in-Class <br />
                    <span className='md:text-6xl text-4xl font-bold text-white my-2 inline-block'>Web Services</span>
                    <br /> for Your Business
                </h1>
                <h4 className='text-gray-300 md:text-lg text-base italic font-medium py-4 mx-5'>
                    Bridging the gap between today and your business' future with the finest <br /> website designing and development solutions.
                </h4>
                <div className='mt-10 flex justify-center'>
                    <ul className='text-cyan-400 font-medium text-lg text-start'>
                        <li>
                            <i className="fa-solid fa-diamond text-xs mr-2"></i>
                            Result-oriented Web Designs
                        </li>
                        <li>
                            <i className="fa-solid fa-diamond text-xs mr-2"></i>
                            Round the Clock Support
                        </li>
                        <li>
                            <i className="fa-solid fa-diamond text-xs mr-2"></i>
                            Bring the World to Your Website
                        </li>
                        <li>
                            <Link
                                to={"/get-estimate"}
                                className='inline-block text-center mt-5 w-full bg-cyan-400 hover:bg-transparent text-white hover:text-cyan-400 border-2 hover:border-2 border-cyan-400 text-lg py-2 px-5 rounded-full duration-300'
                            >
                                Get a quote
                            </Link>
                        </li>
                    </ul>
                </div>
            </section>
            <section
                className='py-16 bg-no-repeat bg-right-top bg-contain'
                style={{ backgroundImage: `url(${offerArea})` }}
            >
                <div className='xl:w-1/2 lg:w-3/5 md:w-4/5 w-11/12 mx-auto'>
                    <h1 className='text-center md:text-5xl md:leading-snug text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500'>
                        We Don't Just Build Websites, We Build Websites That Sells
                    </h1>
                    <p className='md:text-lg text-base font-medium text-gray-500 text-center mt-2'>
                        Every business has certain requirement, and our experts design and develop websites accourding to your business’ needs.
                    </p>
                </div>
                <div
                    className='w-full bg-no-repeat bg-left-top md:py-28 py-10'
                    style={{ backgroundImage: `url(${logoBg})` }}
                >
                    <div className='xl:w-[1200px] lg:w-11/12 md:w-3/5 w-11/12 mx-auto grid lg:grid-cols-2 grid-cols-1 lg:items-start lg:gap-0 gap-10'>
                        <div className='xl:w-[570px] lg:w-full md:w-[570px] md:block hidden mx-auto h-[480px] rounded-tl-[40%] rounded-br-[40%] overflow-hidden'>
                            <div
                                className={`bg-no-repeat bg-left-top w-full h-[600px] duration-1000 ease-linear ${(openAns1 && '[background-position-y:0px!Important]') ||
                                    (openAns2 && '[background-position-y:-750px!Important]') ||
                                    (openAns3 && '[background-position-y:-1500px!Important]') ||
                                    (openAns4 && '[background-position-y:-3500px!Important]')
                                    }`}
                                style={{ backgroundImage: `url(${webTab})` }}
                            />
                        </div>
                        <ul className='flex flex-col gap-5 mt-5 lg:pl-12'>
                            <li>
                                <button
                                    className={`flex items-center text-3xl font-bold text-gray-700 hover:text-blue-700 duration-300 ${openAns1 && 'text-blue-700'}`}
                                    onClick={() => {
                                        setOpenAns1(!openAns1);
                                        setOpenAns2(false);
                                        setOpenAns3(false);
                                        setOpenAns4(false);
                                    }}
                                >
                                    E-Commerce Websites
                                    {
                                        openAns1 ?
                                            <i class="fa-solid fa-caret-up mt-1 ml-3"></i>
                                            : <i class="fa-solid fa-caret-down mt-1 ml-3"></i>
                                    }
                                </button>
                                {
                                    openAns1 &&
                                    <p className='text-base text-gray-600 mt-5'>
                                        One of the foremost fronts of business these days is websites and online platforms to perform sales and product displays. This is why we often recommend our customers with products to sell, to go for our e-commerce website services. Our well-designed e-commerce websites help you achieve your sales targets in no time.
                                    </p>
                                }
                            </li>
                            <li>
                                <button
                                    className={`flex items-center text-3xl font-bold text-gray-700 hover:text-blue-700 duration-300 ${openAns2 && 'text-blue-700'}`}
                                    onClick={() => {
                                        setOpenAns2(!openAns2);
                                        setOpenAns1(false);
                                        setOpenAns3(false);
                                        setOpenAns4(false);
                                    }}
                                >
                                    CMS Websites
                                    {
                                        openAns2 ?
                                            <i class="fa-solid fa-caret-up mt-1 ml-3"></i>
                                            : <i class="fa-solid fa-caret-down mt-1 ml-3"></i>
                                    }
                                </button>
                                {
                                    openAns2 &&
                                    <p className='text-base text-gray-600 mt-5'>
                                        We deal with CMS websites. Our experts understand how CMS or a 'content management system' allows you to control and manage the content within your website - without technical training. Over the past several years, we have been assisting businesses to keep up the pace by developing a CMS that drives more business and is simple to use.
                                    </p>
                                }
                            </li>
                            <li>
                                <button
                                    className={`flex items-center text-3xl font-bold text-gray-700 hover:text-blue-700 duration-300 ${openAns3 && 'text-blue-700'}`}
                                    onClick={() => {
                                        setOpenAns3(!openAns3);
                                        setOpenAns1(false);
                                        setOpenAns2(false);
                                        setOpenAns4(false);
                                    }}
                                >
                                    Custom Websites
                                    {
                                        openAns3 ?
                                            <i class="fa-solid fa-caret-up mt-1 ml-3"></i>
                                            : <i class="fa-solid fa-caret-down mt-1 ml-3"></i>
                                    }
                                </button>
                                {
                                    openAns3 &&
                                    <p className='text-base text-gray-600 mt-5'>
                                        There are millions of websites online on the world wide web today and even then each has its separate purpose and essence. We, at The Designs Zone understand the individual personality of each website and work on it accordingly. Our custom-built web solutions are personalized and offer unique functionalities that are harder to attain through websites that follow some predefined platform.
                                    </p>
                                }
                            </li>
                            <li>
                                <button
                                    className={`flex items-center text-3xl font-bold text-gray-700 hover:text-blue-700 duration-300 ${openAns4 && 'text-blue-700'}`}
                                    onClick={() => {
                                        setOpenAns4(!openAns4);
                                        setOpenAns1(false);
                                        setOpenAns2(false);
                                        setOpenAns3(false);
                                    }}
                                >
                                    Responsive Websites
                                    {
                                        openAns4 ?
                                            <i class="fa-solid fa-caret-up mt-1 ml-3"></i>
                                            : <i class="fa-solid fa-caret-down mt-1 ml-3"></i>
                                    }
                                </button>
                                {
                                    openAns4 &&
                                    <p className='text-base text-gray-600 mt-5'>
                                        We create easy to use and responsive websites by adapting proper codes for multiple formats. Our web developers integrate special CSS and HTML codes that makes website automatically identify the viewer’s device and resize, shrink or enlarge pages and will look good on all devices.
                                    </p>
                                }
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
            <section className='py-16 2xl:w-[1200px] xl:w-4/5 md:w-11/12 sm:w-4/5 w-11/12 mx-auto'>
                <h1 className='text-center md:text-[40px] md:leading-snug text-3xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500'>
                    Pick A Suitable Package According To Your Needs
                </h1>
                <p className='md:text-lg text-base font-medium text-center text-gray-500 lg:mx-32 my-5'>
                    We are well aware of the competition. That is the reason why we have a fair pricing model. We ensure quality over quantity on each order.
                </p>
                <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-7 pt-10'>
                    <div className='card shadow-[0px_5px_15px_0px_rgba(0,0,20,0.5)] p-6 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600'>
                        <div>
                            <h1 className='md:text-6xl text-5xl font-bold text-white mb-5'>
                                $10.00
                            </h1>
                        </div>
                        <hr />
                        <div className='my-3 relative'>
                            <h1 className='md:text-3xl text-2xl font-semibold text-white'>
                                Web Design- <br /> Free
                            </h1>
                            <div className='absolute top-1/2 -translate-y-1/2 -right-6 bg-black text-white font-medium text-center px-5 py-1'>
                                <div className='absolute top-1/2 -translate-y-1/2 -left-5 w-0 h-0 border-r-black border-transparent border-t-[28px] border-b-[28px] border-r-[20px] border-l-0'>
                                </div>
                                <p>75% OFF!</p>
                                <del>$120</del>
                            </div>
                        </div>
                        <hr />
                        <ul className='text-sm font-medium text-white flex flex-col gap-3 my-3 w-full h-[300px] overflow-y-auto scrollBar'>
                            <li className='flex items-start gap-2'>
                                <i className="fa-solid fa-check mt-1"></i>
                                1 Page Website Design
                            </li>
                            <li className='flex items-start gap-2'>
                                <i className="fa-solid fa-check mt-1"></i>
                                Content Management System (WordPress)
                            </li>
                            <li className='flex items-start gap-2'>
                                <i className="fa-solid fa-check mt-1"></i>
                                Mobile Responsive
                            </li>
                            <li className='flex items-start gap-2'>
                                <i className="fa-solid fa-check mt-1"></i>
                                1 Banner Design
                            </li>
                            <li className='flex items-start gap-2'>
                                <i className="fa-solid fa-check mt-1"></i>
                                Contact/Query Form
                            </li>
                            <li className='flex items-start gap-2'>
                                <i className="fa-solid fa-check mt-1"></i>
                                3 Revisions
                            </li>
                            <li className='flex items-start gap-2'>
                                <i className="fa-solid fa-check mt-1"></i>
                                Complete W3C Certified HTML Guarantee
                            </li>
                            <li className='flex items-start gap-2'>
                                <i className="fa-solid fa-check mt-1"></i>
                                Complete Deployment
                            </li>
                            <li className='flex items-start gap-2'>
                                <i className="fa-solid fa-check mt-1"></i>
                                48 to 72 hours TAT
                            </li>
                            <li className='flex items-start gap-2'>
                                <i className="fa-solid fa-check mt-1"></i>
                                *** Value Added Services ***
                            </li>
                            <li className='flex items-start gap-2'>
                                <i className="fa-solid fa-check mt-1"></i>
                                Complete Source Files
                            </li>
                            <li className='flex items-start gap-2'>
                                <i className="fa-solid fa-check mt-1"></i>
                                100% Ownership Rights
                            </li>
                            <li className='flex items-start gap-2'>
                                <i className="fa-solid fa-check mt-1"></i>
                                100% Approval Assurance
                            </li>
                            <li className='flex items-start gap-2'>
                                <i className="fa-solid fa-check mt-1"></i>
                                *** ADD ONS ***
                            </li>
                            <li className='flex items-start gap-2'>
                                <i className="fa-solid fa-check mt-1"></i>
                                $50 Per Additional Page.
                            </li>
                            <li className='flex items-start gap-2'>
                                <i className="fa-solid fa-check mt-1"></i>
                                $100 Additional for 1 Year Domain & Hosting.
                            </li>
                            <li className='flex items-start gap-2'>
                                <i className="fa-solid fa-check mt-1"></i>
                                $150 Payment Integration
                            </li>
                            <li className='flex items-start gap-2'>
                                <i className="fa-solid fa-check mt-1"></i>
                                $250 Shopping Cart Integration
                            </li>
                            <li className='flex items-start gap-2'>
                                <i className="fa-solid fa-check mt-1"></i>
                                *NO MONTHLY OR ANY HIDDEN FEE*
                            </li>
                        </ul>
                        <div className='w-full'>
                            <button
                                className='mt-3 w-full font-medium uppercase bg-cyan-400 hover:bg-transparent text-white hover:text-cyan-400 border-2 hover:border-2 border-cyan-400 text-base py-3 px-5 rounded-full duration-300'
                            >
                                Buy Now
                            </button>
                        </div>
                    </div>
                    <div className='card shadow-[0px_5px_15px_0px_rgba(0,0,20,0.5)] p-6 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600'>
                        <div>
                            <h1 className='md:text-6xl text-5xl font-bold text-white mb-5'>
                                $200.00
                            </h1>
                        </div>
                        <hr />
                        <div className='my-3 relative'>
                            <h1 className='md:text-3xl text-2xl font-semibold text-white'>
                                Web Design- <br /> Plus
                            </h1>
                            <div className='absolute top-1/2 -translate-y-1/2 -right-6 bg-black text-white font-medium text-center px-5 py-1'>
                                <div className='absolute top-1/2 -translate-y-1/2 -left-5 w-0 h-0 border-r-black border-transparent border-t-[28px] border-b-[28px] border-r-[20px] border-l-0'>
                                </div>
                                <p>75% OFF!</p>
                                <del>$798</del>
                            </div>
                        </div>
                        <hr />
                        <ul className='text-sm font-medium text-white flex flex-col gap-3 my-3 w-full h-[300px] overflow-y-auto scrollBar'>
                            <li className='flex items-start gap-2'>
                                <i className="fa-solid fa-check mt-1"></i>
                                3 Pages Website Design
                            </li>
                            <li className='flex items-start gap-2'>
                                <i className="fa-solid fa-check mt-1"></i>
                                Content Management System (WordPress)
                            </li>
                            <li className='flex items-start gap-2'>
                                <i className="fa-solid fa-check mt-1"></i>
                                Mobile Responsive
                            </li>
                            <li className='flex items-start gap-2'>
                                <i className="fa-solid fa-check mt-1"></i>
                                Hover Effects
                            </li>
                            <li className='flex items-start gap-2'>
                                <i className="fa-solid fa-check mt-1"></i>
                                2 Banner Designs
                            </li>
                            <li className='flex items-start gap-2'>
                                <i className="fa-solid fa-check mt-1"></i>
                                Sliding Banner
                            </li>
                            <li className='flex items-start gap-2'>
                                <i className="fa-solid fa-check mt-1"></i>
                                2 Stock Photos (You can provide us more)
                            </li>
                            <li className='flex items-start gap-2'>
                                <i className="fa-solid fa-check mt-1"></i>
                                Contact/Query Form
                            </li>
                            <li className='flex items-start gap-2'>
                                <i className="fa-solid fa-check mt-1"></i>
                                6 Revisions
                            </li>
                            <li className='flex items-start gap-2'>
                                <i className="fa-solid fa-check mt-1"></i>
                                Complete W3C Certified HTML
                            </li>
                            <li className='flex items-start gap-2'>
                                <i className="fa-solid fa-check mt-1"></i>
                                Complete Deployment
                            </li>
                            <li className='flex items-start gap-2'>
                                <i className="fa-solid fa-check mt-1"></i>
                                *** Value Added Services ***
                            </li>
                            <li className='flex items-start gap-2'>
                                <i className="fa-solid fa-check mt-1"></i>
                                Complete Source Files
                            </li>
                            <li className='flex items-start gap-2'>
                                <i className="fa-solid fa-check mt-1"></i>
                                100% Ownership Rights
                            </li>
                            <li className='flex items-start gap-2'>
                                <i className="fa-solid fa-check mt-1"></i>
                                100% Approval Assurance
                            </li>
                            <li className='flex items-start gap-2'>
                                <i className="fa-solid fa-check mt-1"></i>
                                *** ADD ONS ***
                            </li>
                            <li className='flex items-start gap-2'>
                                <i className="fa-solid fa-check mt-1"></i>
                                $50 Per Additional Page.
                            </li>
                            <li className='flex items-start gap-2'>
                                <i className="fa-solid fa-check mt-1"></i>
                                $100 Additional for 1 Year Domain & Hosting.
                            </li>
                            <li className='flex items-start gap-2'>
                                <i className="fa-solid fa-check mt-1"></i>
                                $150 Payment Integration
                            </li>
                            <li className='flex items-start gap-2'>
                                <i className="fa-solid fa-check mt-1"></i>
                                $250 Shopping Cart Integration
                            </li>
                            <li className='flex items-start gap-2'>
                                <i className="fa-solid fa-check mt-1"></i>
                                *NO MONTHLY OR ANY HIDDEN FEE*
                            </li>
                        </ul>
                        <div className='w-full'>
                            <button
                                className='mt-3 w-full font-medium uppercase bg-cyan-400 hover:bg-transparent text-white hover:text-cyan-400 border-2 hover:border-2 border-cyan-400 text-base py-3 px-5 rounded-full duration-300'
                            >
                                Buy Now
                            </button>
                        </div>
                    </div>
                    <div className='card shadow-[0px_5px_15px_0px_rgba(0,0,20,0.5)] p-6 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600'>
                        <div>
                            <h1 className='md:text-6xl text-5xl font-bold text-white mb-5'>
                                $400.00
                            </h1>
                        </div>
                        <hr />
                        <div className='my-3 relative'>
                            <h1 className='md:text-3xl text-2xl font-semibold text-white'>
                                Web Design- <br /> Pro
                            </h1>
                            <div className='absolute top-1/2 -translate-y-1/2 -right-6 bg-black text-white font-medium text-center px-5 py-1'>
                                <div className='absolute top-1/2 -translate-y-1/2 -left-5 w-0 h-0 border-r-black border-transparent border-t-[28px] border-b-[28px] border-r-[20px] border-l-0'>
                                </div>
                                <p>75% OFF!</p>
                                <del>$1298</del>
                            </div>
                        </div>
                        <hr />
                        <ul className='text-sm font-medium text-white flex flex-col gap-3 my-3 w-full h-[300px] overflow-y-auto scrollBar'>
                            <li className='flex items-start gap-2'>
                                <i className="fa-solid fa-check mt-1"></i>
                                Up to 6 Pages Website Design
                            </li>
                            <li className='flex items-start gap-2'>
                                <i className="fa-solid fa-check mt-1"></i>
                                6 Stock Photos (You can provide us more)
                            </li>
                            <li className='flex items-start gap-2'>
                                <i className="fa-solid fa-check mt-1"></i>
                                3 Banner Designs
                            </li>
                            <li className='flex items-start gap-2'>
                                <i className="fa-solid fa-check mt-1"></i>
                                Sliding Banner
                            </li>
                            <li className='flex items-start gap-2'>
                                <i className="fa-solid fa-check mt-1"></i>
                                Hover Effects
                            </li>
                            <li className='flex items-start gap-2'>
                                <i className="fa-solid fa-check mt-1"></i>
                                Content Management System (WordPress)
                            </li>
                            <li className='flex items-start gap-2'>
                                <i className="fa-solid fa-check mt-1"></i>
                                Mobile Responsive
                            </li>
                            <li className='flex items-start gap-2'>
                                <i className="fa-solid fa-check mt-1"></i>
                                FREE 12 Month Domain Name and Hosting
                            </li>
                            <li className='flex items-start gap-2'>
                                <i className="fa-solid fa-check mt-1"></i>
                                5 Professional Email ID's
                            </li>
                            <li className='flex items-start gap-2'>
                                <i className="fa-solid fa-check mt-1"></i>
                                Search Engine Submission
                            </li>
                            <li className='flex items-start gap-2'>
                                <i className="fa-solid fa-check mt-1"></i>
                                Unlimited Revisions
                            </li>
                            <li className='flex items-start gap-2'>
                                <i className="fa-solid fa-check mt-1"></i>
                                Complete W3C Certified HTML
                            </li>
                            <li className='flex items-start gap-2'>
                                <i className="fa-solid fa-check mt-1"></i>
                                Industry specified Team of Expert Designers and Developers
                            </li>
                            <li className='flex items-start gap-2'>
                                <i className="fa-solid fa-check mt-1"></i>
                                Complete Deployment
                            </li>
                            <li className='flex items-start gap-2'>
                                <i className="fa-solid fa-check mt-1"></i>
                                48 to 72 hours TAT
                            </li>
                            <li className='flex items-start gap-2'>
                                <i className="fa-solid fa-check mt-1"></i>
                                *** Value Added Services ***
                            </li>
                            <li className='flex items-start gap-2'>
                                <i className="fa-solid fa-check mt-1"></i>
                                Complete Source Files
                            </li>
                            <li className='flex items-start gap-2'>
                                <i className="fa-solid fa-check mt-1"></i>
                                100% Ownership Rights
                            </li>
                            <li className='flex items-start gap-2'>
                                <i className="fa-solid fa-check mt-1"></i>
                                100% Approval Assurance
                            </li>
                            <li className='flex items-start gap-2'>
                                <i className="fa-solid fa-check mt-1"></i>
                                *** ADD ONS ***
                            </li>
                            <li className='flex items-start gap-2'>
                                <i className="fa-solid fa-check mt-1"></i>
                                $50 Per Additional Page.
                            </li>
                            <li className='flex items-start gap-2'>
                                <i className="fa-solid fa-check mt-1"></i>
                                $100 Additional for 1 Year Domain & Hosting.
                            </li>
                            <li className='flex items-start gap-2'>
                                <i className="fa-solid fa-check mt-1"></i>
                                $150 Payment Integration
                            </li>
                            <li className='flex items-start gap-2'>
                                <i className="fa-solid fa-check mt-1"></i>
                                $250 Shopping Cart Integration
                            </li>
                            <li className='flex items-start gap-2'>
                                <i className="fa-solid fa-check mt-1"></i>
                                *NO MONTHLY OR ANY HIDDEN FEE*
                            </li>
                        </ul>
                        <div className='w-full'>
                            <button
                                className='mt-3 w-full font-medium uppercase bg-cyan-400 hover:bg-transparent text-white hover:text-cyan-400 border-2 hover:border-2 border-cyan-400 text-base py-3 px-5 rounded-full duration-300'
                            >
                                Buy Now
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            <section className='py-12 w-full bg-[#290259]'>
                <div className='2xl:w-[1200px] sm:w-4/5 w-11/12 mx-auto grid lg:grid-cols-2 grid-cols-1 gap-10 items-center'>
                    <div className='lg:text-start text-center'>
                        <h1 className='text-4xl font-bold text-white'>
                            Call Us & Discuss
                        </h1>
                        <h2 className='md:text-2xl text-xl font-medium text-gray-300 mt-4'>
                            Your Project With Our Experts Today
                        </h2>
                    </div>
                    <div className='flex sm:flex-row flex-col justify-between gap-6'>
                        <a
                            href='tel:+1 2486771972'
                            className='py-3 w-full text-center rounded-full border-2 border-cyan-400 text-cyan-400 text-lg font-medium'
                        >
                            <i className="fa-solid fa-phone mr-2"></i>
                            +1 2486771972
                        </a>
                        <Link
                            to="/get-estimate"
                            className='py-3 text-center w-full rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-cyan-500 hover:to-blue-600 text-white text-lg font-medium'
                        >
                            Get a quote
                        </Link>
                    </div>
                </div>
            </section>
            <section className='py-16 bg-gray-100'>
                <div className='2xl:w-[1200px] sm:w-4/5 w-[94%] mx-auto'>
                    <h1 className='text-center md:text-[40px] md:leading-snug text-3xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500'>
                        Our Easy 4 Steps Design Process
                    </h1>
                    <div className='my-10'>
                        <ul className='grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 justify-center xl:gap-5 gap-10'>
                            <li className='card-3d p-5'>
                                <div className='bg-white p-10 w-max mx-auto rounded-full'>
                                    <svg
                                        className='w-12 h-12 text-pink-600'
                                        viewBox="0 0 24 24"
                                    >
                                        <path fill="currentColor" d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12C22,10.84 21.79,9.69 21.39,8.61L19.79,10.21C19.93,10.8 20,11.4 20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.6,4 13.2,4.07 13.79,4.21L15.4,2.6C14.31,2.21 13.16,2 12,2M19,2L15,6V7.5L12.45,10.05C12.3,10 12.15,10 12,10A2,2 0 0,0 10,12A2,2 0 0,0 12,14A2,2 0 0,0 14,12C14,11.85 14,11.7 13.95,11.55L16.5,9H18L22,5H19V2M12,6A6,6 0 0,0 6,12A6,6 0 0,0 12,18A6,6 0 0,0 18,12H16A4,4 0 0,1 12,16A4,4 0 0,1 8,12A4,4 0 0,1 12,8V6Z" />
                                    </svg>
                                </div>
                                <div className='mt-6'>
                                    <h2 className='text-base uppercase font-medium text-center'>
                                        STRATEGY
                                    </h2>
                                    <p className='text-base text-gray-500'>
                                        Our initial step is to examine your brand to build an execution plan for unmatched design and profitable functionalities for the website.
                                    </p>
                                </div>
                            </li>
                            <li className='card-3d p-5'>
                                <div className='bg-white p-10 w-max mx-auto rounded-full'>
                                    <svg
                                        className='w-12 h-12 text-pink-600'
                                        viewBox="0 0 24 24"
                                    >
                                        <path fill="currentColor" d="M12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2C17.5,2 22,6 22,11A6,6 0 0,1 16,17H14.2C13.9,17 13.7,17.2 13.7,17.5C13.7,17.6 13.8,17.7 13.8,17.8C14.2,18.3 14.4,18.9 14.4,19.5C14.5,20.9 13.4,22 12,22M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20C12.3,20 12.5,19.8 12.5,19.5C12.5,19.3 12.4,19.2 12.4,19.1C12,18.6 11.8,18.1 11.8,17.5C11.8,16.1 12.9,15 14.3,15H16A4,4 0 0,0 20,11C20,7.1 16.4,4 12,4M6.5,10C7.3,10 8,10.7 8,11.5C8,12.3 7.3,13 6.5,13C5.7,13 5,12.3 5,11.5C5,10.7 5.7,10 6.5,10M9.5,6C10.3,6 11,6.7 11,7.5C11,8.3 10.3,9 9.5,9C8.7,9 8,8.3 8,7.5C8,6.7 8.7,6 9.5,6M14.5,6C15.3,6 16,6.7 16,7.5C16,8.3 15.3,9 14.5,9C13.7,9 13,8.3 13,7.5C13,6.7 13.7,6 14.5,6M17.5,10C18.3,10 19,10.7 19,11.5C19,12.3 18.3,13 17.5,13C16.7,13 16,12.3 16,11.5C16,10.7 16.7,10 17.5,10Z" />
                                    </svg>
                                </div>
                                <div className='mt-6'>
                                    <h2 className='text-base uppercase font-medium text-center'>
                                        DESIGN
                                    </h2>
                                    <p className='text-base text-gray-500'>
                                        Our designers sketch out a couple of visual concepts and strategies, share it with the clients and the concerned departments and edits this draft until it’s perfected and ready for development.
                                    </p>
                                </div>
                            </li>
                            <li className='card-3d p-5'>
                                <div className='bg-white p-10 w-max mx-auto rounded-full'>
                                    <svg
                                        className='w-12 h-12 text-pink-600'
                                        viewBox="0 0 24 24"
                                    >
                                        <path fill="currentColor" d="M12.89,3L14.85,3.4L11.11,21L9.15,20.6L12.89,3M19.59,12L16,8.41V5.58L22.42,12L16,18.41V15.58L19.59,12M1.58,12L8,5.58V8.41L4.41,12L8,15.58V18.41L1.58,12Z" />
                                    </svg>
                                </div>
                                <div className='mt-6'>
                                    <h2 className='text-base uppercase font-medium text-center'>
                                        DEVELOP
                                    </h2>
                                    <p className='text-base text-gray-500'>
                                        Upon the completion of the visuals by our design team, our development team gets to work on blending in the technical functionalities of the website with the design.
                                    </p>
                                </div>
                            </li>
                            <li className='card-3d p-5'>
                                <div className='bg-white p-10 w-max mx-auto rounded-full'>
                                    <svg
                                        className='w-12 h-12 text-pink-600'
                                        viewBox="0 0 24 24"
                                    >
                                        <path fill="currentColor" d="M13.13 22.19L11.5 18.36C13.07 17.78 14.54 17 15.9 16.09L13.13 22.19M5.64 12.5L1.81 10.87L7.91 8.1C7 9.46 6.22 10.93 5.64 12.5M21.61 2.39C21.61 2.39 16.66 .269 11 5.93C8.81 8.12 7.5 10.53 6.65 12.64C6.37 13.39 6.56 14.21 7.11 14.77L9.24 16.89C9.79 17.45 10.61 17.63 11.36 17.35C13.5 16.53 15.88 15.19 18.07 13C23.73 7.34 21.61 2.39 21.61 2.39M14.54 9.46C13.76 8.68 13.76 7.41 14.54 6.63S16.59 5.85 17.37 6.63C18.14 7.41 18.15 8.68 17.37 9.46C16.59 10.24 15.32 10.24 14.54 9.46M8.88 16.53L7.47 15.12L8.88 16.53M6.24 22L9.88 18.36C9.54 18.27 9.21 18.12 8.91 17.91L4.83 22H6.24M2 22H3.41L8.18 17.24L6.76 15.83L2 20.59V22M2 19.17L6.09 15.09C5.88 14.79 5.73 14.47 5.64 14.12L2 17.76V19.17Z" />
                                    </svg>
                                </div>
                                <div className='mt-6'>
                                    <h2 className='text-base uppercase font-medium text-center'>
                                        DEPLOY
                                    </h2>
                                    <p className='text-base text-gray-500'>
                                        For our final step after the website is passed through QA & Testing, our team then sends it to your hosting account and does a final live website check.
                                    </p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
            <section className='py-16 px-5 bg-gradient-to-r from-blue-600 to-cyan-500'>
                <div>
                    <h1 className='md:text-5xl text-3xl font-bold text-center text-white'>
                        Need assistance? We’re here for you!
                    </h1>
                    <div className='mt-10'>
                        <h2 className='text-2xl font-medium text-white text-center'>
                            Ecera System
                        </h2>
                        <div className='w-full flex justify-center'>
                            <ul className='mt-5 w-max flex flex-col gap-y-5 text-lg font-medium text-gray-100'>
                                <li className='flex items-center gap-3'>
                                    <i className="fa-solid fa-envelope text-2xl"></i>
                                    <a href="mailto:sales@ecerasystem.com">
                                        sales@ecerasystem.com
                                    </a>
                                </li>
                                <li className='flex items-center gap-3'>
                                    <i className="fa-solid fa-phone text-2xl"></i>
                                    <a href="mailto:+12486771972">
                                        +1 2486771972
                                    </a>
                                </li>
                                <li className='flex items-start gap-3'>
                                    <i className="fa-solid fa-location-dot text-2xl"></i>
                                    <p>
                                        33405 Colony Park Drive Farmington Hills MI 48331
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        <Footer />
    </>);
};

export default PackOffers;