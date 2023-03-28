import React from 'react';
import ContactSideButton from '../Shared/ContactSideButton/ContactSideButton';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';
import PageTitle from '../Shared/PageTitle';

const Immigration = () => {
    return (<>
        <PageTitle title='Immigration'></PageTitle>
        <Header />
        <ContactSideButton />
        <section
            style={{ backgroundImage: `url(/Images/packages-bg.jpg)` }}
            className='w-full md:py-36 py-28 bg-no-repeat bg-center bg-cover'
        >
            <div className='w-11/12 mx-auto h-full flex items-center justify-center text-center'>
                <div>
                    <h1 className='md:text-5xl text-3xl font-semibold text-white uppercase'>
                        Immigration
                    </h1>
                </div>
            </div>
        </section>
        <section className='2xl:w-[1100px] lg:w-4/5 w-11/12 mx-auto py-14 flex md:flex-row flex-col items-start md:gap-0 gap-10'>
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
                                className='duration-300 hover:text-blue-600'
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
                                className='text-blue-600'
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
                    Immigration
                </h1>
                <h4 className='text-lg font-medium text-gray-500 my-5'>
                    Ecera System is a global IT company and treats all its employees equally irrespective of their nationality. We hire individuals with topnotch skills and love for technology to be part of our creative teams irrespective of their nationality and visa status.
                </h4>
                <p className='text-base text-gray-500 my-5'>
                    We want to build a firm with the best Technology consultants and today with global collaboration it becomes extremely important for employees to travel and relocate to other countries. On need basis we do sponsor work visas in USA and other countries for right candidates. We want our employees to handle our client’s technology needs while we let our Attorneys and HR department take care of their immigration requirement.
                </p>
                <p className='text-base text-gray-500 my-5'>
                    Being a global company, we understand that it is important that our immigration policy and procedures are clearly stated and structured in as organization. It is extremely important for us that our consultants and their loved ones immigration needs and concerns are addressed properly as per the countries immigration law.
                </p>
                <h4 className='text-lg font-medium text-gray-500 my-5'>
                    Please contact Ecera System HR department for details.
                </h4>
            </div>
        </section>
        <Footer></Footer>
    </>);
};

export default Immigration;