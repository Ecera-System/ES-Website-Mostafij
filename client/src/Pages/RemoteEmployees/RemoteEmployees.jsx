import React from 'react';
import ContactSideButton from '../Shared/ContactSideButton/ContactSideButton';
import Header from '../Shared/Header/Header';
import PageTitle from '../Shared/PageTitle';
import banner from '../../Images/globe-banner.png';
import img1 from '../../Images/Remote_Employees/img-icon1.png';
import img2 from '../../Images/Remote_Employees/img-icon2.png';
import img3 from '../../Images/Remote_Employees/img-icon3.png';
import img4 from '../../Images/Remote_Employees/img-icon4.png';
import sa from '../../Images/Remote_Employees/sa.jpg';
import Footer from '../Shared/Footer/Footer';
import { Link } from 'react-router-dom';


const RemoteEmployees = () => {
    return (<>
        <PageTitle title='Remote Employees'></PageTitle>
        <Header />
        <ContactSideButton />
        <section
            style={{ backgroundImage: `url(${banner})` }}
            className='w-full h-auto py-20 bg-no-repeat bg-center bg-fixed bg-[#080d1d]'
        >
            <div className='w-full h-full flex items-center justify-center'>
                <div>
                    <div className='py-5'>
                        <h1 className='md:text-5xl text-3xl font-semibold text-white uppercase text-center'>
                            Remote Employees
                        </h1>
                        <p className='text-gray-300 md:text-lg text-base italic font-medium pt-3 text-center'>
                            Hire Dedicated Remote Employees
                        </p>
                    </div>

                    <div className=' flex items-center justify-center sm:gap-5 gap-3 sm:mt-16 mt-10 sm:mb-10 mb-5'>
                        <div className='w-1.5 h-1.5 border-2 border-white rounded-full'></div>
                        <div className='w-2 h-2 border-2 border-white rounded-full'></div>
                        <div className='w-3 h-3 border-2 border-white rounded-full'></div>
                        <div className='w-32 h-3 border-2 border-white rounded-full'></div>
                        <div className='w-3 h-3 border-2 border-white rounded-full'></div>
                        <div className='w-2 h-2 border-2 border-white rounded-full'></div>
                        <div className='w-1.5 h-1.5 border-2 border-white rounded-full'></div>
                    </div>

                    <h1
                        style={{ textShadow: '1px 1px 1px rgba(0,0,0,0.7)' }}
                        className='text-center md:text-[40px] md:leading-snug text-3xl font-medium text-cyan-400  mt-16 mb-10'
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
                                    <img src={img1} alt="" className='w-[124px] h-[124px] mx-auto' />
                                    <h4 className='text-xl font-bold uppercase mt-4 text-cyan-500 text-center'>Step 1</h4>
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
                                    <img src={img2} alt="" className='w-[124px] h-[124px] mx-auto' />
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
                                    <img src={img3} alt="" className='w-[124px] h-[124px] mx-auto' />
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
                                    <img src={img4} alt="" className='w-[124px] h-[124px] mx-auto' />
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
        <section className='py-10'>
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
                        <img src={sa} alt="" className='max-w-full h-auto' />
                    </div>
                </div>
            </div>
        </section>
        <Footer />
    </>);
};

export default RemoteEmployees;