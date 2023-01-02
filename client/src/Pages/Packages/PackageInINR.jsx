import React from 'react';
import ContactSideButton from '../Shared/ContactSideButton/ContactSideButton';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';
import PageTitle from '../Shared/PageTitle';
import banner from '../../Images/packages-bg.jpg';

const PackageInINR = () => {
    return (<>
        <PageTitle title='Package In INR'></PageTitle>
        <Header />
        <ContactSideButton />
        <section>
            <div className='py-24 bg-no-repeat bg-center text-center'
                style={{ backgroundImage: `url(${banner})` }}
            >
                <h1 className='md:text-5xl text-3xl font-semibold text-white uppercase'>
                    Website Design
                </h1>
                <h4 className='text-gray-300 md:text-lg text-base italic font-medium py-3'>
                    Here Website Designing Offer
                </h4>
                <p className='text-gray-400 text-base pt-10 pb-5'>
                    Packages /<span className='text-gray-100 ml-2'>Package In INR</span>
                </p>
            </div>
            <div className='w-full h-full py-16 bg-gradient-to-r from-pink-100 to-blue-100'>
                <div className='md:w-3/4 sm:w-4/5 w-11/12 mx-auto grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 items-start gap-8'>
                    <div className='w-full bg-white p-6 rounded-md  border-t-4 border-blue-600 shadow-[0px_5px_20px_0px_rgba(0,0,20,0.1)] hover:-translate-y-3 hover:scale-105 duration-300 ease-linear'>
                        <p className='text-sm font-medium text-gray-500 uppercase'>
                            WEB DESIGN PLAN
                        </p>
                        <h1 className='text-5xl pt-5 pb-10 text-gray-600'>
                            $1000
                            <span className='text-base font-medium'>/ month</span>
                        </h1>
                        <hr />
                        <ul className='mt-6 flex flex-col gap-5 text-gray-500 text-sm font-medium'>
                            <li className='flex items-start'>
                                <i className="fa-solid fa-check bg-green-400 rounded-full text-white p-[3px] text-[12px] mr-2 mt-0.5"></i>
                                5 Pages
                            </li>
                            <li className='flex items-start'>
                                <i className="fa-solid fa-check bg-green-400 rounded-full text-white p-[3px] text-[12px] mr-2 mt-0.5"></i>
                                Wordpress/HTML
                            </li>
                            <li className='flex items-start'>
                                <i className="fa-solid fa-check bg-green-400 rounded-full text-white p-[3px] text-[12px] mr-2 mt-0.5"></i>
                                Home Page with other 4 Pages
                            </li>
                            <li className='flex items-start'>
                                <i className="fa-solid fa-check bg-green-400 rounded-full text-white p-[3px] text-[12px] mr-2 mt-0.5"></i>
                                Contact Us, Service, About and Faq
                            </li>
                            <li className='flex items-start'>
                                <i className="fa-solid fa-check bg-green-400 rounded-full text-white p-[3px] text-[12px] mr-2 mt-0.5"></i>
                                Advances CSS
                            </li>
                            <li className='flex items-start'>
                                <i className="fa-solid fa-check bg-green-400 rounded-full text-white p-[3px] text-[12px] mr-2 mt-0.5"></i>
                                Dedicated Phone Support for 15 Days
                            </li>
                            <li className='flex items-start'>
                                <i className="fa-solid fa-xmark bg-red-500 rounded-full text-white py-[3px] px-1.5 text-[12px] mr-2 mt-0.5"></i>
                                Monthly Status Reports
                            </li>
                            <li className='flex items-start'>
                                <i className="fa-solid fa-xmark bg-red-500 rounded-full text-white py-[3px] px-1.5 text-[12px] mr-2 mt-0.5"></i>
                                Dynamic Pages
                            </li>
                        </ul>
                        <button
                            className='block w-full py-3 mt-8 mb-2 text-base font-medium uppercase text-center text-white bg-gradient-to-r from-pink-500 to-purple-500  hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 duration-300 rounded-full'
                        >
                            Buy Now
                        </button>
                    </div>
                </div>
            </div>
        </section>
        <Footer />
    </>);
};

export default PackageInINR;