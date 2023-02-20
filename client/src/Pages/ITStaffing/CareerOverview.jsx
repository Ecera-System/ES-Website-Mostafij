import React from 'react';
import ContactSideButton from '../Shared/ContactSideButton/ContactSideButton';
import Header from '../Shared/Header/Header';
import PageTitle from '../Shared/PageTitle';
import Footer from '../Shared/Footer/Footer';
import banner from '../../Images/packages-bg.jpg';
import cv_success from '../../Images/IT_Staffing/cv-success.png';

const CareerOverview = () => {
    return (<>
        <PageTitle title='Career Overview'></PageTitle>
        <Header />
        <ContactSideButton />
        <section
            style={{ backgroundImage: `url(${banner})` }}
            className='w-full md:py-36 py-28 bg-no-repeat bg-center bg-cover'
        >
            <div className='w-11/12 mx-auto h-full flex items-center justify-center text-center'>
                <div>
                    <h1 className='md:text-5xl text-3xl font-semibold text-white uppercase'>
                        Career Overview
                    </h1>
                </div>
            </div>
        </section>
        <section className='2xl:w-[1100px] lg:w-4/5 w-11/12 mx-auto py-14 mb-10 flex md:flex-row flex-col items-start md:gap-0 gap-10'>
            <div className='md:w-2/6 w-full'>
                <div className='w-max'>
                    <h2 className='text-3xl font-medium text-blue-600'>
                        Quick Links
                        <i class="fa-solid fa-link ml-2"></i>
                    </h2>
                    <div className='w-full h-0.5 bg-gray-200 my-5' />
                    <ul className='flex flex-col gap-3 text-base font-medium text-gray-500'>
                        <li>
                            <a
                                href="/career-overview"
                                className='text-blue-600'
                            >
                                <span className='w-3 h-3 rounded-full bg-gradient-to-r from-blue-600 to-cyan-400 inline-block mt-2 mr-2' />
                                Career Overview
                            </a>
                        </li>
                        <li>
                            <a
                                href="/employee-benefits"
                                className='duration-300 hover:text-blue-600'
                            >
                                <span className='w-3 h-3 rounded-full bg-gradient-to-r from-blue-600 to-cyan-400 inline-block mt-2 mr-2' />
                                Employee Benefit
                            </a>
                        </li>
                        <li>
                            <a
                                href="/immigration"
                                className='duration-300 hover:text-blue-600'
                            >
                                <span className='w-3 h-3 rounded-full bg-gradient-to-r from-blue-600 to-cyan-400 inline-block mt-2 mr-2' />
                                Immigration
                            </a>
                        </li>
                        <li>
                            <a
                                href="/careers"
                                className='duration-300 hover:text-blue-600'
                            >
                                <span className='w-3 h-3 rounded-full bg-gradient-to-r from-blue-600 to-cyan-400 inline-block mt-2 mr-2' />
                                Current-Opening
                            </a>
                        </li>
                        <li>
                            <a
                                href="/about"
                                className='duration-300 hover:text-blue-600'
                            >
                                <span className='w-3 h-3 rounded-full bg-gradient-to-r from-blue-600 to-cyan-400 inline-block mt-2 mr-2' />
                                Join-Us
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='md:w-4/6 w-full'>
                <h1 className='text-4xl font-medium text-blue-600'>
                    Careers Overview
                </h1>
                <p className='text-base text-gray-500 my-5'>
                    Organization is only as good as its people. At Ecera System, our employees are our priority, we consider our employees as part of our family. Success can only come from your elite workforce.
                </p>
                <p className='text-base text-gray-500'>
                    Ecera System, a progressive and fast growing firm provide challenging work opportunities coupled with conducive work environment. We are always looking for intelligent & experienced Technical, Functional and Management consultants, who are ready to take on the challenge to develop and implement leading edge software applications as well as share their ideas to maintain the highest quality standards in the industry. Our goal is all-round skill enhancement and continuous learning in line with the long-term career aspirations and success of our employees.
                </p>
            </div>
        </section>
        <section
            style={{ backgroundImage: 'radial-gradient(circle, #1D4ED8, #12244C)' }}
            className='w-full py-16'
        >
            <div className='lg:w-[800px] sm:w-4/5 w-11/12 mx-auto'>
                <h1 className='text-center text-white md:text-4xl text-3xl font-medium'>
                    Are you a motivated, self-driven, creative and talented technology professional?
                </h1>
                <p className='text-gray-200 my-8'>
                    Are You Looking For A Career With A Professionally Managed, Customer Centric Organization? Do You Need Company That Provides A Learning Environment And Freedom To Experiment? If You Answered YES, Then A Career With Ecera System Could Be The Perfect Way For Attaining Your Immediate And Long Term Objectives.
                </p>
                <p className='text-center text-base text-gray-200'>
                    Send your resume to
                    <a
                        href="mailto:career@ecerasystem.com"
                        className='text-yellow-500 ml-2'
                    >career@ecerasystem.com</a>
                </p>
            </div>
        </section>
        <section className='py-20'>
            <div className='2xl:w-[1100px] sm:w-4/5 w-11/12 mx-auto flex lg:flex-row flex-col-reverse items-center gap-10'>
                <div className='lg:w-1/2 w-full text-base text-gray-500'>
                    <p className='mb-5'>
                        We hire highly experienced individuals with several years’ experience in the IT industry. We create right opportunities for our employees based on their skill set, background and career goals. We provide our employees freedom to define his or her career path and support their initiative & drive. With global work locations and unique offshore, on-site and offsite delivery capabilities, we offer challenging environment to our employees to grow and explore their skills and proficiency. Our global presence allows us diversify our team with people from multiple nationalities and cultures.
                    </p>
                    <p>
                        We offer flexibility to employees to choose optimal compensation plan based upon geographical location and their needs. Varied options are available and we are willing to work within reason to ensure our employees are well compensated for their hard work and efforts.
                    </p>
                </div>
                <div className='lg:w-1/2 w-full'>
                    <img src={cv_success} alt="" className='sm:w-96 sm:h-96 w-4/5 h-4/5 mx-auto'/>
                </div>
            </div>
        </section>
        <Footer></Footer>
    </>);
};

export default CareerOverview;