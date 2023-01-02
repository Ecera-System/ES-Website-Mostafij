import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageTitle from '../Shared/PageTitle';
import Slider from 'react-slick';
import eceraLogo from '../../Images/Nav_logo/ecera-logo.png';
import html5 from './images/html5.jpeg';
import css3 from './images/css3.png';
import js from './images/js.jpeg';
import react from './images/react.png';
import nodejs from './images/nodejs.png';
import expressjs from './images/expressjs.png';
import mongodb from './images/mongodb.png';
import git from './images/git.png';
import vscode from './images/vscode.jpeg';
import socialTech from './images/social-tech.png';
import socialImg from './images/social-img.png';
import banner from './images/banner.jpg';
import QBR from './images/QBR-700x394-1.jpg';
import untitledProcess from './images/Untitledprocess-1536x197.png';
import trophy from './images/trophy.jpg';
import contactBanner from './images/contact-banner.jpg';
import contactVector from './images/contact-us-vector.png';
import Footer from '../Shared/Footer/Footer';

const technology = [
    {
        img: html5,
        title: 'HTML5'
    },
    {
        img: css3,
        title: 'CSS3'
    },
    {
        img: js,
        title: 'JavaScript (ES6)'
    },
    {
        img: react,
        title: 'React JS'
    },
    {
        img: nodejs,
        title: 'Node JS'
    },
    {
        img: expressjs,
        title: 'Express JS'
    },
    {
        img: mongodb,
        title: 'MongoDB'
    },
    {
        img: git,
        title: 'Git'
    },
    {
        img: vscode,
        title: 'VS Code'
    },
];

const Trainings = () => {
    const [scroll, setScroll] = useState(false);
    const [openMenu, setOpenMenu] = useState(false);

    window.addEventListener('scroll', () => {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if (scrollTop > 72) {
            setScroll(true);
        }
        else {
            setScroll(false);
        }
    });

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 4,
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
                    infinite: true
                }
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ]
    };


    return (<>
        <PageTitle title='Trainings - ES'></PageTitle>
        <section className='text-center bg-gradient-to-r from-violet-700 to-blue-600'>
            <header className='w-full h-[72px] text-gray-600'>
                <nav className={`w-full flex items-center justify-between lg:px-14 px-5 py-2 duration-300 ease-out ${scroll ? 'fixed left-0 top-0 z-50 bg-white shadow-md' : 'bg-transparent text-gray-50'}`}>
                    {/* ===========Right Logo=========== */}
                    <div>
                        <Link to={'/'}>
                            <img
                                className='w-14 h-14'
                                src={eceraLogo}
                                alt="ecera logo"
                            />
                        </Link>
                    </div>

                    {/* ========================Left Menu items======================== */}
                    {/* ===========Desktop view=========== */}
                    <ul className='hidden lg:flex items-center gap-x-8 text-base font-medium'>
                        <li className={`py-4 cursor-pointer duration-300 relative group/services ${scroll ? 'hover:text-blue-600' : 'hover:text-blue-400'}`}>
                            MERN
                        </li>
                        <li className={`py-4 cursor-pointer duration-300 relative group/packages ${scroll ? 'hover:text-blue-600' : 'hover:text-blue-400'}`}>
                            H1B visa process
                        </li>
                        <li className={`py-4 cursor-pointer duration-300 relative group/packages ${scroll ? 'hover:text-blue-600' : 'hover:text-blue-400'}`}>
                            Invoice Payment for Web Design ans services
                        </li>
                        <li className=''>
                            <Link
                                to='#'
                                className='bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-cyan-500 hover:to-blue-600 text-white text-base py-3 px-6 rounded-lg'
                            >
                                Login
                            </Link>
                        </li>
                    </ul>

                    {/* ===========Mobile view=========== */}
                    <button
                        className={`lg:hidden block text-2xl`}
                        onClick={() => setOpenMenu(!openMenu)}
                    >
                        <i className="fa-solid fa-bars"></i>
                    </button>

                    {/* Side Menu */}
                    <aside className={`lg:hidden w-full h-full fixed top-0 ${openMenu ? 'right-0' : '-right-[1024px]'} z-50 duration-300 ease-linear bg-black/50`}>
                        <ul className='sm:w-[420px] w-[90%] h-full absolute top-0 right-0 bg-white flex flex-col items-start font-medium'>
                            <li className='px-10 py-3'>
                                <button
                                    className='text-3xl text-gray-500 hover:text-gray-700 duration-300'

                                    onClick={() => setOpenMenu(!openMenu)}
                                >
                                    <i className="fa-solid fa-xmark"></i>
                                </button>
                            </li>
                            <li className='w-full text-start normal-case cursor-pointer px-10 py-3 text-gray-600 hover:text-blue-600 hover:bg-blue-50 duration-300'>
                                <a
                                    href='#'
                                    className='w-full h-full'
                                >
                                    MERN
                                </a>
                            </li>
                            <li className='w-full text-start normal-case cursor-pointer px-10 py-3 text-gray-600 hover:text-blue-600 hover:bg-blue-50 duration-300'>
                                <a
                                    href='#'
                                    className='w-full h-full'
                                >
                                    H1B visa process
                                </a>
                            </li>
                            <li className='w-full text-start normal-case cursor-pointer px-10 py-3 text-gray-600 hover:text-blue-600 hover:bg-blue-50 duration-300'>
                                <a
                                    href='#'
                                    className='w-full h-full'
                                >
                                    Invoice Payment for Web Design ans services
                                </a>
                            </li>
                            <li className='w-full h-full px-10'>
                                <a
                                    href='#'
                                    className='inline-block w-full rounded-lg normal-case cursor-pointer py-3 my-2 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-cyan-500 hover:to-blue-600 text-white text-base duration-300'
                                >
                                    Login
                                </a>
                            </li>
                        </ul>
                    </aside>
                </nav>
            </header>
            <div className='md:py-20 py-10 md:w-3/4 w-11/12 mx-auto'>
                <h1 className='md:text-5xl text-3xl text-center text-white'>
                    Full Stack Web Development Course MERN Stack
                </h1>
                <div className='text-gray-100 md:text-lg text-base tracking-wide md:pt-10 pt-5 pb-5'>
                    <p>
                        Build new web application  through most versatile tech stack :
                    </p>
                    <p>
                        MongoDB, ExpressJS, ReactJS, NodeJS (MERN stack)
                    </p>
                </div>
                <div className='flex md:flex-row flex-col items-center justify-center gap-5 md:mt-10 mt-5'>
                    <button
                        className='md:w-max w-full py-3 px-8 border-2 border-white text-white hover:text-blue-700 hover:bg-white duration-300 text-lg font-medium tracking-wide rounded'
                    >
                        Enroll Now
                    </button>
                    <button
                        className='md:w-max w-full py-3 px-8 border-2 border-white text-white hover:text-blue-700 hover:bg-white duration-300 text-lg font-medium tracking-wide rounded'
                    >
                        Download Curriculum
                    </button>
                </div>
            </div>
        </section>
        <section className='py-20'>
            <div className='lg:w-3/5 md:w-4/5 w-11/12 mx-auto text-center'>
                <h1 className='text-3xl font-medium text-gray-700'>
                    Technology & Tool Specialization
                </h1>
                <p className='text-lg text-gray-500 mt-5'>
                    Start learning web development from basics of HTML, CSS, Javascript. After these , learn  latest technologies like MongoDB, Express, React,  & Node. Also get hands on Github & VS Code .
                </p>
                <div>
                    <Slider {...settings}>
                        {
                            technology.map((item, index) => <div
                                key={index}
                                className="text-center my-5"
                            >
                                <div className='p-2'>
                                    <img src={item.img} alt="" className='mx-auto' />
                                </div>
                                <h2 className='text-lg font-medium text-gray-600'>
                                    {item.title}
                                </h2>
                            </div>)
                        }
                    </Slider>
                </div>
            </div>
        </section>
        <section className='py-10'>
            <h1 className='text-center text-[40px] italic font-mono text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-cyan-500 mb-5'>
                Training Highlights
            </h1>
            <div className='bg-gradient-to-r from-pink-500/10 to-cyan-500/10'>
                <div className='xl:w-4/5 lg:w-11/12 w-4/5 mx-auto grid lg:grid-cols-5 md:grid-cols-3 grid-cols-1 md:gap-6 gap-10 py-10 rounded-xl'>
                    <div className='text-center'>
                        <span className='text-5xl text-cyan-500'>
                            <i className="fa-solid fa-house-chimney"></i>
                        </span>
                        <h2 className='text-2xl font-medium text-blue-700 mt-5 mb-2'>
                            Remotely Work
                        </h2>
                        <p className='text-sm text-blue-700'>
                            Working from anywhere other than the office, which can be your home or just a coworking space.
                        </p>
                    </div>
                    <div className='text-center'>
                        <span className='text-5xl text-cyan-500'>
                            <i className="fa-solid fa-users"></i>
                        </span>
                        <h2 className='text-2xl font-medium text-blue-700 mt-5 mb-2'>
                            Live Session
                        </h2>
                        <p className='text-sm text-blue-700'>
                            Stand-up meetings are regularly held gather daily during which team members share status reports on their work
                        </p>
                    </div>
                    <div className='text-center'>
                        <span className='text-5xl text-cyan-500'>
                            <i className="fa-regular fa-circle-check"></i>
                        </span>
                        <h2 className='text-2xl font-medium text-blue-700 mt-5 mb-2'>
                            Doubts Clear
                        </h2>
                        <p className='text-sm text-blue-700'>
                            Encourage the students to clear their doubts after discussion, so that their actual performance is not affected.
                        </p>
                    </div>
                    <div className='text-center'>
                        <span className='text-5xl text-cyan-500'>
                            <i className="fa-solid fa-certificate"></i>
                        </span>
                        <h2 className='text-2xl font-medium text-blue-700 mt-5 mb-2'>
                            Certificate
                        </h2>
                        <p className='text-sm text-blue-700'>
                            Get professionals in your field, showing your demonstrated commitment to understand and excelling in your profession.
                        </p>
                    </div>
                    <div className='text-center'>
                        <span className='text-5xl text-cyan-500'>
                            <i className="fa-solid fa-calendar-days"></i>
                        </span>
                        <h2 className='text-2xl font-medium text-blue-700 mt-5 mb-2'>
                            7 Days Free Trial
                        </h2>
                        <p className='text-sm text-blue-700'>
                            Begin with a 7 day free trial, which lets you try a Specialization for free & try a paid learning program for free.
                        </p>
                    </div>
                </div>
            </div>
        </section>
        <section className='py-10'>
            <div className='xl:w-4/5 lg:w-11/12 sm:w-4/5 w-11/12 mx-auto grid lg:grid-cols-2 grid-cols-1 gap-y-10 md:gap-y-0'>
                <div className='text-center'>
                    <h1 className='md:text-3xl text-xl font-bold text-blue-600'>
                        Future prospects with MERN Full Stack
                    </h1>
                    <ul className='flex flex-col gap-3 mt-5 md:text-lg text-base font-medium uppercase'>
                        <li>E-COMMERCE</li>
                        <li>SOCIAL MEDIA</li>
                        <li>ACCOUNTS</li>
                        <li>HR MANAGEMENT</li>
                        <li>BUSINESS CONSULTING</li>
                        <li>ONLINE TRAINING</li>
                    </ul>
                </div>
                <div>
                    <img src={socialTech} alt="" className='w-full h-full' />
                </div>
            </div>
            <div className='lg:w-4/5 w-11/12 mx-auto my-16'>
                <img src={socialImg} alt="" className='mx-auto w-max h-max' />
            </div>
            <div className='lg:w-4/5 w-11/12 mx-auto my-10 text-center'>
                <button
                    className='text-lg font-medium bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-cyan-500 hover:to-blue-600 text-white py-3 px-8 shadow-[5px_8px_10px_0px_rgba(0,0,0,0.3)] rounded-lg'
                >
                    Book Your Trial
                </button>
            </div>
        </section>
        <section className=''>
            <div className='w-full text-center'>
                <a href="#" className='text-blue-600 text-3xl font-semibold underline'>
                    AGILE METHODOLOGY
                </a>
            </div>
            <div
                style={{ backgroundImage: `url(${banner})` }}
                className='w-full h-auto bg-cover bg-no-repeat py-10 mt-10'
            >
                <div className='xl:w-4/5 lg:w-11/12 md:w-4/5 w-11/12 mx-auto'>
                    <div className='grid lg:grid-cols-2 grid-cols-1 lg:gap-10 gap-5 items-center'>
                        <div>
                            <img src={QBR} alt="" className='w-full h-full rounded-lg' />
                        </div>
                        <div>
                            <p className='text-lg font-medium text-gray-600'>
                                An agile software development process always starts by defining the users for a particular product and documenting a vision statement for the scope of problems, opportunities, and values to be addressed. The product owner captures this vision and works with a multidisciplinary team (or teams) to deliver on it. Several roles are involved in an agile development process.
                            </p>
                        </div>
                    </div>
                    <div className='grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-8 mt-10'>
                        <div>
                            <h2 className='text-lg font-medium text-gray-700 text-center'>
                                DAILY STANDUP
                            </h2>
                            <p className='text-base text-gray-600 sm:mt-5 mt-3'>
                                It help teams discuss the status of user stories; teammates share their daily goals, and anyone can escalate blocks that impede the team’s progress.
                            </p>
                        </div>
                        <div>
                            <h2 className='text-lg font-medium text-gray-700 text-center'>
                                SPRINT PLANNING
                            </h2>
                            <p className='text-base text-gray-600 sm:mt-5 mt-3'>
                                It is where the product owner shares priorities.Tasks are build and assigned to each members, and discusses on how  to complete them.
                            </p>
                        </div>
                        <div>
                            <h2 className='text-lg font-medium text-gray-700 text-center'>
                                RETROSPECTIVE MEETING
                            </h2>
                            <p className='text-base text-gray-600 sm:mt-5 mt-3'>
                                The team discusses what went well and what needs improvement in their agile and software development processes.
                            </p>
                        </div>
                        <div>
                            <h2 className='text-lg font-medium text-gray-700 text-center'>
                                SPRINT REVIEW
                            </h2>
                            <p className='text-base text-gray-600 sm:mt-5 mt-3'>
                                Demo meetings at the end of the sprint, where the functionality is shown to the product owner to gain acceptance on completed work.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className='pt-16'>
            <div className='md:w-4/5 w-11/12 mx-auto'>
                <h1 className='text-center md:text-[40px] text-3xl italic font-mono text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500'>
                    How will your training work?
                </h1>
                <img src={untitledProcess} alt="" className='w-full h-auto my-10' />
                <div className='bg-slate-200 rounded-xl flex justify-center py-10 px-5'>
                    <div className='flex md:flex-row flex-col justify-center gap-3'>
                        <div className='text-gray-700 text-center'>
                            <h4 className='text-lg font-bold'>
                                93%
                            </h4>
                            <p>
                                placed within 8 months of graduation
                            </p>
                        </div>
                        <div className='h-full w-px bg-gray-400'></div>
                        <div className='text-gray-700 text-center'>
                            <h4 className='text-lg font-bold'>
                                3 LPA
                            </h4>
                            <p>
                                average dream job CTC
                            </p>
                        </div>
                        <div className='h-full w-px bg-gray-400'></div>
                        <div className='text-gray-700 text-center'>
                            <h4 className='text-lg font-bold'>
                                6 LPA
                            </h4>
                            <p>
                                average super-dream job CTC
                            </p>
                        </div>
                        <div className='h-full w-px bg-gray-400'></div>
                        <div className='text-gray-700 text-center'>
                            <h4 className='text-lg font-bold'>
                                89%
                            </h4>
                            <p>
                                Average Salary Hike
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className='py-16'>
            <div className='xl:w-4/5 lg:w-11/12 sm:w-4/5 w-11/12 mx-auto grid lg:grid-cols-2 grid-cols-1 items-center'>
                <div className='bg-[#12244C] p-5 lg:mr-10 lg:mb-0 mb-10 rounded-md'>
                    <h1 className='text-cyan-400 text-center text-3xl font-medium'>
                        What you will get after finishing the program?
                    </h1>
                    <ul className='mt-5 flex flex-col items-center gap-3 border rounded-md py-8'>
                        <li>
                            <h4 className='text-base font-medium text-gray-200'>
                                <i className="fa-regular fa-circle-check mr-2"></i>
                                MERN CERTIFICATE
                            </h4>
                            <div className='border-b-2 border-dotted w-20 mx-auto mt-2'></div>
                        </li>
                        <li>
                            <h4 className='text-base font-medium text-gray-200'>
                                <i className="fa-regular fa-circle-check mr-2"></i>
                                EXPERIENCE LETTER
                            </h4>
                            <div className='border-b-2 border-dotted w-20 mx-auto mt-2'></div>
                        </li>
                        <li>
                            <h4 className='text-base font-medium text-gray-200'>
                                <i className="fa-regular fa-circle-check mr-2"></i>
                                INTERNSHIP CERTIFICATE
                            </h4>
                            <div className='border-b-2 border-dotted w-20 mx-auto mt-2'></div>
                        </li>
                        <li>
                            <h4 className='text-base font-medium text-gray-200'>
                                <i className="fa-regular fa-circle-check mr-2"></i>
                                RELIEVING LETTER
                            </h4>
                            <div className='border-b-2 border-dotted w-20 mx-auto mt-2'></div>
                        </li>
                        <li>
                            <h4 className='text-base font-medium text-gray-200'>
                                <i className="fa-regular fa-circle-check mr-2"></i>
                                LETTER OF RECOMMENDATION
                            </h4>
                            <div className='border-b-2 border-dotted w-20 mx-auto mt-2'></div>
                        </li>
                    </ul>
                </div>
                <div>
                    <img src={trophy} alt="" className='w-full h-auto rounded-xl shadow-[5px_10px_15px_rgba(0,0,0,0.3)]' />
                </div>
            </div>
        </section>
        <section className='pt-10'>
            <h1 className='text-center md:text-[40px] text-3xl italic font-mono text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500'>
                Schedule a call
            </h1>
            <div
                style={{ backgroundImage: `url(${contactBanner})` }}
                className='w-full h-auto bg-cover bg-no-repeat lg:py-20 py-10 mt-10'
            >
                <div className='xl:w-4/5 lg:w-11/12 md:w-3/4 w-11/12 mx-auto grid lg:grid-cols-2 grid-cols-1 items-center'>
                    <div className='p-10'>
                        <img src={contactVector} alt="" className='w-full h-auto' />
                    </div>
                    <div className='lg:pl-10'>
                        <form className='flex flex-col gap-y-3'>
                            <div>
                                <label htmlFor='name' className='text-lg font-medium text-gray-600'>
                                    Your name
                                </label>
                                <input
                                    className='w-full h-10 mt-1 px-3 text-gray-500 focus:outline-none border focus:border-pink-400 rounded'
                                    type="text"
                                    id="name"
                                />
                            </div>
                            <div>
                                <label htmlFor='email' className='text-lg font-medium text-gray-600'>
                                    Your email
                                </label>
                                <input
                                    className='w-full h-10 mt-1 px-3 text-gray-500 focus:outline-none border focus:border-pink-400 rounded'
                                    type="email"
                                    id="email"
                                />
                            </div>
                            <div>
                                <label htmlFor='number' className='text-lg font-medium text-gray-600'>
                                    Mobile Number
                                </label>
                                <input
                                    className='w-full h-10 mt-1 px-3 text-gray-500 focus:outline-none border focus:border-pink-400 rounded'
                                    type="number"
                                    id="number"
                                />
                            </div>
                            <div>
                                <label htmlFor='date' className='text-lg font-medium text-gray-600'>
                                    Choose Date
                                </label>
                                <input
                                    className='w-full h-10 mt-1 px-3 text-gray-500 focus:outline-none border focus:border-pink-400 rounded'
                                    type="date"
                                    id="date"
                                />
                            </div>
                            <div>
                                <button
                                    className='sm:w-max w-full bg-gradient-to-r from-pink-600 to-pink-200 hover:from-pink-200 hover:bg-pink-600 mt-3 py-2 px-10 text-lg font-medium text-white rounded'
                                >
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
        <Footer></Footer>
    </>);
};

export default Trainings;