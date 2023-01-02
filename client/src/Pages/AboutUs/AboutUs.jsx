import React, { useState } from 'react';
import ContactSideButton from '../Shared/ContactSideButton/ContactSideButton';
import Header from '../Shared/Header/Header';
import PageTitle from '../Shared/PageTitle';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import banner from '../../Images/packages-bg.jpg';
import about from '../../Images/About/about.png';
import pattern from '../../Images/About/pattern-9.png';
import html from '../../Images/About/html-5.png';
import css from '../../Images/About/css.png';
import javaScript from '../../Images/About/javascript.png';
import bootstrap from '../../Images/About/bootstrap.png';
import tailwind from '../../Images/About/tailwind.png';
import react from '../../Images/About/react.png';
import nodejs from '../../Images/About/node-js.png';
import express from '../../Images/About/express-js.png';
import mongodb from '../../Images/About/mongodb.png';
import jwt from '../../Images/About/jwt.png';
import stripe from '../../Images/About/stripe.png';
import banner6 from '../../Images/About/6.jpg';
import weProvide from '../../Images/About/we-provide.png';
import weHave from '../../Images/About/we-have.png';
import ourGoal from '../../Images/About/our-goal.png';
import ourStrengths from '../../Images/About/our-strengths.png';
import vision from '../../Images/About/vision.png';
import mission from '../../Images/About/mission.png';
import qualityPolicy from '../../Images/About/quality-policy.png';
import aboutBanner from '../../Images/About/about-banner.jpg';
import Footer from '../Shared/Footer/Footer';


const slide = [
    {
        icon: html,
        title: 'HTML',
    },
    {
        icon: css,
        title: 'CSS',
    },
    {
        icon: bootstrap,
        title: 'Bootstrap',
    },
    {
        icon: javaScript,
        title: 'JavaScript',
    },
    {
        icon: tailwind,
        title: 'Tailwind CSS',
    },
    {
        icon: react,
        title: 'React JS',
    },
    {
        icon: nodejs,
        title: 'Node JS',
    },
    {
        icon: express,
        title: 'Express JS',
    },
    {
        icon: jwt,
        title: 'JWT',
    },
    {
        icon: mongodb,
        title: 'MongoDB',
    },
    {
        icon: stripe,
        title: 'Stripe',
    },
];

const AboutUs = () => {

    const [sliderRef, setSliderRef] = useState(null);

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 1,
                    dots: false
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false
                }
            }
        ]
    };

    return (<>
        <PageTitle title='About Us'></PageTitle>
        <Header />
        <ContactSideButton />
        <div>
            <section className='py-24 bg-no-repeat bg-center text-center'
                style={{ backgroundImage: `url(${banner})` }}
            >
                <h1 className='md:text-5xl text-3xl font-semibold text-white uppercase'>
                    ABOUT US
                </h1>
                <p className='text-gray-400 text-base pt-10 pb-5'>
                    <Link className='hover:text-gray-200 duration-300 mr-2' to='/'>Home</Link>
                    /<span className='text-gray-100 ml-2'>About Us</span>
                </p>
            </section>
            <section className='xl:w-4/5 w-11/12 mx-auto flex md:flex-row flex-col items-center justify-center lg:gap-x-14 md:gap-x-10 gap-y-20 my-14'>
                <div className='md:w-1/2 w-full'>
                    <img src={about} alt="about icon" className='max-w-full max-h-full' />
                </div>
                <div className='md:w-1/2 w-full'>
                    <h4 className='text-lg font-medium mb-5 text-blue-600'>
                        ABOUT ECERA SYSTEM PVT. LTD
                    </h4>
                    <h1 className='sm:text-4xl text-3xl font-medium text-gray-600'>
                        You Can not Use Up Creativity.
                    </h1>
                    <p className='my-5 text-base text-gray-500'>
                        Does any industry face a more complex audience journey and marketing sales process than B2B technology? Consider the number of people who influence a sale, the length of the decision-making cycle, the competing interests of the people who purchase, implement, manage, and use the technology. It’s a lot meaningful content here.
                    </p>
                    <div className='flex items-start gap-5 my-10'>
                        <div>
                            <svg
                                className='w-12 h-12 text-cyan-600'
                                viewBox="0 0 24 24">
                                <path fill="currentColor" d="M17.71 6.15C17.46 5.38 16.79 5.21 16.45 4.77C16.14 4.31 16.18 3.62 15.53 3.15S14.23 2.92 13.7 2.77 12.81 2 12 2 10.82 2.58 10.3 2.77 9.13 2.67 8.47 3.15 7.86 4.31 7.55 4.77C7.21 5.21 6.55 5.38 6.29 6.15S6.5 7.45 6.5 8 6 9.08 6.29 9.85 7.21 10.79 7.55 11.23C7.86 11.69 7.82 12.38 8.47 12.85S9.77 13.08 10.3 13.23 11.19 14 12 14 13.18 13.42 13.7 13.23 14.87 13.33 15.53 12.85 16.14 11.69 16.45 11.23C16.79 10.79 17.45 10.62 17.71 9.85S17.5 8.55 17.5 8 18 6.92 17.71 6.15M12 12A4 4 0 1 1 16 8A4 4 0 0 1 12 12M14 8A2 2 0 1 1 12 6A2 2 0 0 1 14 8M13.71 15.56L13.08 19.16L12.35 23.29L9.74 20.8L6.44 22.25L7.77 14.75A4 4 0 0 0 9.66 15.17A4.15 4.15 0 0 0 11 15.85A3.32 3.32 0 0 0 12 16A3.5 3.5 0 0 0 13.71 15.56M17.92 18.78L15.34 17.86L15.85 14.92A3.2 3.2 0 0 0 16.7 14.47L16.82 14.37Z" />
                            </svg>

                        </div>
                        <div>
                            <h5 className='text-lg font-medium text-gray-600'>Experience</h5>
                            <p className='text-base text-gray-500'>
                                Our great team of more than 1400 software experts.
                            </p>
                        </div>
                    </div>
                    <div className='flex items-start gap-5 my-10'>
                        <div>
                            <svg className='w-12 h-12 text-cyan-600'
                                viewBox="0 0 24 24">
                                <path fill="currentColor" d="M11.7 20H11.3L10.9 17.4C9.7 17.2 8.7 16.5 7.9 15.6L5.5 16.6L4.7 15.3L6.8 13.7C6.4 12.5 6.4 11.3 6.8 10.1L4.7 8.7L5.5 7.4L7.9 8.4C8.7 7.5 9.7 6.9 10.9 6.6L11.2 4H12.7L13.1 6.6C14.3 6.8 15.4 7.5 16.1 8.4L18.5 7.4L19.3 8.7L17.2 10.2C17.4 10.8 17.5 11.4 17.5 12H18C18.5 12 19 12.1 19.5 12.2V12L19.4 11L21.5 9.4C21.7 9.2 21.7 9 21.6 8.8L19.6 5.3C19.5 5 19.3 5 19 5L16.5 6C16 5.6 15.4 5.3 14.8 5L14.4 2.3C14.5 2.2 14.2 2 14 2H10C9.8 2 9.5 2.2 9.5 2.4L9.1 5.1C8.5 5.3 8 5.7 7.4 6L5 5C4.7 5 4.5 5 4.3 5.3L2.3 8.8C2.2 9 2.3 9.2 2.5 9.4L4.6 11L4.5 12L4.6 13L2.5 14.7C2.3 14.9 2.3 15.1 2.4 15.3L4.4 18.8C4.5 19 4.7 19 5 19L7.5 18C8 18.4 8.6 18.7 9.2 19L9.6 21.7C9.6 21.9 9.8 22.1 10.1 22.1H12.6C12.1 21.4 11.9 20.7 11.7 20M16 12.3V12C16 9.8 14.2 8 12 8S8 9.8 8 12C8 14.2 9.8 16 12 16C12.7 14.3 14.2 12.9 16 12.3M10 12C10 10.9 10.9 10 12 10S14 10.9 14 12 13.1 14 12 14 10 13.1 10 12M18 14.5V13L15.8 15.2L18 17.4V16C19.4 16 20.5 17.1 20.5 18.5C20.5 18.9 20.4 19.3 20.2 19.6L21.3 20.7C22.5 18.9 22 16.4 20.2 15.2C19.6 14.7 18.8 14.5 18 14.5M18 21C16.6 21 15.5 19.9 15.5 18.5C15.5 18.1 15.6 17.7 15.8 17.4L14.7 16.3C13.5 18.1 14 20.6 15.8 21.8C16.5 22.2 17.2 22.5 18 22.5V24L20.2 21.8L18 19.5V21Z" />
                            </svg>
                        </div>
                        <div>
                            <h5 className='text-lg font-medium text-gray-600'>Quick Support</h5>
                            <p className='text-base text-gray-500'>
                                We’ll help you test bold new ideas while sharing your.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className='py-20 bg-no-repeat bg-center bg-cover bg-fixed relative before:absolute before:top-0 before:left-0 before:bottom-0 before:right-0 before:bg-violet-900/90'
                style={{ backgroundImage: `url(${banner6})` }}
            >
                <div className='relative xl:w-4/5 lg:w-3/4 sm:w-4/5 w-11/12 mx-auto grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10'>
                    <div className='flip-card'>
                        <div className='flip-card-inner bg-white rounded-lg text-center'>
                            <div className='flip-card-front p-10'>
                                <img src={vision} alt="" className='w-32 h-32 mx-auto' />
                                <h2 className='text-base font-medium uppercase text-blue-600 my-5'>
                                    Vision
                                </h2>
                                <hr />
                                <span className='inline-block px-3 py-1 bg-blue-800 text-white rounded mt-5'>
                                    <i className="fa-solid fa-arrow-right text-xl"></i>
                                </span>
                            </div>
                            <div className='flip-card-back p-6'>
                                <h2 className='text-base font-medium uppercase text-blue-600 mb-2'>
                                    Vision
                                </h2>
                                <p className='text-base text-gray-500 text-start'>
                                    Our main aim is to develop in a constant manner and become a leading performer in this competitive global marketplace. Fortunately, we have been able to gather a crew of professionals that can shape and mold their collective experiences, all of them posses outstanding talent that can help to accelerate your organization.we are expanding our work space globally.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='flip-card'>
                        <div className='flip-card-inner bg-white rounded-lg text-center'>
                            <div className='flip-card-front p-10'>
                                <img src={mission} alt="" className='w-32 h-32 mx-auto' />
                                <h2 className='text-base font-medium uppercase text-blue-600 my-5'>
                                    Mission
                                </h2>
                                <hr />
                                <span className='inline-block px-3 py-1 bg-blue-800 text-white rounded mt-5'>
                                    <i className="fa-solid fa-arrow-right text-xl"></i>
                                </span>
                            </div>
                            <div className='flip-card-back p-6'>
                                <h2 className='text-base font-medium uppercase text-blue-600 mb-2'>
                                    Mission
                                </h2>
                                <p className='text-base text-gray-500 text-start'>
                                    Our mission is to enhance business growth of our customers with creative design, development and to deliver market defining high quality solutions that create value and reliable competitive advantage to customers around the globe. It differentiates you from competitors in the market and provides better engagement with customers, partners and employees.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='flip-card'>
                        <div className='flip-card-inner bg-white rounded-lg text-center'>
                            <div className='flip-card-front p-10'>
                                <img src={qualityPolicy} alt="" className='w-32 h-32 mx-auto' />
                                <h2 className='text-base font-medium uppercase text-blue-600 my-5'>
                                    Quality Policy
                                </h2>
                                <hr />
                                <span className='inline-block px-3 py-1 bg-blue-800 text-white rounded mt-5'>
                                    <i className="fa-solid fa-arrow-right text-xl"></i>
                                </span>
                            </div>
                            <div className='flip-card-back p-6'>
                                <h2 className='text-base font-medium uppercase text-blue-600 mb-2'>
                                    Quality Policy
                                </h2>
                                <p className='text-base text-gray-500 text-start'>
                                    We are committed to provide defect free software products conforming to customer requirements on time by complying with the requirements of our quality management system and continuously improving its effectiveness through management reviews of the quality objectives. Our objective to Provide products and services that lead to customer satisfaction.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='py-24 bg-no-repeat bg-center text-center'
                style={{ backgroundImage: `url(${pattern})` }}
            >
                <div>
                    <h2 className='text-lg font-medium text-blue-600'>
                        EXPERIENCE. EXECUTION. EXCELLENCE.
                    </h2>
                    <h1 className='text-4xl font-bold text-gray-600 mt-6'>
                        What We Actually Do
                    </h1>
                </div>
                <div className='w-[86%] mx-auto mt-10 relative'>
                    <Slider ref={setSliderRef} {...settings}>
                        {
                            slide.map(item => <div key={item.title}
                                className='px-2'
                            >
                                <div className='px-8 py-10 rounded-xl bg-radial'>
                                    <img src={item.icon} className="w-[72px] h-[72px] mx-auto" alt="" />
                                    <h2 className='text-xl font-medium text-gray-200 mt-5'>
                                        {item.title}
                                    </h2>
                                </div>
                            </div>)
                        }
                    </Slider>
                    <button
                        className="absolute top-1/2 -translate-y-1/2 left-7 px-3 py-2 bg-black/70 text-white rounded"
                        onClick={() => { sliderRef?.slickPrev() }}
                    >
                        <i className="fa-solid fa-chevron-left text-3xl"></i>
                    </button>
                    <button
                        className="absolute top-1/2 -translate-y-1/2 right-7 px-3 py-2 bg-black/70 text-white rounded"
                        onClick={() => { sliderRef?.slickNext() }}
                    >
                        <i className="fa-solid fa-chevron-right text-3xl"></i>
                    </button>
                </div>
                <div className='mt-20 lg:w-3/5 sm:w-4/5 w-11/12 mx-auto'>
                    <h2 className='text-2xl font-medium text-blue-600'>
                        CSS Website Development Services
                    </h2>
                    <p className='text-base text-gray-500 mt-5'>
                        Engitech is the partner of choice for many of the world’s leading enterprises, SMEs and technology challengers. We help businesses elevate their value through custom software development, product design, QA and consultancy services.
                    </p>
                    <Link
                        to='/website-development'
                        className='inline-block bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-cyan-500 hover:to-blue-600 text-white text-lg font-medium mt-10 py-3 px-8 rounded-lg'
                    >
                        Learn More
                    </Link>
                </div>
            </section>
            <section
                className="py-14 flex justify-center bg-no-repeat bg-cover bg-fixed relative before:absolute before:top-0 before:left-0 before:bottom-0 before:right-0 before:bg-black/80"
                style={{ backgroundImage: `url(${aboutBanner})` }}
            >
                <div className='z-10 xl:w-2/5 lg:w-1/2 md:w-3/5 sm:w-4/5 w-11/12'>
                    <h2 className='text-lg font-medium text-center text-gray-100 uppercase mb-2'>ABOUT ECERASYSTEM</h2>
                    <h1 className='text-center md:text-4xl text-3xl font-mono italic font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500'>
                        We offer innovative technology solutions.
                    </h1>
                    <p className='mt-6 text-base text-gray-100'>
                        EceraSystem is a full-service digital marketing agency with a long history of delivering great results for our clients. We take an individualized approach to every customer project. In some cases we may focus more on SEO, while in others we’ll dig more into PPC, social media or conversion optimization.
                    </p>
                    <div className='mt-12'>
                        <div className='flex items-center justify-between font-medium text-gray-50'>
                            <h5>UI/UX Design</h5>
                            <h5>93%</h5>
                        </div>
                        <div
                            className='h-1 w-full bg-white mt-2 relative after:absolute after:top-0 after:left-0 after:w-[93%] after:h-full after:bg-cyan-500'
                        >
                            <div className='absolute left-[93%] -top-0.5 w-2 h-2 bg-cyan-500 border border-white' />
                        </div>
                    </div>
                    <div className='mt-10'>
                        <div className='flex items-center justify-between font-medium text-gray-50'>
                            <h5>App Development</h5>
                            <h5>80%</h5>
                        </div>
                        <div
                            className='h-1 w-full bg-white mt-2 relative after:absolute after:top-0 after:left-0 after:w-[80%] after:h-full after:bg-cyan-500'
                        >
                            <div className='absolute left-[80%] -top-0.5 w-2 h-2 bg-cyan-500 border border-white' />
                        </div>
                    </div>
                    <div className='mt-10'>
                        <div className='flex items-center justify-between font-medium text-gray-50'>
                            <h5>Web Development</h5>
                            <h5>73%</h5>
                        </div>
                        <div
                            className='h-1 w-full bg-white mt-2 relative after:absolute after:top-0 after:left-0 after:w-[73%] after:h-full after:bg-cyan-500'
                        >
                            <div className='absolute left-[73%] -top-0.5 w-2 h-2 bg-cyan-500 border border-white' />
                        </div>
                    </div>
                </div>
            </section>
            <section className='py-16'>
                <div className='lx:w-4/5 w-11/12 mx-auto'>
                    <h4 className='text-center sm:text-lg text-base font-medium mb-5 text-blue-600'>
                        OUR PROCESS
                    </h4>
                    <h1 className='text-center sm:text-4xl text-2xl font-medium text-gray-600'>
                        Driving Client Results Utilizing New Innovation Points of view
                    </h1>
                    <div className='lg:w-full sm:w-[400px] w-[98%] mx-auto grid lg:grid-cols-3 grid-cols-1 lg:gap-10 gap-20 mt-20'>
                        <div className='border p-7 group/card1 duration-300 hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,0.2)] relative'>
                            <div className='absolute -top-10 left-7'>
                                <span className='p-4 inline-block rounded-full bg-slate-200 group-hover/card1:bg-cyan-500 text-white text-4xl font-bold duration-300 group-hover/card1:shadow-[5px_7px_0px_0px_rgba(0,0,0,0.2)]'>
                                    01
                                </span>
                            </div>
                            <a href="#" className='inline-block text-2xl font-medium text-gray-700 hover:text-cyan-500 duration-300 mt-7'>
                                End to End Solutions and Services Guaranteed
                            </a>
                            <p className='text-base text-gray-500 my-4'>
                                Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. per inceptos himenaeos.
                            </p>
                            <button
                                className='text-lg font-medium text-gray-600 duration-300 hover:text-cyan-600'
                            >
                                <span className='px-3 py-1 mr-2 inline-block text-base bg-slate-200 duration-300 group-hover/card1:bg-cyan-500 text-white rounded'>
                                    <i className="fa-solid fa-arrow-right"></i>
                                </span>
                                Read More
                            </button>
                        </div>
                        <div className='border p-7 group/card1 duration-300 hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,0.2)] relative'>
                            <div className='absolute -top-10 left-7'>
                                <span className='p-4 inline-block rounded-full bg-slate-200 group-hover/card1:bg-cyan-500 text-white text-4xl font-bold duration-300 group-hover/card1:shadow-[5px_7px_0px_0px_rgba(0,0,0,0.2)]'>
                                    02
                                </span>
                            </div>
                            <a href="#" className='inline-block text-2xl font-medium text-gray-700 hover:text-cyan-500 duration-300 mt-7'>
                                Ahead of The Curve We Future-proof Your IT
                            </a>
                            <p className='text-base text-gray-500 my-4'>
                                Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. per inceptos himenaeos.
                            </p>
                            <button
                                className='text-lg font-medium text-gray-600 duration-300 hover:text-cyan-600'
                            >
                                <span className='px-3 py-1 mr-2 inline-block text-base bg-slate-200 duration-300 group-hover/card1:bg-cyan-500 text-white rounded'>
                                    <i className="fa-solid fa-arrow-right"></i>
                                </span>
                                Read More
                            </button>
                        </div>
                        <div className='border p-7 group/card1 duration-300 hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,0.2)] relative'>
                            <div className='absolute -top-10 left-7'>
                                <span className='p-4 inline-block rounded-full bg-slate-200 group-hover/card1:bg-cyan-500 text-white text-4xl font-bold duration-300 group-hover/card1:shadow-[5px_7px_0px_0px_rgba(0,0,0,0.2)]'>
                                    03
                                </span>
                            </div>
                            <a href="#" className='inline-block text-2xl font-medium text-gray-700 hover:text-cyan-500 duration-300 mt-7'>
                                Experience Certainty Every Project Executed Successful
                            </a>
                            <p className='text-base text-gray-500 my-4'>
                                Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. per inceptos himenaeos.
                            </p>
                            <button
                                className='text-lg font-medium text-gray-600 duration-300 hover:text-cyan-600'
                            >
                                <span className='px-3 py-1 mr-2 inline-block text-base bg-slate-200 duration-300 group-hover/card1:bg-cyan-500 text-white rounded'>
                                    <i className="fa-solid fa-arrow-right"></i>
                                </span>
                                Read More
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            <section className='py-16 bg-no-repeat bg-center bg-cover bg-fixed relative before:absolute before:top-0 before:left-0 before:bottom-0 before:right-0 before:bg-blue-900/90'
                style={{ backgroundImage: `url(${banner6})` }}
            >
                <div className='relative z-10 lg:w-4/5 md:w-11/12 sm:w-4/5 w-11/12 mx-auto text-white'>
                    <h1 className='text-4xl text-center'>
                        Ecera System
                    </h1>
                    <ul className='grid md:grid-cols-3 grid-cols-1 lg:gap-10 md:gap-5 gap-10 mt-12'>
                        <li className='flex items-start gap-3'>
                            <svg className='w-16 h-16' viewBox="0 0 24 24">
                                <path fill="currentColor" d="M11.5 9C11.5 7.62 12.62 6.5 14 6.5C15.1 6.5 16.03 7.21 16.37 8.19C16.45 8.45 16.5 8.72 16.5 9C16.5 10.38 15.38 11.5 14 11.5C12.91 11.5 12 10.81 11.64 9.84C11.55 9.58 11.5 9.29 11.5 9M5 9C5 13.5 10.08 19.66 11 20.81L10 22C10 22 3 14.25 3 9C3 5.83 5.11 3.15 8 2.29C6.16 3.94 5 6.33 5 9M14 2C17.86 2 21 5.13 21 9C21 14.25 14 22 14 22C14 22 7 14.25 7 9C7 5.13 10.14 2 14 2M14 4C11.24 4 9 6.24 9 9C9 10 9 12 14 18.71C19 12 19 10 19 9C19 6.24 16.76 4 14 4Z" />
                            </svg>
                            <div>
                                <h4 className='text-lg font-medium'>
                                    Address
                                </h4>
                                <p className='text-base'>
                                    33405 Colony Park Drive Farmington Hills MI 48331
                                </p>
                            </div>
                        </li>
                        <li className='flex items-start gap-3'>
                            <svg className='w-14 h-14' viewBox="0 0 24 24">
                                <path fill="currentColor" d="M15,12H17A5,5 0 0,0 12,7V9A3,3 0 0,1 15,12M19,12H21C21,7 16.97,3 12,3V5C15.86,5 19,8.13 19,12M20,15.5C18.75,15.5 17.55,15.3 16.43,14.93C16.08,14.82 15.69,14.9 15.41,15.18L13.21,17.38C10.38,15.94 8.06,13.62 6.62,10.79L8.82,8.59C9.1,8.31 9.18,7.92 9.07,7.57C8.7,6.45 8.5,5.25 8.5,4A1,1 0 0,0 7.5,3H4A1,1 0 0,0 3,4A17,17 0 0,0 20,21A1,1 0 0,0 21,20V16.5A1,1 0 0,0 20,15.5Z" />
                            </svg>
                            <div>
                                <h4 className='text-lg font-medium'>
                                    Phone
                                </h4>
                                <p className='text-base'>
                                    +1 248 677 1972
                                </p>
                            </div>
                        </li>
                        <li className='flex items-start gap-3'>
                            <svg className='w-14 h-14' viewBox="0 0 24 24">
                                <path fill="currentColor" d="M21.03 6.29L12 .64L2.97 6.29C2.39 6.64 2 7.27 2 8V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V8C22 7.27 21.61 6.64 21.03 6.29M20 18H4V10L12 15L20 10V18M12 13L4 8L12 3L20 8L12 13Z" />
                            </svg>
                            <div>
                                <h4 className='text-lg font-medium'>
                                    E-Mail
                                </h4>
                                <p className='text-base'>
                                    sales@ecerasystem.com
                                </p>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>
            <section className='py-10'>
                <div className='sm:w-3/4 w-11/12 mx-auto grid md:grid-cols-2 grid-cols-1 md:gap-x-16'>
                    <div>
                        <div className='w-64 h-60 mx-auto flex items-end justify-center'>
                            <img src={weProvide} alt="" className='w-mx h-mx' />
                        </div>
                        <h2 className='text-2xl text-center text-gray-700 mt-5'>
                            We Provide
                        </h2>
                        <h1 className='text-lg text-blue-600 text-center'>
                            Remote Employee
                        </h1>
                        <p className='text-base text-gray-500 mt-2'>
                            A huge pool of talent from every domain available for your office. Solve your freelancing problems by letting us help you find the most suitable employee or a whole team that won't let you down. Everything is managed by Indirect Employee staff!
                        </p>
                    </div>
                    <div>
                        <div className='w-64 h-60 mx-auto flex items-end justify-center'>
                            <img src={weHave} alt="" className='w-mx h-mx' />
                        </div>
                        <h2 className='text-2xl text-center text-gray-700 mt-5'>
                            We Have
                        </h2>
                        <h1 className='text-lg text-blue-600 text-center'>
                            Global Partnership
                        </h1>
                        <p className='text-base text-gray-500 mt-2'>
                            Our Global partners are spread 12 countries and our client base is growing day by day . Many of my clients are repeat customers and several have come to us through high recommendation and referrals . Our client hail from different domains
                        </p>
                    </div>
                    <div>
                        <div className='w-64 h-60 mx-auto flex items-end justify-center'>
                            <img src={ourGoal} alt="" className='w-mx h-mx' />
                        </div>
                        <h2 className='text-2xl text-center text-gray-700 mt-5'>
                            Our Goal
                        </h2>
                        <h1 className='text-lg text-blue-600 text-center'>
                            Same Quality at Low Cost
                        </h1>
                        <p className='text-base text-gray-500 mt-2'>
                            We have unique and revolutionary business principle, ‘Same quality but significantly lower cost’. we aims to fulfill the long-standing outsourcing vacuum felt by Small Medium Enterprises across the country who, till now, were dependent mostly on offshore freelancers.The hired professionals match their western counterparts in skills, qualifications and experience alongwith the added advantage of attractive low costs.
                        </p>
                    </div>
                    <div>
                        <div className='w-64 h-60 mx-auto flex items-end justify-center'>
                            <img src={ourStrengths} alt="" className='w-mx h-mx' />
                        </div>
                        <h2 className='text-2xl text-center text-gray-700 mt-5'>
                            Our Strengths
                        </h2>
                        <h1 className='text-lg text-blue-600 text-center'>
                            Intelligent Use of Technology and Human Resource
                        </h1>
                        <p className='text-base text-gray-500 mt-2'>
                            We provide every client with a dedicated, full-time work from home from their comfortable place. To successfully achieve this objective, we relay on management, infrastructure, hardware and the latest technology to bridge physical distance and time zone differences.We provide experience of making employees to work from home for the company as real as they work in the company.
                        </p>
                    </div>
                </div>
            </section>
        </div>
        <Footer></Footer>
    </>);
};

export default AboutUs;