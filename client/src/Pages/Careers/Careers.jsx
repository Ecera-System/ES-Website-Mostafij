import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import eceraLogo from '../../Images/Nav_logo/ecera-logo.png';
import PageTitle from '../Shared/PageTitle';
import banner from '../../Images/globe-banner.png';
import picture from './Images/picture.jpg';


const jobsData = [
    {
        img: picture,
        companyTitle: 'What Is Hydraulic Hose?',
        jobTitle: 'What Is Hydraulic Hose?',
        publishDate: '7 months ago',
        jobLocation: 'Detroit',
        workTime: 'Full-time',
        salary: '00',
        jobDescription: "Unless you work in an industry that uses hydraulic-powered machinery, the chances are you'll have little awareness of what a hydraulic hose does (or even that such a thing exists)....",
    },
    {
        img: picture,
        companyTitle: 'Main Parts Of Injection Molding Machine',
        jobTitle: 'Main parts of Injection Molding Machine',
        publishDate: '7 months ago',
        jobLocation: 'Detroit',
        workTime: 'Full-time',
        salary: '00',
        jobDescription: "Injection molding is an important industrial method. It is little bit similar to die casting but the difference is in raw material used. In die casting we use metals which require...",
    },
    {
        img: picture,
        companyTitle: 'As The Industry Leader In Phosphine Ligands And Catalysts For Homogeneous Catalysis',
        jobTitle: 'As the industry leader in phosphine ligands and catalysts for homogeneous catalysis',
        publishDate: '7 months ago',
        jobLocation: 'Detroit',
        workTime: 'Full-time',
        salary: '00',
        jobDescription: "As the industry leader in phosphine ligands and catalysts for homogeneous catalysis, Solvay offers a range of phosphorus compounds used in a breadth of applications and markets. Ou...",
    },
    {
        img: picture,
        companyTitle: 'What Are The Health Benefits Of Tea?',
        jobTitle: 'What Are The Health Benefits of Tea?',
        publishDate: '7 months ago',
        jobLocation: 'Detroit',
        workTime: 'Full-time',
        salary: '00',
        jobDescription: "What Are The Health Benefits of Tea? People all over the world have been drinking tea for thousands of centuries, and for good reason. Numerous studies have shown that a variety of...",
    },
    {
        img: picture,
        companyTitle: 'How Does An LED Display Work?',
        jobTitle: 'How does an LED Display work?',
        publishDate: '7 months ago',
        jobLocation: 'Detroit',
        workTime: 'Full-time',
        salary: '00',
        jobDescription: "What is LED? LED is short for Light Emitting Diode. An LED emits light as a result of electric luminescence. It is also known as “cold light” as, unlike with old-fashioned incandes...",
    },
    {
        img: picture,
        companyTitle: 'As The Industry Leader In Phosphine Ligands And Catalysts For Homogeneous Catalysis',
        jobTitle: 'As the industry leader in phosphine ligands and catalysts for homogeneous catalysis',
        publishDate: '7 months ago',
        jobLocation: 'Detroit',
        workTime: 'Full-time',
        salary: '00',
        jobDescription: "As the industry leader in phosphine ligands and catalysts for homogeneous catalysis, Solvay offers a range of phosphorus compounds used in a breadth of applications and markets. Ou...",
    },
    {
        img: picture,
        companyTitle: 'What Are The Health Benefits Of Tea?',
        jobTitle: 'What Are The Health Benefits of Tea?',
        publishDate: '7 months ago',
        jobLocation: 'Detroit',
        workTime: 'Full-time',
        salary: '00',
        jobDescription: "What Are The Health Benefits of Tea? People all over the world have been drinking tea for thousands of centuries, and for good reason. Numerous studies have shown that a variety of...",
    },
    {
        img: picture,
        companyTitle: 'How Does An LED Display Work?',
        jobTitle: 'How does an LED Display work?',
        publishDate: '7 months ago',
        jobLocation: 'Detroit',
        workTime: 'Full-time',
        salary: '00',
        jobDescription: "What is LED? LED is short for Light Emitting Diode. An LED emits light as a result of electric luminescence. It is also known as “cold light” as, unlike with old-fashioned incandes...",
    },
];

const companiesData = [
    {
        img: picture,
        companyName: 'Mechanical Locks Are The Backbone Of Your Security System',
        totalJobs: 1
    },
    {
        img: picture,
        companyName: 'What Is Hydraulic Hose?',
        totalJobs: 1
    },
    {
        img: picture,
        companyName: 'Ways To Tell Rhinestones And Diamonds Apart',
        totalJobs: 1
    },
    {
        img: picture,
        companyName: 'Positive Displacement Pumps',
        totalJobs: 1
    },
    {
        img: picture,
        companyName: 'How Does An LED Display Work?',
        totalJobs: 1
    },
    {
        img: picture,
        companyName: 'Main Parts Of Injection Molding Machine',
        totalJobs: 1
    },
    {
        img: picture,
        companyName: 'What Are The Health Benefits Of Tea?',
        totalJobs: 1
    },
    {
        img: picture,
        companyName: 'As The Industry Leader In Phosphine Ligands And Catalysts For Homogeneous Catalysis',
        totalJobs: 1
    },
    {
        img: picture,
        companyName: 'Will You Choose Glass Or Plastic For Your Bottles Or Containers?',
        totalJobs: 1
    },
    {
        img: picture,
        companyName: 'Storage Of Personal Belongings',
        totalJobs: 1
    },
    {
        img: picture,
        companyName: 'What Is PCB Assembly?',
        totalJobs: 1
    },
    {
        img: picture,
        companyName: 'Types Of Active Pharmaceutical Ingredients',
        totalJobs: 1
    },
];

const Careers = () => {
    const [scroll, setScroll] = useState(false);

    window.addEventListener('scroll', () => {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if (scrollTop > 72) {
            setScroll(true);
        }
        else {
            setScroll(false);
        }
    });

    return (<>
        <PageTitle title='Find your dream job - ES Careers'></PageTitle>
        <section className='bg-no-repeat bg-center text-center bg-[#020820]'
            style={{ backgroundImage: `url(${banner})` }}
        >
            <header className='w-full h-[72px] text-gray-600'>
                <nav className={`w-full flex items-center justify-between px-14 py-2 duration-300 ease-out ${scroll ? 'fixed left-0 top-0 z-50 bg-white shadow-md' : 'bg-transparent text-gray-50'}`}>
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

                    {/* ===========Left Menu items=========== */}
                    <ul className='flex items-center gap-x-8 text-base font-medium'>
                        <li className='py-4 cursor-pointer hover:text-blue-600 duration-300 relative group/services'>
                            Login
                        </li>
                        <li className='py-4 cursor-pointer hover:text-blue-600 duration-300 relative group/packages'>
                            Register
                        </li>
                        <li className=''>
                            <Link
                                // to='/get-estimate'
                                className='bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-cyan-500 hover:to-blue-600 text-white text-base py-3 px-5 rounded-lg'
                            >
                                <i className="fa-solid fa-plus mr-2"></i>
                                Post a job
                            </Link>
                        </li>
                    </ul>
                </nav>
            </header>
            <div className='md:py-32 py-20'>
                <h1 className='md:text-[42px] text-3xl font-bold text-center text-white'>
                    FIND A JOB NEAR YOU
                </h1>
                <p className='text-lg font-medium text-white py-3'>
                    Simple, fast and efficient
                </p>
                <form className='bg-cyan-500 xl:w-[900px] lg:w-3/4 md:w-3/4 sm:w-4/5 w-11/12 mx-auto flex lg:flex-row flex-col items-center lg:gap-0 gap-1 p-1 mt-5 rounded'>
                    <div className='bg-white lg:w-2/5 w-full h-10 flex items-center text-gray-500 lg:rounded-l lg:rounded-tr-none rounded-tr rounded-tl overflow-hidden'>
                        <label htmlFor="job" className='px-3'>
                            <i className="fa-solid fa-briefcase text-xl"></i>
                        </label>
                        <input
                            id='job'
                            className='w-full h-full focus:outline-none'
                            type="text"
                        />
                    </div>
                    <div className='bg-white  lg:w-2/5 w-full h-10 flex items-center text-gray-500'>
                        <label htmlFor="address" className='px-3'>
                            <i className="fa-solid fa-location-dot text-xl"></i>
                        </label>
                        <input
                            id='address'
                            className='w-full h-full focus:outline-none'
                            type="text"
                        />
                    </div>
                    <div className='lg:w-[20%] w-full h-10'>
                        <button
                            className='h-full w-full text-lg font-medium text-white'
                            type='submit'
                        >
                            <i className="fa-solid fa-magnifying-glass text-base mr-2"></i>
                            Find Jobs
                        </button>
                    </div>
                </form>
            </div>
        </section>
        <section className='py-8'>
            <div className='lg:w-[82%] md:w-[90%] sm:w-4/5 w-11/12 mx-auto border rounded'>
                <div className='flex justify-between items-center text-gray-600 bg-gray-100 p-3'>
                    <h2 className='text-xl'>
                        Latest <span className='font-bold'>Jobs</span>
                    </h2>
                    <button className='text-base font-medium'>
                        View More
                        <i className="fa-solid fa-bars ml-2"></i>
                    </button>
                </div>
                <ul className='flex flex-col md:gap-0 gap-3'>
                    {
                        jobsData.map((data, index) => <li
                            key={index}
                            className="p-3 flex md:flex-row flex-col items-start md:gap-0 gap-5 border-b"
                        >
                            <div className='md:w-[100px] md:h-auto w-full h-full'>
                                <img src={data.img} alt="" className='w-full h-full border rounded' />
                            </div>
                            <div className='md:mx-3'>
                                <h4 className='text-gray-500 text-sm'>
                                    {data.companyTitle}
                                </h4>
                                <a href='/careers/#' className='inline-block text-xl font-medium text-blue-700 hover:text-orange-600 hover:underline duration-300 cursor-pointer'>
                                    {data.jobTitle}
                                </a>
                                <div className='text-sm text-gray-500 flex items-center gap-3'>
                                    <span>
                                        <i className="fa-regular fa-clock mr-1"></i>
                                        {data.publishDate}
                                    </span>
                                    <span>
                                        <i className="fa-solid fa-location-dot mr-1"></i>
                                        {data.jobLocation}
                                    </span>
                                    <span>
                                        <i className="fa-regular fa-clock mr-1"></i>
                                        {data.workTime}
                                    </span>
                                    <span>
                                        <i className="fa-solid fa-dollar-sign mr-1"></i>
                                        {data.salary}
                                    </span>
                                </div>
                                <p className='text-sm text-gray-500 py-1'>
                                    {data.jobDescription}
                                </p>
                                <div className='text-sm text-gray-500 flex items-center gap-3'>
                                    <span>
                                        <i className="fa-regular fa-heart mr-1"></i>
                                        Save Job
                                    </span>
                                    <span>
                                        <i className="fa-regular fa-envelope mr-1"></i>
                                        Email Job
                                    </span>
                                </div>
                            </div>
                        </li>)
                    }
                </ul>
                <button className='w-full py-3 text-center text-base font-medium bg-gray-100 hover:bg-gray-200 hover:text-orange-600 duration-300'>
                    View All Jobs
                </button>
            </div>
        </section>
        <section className='pb-8'>
            <div className='lg:w-[82%] md:w-[90%] sm:w-4/5 w-11/12 mx-auto border rounded'>
                <div className='flex justify-between items-center text-gray-600 bg-gray-100 p-3'>
                    <h2 className='text-xl'>
                        Browse by <span className='font-bold'>Category</span>
                    </h2>
                    <button className='text-base font-medium'>
                        View More
                        <i className="fa-solid fa-bars ml-2"></i>
                    </button>
                </div>
                <div className='text-sm text-gray-600 p-3 grid md:grid-cols-3 grid-cols-1 md:gap-0 gap-2'>
                    <ul className='flex flex-col gap-2 md:p-6 px-5'>
                        <li>
                            <a href="/job-category/engineering" className='hover:underline w-max flex items-start gap-2'>
                                <i className="fa-solid fa-check mt-1"></i>
                                Engineering
                            </a>
                        </li>
                        <li>
                            <a href="/job-category/financial-services" className='hover:underline w-max flex items-start gap-2'>
                                <i className="fa-solid fa-check mt-1"></i>
                                Financial Services
                            </a>
                        </li>
                        <li>
                            <a href="/job-category/banking" className='hover:underline w-max flex items-start gap-2'>
                                <i className="fa-solid fa-check mt-1"></i>
                                Banking
                            </a>
                        </li>
                        <li>
                            <a href="/job-category/security-safety" className='hover:underline w-max flex items-start gap-2'>
                                <i className="fa-solid fa-check mt-1"></i>
                                Security & Safety
                            </a>
                        </li>
                        <li>
                            <a href="/job-category/training" className='hover:underline w-max flex items-start gap-2'>
                                <i className="fa-solid fa-check mt-1"></i>
                                Training
                            </a>
                        </li>
                    </ul>
                    <ul className='flex flex-col gap-2 md:p-6 px-5'>
                        <li>
                            <a href="/job-category/public-service" className='hover:underline w-max flex items-start gap-2'>
                                <i className="fa-solid fa-check mt-1"></i>
                                Public Service
                            </a>
                        </li>
                        <li>
                            <a href="/job-category/real-estate" className='hover:underline w-max flex items-start gap-2'>
                                <i className="fa-solid fa-check mt-1"></i>
                                Real Estate
                            </a>
                        </li>
                        <li>
                            <a href="/job-category/independent-freelance" className='hover:underline w-max flex items-start gap-2'>
                                <i className="fa-solid fa-check mt-1"></i>
                                Independent & Freelance
                            </a>
                        </li>
                        <li>
                            <a href="/job-category/it-telecoms" className='hover:underline w-max flex items-start gap-2'>
                                <i className="fa-solid fa-check mt-1"></i>
                                IT & Telecoms
                            </a>
                        </li>
                        <li>
                            <a href="/job-category/marketing-communication" className='hover:underline w-max flex items-start gap-2'>
                                <i className="fa-solid fa-check mt-1"></i>
                                Marketing & Communication
                            </a>
                        </li>
                    </ul>
                    <ul className='flex flex-col gap-2 md:p-6 px-5'>
                        <li>
                            <a href="/job-category/babysitting-nanny-work" className='hover:underline w-max flex items-start gap-2'>
                                <i className="fa-solid fa-check mt-1"></i>
                                Babysitting & Nanny Work
                            </a>
                        </li>
                        <li>
                            <a href="/job-category/human-resources" className='hover:underline w-max flex items-start gap-2'>
                                <i className="fa-solid fa-check mt-1"></i>
                                Human Resources
                            </a>
                        </li>
                        <li>
                            <a href="/job-category/medical-healthcare" className='hover:underline w-max flex items-start gap-2'>
                                <i className="fa-solid fa-check mt-1"></i>
                                Medical & Healthcare
                            </a>
                        </li>
                        <li>
                            <a href="/job-category/tourism-restaurants" className='hover:underline w-max flex items-start gap-2'>
                                <i className="fa-solid fa-check mt-1"></i>
                                Tourism & Restaurants
                            </a>
                        </li>
                        <li>
                            <a href="/job-category/transportation-logistics" className='hover:underline w-max flex items-start gap-2'>
                                <i className="fa-solid fa-check mt-1"></i>
                                Transportation & Logistics
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
        <section className='mb-20'>
            <div className='lg:w-[82%] md:w-[90%] sm:w-4/5 w-11/12 mx-auto border rounded'>
                <div className='flex justify-between items-center text-gray-600 bg-gray-100 p-3'>
                    <h2 className='sm:text-xl text-base'>
                        Featured <span className='font-bold'>Companies</span>
                    </h2>
                    <button className='text-base font-medium'>
                        View More
                        <i className="fa-solid fa-bars ml-2"></i>
                    </button>
                </div>
                <ul className='grid xl:grid-cols-6 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2'>
                    {
                        companiesData.map((item, index) => <li key={index} className='text-xs font-medium text-gray-500 py-6 px-5 text-center border group/companies'>
                            <a href="#">
                                <img src={item.img} alt="" />
                                <h4 className='group-hover/companies:scale-110 duration-300'>
                                    Job at
                                    <span className='text-blue-700 ml-2'>{item.companyName}</span>
                                    <span className='text-blue-700 ml-2'>({item.totalJobs})</span>
                                </h4>
                            </a>
                        </li>)
                    }
                </ul>
            </div>
            <div className='lg:w-[82%] md:w-[90%] sm:w-4/5 w-11/12 mx-auto my-8 lg:px-20 p-10 md:py-5 flex md:flex-row flex-col items-center justify-between gap-y-10 rounded bg-slate-50'>
                <div className='text-gray-500 flex md:flex-row flex-col md:gap-10 gap-2 items-center'>
                    <span>
                        <i className="fa-solid fa-briefcase text-4xl"></i>
                    </span>
                    <div>
                        <h1 className='text-4xl font-bold'>
                            347
                        </h1>
                        <p className='text-base font-medium'>
                            Jobs
                        </p>
                    </div>
                </div>
                <div className='text-gray-500 flex md:flex-row flex-col md:gap-10 gap-2 items-center'>
                    <span>
                        <i className="fa-solid fa-users text-4xl"></i>
                    </span>
                    <div>
                        <h1 className='text-4xl font-bold'>
                            49
                        </h1>
                        <p className='text-base font-medium'>
                            Users
                        </p>
                    </div>
                </div>
                <div className='text-gray-500 flex md:flex-row flex-col md:gap-10 gap-2 items-center'>
                    <span>
                        <i className="fa-solid fa-map-location-dot text-4xl"></i>
                    </span>
                    <div>
                        <h1 className='text-4xl font-bold'>
                            49
                        </h1>
                        <p className='text-base font-medium'>
                            Users
                        </p>
                    </div>
                </div>
            </div>
        </section>
        <footer className='bg-gray-100 border-t'>
            <div className='lg:w-[82%] md:w-[90%] sm:w-4/5 w-[90%] mx-auto '>
                <div className='py-10 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 lg:gap-y-0 gap-y-5'>
                    <ul className='flex flex-col gap-2 text-sm text-gray-500'>
                        <li className='text-base text-gray-700 font-bold uppercase mb-2'>
                            ABOUT US
                        </li>
                        <li>
                            <a href="#" className='hover:underline'>
                                FAQ
                            </a>
                        </li>
                        <li>
                            <a href="#" className='hover:underline'>
                                Anti-Scam
                            </a>
                        </li>
                        <li>
                            <a href="#" className='hover:underline'>
                                Terms
                            </a>
                        </li>
                        <li>
                            <a href="#" className='hover:underline'>
                                Privacy
                            </a>
                        </li>
                    </ul>
                    <ul className='flex flex-col gap-2 text-sm text-gray-500'>
                        <li className='text-base text-gray-700 font-bold uppercase mb-2'>
                            CONTACT & SITEMAP
                        </li>
                        <li>
                            <a href="#" className='hover:underline'>
                                Contact Us
                            </a>
                        </li>
                        <li>
                            <a href="#" className='hover:underline'>
                                Companies
                            </a>
                        </li>
                        <li>
                            <a href="#" className='hover:underline'>
                                Sitemap
                            </a>
                        </li>
                        <li>
                            <a href="#" className='hover:underline'>
                                Countries
                            </a>
                        </li>
                    </ul>
                    <ul className='flex flex-col gap-2 text-sm text-gray-500'>
                        <li className='text-base text-gray-700 font-bold uppercase mb-2'>
                            MY ACCOUNT
                        </li>
                        <li>
                            <a href="#" className='hover:underline'>
                                Log In
                            </a>
                        </li>
                        <li>
                            <a href="#" className='hover:underline'>
                                Register
                            </a>
                        </li>
                    </ul>
                    <div>
                        <h2 className='text-base text-gray-700 font-bold uppercase mb-5'>
                            FOLLOW US ON
                        </h2>
                        <ul className='flex gap-x-3'>
                            <li>
                                <a href="#" className='bg-blue-500 text-white py-1.5 px-2 rounded'>
                                    <i className="fa-brands fa-square-facebook text-lg"></i>
                                </a>
                            </li>
                            <li>
                                <a href="#" className='bg-cyan-500 text-white py-1.5 px-2 rounded'>
                                    <i className="fa-brands fa-twitter text-lg"></i>
                                </a>
                            </li>
                            <li>
                                <a href="#" className='bg-gradient-to-r from-purple-600 to-pink-500 text-white py-1.5 px-2 rounded'>
                                    <i className="fa-brands fa-instagram text-lg"></i>
                                </a>
                            </li>
                            <li>
                                <a href="#" className='bg-red-500 text-white py-1.5 px-2 rounded'>
                                    <i className="fa-brands fa-google-plus text-lg"></i>
                                </a>
                            </li>
                            <li>
                                <a href="#" className='bg-blue-600 text-white py-1.5 px-2 rounded'>
                                    <i className="fa-brands fa-linkedin text-lg"></i>
                                </a>
                            </li>
                            <li>
                                <a href="#" className='bg-red-600 text-white py-1.5 px-2 rounded'>
                                    <i className="fa-brands fa-pinterest text-lg"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <hr />
                <div className='py-5 flex justify-center items-center'>
                    <div>
                        <p className='text-sm text-gray-600'>&copy; {new Date().getFullYear()} Ecera System™. All Rights Reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    </>);
};

export default Careers;