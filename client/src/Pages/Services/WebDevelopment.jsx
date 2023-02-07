import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../Shared/Header/Header';
import PageTitle from '../Shared/PageTitle';
import banner from '../../Images/Web_Development/web_dev-banner.jpg';
import ContactSideButton from '../Shared/ContactSideButton/ContactSideButton';
import custom1 from '../../Images/Web_Development/custom1.png';
import custom2 from '../../Images/Web_Development/custom2.png';
import custom3 from '../../Images/Web_Development/custom3.png';
import feature1 from '../../Images/Web_Development/feature-1.png';
import feature2 from '../../Images/Web_Development/feature-2.png';
import feature3 from '../../Images/Web_Development/feature-3.png';
import feature4 from '../../Images/Web_Development/feature-4.png';
import feature5 from '../../Images/Web_Development/feature-5.png';
import feature6 from '../../Images/Web_Development/feature-6.png';
import feature7 from '../../Images/Web_Development/feature-7.png';
import feature8 from '../../Images/Web_Development/feature-8.png';
import feature9 from '../../Images/Web_Development/feature-9.png';
import Footer from '../Shared/Footer/Footer';
import designArea from '../../Images/Web_Development/design-area.png';
import squareLogo from '../../Images/Web_Development/squar-logo.png';
import webTab from '../../Images/Web_Development/web-tab-sprite.jpg';
import splash2 from '../../Images/Web_Development/splash2.jpg';

const imgArray = [
    feature1,
    feature2,
    feature3,
    feature4,
    feature5,
    feature6,
    feature7,
    feature8,
    feature9
];

const WebDevelopment = () => {
    const [img, setImg] = useState(0);
    const [openAns1, setOpenAns1] = useState(true);
    const [openAns2, setOpenAns2] = useState(false);
    const [openAns3, setOpenAns3] = useState(false);
    const [openAns4, setOpenAns4] = useState(false);

    return (<>
        <PageTitle title='Website Development'></PageTitle>
        <Header></Header>
        <ContactSideButton />
        <div className='w-full'>
            <section
                style={{ backgroundImage: `url(${banner})` }}
                className='w-full xl:h-[500px] md:h-[400px] h-80 bg-cover bg-no-repeat bg-fixed relative before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-[#031859]/60'
            >
                <div className='relative w-full h-full px-5 flex items-center justify-center text-center z-10'>
                    <div>
                        <h1 className='md:text-5xl text-3xl font-semibold text-white uppercase'>
                            Website designers and developers
                        </h1>
                        <p className='text-gray-300 sm:text-lg text-base italic font-medium py-3'>
                            How can our team help to transform your next big idea? We’d love to hear from you.
                        </p>
                        <p className='text-gray-200 text-lg font-medium pt-10 pb-5'>
                            Services / Website Development
                        </p>
                        <Link
                            to="/contact"
                            className='inline-block text-lg text-white font-medium py-2 px-10 border-2 border-white rounded hover:text-[#031859] hover:bg-white duration-300'
                        >
                            Connect with us
                        </Link>
                    </div>
                </div>
            </section>
            <section
                className='py-16 bg-no-repeat bg-right-top bg-contain bg-gray-100'
                style={{ backgroundImage: `url(${designArea})` }}
            >
                <div className='2xl:w-[1000px] lg:w-3/5 md:w-4/5 w-11/12 mx-auto'>
                    <h1 className='text-center md:text-5xl md:leading-snug text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500'>
                        We Don't Just Build Websites, We Build Websites That Sells
                    </h1>
                    <p className='md:text-lg text-base font-medium text-gray-500 text-center mt-2'>
                        Every business has certain requirement, and our experts design and develop websites accourding to your business’ needs.
                    </p>
                </div>
                <div
                    className='w-full bg-no-repeat bg-left-top md:py-28 py-10'
                    style={{ backgroundImage: `url(${squareLogo})` }}
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
                                            <i className="fa-solid fa-caret-up mt-1 ml-3"></i>
                                            : <i className="fa-solid fa-caret-down mt-1 ml-3"></i>
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
                                            <i className="fa-solid fa-caret-up mt-1 ml-3"></i>
                                            : <i className="fa-solid fa-caret-down mt-1 ml-3"></i>
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
                                            <i className="fa-solid fa-caret-up mt-1 ml-3"></i>
                                            : <i className="fa-solid fa-caret-down mt-1 ml-3"></i>
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
                                            <i className="fa-solid fa-caret-up mt-1 ml-3"></i>
                                            : <i className="fa-solid fa-caret-down mt-1 ml-3"></i>
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
            <section className='py-20'>
                <div className='2xl:w-[1200px] sm:w-4/5 w-11/12 mx-auto'>
                    <div className='grid lg:grid-cols-2 grid-cols-1 items-center lg:gap-20 gap-10'>
                        <div>
                            <h2 className='text-2xl font-medium text-blue-700 mb-5'>
                                COMPLETE PACKAGE
                            </h2>
                            <p className='text-gray-500 lg:text-lg text-base'>
                                Want a Complete package of web designing, digital marketing, and skillful remote employees? Ecera provides you a handful of these facilities and many more. Their main expertise is these fields given below:-.
                            </p>
                            <ul className='mt-5 flex flex-col gap-4 text-gray-500 lg:text-lg text-base'>
                                <li className='flex items-start'>
                                    <span className='w-3 h-3 rounded-full bg-gradient-to-r from-blue-600 to-cyan-400 inline-block mt-2 mr-2' />
                                    Custom Website Design & Development
                                </li>
                                <li className='flex items-start'>
                                    <span className='w-3 h-3 rounded-full bg-gradient-to-r from-blue-600 to-cyan-400 inline-block mt-2 mr-2' />
                                    Revamp your Digital Reach
                                </li>
                                <li className='flex items-start'>
                                    <span className='w-3 h-3 rounded-full bg-gradient-to-r from-blue-600 to-cyan-400 inline-block mt-2 mr-2' />
                                    Hire a competitive workforce
                                </li>
                                <li className='flex items-start'>
                                    <span className='w-3 h-3 rounded-full bg-gradient-to-r from-blue-600 to-cyan-400 inline-block mt-2 mr-2' />
                                    A one Stop Solution to all your Business Needs
                                </li>
                            </ul>
                        </div>
                        <div className='w-full'>
                            <img src={splash2} alt="" className='max-w-full h-auto shadow-[0px_5px_20px_0px_rgba(0,0,255,0.4)] rounded-xl' />
                        </div>
                    </div>
                </div>
            </section>
            <section className='2xl:w-[1200px] md:w-3/4 sm:w-4/5 w-11/12 mx-auto mt-20'>
                <h1 className='text-center md:text-[40px] md:leading-snug text-3xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500'>
                    One Web Design Codebase To Rule Every Platform!
                </h1>
                <p className='text-gray-500 text-base text-center lg:mx-10 mt-5 mb-10'>
                    Our talented web designers punctiliously build fully cross platform,inter-operability websites for our customers. The target audience can access your websites from any device they own. We are a complete team of designers, developers, and strategists, building the websites required by the customers.
                </p>
                <div className='grid lg:grid-cols-3 grid-cols-1 gap-5 pt-5 lg:text-start text-center'>
                    <div className='border-2 p-6'>
                        <img src={custom1} alt="" className='mx-auto w-40 h-auto' />
                        <h4 className='text-xl font-medium text-center text-teal-500 py-3'>
                            Customized Design
                        </h4>
                        <p className='text-gray-500 text-base'>
                            We have customized templates where you can choose according to your requirements and also design according to the customer requirements and full fill the satisfaction of the customer idea about their webpage.
                        </p>
                    </div>
                    <div className='border-2 p-6'>
                        <img src={custom2} alt="" className='mx-auto w-40 h-auto' />
                        <h4 className='text-xl font-medium text-center text-teal-500 py-3'>
                            Cost-effective Services
                        </h4>
                        <p className='text-gray-500 text-base'>
                            With our team, the cost of your development will be affordable and saves your money at high level due to experienced developers and we also provide offers to new customers according to their business sites.
                        </p>
                    </div>
                    <div className='border-2 p-6'>
                        <img src={custom3} alt="" className='mx-auto w-40 h-auto' />
                        <h4 className='text-xl font-medium text-center text-teal-500 py-3'>
                            Technologies
                        </h4>
                        <p className='text-gray-500 text-base'>
                            We work on latest technologies which comprises of upgraded features which result in saving time and cost and it will be easier for the user to access it according to their need.
                        </p>
                    </div>
                </div>
            </section>
            <section className='2xl:w-[1200px] md:w-3/4 sm:w-4/5 w-11/12 mx-auto my-20'>
                <h1 className='text-center md:text-[40px] md:leading-snug text-3xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500'>
                    Fix your corporate systems by picking right web specialists
                </h1>
                <p className='text-gray-500 md:text-lg text-base text-center lg:mx-10 mt-5 mb-10'>
                    Indirect employee has talented web designers in the designing and development industry with a strong business orientation. We maintain our competitive edge with unique design and a highly qualified team of website designers, who are focused on business goals and corporate branding.
                </p>
                <h2 className='text-3xl font-bold text-center text-gray-600 pt-5'>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                        stroke="currentColor" className="w-10 h-10 mr-1 inline-block"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zM12 2.25V4.5m5.834.166l-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243l-1.59-1.59" />
                    </svg>
                    You can click and view the features
                </h2>
                <div className='flex lg:flex-row flex-col lg:items-start items-center justify-between lg:gap-0 gap-10 mt-5'>
                    <div className='lg:w-3/5 w-full border-4 border-white drop-shadow-[0px_5px_15px_rgba(0,0,255,0.45)]'>
                        <img src={imgArray[img]} alt="" className='w-full h-auto' />
                    </div>
                    <ul className='lg:w-2/5 w-full lg:pl-16 pl-10 flex flex-col gap-y-5 text-lg font-medium text-gray-500'>
                        <li
                            onClick={() => setImg(0)}
                            className={`flex items-center gap-x-3 cursor-pointer hover:scale-105 hover:text-cyan-500 duration-300 ease-linear ${img === 0 && 'text-cyan-500 scale-105'}`}
                        >
                            <i className="fa-solid fa-code"></i>
                            <span>Valid HTML5 + CSS3</span>
                        </li>
                        <li
                            onClick={() => setImg(1)}
                            className={`flex items-center gap-x-4 cursor-pointer hover:scale-105 hover:text-cyan-500 duration-300 ease-linear ${img === 1 && 'text-cyan-500 scale-105'}`}
                        >
                            <i className="fa-solid fa-rocket"></i>
                            <span>Bootstrap Templates</span>
                        </li>
                        <li
                            onClick={() => setImg(2)}
                            className={`flex items-center gap-x-4 cursor-pointer hover:scale-105 hover:text-cyan-500 duration-300 ease-linear ${img === 2 && 'text-cyan-500 scale-105'}`}
                        >
                            <i className="fa-brands fa-wordpress"></i>
                            <span>Wordpress site</span>
                        </li>
                        <li
                            onClick={() => setImg(3)}
                            className={`flex items-center gap-x-3 cursor-pointer hover:scale-105 hover:text-cyan-500 duration-300 ease-linear ${img === 3 && 'text-cyan-500 scale-105'}`}
                        >
                            <i className="fa-solid fa-cloud-arrow-up"></i>
                            <span>Cloud Hosting</span>
                        </li>
                        <li
                            onClick={() => setImg(4)}
                            className={`flex items-center gap-x-3 cursor-pointer hover:scale-105 hover:text-cyan-500 duration-300 ease-linear ${img === 4 && 'text-cyan-500 scale-105'}`}
                        >
                            <i className="fa-brands fa-node-js"></i>
                            <span>MERN Stack Developer</span>
                        </li>
                        <li
                            onClick={() => setImg(5)}
                            className={`flex items-center gap-x-4 cursor-pointer hover:scale-105 hover:text-cyan-500 duration-300 ease-linear ${img === 5 && 'text-cyan-500 scale-105'}`}
                        >
                            <i className="fa-solid fa-comment"></i>
                            <span>Chatbot Design</span>
                        </li>
                        <li
                            onClick={() => setImg(6)}
                            className={`flex items-center gap-x-3 cursor-pointer hover:scale-105 hover:text-cyan-500 duration-300 ease-linear ${img === 6 && 'text-cyan-500 scale-105'}`}
                        >
                            <svg
                                className="w-6 h-6 inline-block"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none" viewBox="0 0 24 24" strokeWidth={2}
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                            </svg>
                            <span>Fully Responsive</span>
                        </li>
                        <li
                            onClick={() => setImg(7)}
                            className={`flex items-center gap-x-4 cursor-pointer hover:scale-105 hover:text-cyan-500 duration-300 ease-linear ${img === 7 && 'text-cyan-500 scale-105'}`}
                        >
                            <i className="fa-solid fa-star"></i>
                            <span>Beautiful UI</span>
                        </li>
                        <li
                            onClick={() => setImg(8)}
                            className={`flex items-center gap-x-4 cursor-pointer hover:scale-105 hover:text-cyan-500 duration-300 ease-linear ${img === 8 && 'text-cyan-500 scale-105'}`}
                        >
                            <i className="fa-solid fa-heart"></i>
                            <span>Free Updates & Support</span>
                        </li>
                    </ul>
                </div>
            </section>
        </div>
        <Footer></Footer>
    </>);
};

export default WebDevelopment;