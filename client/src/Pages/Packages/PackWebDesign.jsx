import React, { useState } from 'react';
import ContactSideButton from '../Shared/ContactSideButton/ContactSideButton';
import Header from '../Shared/Header/Header';
import PageTitle from '../Shared/PageTitle';
import banner from '../../Images/packages-bg.jpg';
import Footer from '../Shared/Footer/Footer';
import PaymentButton from '../Shared/PaymentButton/PaymentButton';

const PackWebDesign = () => {
    const [openPayBtn, setOpenPayBtn] = useState(null);

    return (<>
        <PageTitle title='Web Design Package'></PageTitle>
        <Header login={true} />
        <ContactSideButton />
        <section>
            <div className='py-24 bg-no-repeat bg-center text-center'
                style={{ backgroundImage: `url(${banner})` }}
            >
                <h1 className='md:text-5xl text-3xl font-semibold text-white uppercase'>
                    Website Design
                </h1>
                <h4 className='text-gray-300 md:text-lg text-base italic font-medium py-3'>
                    Some Website Designing Offers
                </h4>
                <p className='text-gray-400 text-base pt-10 pb-5'>
                    Packages /<span className='text-gray-100 ml-2'>Website Design</span>
                </p>
            </div>
            <div className='w-full h-full py-16 bg-blue-50'>
                <div className='2xl:w-[1200px] md:w-3/4 sm:w-4/5 w-11/12 mx-auto grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 items-start gap-8'>
                    <div className='w-full bg-white p-6 rounded-md  border-t-4 border-blue-600 shadow-[0px_5px_20px_0px_rgba(0,0,20,0.1)] hover:-translate-y-3 hover:scale-105 duration-300 ease-linear'>
                        <p className='text-sm font-medium text-gray-500 uppercase'>
                            Web design - basic
                        </p>
                        <h1 className='text-5xl pt-5 pb-10 text-gray-600'>
                            $10
                            <span className='text-base font-medium'>/ month</span>
                        </h1>
                        <hr />
                        <ul className='mt-6 flex flex-col gap-5 text-gray-500 text-sm font-medium'>
                            <li className='flex items-start'>
                                <i className="fa-solid fa-check bg-green-400 rounded-full text-white p-[3px] text-[12px] mr-2 mt-0.5"></i>
                                1 Landing page/Home page
                            </li>
                            <li className='flex items-start'>
                                <i className="fa-solid fa-check bg-green-400 rounded-full text-white p-[3px] text-[12px] mr-2 mt-0.5"></i>
                                2 Section
                            </li>
                            <li className='flex items-start'>
                                <i className="fa-solid fa-check bg-green-400 rounded-full text-white p-[3px] text-[12px] mr-2 mt-0.5"></i>
                                1 Contact-Us Page
                            </li>
                            <li className='flex items-start'>
                                <i className="fa-solid fa-check bg-green-400 rounded-full text-white p-[3px] text-[12px] mr-2 mt-0.5"></i>
                                With 2 Images
                            </li>
                            <li className='flex items-start'>
                                <i className="fa-solid fa-xmark bg-red-500 rounded-full text-white py-[3px] px-1.5 text-[12px] mr-2 mt-0.5"></i>
                                Dedicated Tech Support
                            </li>
                            <li className='flex items-start'>
                                <i className="fa-solid fa-xmark bg-red-500 rounded-full text-white py-[3px] px-1.5 text-[12px] mr-2 mt-0.5"></i>
                                3-5 Pages
                            </li>
                            <li className='flex items-start'>
                                <i className="fa-solid fa-xmark bg-red-500 rounded-full text-white py-[3px] px-1.5 text-[12px] mr-2 mt-0.5"></i>
                                Advance CSS Styling
                            </li>
                            <li className='flex items-start'>
                                <i className="fa-solid fa-xmark bg-red-500 rounded-full text-white py-[3px] px-1.5 text-[12px] mr-2 mt-0.5"></i>
                                Monthly Status Reports
                            </li>
                        </ul>
                        <button
                            onClick={() => setOpenPayBtn({
                                serviceName: 'Web design - basic',
                                source: 'Web Design',
                                amount: 10,
                                currency: 'USD',
                                quantity: 1,
                                path: '/package/web-design',
                            })}
                            className='block w-full py-3 mt-8 mb-2 text-base font-medium uppercase text-center text-white bg-blue-600 hover:bg-blue-700 duration-300 rounded-full'
                        >
                            Buy Now
                        </button>
                    </div>
                    <div className='w-full bg-white p-6 rounded-md  border-t-4 border-blue-600 shadow-[0px_5px_20px_0px_rgba(0,0,20,0.1)] hover:-translate-y-3 hover:scale-105 duration-300 ease-linear'>
                        <p className='text-sm font-medium text-gray-500 uppercase'>
                            Web design - Plus
                        </p>
                        <h1 className='text-5xl pt-5 pb-10 text-gray-600'>
                            $200
                            <span className='text-base font-medium'>/ month</span>
                        </h1>
                        <hr />
                        <ul className='mt-6 flex flex-col gap-5 text-gray-500 text-sm font-medium'>
                            <li className='flex items-start'>
                                <i className="fa-solid fa-check bg-green-400 rounded-full text-white p-[3px] text-[12px] mr-2 mt-0.5"></i>
                                5 pages
                            </li>
                            <li className='flex items-start'>
                                <i className="fa-solid fa-check bg-green-400 rounded-full text-white p-[3px] text-[12px] mr-2 mt-0.5"></i>
                                Wordpress / HTML
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
                                source: 'Web Design',
                                serviceName: 'Web design - Plus',
                                amount: 200,
                                currency: 'USD',
                                quantity: 1,
                                path: '/package/web-design',
                            })}
                            className='block w-full py-3 mt-8 mb-2 text-base font-medium uppercase text-center text-white bg-blue-600 hover:bg-blue-700 duration-300 rounded-full'
                        >
                            Buy Now
                        </button>
                    </div>
                    <div className='w-full bg-white p-6 rounded-md  border-t-4 border-blue-600 shadow-[0px_5px_20px_0px_rgba(0,0,20,0.1)] hover:-translate-y-3 hover:scale-105 duration-300 ease-linear'>
                        <p className='text-sm font-medium text-gray-500 uppercase'>
                            Web design - Pro
                        </p>
                        <h1 className='text-5xl pt-5 pb-10 text-gray-600'>
                            $400
                            <span className='text-base font-medium'>/ month</span>
                        </h1>
                        <hr />
                        <ul className='mt-6 flex flex-col gap-5 text-gray-500 text-sm font-medium'>
                            <li className='flex items-start'>
                                <i className="fa-solid fa-check bg-green-400 rounded-full text-white p-[3px] text-[12px] mr-2 mt-0.5"></i>
                                6-7 pages
                            </li>
                            <li className='flex items-start'>
                                <i className="fa-solid fa-check bg-green-400 rounded-full text-white p-[3px] text-[12px] mr-2 mt-0.5"></i>
                                Dynamic Pages
                            </li>
                            <li className='flex items-start'>
                                <i className="fa-solid fa-check bg-green-400 rounded-full text-white p-[3px] text-[12px] mr-2 mt-0.5"></i>
                                Wordpress/HTML/PHP
                            </li>
                            <li className='flex items-start'>
                                <i className="fa-solid fa-check bg-green-400 rounded-full text-white p-[3px] text-[12px] mr-2 mt-0.5"></i>
                                Advances CSS with Motion Images and videos
                            </li>
                            <li className='flex items-start'>
                                <i className="fa-solid fa-check bg-green-400 rounded-full text-white p-[3px] text-[12px] mr-2 mt-0.5"></i>
                                Admin Panel in PHP
                            </li>
                            <li className='flex items-start'>
                                <i className="fa-solid fa-check bg-green-400 rounded-full text-white p-[3px] text-[12px] mr-2 mt-0.5"></i>
                                Dedicated Phone Support for 1 months
                            </li>
                            <li className='flex items-start'>
                                <i className="fa-solid fa-check bg-green-400 rounded-full text-white p-[3px] text-[12px] mr-2 mt-0.5"></i>
                                Monthly Status Reports
                            </li>
                        </ul>
                        <button
                            onClick={() => setOpenPayBtn({
                                source: 'Web Design',
                                serviceName: 'Web design - Pro',
                                amount: 400,
                                currency: 'USD',
                                quantity: 1,
                                path: '/package/web-design',
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

export default PackWebDesign;