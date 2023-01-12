import React, { useState } from 'react';
import ContactSideButton from '../Shared/ContactSideButton/ContactSideButton';
import Header from '../Shared/Header/Header';
import PageTitle from '../Shared/PageTitle';
import banner from '../../Images/packages-bg.jpg';
import Footer from '../Shared/Footer/Footer';
import PaymentButton from '../Shared/PaymentButton/PaymentButton';

const PackDigitalMarketing = () => {
    const [openPayBtn, setOpenPayBtn] = useState(null);

    return (<>
        <PageTitle title='Digital Marketing Package'></PageTitle>
        <Header login={true} />
        <ContactSideButton />
        <section>
            <div className='py-24 bg-no-repeat bg-center text-center'
                style={{ backgroundImage: `url(${banner})` }}
            >
                <h1 className='md:text-5xl text-3xl font-semibold text-white uppercase'>
                    Digital Marketing
                </h1>
                <h4 className='text-gray-300 md:text-lg text-base italic font-medium py-3'>
                    Some Digital Marketing Offers
                </h4>
                <p className='text-gray-400 text-base pt-10 pb-5'>
                    Packages /<span className='text-gray-100 ml-2'>Digital Marketing</span>
                </p>
            </div>
            <div className='w-full h-full py-16 bg-blue-50'>
                <div className='2xl:w-[1200px] md:w-3/4 sm:w-4/5 w-11/12 mx-auto grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 items-start gap-8'>
                    <div className='w-full bg-white p-6 rounded-md  border-t-4 border-blue-600 shadow-[0px_5px_20px_0px_rgba(0,0,20,0.1)] hover:-translate-y-3 hover:scale-105 duration-300 ease-linear'>
                        <p className='text-sm font-medium text-gray-500 uppercase'>
                            DIGITAL MARKETING - basic
                        </p>
                        <h1 className='text-5xl pt-5 pb-10 text-gray-600'>
                            $10
                            <span className='text-base font-medium'>/ month</span>
                        </h1>
                        <hr />
                        <ul className='mt-6 flex flex-col gap-5 text-gray-500 text-sm font-medium'>
                            <li className='flex items-start'>
                                <i className="fa-solid fa-check bg-green-400 rounded-full text-white p-[3px] text-[12px] mr-2 mt-0.5"></i>
                                Social media marketing on 4 platforms
                            </li>
                            <li className='flex items-start'>
                                <i className="fa-solid fa-check bg-green-400 rounded-full text-white p-[3px] text-[12px] mr-2 mt-0.5"></i>
                                Facebook, Instagram, LinkedIn, Twitter
                            </li>
                            <li className='flex items-start'>
                                <i className="fa-solid fa-check bg-green-400 rounded-full text-white p-[3px] text-[12px] mr-2 mt-0.5"></i>
                                For 10 Days
                            </li>
                            <li className='flex items-start'>
                                <i className="fa-solid fa-check bg-green-400 rounded-full text-white p-[3px] text-[12px] mr-2 mt-0.5"></i>
                                1 free consultation
                            </li>
                            <li className='flex items-start'>
                                <i className="fa-solid fa-xmark bg-red-500 rounded-full text-white py-[3px] px-1.5 text-[12px] mr-2 mt-0.5"></i>
                                Dedicated Tech Support
                            </li>
                            <li className='flex items-start'>
                                <i className="fa-solid fa-xmark bg-red-500 rounded-full text-white py-[3px] px-1.5 text-[12px] mr-2 mt-0.5"></i>
                                Search engine marketing
                            </li>
                            <li className='flex items-start'>
                                <i className="fa-solid fa-xmark bg-red-500 rounded-full text-white py-[3px] px-1.5 text-[12px] mr-2 mt-0.5"></i>
                                Social media campaign
                            </li>
                            <li className='flex items-start'>
                                <i className="fa-solid fa-xmark bg-red-500 rounded-full text-white py-[3px] px-1.5 text-[12px] mr-2 mt-0.5"></i>
                                Weekly meeting and performance updates
                            </li>
                        </ul>
                        <button
                            onClick={() => setOpenPayBtn({
                                serviceName: 'Digital Marketing - Basic',
                                source: 'Digital Marketing',
                                amount: 10,
                                currency: 'USD',
                                quantity: 1,
                                path: '/package/digital-marketing',
                            })}
                            className='block w-full py-3 mt-8 mb-2 text-base font-medium uppercase text-center text-white bg-blue-600 hover:bg-blue-700 duration-300 rounded-full'
                        >
                            Buy Now
                        </button>
                    </div>
                    <div className='w-full bg-white p-6 rounded-md  border-t-4 border-blue-600 shadow-[0px_5px_20px_0px_rgba(0,0,20,0.1)] hover:-translate-y-3 hover:scale-105 duration-300 ease-linear'>
                        <p className='text-sm font-medium text-gray-500 uppercase'>
                            DIGITAL MARKETING - Silver
                        </p>
                        <h1 className='text-5xl pt-5 pb-10 text-gray-600'>
                            $499
                            <span className='text-base font-medium'>/ month</span>
                        </h1>
                        <hr />
                        <ul className='mt-6 flex flex-col gap-5 text-gray-500 text-sm font-medium'>
                            <li className='flex items-start'>
                                <i className="fa-solid fa-check bg-green-400 rounded-full text-white p-[3px] text-[12px] mr-2 mt-0.5"></i>
                                Social media marketing on 4 platforms
                            </li>
                            <li className='flex items-start'>
                                <i className="fa-solid fa-check bg-green-400 rounded-full text-white p-[3px] text-[12px] mr-2 mt-0.5"></i>
                                facebook, instagram, linkedin, twitter
                            </li>
                            <li className='flex items-start'>
                                <i className="fa-solid fa-check bg-green-400 rounded-full text-white p-[3px] text-[12px] mr-2 mt-0.5"></i>
                                Search engine marketing
                            </li>
                            <li className='flex items-start'>
                                <i className="fa-solid fa-check bg-green-400 rounded-full text-white p-[3px] text-[12px] mr-2 mt-0.5"></i>
                                site analysis, competitor analysis, performance monitor, keyword research
                            </li>
                            <li className='flex items-start'>
                                <i className="fa-solid fa-check bg-green-400 rounded-full text-white p-[3px] text-[12px] mr-2 mt-0.5"></i>
                                Social media campaign
                            </li>
                            <li className='flex items-start'>
                                <i className="fa-solid fa-check bg-green-400 rounded-full text-white p-[3px] text-[12px] mr-2 mt-0.5"></i>
                                Local SEO
                            </li>
                            <li className='flex items-start'>
                                <i className="fa-solid fa-check bg-green-400 rounded-full text-white p-[3px] text-[12px] mr-2 mt-0.5"></i>
                                Weekly meeting and performance updates
                            </li>
                            <li className='flex items-start'>
                                <i className="fa-solid fa-xmark bg-red-500 rounded-full text-white py-[3px] px-1.5 text-[12px] mr-2 mt-0.5"></i>
                                Email Marketing
                            </li>
                            <li className='flex items-start'>
                                <i className="fa-solid fa-xmark bg-red-500 rounded-full text-white py-[3px] px-1.5 text-[12px] mr-2 mt-0.5"></i>
                                Content Marketing
                            </li>
                        </ul>
                        <button
                            onClick={() => setOpenPayBtn({
                                serviceName: 'Digital Marketing - Silver',
                                source: 'Digital Marketing',
                                amount: 499,
                                currency: 'USD',
                                quantity: 1,
                                path: '/package/digital-marketing',
                            })}
                            className='block w-full py-3 mt-8 mb-2 text-base font-medium uppercase text-center text-white bg-blue-600 hover:bg-blue-700 duration-300 rounded-full'
                        >
                            Buy Now
                        </button>
                    </div>
                    <div className='w-full bg-white p-6 rounded-md  border-t-4 border-blue-600 shadow-[0px_5px_20px_0px_rgba(0,0,20,0.1)] hover:-translate-y-3 hover:scale-105 duration-300 ease-linear'>
                        <p className='text-sm font-medium text-gray-500 uppercase'>
                            DIGITAL MARKETING - Gold
                        </p>
                        <h1 className='text-5xl pt-5 pb-10 text-gray-600'>
                            $799
                            <span className='text-base font-medium'>/ month</span>
                        </h1>
                        <hr />
                        <ul className='mt-6 flex flex-col gap-5 text-gray-500 text-sm font-medium'>
                            <li className='flex items-start'>
                                <i className="fa-solid fa-check bg-green-400 rounded-full text-white p-[3px] text-[12px] mr-2 mt-0.5"></i>
                                Social media marketing on 4 platforms
                            </li>
                            <li className='flex items-start'>
                                <i className="fa-solid fa-check bg-green-400 rounded-full text-white p-[3px] text-[12px] mr-2 mt-0.5"></i>
                                facebook, instagram, linkedin, twitter
                            </li>
                            <li className='flex items-start'>
                                <i className="fa-solid fa-check bg-green-400 rounded-full text-white p-[3px] text-[12px] mr-2 mt-0.5"></i>
                                Search engine marketing
                            </li>
                            <li className='flex items-start'>
                                <i className="fa-solid fa-check bg-green-400 rounded-full text-white p-[3px] text-[12px] mr-2 mt-0.5"></i>
                                Site analysis, competitor analysis, performance monitor, keyword research
                            </li>
                            <li className='flex items-start'>
                                <i className="fa-solid fa-check bg-green-400 rounded-full text-white p-[3px] text-[12px] mr-2 mt-0.5"></i>
                                Social media campaign
                            </li>
                            <li className='flex items-start'>
                                <i className="fa-solid fa-check bg-green-400 rounded-full text-white p-[3px] text-[12px] mr-2 mt-0.5"></i>
                                Email marketing
                            </li>
                            <li className='flex items-start'>
                                <i className="fa-solid fa-check bg-green-400 rounded-full text-white p-[3px] text-[12px] mr-2 mt-0.5"></i>
                                Content marketing - blog setup, PPT, videos, digital press release
                            </li>
                            <li className='flex items-start'>
                                <i className="fa-solid fa-check bg-green-400 rounded-full text-white p-[3px] text-[12px] mr-2 mt-0.5"></i>
                                Weekly meeting and performance updates
                            </li>
                            <li className='flex items-start'>
                                <i className="fa-solid fa-xmark bg-red-500 rounded-full text-white py-[3px] px-1.5 text-[12px] mr-2 mt-0.5"></i>
                                Web analytics
                            </li>
                            <li className='flex items-start'>
                                <i className="fa-solid fa-xmark bg-red-500 rounded-full text-white py-[3px] px-1.5 text-[12px] mr-2 mt-0.5"></i>
                                Link building
                            </li>
                        </ul>
                        <button
                            onClick={() => setOpenPayBtn({
                                serviceName: 'Digital Marketing - Gold',
                                source: 'Digital Marketing',
                                amount: 799,
                                currency: 'USD',
                                quantity: 1,
                                path: '/package/digital-marketing',
                            })}
                            className='block w-full py-3 mt-8 mb-2 text-base font-medium uppercase text-center text-white bg-blue-600 hover:bg-blue-700 duration-300 rounded-full'
                        >
                            Buy Now
                        </button>
                    </div>
                    <div className='w-full bg-white p-6 rounded-md  border-t-4 border-blue-600 shadow-[0px_5px_20px_0px_rgba(0,0,20,0.1)] hover:-translate-y-3 hover:scale-105 duration-300 ease-linear'>
                        <p className='text-sm font-medium text-gray-500 uppercase'>
                            DIGITAL MARKETING - Platinum
                        </p>
                        <h1 className='text-5xl pt-5 pb-10 text-gray-600'>
                            $1099
                            <span className='text-base font-medium'>/ month</span>
                        </h1>
                        <hr />
                        <ul className='mt-6 flex flex-col gap-5 text-gray-500 text-sm font-medium'>
                            <li className='flex items-start'>
                                <i className="fa-solid fa-check bg-green-400 rounded-full text-white p-[3px] text-[12px] mr-2 mt-0.5"></i>
                                Social media marketing on 4 platforms
                            </li>
                            <li className='flex items-start'>
                                <i className="fa-solid fa-check bg-green-400 rounded-full text-white p-[3px] text-[12px] mr-2 mt-0.5"></i>
                                facebook, instagram, linkedin, twitter
                            </li>
                            <li className='flex items-start'>
                                <i className="fa-solid fa-check bg-green-400 rounded-full text-white p-[3px] text-[12px] mr-2 mt-0.5"></i>
                                Search engine marketing
                            </li>
                            <li className='flex items-start'>
                                <i className="fa-solid fa-check bg-green-400 rounded-full text-white p-[3px] text-[12px] mr-2 mt-0.5"></i>
                                Site analysis, competitor analysis, performance monitor, keyword research
                            </li>
                            <li className='flex items-start'>
                                <i className="fa-solid fa-check bg-green-400 rounded-full text-white p-[3px] text-[12px] mr-2 mt-0.5"></i>
                                Social media campaign
                            </li>
                            <li className='flex items-start'>
                                <i className="fa-solid fa-check bg-green-400 rounded-full text-white p-[3px] text-[12px] mr-2 mt-0.5"></i>
                                Email marketing
                            </li>
                            <li className='flex items-start'>
                                <i className="fa-solid fa-check bg-green-400 rounded-full text-white p-[3px] text-[12px] mr-2 mt-0.5"></i>
                                Content marketing - blog setup, PPT, videos, digital press release
                            </li>
                            <li className='flex items-start'>
                                <i className="fa-solid fa-check bg-green-400 rounded-full text-white p-[3px] text-[12px] mr-2 mt-0.5"></i>
                                Weekly meeting and performance updates
                            </li>
                            <li className='flex items-start'>
                                <i className="fa-solid fa-check bg-green-400 rounded-full text-white p-[3px] text-[12px] mr-2 mt-0.5"></i>
                                Web analytics
                            </li>
                            <li className='flex items-start'>
                                <i className="fa-solid fa-check bg-green-400 rounded-full text-white p-[3px] text-[12px] mr-2 mt-0.5"></i>
                                Link building
                            </li>
                        </ul>
                        <button
                            onClick={() => setOpenPayBtn({
                                serviceName: 'Digital Marketing - Platinum',
                                source: 'Digital Marketing',
                                amount: 1099,
                                currency: 'USD',
                                quantity: 1,
                                path: '/package/digital-marketing',
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

export default PackDigitalMarketing;