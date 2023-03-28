import React, { useState } from 'react';
import ContactSideButton from '../Shared/ContactSideButton/ContactSideButton';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';
import PageTitle from '../Shared/PageTitle';
import PaymentButton from '../Shared/PaymentButton/PaymentButton';

const PackageInINR = () => {
    const [openPayBtn, setOpenPayBtn] = useState(null);

    return (<>
        <PageTitle title='Package In INR'></PageTitle>
        <Header login={true} />
        <ContactSideButton />
        <section>
            <div className='py-24 bg-no-repeat bg-center text-center'
                style={{ backgroundImage: `url(/Images/packages-bg.jpg)` }}
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
            <div className='w-full h-full py-16 bg-blue-50'>
                <div className='2xl:w-[1200px] md:w-3/4 sm:w-4/5 w-11/12 mx-auto grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 items-start gap-8'>
                    <div className='w-full bg-white p-6 rounded-md  border-t-4 border-blue-600 shadow-[0px_5px_20px_0px_rgba(0,0,20,0.1)] hover:-translate-y-3 hover:scale-105 duration-300 ease-linear'>
                        <p className='text-sm font-medium text-gray-500 uppercase'>
                            WEB DESIGN PLAN
                        </p>
                        <h1 className='text-5xl pt-5 pb-10 text-gray-600'>
                            <svg className='w-10 h-10 inline-block'
                                viewBox="0 0 24 24">
                                <path fill="currentColor" d="M13.66 7C13.1 5.82 11.9 5 10.5 5H6V3H18V5H14.74C15.22 5.58 15.58 6.26 15.79 7H18V9H16C15.73 11.8 13.37 14 10.5 14H9.77L16.5 21H13.73L7 14V12H10.5C12.26 12 13.72 10.7 13.96 9H6V7H13.66Z" />
                            </svg>
                            1000
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
                            onClick={() => setOpenPayBtn({
                                serviceName: 'Web Design Plan',
                                source: 'Package In INR',
                                amount: 1000,
                                currency: 'INR',
                                quantity: 1,
                                path: '/package/in-INR',
                            })}
                            className='block w-full py-3 mt-8 mb-2 text-base font-medium uppercase text-center text-white bg-blue-600 hover:bg-blue-700 duration-300 rounded-full'
                        >
                            Buy Now
                        </button>
                    </div>
                </div>
            </div>
        </section>
        <Footer />

        {/* <-- Payment Gateway --> */}
        <PaymentButton
            openPayBtn={openPayBtn}
            setOpenPayBtn={setOpenPayBtn}
        />
    </>);
};

export default PackageInINR;