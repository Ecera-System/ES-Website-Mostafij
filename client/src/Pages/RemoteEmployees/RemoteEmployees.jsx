import React from 'react';
import { Link } from 'react-router-dom';
import ContactSideButton from '../Shared/ContactSideButton/ContactSideButton';
import Header from '../Shared/Header/Header';
import PageTitle from '../Shared/PageTitle';
import Footer from '../Shared/Footer/Footer';


const RemoteEmployees = () => {
    return (<>
        <PageTitle title='Remote Employees'></PageTitle>
        <Header />
        <ContactSideButton />
        <section
            style={{ backgroundImage: `url(/Images/globe-banner.png)` }}
            className='w-full h-auto bg-no-repeat bg-center bg-fixed bg-[#020a23]'
        >
            <div className='w-full h-full py-20 flex items-center justify-center text-center'>
                <div className='lg:w-[50rem] w-[90%]'>
                    <h2
                        style={{ textShadow: '2px 2px rgba(0,0,0, 0.2)' }}
                        className='lg:text-4xl md:text-3xl text-2xl font-medium text-white'
                    >
                        Outsource in Any Domain
                    </h2>
                    <h1
                        style={{ textShadow: '2px 2px rgba(0,0,0, 0.2)' }}
                        className='lg:text-5xl md:text-4xl text-3xl font-semibold text-white mt-5'
                    >
                        Hire Dedicated Virtual Employees
                    </h1>
                    <h2
                        style={{ textShadow: '2px 2px rgba(0,0,0, 0.2)' }}
                        className='sm:w-max mx-auto lg:text-2xl text-lg font-medium text-white mt-14 py-4 border-t border-b'
                    >
                        Starting from Just
                        <strong className='mx-2 text-cyan-400'>
                            US $995 – $1995
                        </strong>
                        / Month only
                    </h2>
                    <ul className='md:w-full w-max lg:mt-20 mt-14 mx-auto flex md:flex-row flex-col md:items-center justify-between gap-5'>
                        <li
                            style={{ textShadow: '2px 2px rgba(0,0,0, 0.2)' }}
                            className='text-lg font-medium text-cyan-400 flex items-center gap-3'
                        >
                            <span className='text-4xl text-white'>
                                <i class="fa-solid fa-users"></i>
                            </span>
                            1500+ Employees
                        </li>
                        <li
                            style={{ textShadow: '2px 2px rgba(0,0,0, 0.2)' }}
                            className='text-lg font-medium text-cyan-400 flex items-center gap-3'
                        >
                            <span className='text-4xl text-white'>
                                <i class="fa-solid fa-globe"></i>
                            </span>
                            150+ Domains
                        </li>
                        <li
                            style={{ textShadow: '2px 2px rgba(0,0,0, 0.2)' }}
                            className='text-lg font-medium text-cyan-400 flex items-center gap-3'
                        >
                            <span className='text-4xl text-white'>
                                <i class="fa-solid fa-hourglass-start"></i>
                            </span>
                            Start Within 8 hours
                        </li>
                    </ul>
                </div>
            </div>
        </section>
        <div className=' flex items-center justify-center sm:gap-5 gap-3 sm:mt-16 mt-10'>
            <div className='w-1.5 h-1.5 border-2 border-cyan-400 rounded-full'></div>
            <div className='w-2 h-2 border-2 border-cyan-400 rounded-full'></div>
            <div className='w-3 h-3 border-2 border-cyan-400 rounded-full'></div>
            <div className='w-32 h-3 border-2 border-cyan-400 rounded-full'></div>
            <div className='w-3 h-3 border-2 border-cyan-400 rounded-full'></div>
            <div className='w-2 h-2 border-2 border-cyan-400 rounded-full'></div>
            <div className='w-1.5 h-1.5 border-2 border-cyan-400 rounded-full'></div>
        </div>
        <section className='w-full h-auto py-20 bg-no-repeat bg-center bg-fixed'>
            <div className='w-full h-full flex items-center justify-center'>
                <div>
                    <h1
                        style={{ textShadow: '1px 1px 1px rgba(0,0,0,0.2)' }}
                        className='text-center md:text-[40px] md:leading-snug text-3xl font-medium text-cyan-500  mb-10'
                    >
                        See How It Works ?
                    </h1>
                    <div
                        className='2xl:w-[1200px] xl:w-4/5 lg:w-11/12 md:w-3/5 sm:w-4/5 w-11/12 mx-auto grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5'
                    >

                        <div class="group relative">
                            <span class="absolute inset-0 border-2 border-dashed border-cyan-400" />

                            <div
                                class="flex w-full h-full transform border-4 border-cyan-400 bg-white transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2"
                            >
                                <div class="p-8">
                                    <img
                                        loading='lazy'
                                        src='/Images/Remote_Employees/img-icon1.png'
                                        alt=""
                                        className='w-[124px] h-[124px] mx-auto'
                                    />
                                    <h4 className='text-xl font-bold uppercase mt-4 text-cyan-500 text-center'>
                                        Step 1
                                    </h4>
                                    <h2 class="my-2 text-lg font-medium text-gray-700">
                                        Share us your requirements
                                    </h2>
                                    <p className='text-sm text-gray-600'>
                                        As Though You Are Making A Local Hire...
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="group relative">
                            <span class="absolute inset-0 border-2 border-dashed border-cyan-400" />

                            <div
                                class="flex w-full h-full transform border-4 border-cyan-400 bg-white transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2"
                            >
                                <div class="p-8">
                                    <img
                                        loading='lazy'
                                        src='/Images/Remote_Employees/img-icon2.png'
                                        alt=""
                                        className='w-[124px] h-[124px] mx-auto'
                                    />
                                    <h4 className='text-xl font-bold uppercase mt-4 text-cyan-500 text-center'>Step 2</h4>
                                    <h2 class="my-2 text-lg font-medium text-gray-700">
                                        We select our skilled IT staff
                                    </h2>
                                    <p className='text-sm text-gray-600'>
                                        You pick the right staff after assessing them
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="group relative">
                            <span class="absolute inset-0 border-2 border-dashed border-cyan-400" />

                            <div
                                class="flex w-full h-full transform border-4 border-cyan-400 bg-white transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2"
                            >
                                <div class="p-8">
                                    <img
                                        loading='lazy'
                                        src='/Images/Remote_Employees/img-icon3.png'
                                        alt=""
                                        className='w-[124px] h-[124px] mx-auto'
                                    />
                                    <h4 className='text-xl font-bold uppercase mt-4 text-cyan-500 text-center'>Step 3</h4>
                                    <h2 class="my-2 text-lg font-medium text-gray-700">
                                        Dedicated staff will work exclusively for you
                                    </h2>
                                    <p className='text-sm text-gray-600'>
                                        They will work on full time basis from our office
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="group relative">
                            <span class="absolute inset-0 border-2 border-dashed border-cyan-400" />

                            <div
                                class="flex w-full h-full transform border-4 border-cyan-400 bg-white transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2"
                            >
                                <div class="p-8">
                                    <img
                                        loading='lazy'
                                        src='/Images/Remote_Employees/img-icon4.png'
                                        alt=""
                                        className='w-[124px] h-[124px] mx-auto'
                                    />
                                    <h4 className='text-xl font-bold uppercase mt-4 text-cyan-500 text-center'>Step 4</h4>
                                    <h2 class="my-2 text-lg font-medium text-gray-700">
                                        We manage the entire operations
                                    </h2>
                                    <p className='text-sm text-gray-600'>
                                        From providing infrastructure, office facilities to full work supervision
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className='pb-16 static'>
            <div className='w-full h-96 bg-gradient-to-r from-blue-600 to-cyan-500'>
                <h1 className='text-center md:text-5xl md:leading-snug text-3xl font-medium text-gray-100 pt-24'>
                    We Provide virtual employee
                </h1>
            </div>
            <div className='2xl:w-[1200px] xl:w-4/5 lg:w-11/12 sm:w-4/5 w-11/12 mx-auto -mt-36 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8'>
                <div className='text-center bg-gray-100 rounded-lg p-6 shadow-md hover:scale-105 duration-300 ease-linear'>
                    <div className='text-[65px] text-blue-600'>
                        <i className="fa-solid fa-laptop-code"></i>
                    </div>
                    <h4 className='text-xl font-bold text-gray-700'>IT OutSourcing</h4>
                    <p className='text-gray-500 text-base mt-3'>
                        We develop high-performance apps compatible with iOS and Android. Our experts have a strong understanding of applications eith different OS development.
                    </p>
                </div>
                <div className='text-center bg-gray-100 rounded-lg p-6 shadow-md hover:scale-105 duration-300 ease-linear'>
                    <div className='text-[65px] text-blue-600'>
                        <i className="fa-solid fa-chart-simple"></i>
                    </div>
                    <h4 className='text-xl font-bold text-gray-700'>
                        Digital Marketing
                    </h4>
                    <p className='text-gray-500 text-base mt-3'>
                        Hire virtual assistant who handles all the aspects of your digital marketing. As they work remotely, they don’t have to be present in-person at your office or business.
                    </p>
                </div>
                <div className='text-center bg-gray-100 rounded-lg p-6 shadow-md hover:scale-105 duration-300 ease-linear'>
                    <div className='text-[65px] text-blue-600'>
                        <i className="fa-solid fa-code"></i>
                    </div>
                    <h4 className='text-xl font-bold text-gray-700'>
                        Hire Developers
                    </h4>
                    <p className='text-gray-500 text-base mt-3'>
                        Hire Dedicated Developers.We offers you the development of new projects of your choice which helps you in your benefits.
                    </p>
                </div>
                <div className='text-center bg-gray-100 rounded-lg p-6 shadow-md hover:scale-105 duration-300 ease-linear'>
                    <div className='text-[65px] text-blue-600'>
                        <i className="fa-solid fa-terminal"></i>
                    </div>
                    <h4 className='text-xl font-bold text-gray-700'>
                        Software Development
                    </h4>
                    <p className='text-gray-500 text-base mt-3'>
                        We offer talented staff to develop the overall layout and production design for advertisements, brochures, magazines, and corporate reports according to requirment needs.
                    </p>
                </div>
                <div className='text-center bg-gray-100 rounded-lg p-6 shadow-md hover:scale-105 duration-300 ease-linear'>
                    <div className='text-[65px] text-blue-600'>
                        <i className="fa-solid fa-gears"></i>
                    </div>
                    <h4 className='text-xl font-bold text-gray-700'>
                        IT Technical support
                    </h4>
                    <p className='text-gray-500 text-base mt-3'>
                        Trust our top minds to eliminate workflow pain points, implement new tech, and consolidate app portfolios.
                    </p>
                </div>
                <div className='text-center bg-gray-100 rounded-lg p-6 shadow-md hover:scale-105 duration-300 ease-linear'>
                    <div className='text-[65px] text-blue-600'>
                        <i className="fa-solid fa-wand-magic-sparkles"></i>
                    </div>
                    <h4 className='text-xl font-bold text-gray-700'>
                        Other Services
                    </h4>
                    <p className='text-gray-500 text-base mt-3'>
                        We offer remote employee's who help in Maintaining database by entering new and updated customer and account information.
                    </p>
                </div>
            </div>
        </section>
        <section className='py-10 mb-10'>
            <div className='2xl:w-[1200px] md:w-4/5 w-11/12 mx-auto md:p-16 p-8 bg-gradient-to-r from-blue-600 to-cyan-500 flex lg:flex-row flex-col items-center lg:justify-between justify-center gap-10 rounded-xl'>
                <div>
                    <h1 className='w-full lg:text-4xl text-2xl italic text-white'>
                        Trust in your employees is essential for remote work success.
                    </h1>
                    <h1 className='w-full lg:text-4xl text-2xl italic text-white mt-4'>
                        It also forms the underlying foundation of a great virtual culture.
                    </h1>
                </div>
                <Link
                    to={"/contact"}
                    className='inline-block text-center sm:w-80 w-full text-lg font-medium hover:bg-white border-2 border-white text-white hover:text-cyan-600 duration-300 py-2 lg:ml-10 rounded-lg'
                >
                    Meet with us
                </Link>
            </div>
        </section>
        <div className='flex items-center sm:gap-5 gap-3'>
            <hr className='w-full h-0.5 bg-blue-500' />
            <div className='w-6 h-3 border-2 border-blue-500 rounded-full'></div>
            <div className='w-96 h-3 border-2 border-blue-500 rounded-full'></div>
            <div className='w-6 h-3 border-2 border-blue-500 rounded-full'></div>
            <hr className='w-full h-0.5 bg-blue-500' />
        </div>
        <section className='pt-20 pb-24'>
            <div>
                <h1 className='mx-7 text-center md:text-5xl md:leading-snug text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500'>
                    360° Virtual Staffing Services
                </h1>
                <p className='md:text-lg text-base font-medium text-center text-gray-500'>
                    Hire a remote employee in any domain
                </p>
                <div className='2xl:w-[1200px] xl:w-4/5 lg:w-11/12 w-4/5 mx-auto mt-12 grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-16'>
                    <div className=''>
                        <div
                            style={{ backgroundImage: `url(/Images/Remote_Employees/outsourcing.png)` }}
                            className="w-[92px] h-[92px] mx-auto bg-no-repeat bg-center bg-cover"
                        />
                        <h2 className='mt-5 text-lg font-medium text-gray-600 text-center'>
                            IT Outsourcing
                        </h2>
                    </div>
                    <div className=''>
                        <div
                            style={{ backgroundImage: `url(/Images/Remote_Employees/app-development.png)` }}
                            className="w-[92px] h-[92px] mx-auto bg-no-repeat bg-center bg-cover"
                        />
                        <h2 className='mt-5 text-lg font-medium text-gray-600 text-center'>
                            Mobile Apps Development
                        </h2>
                    </div>
                    <div className=''>
                        <div
                            style={{ backgroundImage: `url(/Images/Remote_Employees/digital_marketing.png)` }}
                            className="w-[92px] h-[92px] mx-auto bg-no-repeat bg-center bg-cover"
                        />
                        <h2 className='mt-5 text-lg font-medium text-gray-600 text-center'>
                            Digital Marketing
                        </h2>
                    </div>
                    <div className=''>
                        <div
                            style={{ backgroundImage: `url(/Images/Remote_Employees/content-writing.png)` }}
                            className="w-[92px] h-[92px] mx-auto bg-no-repeat bg-center bg-cover"
                        />
                        <h2 className='mt-5 text-lg font-medium text-gray-600 text-center'>
                            Digital Marketing
                        </h2>
                    </div>
                    <div className=''>
                        <div
                            style={{ backgroundImage: `url(/Images/Remote_Employees/hr_recruitment.png)` }}
                            className="w-[92px] h-[92px] mx-auto bg-no-repeat bg-center bg-cover"
                        />
                        <h2 className='mt-5 text-lg font-medium text-gray-600 text-center'>
                            HR & Recruitment
                        </h2>
                    </div>
                    <div className=''>
                        <div
                            style={{ backgroundImage: `url(/Images/Remote_Employees/graphics_and_web.png)` }}
                            className="w-[92px] h-[92px] mx-auto bg-no-repeat bg-center bg-cover"
                        />
                        <h2 className='mt-5 text-lg font-medium text-gray-600 text-center'>
                            Graphics & Web Designing
                        </h2>
                    </div>
                    <div className=''>
                        <div
                            style={{ backgroundImage: `url(/Images/Remote_Employees/engineer.png)` }}
                            className="w-[92px] h-[92px] mx-auto bg-no-repeat bg-center bg-cover"
                        />
                        <h2 className='mt-5 text-lg font-medium text-gray-600 text-center'>
                            Engineering & Architecture
                        </h2>
                    </div>
                    <div className=''>
                        <div
                            style={{ backgroundImage: `url(/Images/Remote_Employees/technical_support.png)` }}
                            className="w-[92px] h-[92px] mx-auto bg-no-repeat bg-center bg-cover"
                        />
                        <h2 className='mt-5 text-lg font-medium text-gray-600 text-center'>
                            IT Technical Support
                        </h2>
                    </div>
                </div>
            </div>
        </section>
        <section className='pt-20 pb-28 bg-gray-50'>
            <div>
                <h1 className='mx-7 text-center md:text-5xl md:leading-snug text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500'>
                    3 key advantages of a remote workforce
                </h1>
                <div className='2xl:w-[1200px] lg:w-4/5 md:w-4/5 sm:w-3/4 w-4/5 mx-auto mt-16 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10'>
                    <div className='px-8 py-14 bg-white shadow-[2px_5px_20px_10px_rgba(0,0,0,0.1)] rounded-md rounded-tr-[2rem] rounded-bl-[2rem] hover:-translate-y-3 hover:scale-105 duration-300 ease-linear text-center'>
                        <div
                            style={{ backgroundImage: `url(/Images/Remote_Employees/talent.png)` }}
                            className="w-[92px] h-[92px] mx-auto bg-no-repeat bg-cover bg-center"
                        />
                        <h2 className='text-xl font-medium text-gray-600 mt-7 mb-3'>
                            Talent on-demand
                        </h2>
                        <p className='text-base text-gray-500'>
                            Hire a dedicated, skilled remote employee in less than 8 hours
                        </p>
                    </div>
                    <div className='px-8 py-14 bg-white shadow-[2px_5px_20px_10px_rgba(0,0,0,0.1)] rounded-md rounded-tr-[2rem] rounded-bl-[2rem] hover:-translate-y-3 hover:scale-105 duration-300 ease-linear text-center'>
                        <div
                            style={{ backgroundImage: `url(/Images/Remote_Employees/money.png)` }}
                            className="w-[92px] h-[92px] mx-auto bg-no-repeat bg-cover bg-center"
                        />
                        <h2 className='text-xl font-medium text-gray-600 mt-7 mb-3'>
                            Zero overheads
                        </h2>
                        <p className='text-base text-gray-500'>
                            Say goodbye to profit-guzzling expenses like office rent, taxes, hardware, etc
                        </p>
                    </div>
                    <div className='px-8 py-14 bg-white shadow-[2px_5px_20px_10px_rgba(0,0,0,0.1)] rounded-md rounded-tr-[2rem] rounded-bl-[2rem] hover:-translate-y-3 hover:scale-105 duration-300 ease-linear text-center'>
                        <div
                            style={{ backgroundImage: `url(/Images/Remote_Employees/support.png)` }}
                            className="w-[92px] h-[92px] mx-auto bg-no-repeat bg-cover bg-center"
                        />
                        <h2 className='text-xl font-medium text-gray-600 mt-7 mb-3'>
                            24×7 support
                        </h2>
                        <p className='text-base text-gray-500'>
                            No downtime, no being stranded midway in a project
                        </p>
                    </div>
                </div>
            </div>
        </section>
        <section className='pt-20 pb-24'>
            <div>
                <h1 className='mx-7 text-center md:text-5xl md:leading-snug text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500'>
                    Hiring Remote Staff Was Never This Easy
                </h1>
                <div className='2xl:w-[1200px] xl:w-[85%] lg:w-3/5 md:w-4/5 w-9/12 mx-auto grid xl:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-10 mt-16'>
                    <div
                        className='px-8 py-14 shadow-[2px_5px_20px_10px_rgba(0,0,0,0.1)] rounded-md rounded-tr-[2rem] rounded-bl-[2rem]'
                    >
                        <div className='relative -top-2 -left-[60px] w-max pl-10 pr-14 py-3 bg-blue-500 text-white text-lg font-medium uppercase rounded-r-full'>
                            Step 01
                            <span
                                style={{ borderStyle: 'solid', borderWidth: '0 28px 28px 0', borderColor: 'transparent #2563EB transparent transparent' }}
                                className='absolute -bottom-[28px] left-0 w-0 h-0'
                            />
                        </div>
                        <div className='w-[8.5rem] h-[8.5rem] mx-auto my-10 p-8 border border-blue-600 rounded-full'>
                            <span
                                style={{ backgroundImage: `url(/Images/Remote_Employees/briefUs.png)` }}
                                className='w-full h-full inline-block bg-no-repeat bg-cover bg-center'
                            />
                        </div>
                        <h2 className='text-xl font-medium text-gray-600 text-center'>
                            Brief Us
                        </h2>
                    </div>
                    <div
                        className='px-8 py-14 shadow-[2px_5px_20px_10px_rgba(0,0,0,0.1)] rounded-md rounded-tr-[2rem] rounded-bl-[2rem]'
                    >
                        <div className='relative -top-2 -left-[60px] w-max pl-10 pr-14 py-3 bg-purple-600 text-white text-lg font-medium uppercase rounded-r-full'>
                            Step 02
                            <span
                                style={{ borderStyle: 'solid', borderWidth: '0 28px 28px 0', borderColor: 'transparent #7C21CB transparent transparent' }}
                                className='absolute -bottom-[28px] left-0 w-0 h-0'
                            />
                        </div>
                        <div className='w-[8.5rem] h-[8.5rem] mx-auto my-10 p-8 border border-purple-600 rounded-full'>
                            <span
                                style={{ backgroundImage: `url(/Images/Remote_Employees/handPick.png)` }}
                                className='w-full h-full inline-block bg-no-repeat bg-cover bg-center'
                            />
                        </div>
                        <h2 className='text-xl font-medium text-gray-600 text-center'>
                            Hand-pick Resources
                        </h2>
                    </div>
                    <div
                        className='px-8 py-14 shadow-[2px_5px_20px_10px_rgba(0,0,0,0.1)] rounded-md rounded-tr-[2rem] rounded-bl-[2rem]'
                    >
                        <div className='relative -top-2 -left-[60px] w-max pl-10 pr-14 py-3 bg-[#1DBF73] text-white text-lg font-medium uppercase rounded-r-full'>
                            Step 03
                            <span
                                style={{ borderStyle: 'solid', borderWidth: '0 28px 28px 0', borderColor: 'transparent #19a061 transparent transparent' }}
                                className='absolute -bottom-[28px] left-0 w-0 h-0'
                            />
                        </div>
                        <div className='w-[8.5rem] h-[8.5rem] mx-auto my-10 p-8 border border-[#1DBF73] rounded-full'>
                            <span
                                style={{ backgroundImage: `url(/Images/Remote_Employees/chooseTeam.png)` }}
                                className='w-full h-full inline-block bg-no-repeat bg-cover bg-center'
                            />
                        </div>
                        <h2 className='text-xl font-medium text-gray-600 text-center'>
                            Choose Your Team
                        </h2>
                    </div>
                    <div
                        className='px-8 py-14 shadow-[2px_5px_20px_10px_rgba(0,0,0,0.1)] rounded-md rounded-tr-[2rem] rounded-bl-[2rem]'
                    >
                        <div className='relative -top-2 -left-[60px] w-max pl-10 pr-14 py-3 bg-cyan-500 text-white text-lg font-medium uppercase rounded-r-full'>
                            Step 04
                            <span
                                style={{ borderStyle: 'solid', borderWidth: '0 28px 28px 0', borderColor: 'transparent #0891B2 transparent transparent' }}
                                className='absolute -bottom-[28px] left-0 w-0 h-0'
                            />
                        </div>
                        <div className='w-[8.5rem] h-[8.5rem] mx-auto my-10 p-8 border border-cyan-500 rounded-full'>
                            <span
                                style={{ backgroundImage: `url(/Images/Remote_Employees/getGoing.png)` }}
                                className='w-full h-full inline-block bg-no-repeat bg-cover bg-center'
                            />
                        </div>
                        <h2 className='text-xl font-medium text-gray-600 text-center'>
                            Get Going
                        </h2>
                    </div>
                </div>
                <div className='grid place-items-center mt-20'>
                    <Link
                        to='/get-estimate'
                        className='px-14 py-3 text-lg font-medium text-blue-600 hover:bg-blue-600 hover:text-white duration-300 border border-blue-600 rounded-tr-3xl rounded-bl-3xl'
                    >
                        Share Your Requirement
                    </Link>
                </div>
            </div>
        </section>
        <div className='flex items-center sm:gap-5 gap-3'>
            <hr className='w-full h-0.5 bg-blue-500' />
            <div className='w-6 h-3 border-2 border-blue-500 rounded-full'></div>
            <div className='w-96 h-3 border-2 border-blue-500 rounded-full'></div>
            <div className='w-6 h-3 border-2 border-blue-500 rounded-full'></div>
            <hr className='w-full h-0.5 bg-blue-500' />
        </div>
        <section className='py-20'>
            <div className='2xl:w-[1200px] xl:w-4/5 lg:w-11/12 md:w-3/4 sm:w-4/5 w-11/12 mx-auto'>
                <h1 className='text-center md:text-5xl md:leading-snug text-3xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500'>
                    Why you should hire a virtual employee
                </h1>
                <div className='flex lg:flex-row flex-col-reverse items-center gap-10 mt-10'>
                    <div className='lg:w/1/2 w-full'>
                        <h4 className='text-2xl font-semibold text-gray-600 lg:mb-8 mb-5'>
                            First, what exactly is a virtual employee?
                        </h4>
                        <p className='text-gray-500 text-base'>
                            A virtual employee is exactly that – an employee, except they work for you from a remote location. Virtual employees can step in and contribute immediately to your business, whether it’s plugging into your existing team to fill in gaps or starting from scratch to build you a robust, secure, bug-free application to retain and attract customers and increase profits. .virtual employees are completely dedicated to you In short, you get:
                        </p>
                        <ul className='flex flex-col gap-y-2 mt-3 text-base font-semibold text-gray-500'>
                            <li className='flex items-start gap-3'>
                                <div className='w-12 h-0.5 bg-gray-400 relative mt-3'>
                                    <span
                                        className='absolute top-1/2 -translate-y-1/2 left-1 w-0.5 h-4 rotate-[30deg] bg-gray-400'
                                    />
                                    <span
                                        className='absolute top-1/2 -translate-y-1/2 left-2.5 w-0.5 h-4 rotate-[30deg] bg-gray-400'
                                    />
                                </div>
                                <span>Dedicated, full time employees</span>
                            </li>
                            <li className='flex items-start gap-3'>
                                <div className='w-12 h-0.5 bg-gray-400 relative mt-3'>
                                    <span
                                        className='absolute top-1/2 -translate-y-1/2 left-1 w-0.5 h-4 rotate-[30deg] bg-gray-400'
                                    />
                                    <span
                                        className='absolute top-1/2 -translate-y-1/2 left-2.5 w-0.5 h-4 rotate-[30deg] bg-gray-400'
                                    />
                                </div>
                                <span>We work in your time zone, on your schedule</span>
                            </li>
                            <li className='flex items-start gap-3'>
                                <div className='w-12 h-0.5 bg-gray-400 relative mt-3'>
                                    <span
                                        className='absolute top-1/2 -translate-y-1/2 left-1 w-0.5 h-4 rotate-[30deg] bg-gray-400'
                                    />
                                    <span
                                        className='absolute top-1/2 -translate-y-1/2 left-2.5 w-0.5 h-4 rotate-[30deg] bg-gray-400'
                                    />
                                </div>
                                <span>Experienced IT professionals</span>
                            </li>
                            <li className='flex items-start gap-3'>
                                <div className='w-12 h-0.5 bg-gray-400 relative mt-3'>
                                    <span
                                        className='absolute top-1/2 -translate-y-1/2 left-1 w-0.5 h-4 rotate-[30deg] bg-gray-400'
                                    />
                                    <span
                                        className='absolute top-1/2 -translate-y-1/2 left-2.5 w-0.5 h-4 rotate-[30deg] bg-gray-400'
                                    />
                                </div>
                                <span>Hire an individual or a team with a dedicated project manager</span>
                            </li>
                            <li className='flex items-start gap-3'>
                                <div className='w-12 h-0.5 bg-gray-400 relative mt-3'>
                                    <span
                                        className='absolute top-1/2 -translate-y-1/2 left-1 w-0.5 h-4 rotate-[30deg] bg-gray-400'
                                    />
                                    <span
                                        className='absolute top-1/2 -translate-y-1/2 left-2.5 w-0.5 h-4 rotate-[30deg] bg-gray-400'
                                    />
                                </div>
                                <span>Our agile teams will grow and shrink as your business needs change</span>
                            </li>
                        </ul>
                    </div>
                    <div className='lg:w/1/2 w-full rounded-xl shadow-[0px_5px_20px_0px_rgba(0,0,20,0.45)] overflow-hidden'>
                        <img
                            loading='lazy'
                            src='/Images/Remote_Employees/sa.jpg'
                            alt=""
                            className='max-w-full h-auto'
                        />
                    </div>
                </div>
            </div>
        </section>
        <Footer />
    </>);
};

export default RemoteEmployees;