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
import choose from '../../Images/Remote_Employees/choose.jpg';
import Footer from '../Shared/Footer/Footer';
import { Link } from 'react-router-dom';


const RemoteEmployees = () => {
    return (<>
        <PageTitle title='Remote Employees'></PageTitle>
        <Header />
        <ContactSideButton />
        <section
            style={{ backgroundImage: `url(${banner})` }}
            className='w-full h-[500px] bg-no-repeat bg-center bg-fixed bg-[#141d38]'
        >
            <div className='w-full h-full flex items-center justify-center text-center'>
                <div>
                    <h1 className='text-5xl font-semibold text-white uppercase'>
                        Remote Employees
                    </h1>
                    <p className='text-gray-300 text-lg italic font-medium py-3'>
                        Hire Dedicated Remote Employees
                    </p>
                    <p className='text-gray-300 text-lg font-medium pt-10 pb-5'>
                        Services / <span className='text-gray-100'>Remote Employees</span>
                    </p>
                </div>
            </div>
        </section>
        <section className='py-14'>
            <h1 className='text-center text-[40px] italic font-mono text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500'>
                See How It Works ?
            </h1>
            <div className='w-4/5 mx-auto grid grid-cols-4 gap-5 mt-5'>
                <div className='border rounded-lg p-6 shadow-md'>
                    <img src={img1} alt="" className='w-[124px] h-[124px] mx-auto' />
                    <h4 className='text-xl font-bold uppercase text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500'>Step 1</h4>
                    <p className='text-base font-medium uppercase text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 my-2'>
                        Share us your requirements
                    </p>
                    <p className=''>
                        As Though You Are Making A Local Hire...
                    </p>
                </div>
                <div className='border rounded-lg p-6 shadow-md'>
                    <img src={img2} alt="" className='w-[124px] h-[124px] mx-auto' />
                    <h4 className='text-xl font-bold uppercase text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500'>Step 2</h4>
                    <p className='text-base font-medium uppercase text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 my-2'>
                        We select our skilled IT staff
                    </p>
                    <p className=''>
                        You pick the right staff after assessing them
                    </p>
                </div>
                <div className='border rounded-lg p-6 shadow-md'>
                    <img src={img3} alt="" className='w-[124px] h-[124px] mx-auto' />
                    <h4 className='text-xl font-bold uppercase text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500'>Step 3</h4>
                    <p className='text-base font-medium uppercase text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 my-2'>
                        Dedicated staff will work exclusively for you
                    </p>
                    <p className=''>
                        They will work on full time basis from our office
                    </p>
                </div>
                <div className='border rounded-lg p-6 shadow-md'>
                    <img src={img4} alt="" className='w-[124px] h-[124px] mx-auto' />
                    <h4 className='text-xl font-bold uppercase text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500'>Step 4</h4>
                    <p className='text-base font-medium uppercase text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 my-2'>
                        We manage the entire operations
                    </p>
                    <p className=''>
                        From providing infrastructure, office facilities to full work supervision
                    </p>
                </div>
            </div>
        </section>
        <section className='py-14 static'>
            <div className='w-full h-96 bg-gradient-to-r from-blue-600 to-cyan-500'>
                <h1 className='text-center text-[40px] italic font-mono text-gray-100 pt-28'>
                    We Provide virtual employee
                </h1>
            </div>
            <div className='w-4/5 mx-auto -mt-36 grid grid-cols-3 gap-8'>
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
        <section className='py-14'>
            <div className='w-4/5 mx-auto'>
                <h1 className='text-center text-[40px] italic font-mono text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500'>
                    Why you should hire a virtual employee
                </h1>
                <div className='grid grid-cols-2 items-center gap-x-10 mt-10'>
                    <div>
                        <h4 className='text-2xl font-semibold text-gray-600 mb-8'>
                            First, what exactly is a virtual employee?
                        </h4>
                        <p className='text-gray-500 text-base'>
                            A virtual employee is exactly that – an employee, except they work for you from a remote location. Virtual employees can step in and contribute immediately to your business, whether it’s plugging into your existing team to fill in gaps or starting from scratch to build you a robust, secure, bug-free application to retain and attract customers and increase profits. .virtual employees are completely dedicated to you In short, you get:
                        </p>
                        <ul className='flex flex-col gap-y-2 mt-3 list-inside list-decimal text-base font-medium text-gray-500'>
                            <li>Dedicated, full time employees</li>
                            <li>We work in your time zone, on your schedule</li>
                            <li>Experienced IT professionals</li>
                            <li>Hire an individual or a team with a dedicated project manager</li>
                            <li>Our agile teams will grow and shrink as your business needs change</li>
                        </ul>
                    </div>
                    <div className='w-full rounded-xl shadow-[0px_5px_20px_0px_rgba(0,0,20,0.45)] overflow-hidden'>
                        <img src={sa} alt="" className='max-w-full h-auto' />
                    </div>
                </div>
            </div>
        </section>
        <section className='py-14'>
            <div className='w-4/5 mx-auto p-16 bg-gradient-to-r from-blue-600 to-cyan-500 flex items-center justify-between gap-10 rounded-xl'>
                <div>
                    <h1 className='w-full text-4xl italic text-white'>
                        Trust in your employees is essential for remote work success.
                    </h1>
                    <h1 className='w-full text-4xl italic text-white mt-4'>
                        It also forms the underlying foundation of a great virtual culture.
                    </h1>
                </div>
                <Link
                    to={"/contact"}
                    className='inline-block text-center w-80 text-lg font-medium hover:bg-white border-2 border-white text-white hover:text-cyan-600 duration-300 py-2 ml-10 rounded-lg'
                >
                    Meet with us
                </Link>
            </div>
        </section>
        <section className='py-14'>
            <div className='w-4/5 mx-auto'>
                <h1 className='text-center text-[40px] italic font-mono text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500'>
                    Why choose us?
                </h1>
                <div className='grid grid-cols-2 items-start gap-x-10 mt-10'>
                    <div className='w-full rounded-xl shadow-[0px_5px_20px_0px_rgba(0,0,20,0.45)] overflow-hidden'>
                        <img src={choose} alt="" className='max-w-full h-auto' />
                    </div>
                    <div>
                        <p className='text-gray-500 text-lg'>
                            Our virtual employees allow you to scale up your business quickly with minimal risks and headaches and give you a wider talent pool with flexible working hours to choose from.
                        </p>
                        <ul className='flex flex-col gap-y-3 mt-5 list-inside list-decimal text-base font-medium text-gray-500'>
                            <li>Dedicated, full time employees</li>
                            <li>We work in your time zone, on your schedule</li>
                            <li>Experienced IT professionals</li>
                            <li>Hire an individual or a team with a dedicated project manager</li>
                            <li>Our agile teams will grow and shrink as your business needs change</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
        <Footer />
    </>);
};

export default RemoteEmployees;