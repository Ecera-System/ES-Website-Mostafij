import React, { useState } from 'react';
import ContactSideButton from '../Shared/ContactSideButton/ContactSideButton';
import Header from '../Shared/Header/Header';
import PageTitle from '../Shared/PageTitle';
import banner from '../../Images/packages-bg.jpg';
import './packages.css'
import Footer from '../Shared/Footer/Footer';
import { Link } from 'react-router-dom';
import PaymentButton from '../Shared/PaymentButton/PaymentButton';

const PackOffers = () => {
    const [openPayBtn, setOpenPayBtn] = useState(null);

    return (<>
        <PageTitle title='Ecera System Offers'></PageTitle>
        <Header login={true} />
        <ContactSideButton />
        <div>
            <section className='w-full py-12 bg-no-repeat bg-center bg-cover text-center'
                style={{ backgroundImage: `url(${banner})` }}
            >
                <h1 className='md:text-3xl text-2xl font-semibold text-yellow-400'>
                    Delivering Best-in-Class <br />
                    <span className='md:text-6xl text-4xl font-bold text-white my-2 inline-block'>Web Services</span>
                    <br /> for Your Business
                </h1>
                <h4 className='text-gray-300 md:text-lg text-base italic font-medium py-4 mx-5'>
                    Bridging the gap between today and your business' future with the finest <br /> website designing and development solutions.
                </h4>
                <div className='mt-10 flex justify-center'>
                    <ul className='text-cyan-400 font-medium text-lg text-start'>
                        <li>
                            <i className="fa-solid fa-diamond text-xs mr-2"></i>
                            Result-oriented Web Designs
                        </li>
                        <li>
                            <i className="fa-solid fa-diamond text-xs mr-2"></i>
                            Round the Clock Support
                        </li>
                        <li>
                            <i className="fa-solid fa-diamond text-xs mr-2"></i>
                            Bring the World to Your Website
                        </li>
                        <li>
                            <Link
                                to={"/get-estimate"}
                                className='inline-block text-center mt-5 w-full bg-cyan-400 hover:bg-transparent text-white hover:text-cyan-400 border-2 hover:border-2 border-cyan-400 text-lg py-2 px-5 rounded-full duration-300'
                            >
                                Get a quote
                            </Link>
                        </li>
                    </ul>
                </div>
            </section>
            <section className='py-16 2xl:w-[1200px] xl:w-4/5 md:w-11/12 sm:w-4/5 w-11/12 mx-auto'>
                <h1 className='text-center md:text-[40px] md:leading-snug text-3xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500'>
                    Pick A Suitable Package According To Your Needs
                </h1>
                <p className='md:text-lg text-base font-medium text-center text-gray-500 lg:mx-32 my-5'>
                    We are well aware of the competition. That is the reason why we have a fair pricing model. We ensure quality over quantity on each order.
                </p>
                <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-7 pt-10'>
                    <div className='card shadow-[0px_5px_15px_0px_rgba(0,0,20,0.5)] p-6 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600'>
                        <div>
                            <h1 className='md:text-6xl text-5xl font-bold text-white mb-5'>
                                $10.00
                            </h1>
                        </div>
                        <hr />
                        <div className='my-3 relative'>
                            <h1 className='md:text-3xl text-2xl font-semibold text-white'>
                                Web Design- <br /> Free
                            </h1>
                            <div className='absolute top-1/2 -translate-y-1/2 -right-6 bg-black text-white font-medium text-center px-5 py-1'>
                                <div className='absolute top-1/2 -translate-y-1/2 -left-5 w-0 h-0 border-r-black border-transparent border-t-[28px] border-b-[28px] border-r-[20px] border-l-0'>
                                </div>
                                <p>75% OFF!</p>
                                <del>$120</del>
                            </div>
                        </div>
                        <hr />
                        <ul className='text-sm font-medium text-white flex flex-col gap-3 my-3 w-full h-[300px] overflow-y-auto scrollBar'>
                            <li className='flex items-start gap-2'>
                                <i className="fa-solid fa-check mt-1"></i>
                                1 Page Website Design
                            </li>
                            <li className='flex items-start gap-2'>
                                <i className="fa-solid fa-check mt-1"></i>
                                Content Management System (WordPress)
                            </li>
                            <li className='flex items-start gap-2'>
                                <i className="fa-solid fa-check mt-1"></i>
                                Mobile Responsive
                            </li>
                            <li className='flex items-start gap-2'>
                                <i className="fa-solid fa-check mt-1"></i>
                                1 Banner Design
                            </li>
                            <li className='flex items-start gap-2'>
                                <i className="fa-solid fa-check mt-1"></i>
                                Contact/Query Form
                            </li>
                            <li className='flex items-start gap-2'>
                                <i className="fa-solid fa-check mt-1"></i>
                                3 Revisions
                            </li>
                            <li className='flex items-start gap-2'>
                                <i className="fa-solid fa-check mt-1"></i>
                                Complete W3C Certified HTML Guarantee
                            </li>
                            <li className='flex items-start gap-2'>
                                <i className="fa-solid fa-check mt-1"></i>
                                Complete Deployment
                            </li>
                            <li className='flex items-start gap-2'>
                                <i className="fa-solid fa-check mt-1"></i>
                                48 to 72 hours TAT
                            </li>
                            <li className='flex items-start gap-2'>
                                <i className="fa-solid fa-check mt-1"></i>
                                *** Value Added Services ***
                            </li>
                            <li className='flex items-start gap-2'>
                                <i className="fa-solid fa-check mt-1"></i>
                                Complete Source Files
                            </li>
                            <li className='flex items-start gap-2'>
                                <i className="fa-solid fa-check mt-1"></i>
                                100% Ownership Rights
                            </li>
                            <li className='flex items-start gap-2'>
                                <i className="fa-solid fa-check mt-1"></i>
                                100% Approval Assurance
                            </li>
                            <li className='flex items-start gap-2'>
                                <i className="fa-solid fa-check mt-1"></i>
                                *** ADD ONS ***
                            </li>
                            <li className='flex items-start gap-2'>
                                <i className="fa-solid fa-check mt-1"></i>
                                $50 Per Additional Page.
                            </li>
                            <li className='flex items-start gap-2'>
                                <i className="fa-solid fa-check mt-1"></i>
                                $100 Additional for 1 Year Domain & Hosting.
                            </li>
                            <li className='flex items-start gap-2'>
                                <i className="fa-solid fa-check mt-1"></i>
                                $150 Payment Integration
                            </li>
                            <li className='flex items-start gap-2'>
                                <i className="fa-solid fa-check mt-1"></i>
                                $250 Shopping Cart Integration
                            </li>
                            <li className='flex items-start gap-2'>
                                <i className="fa-solid fa-check mt-1"></i>
                                *NO MONTHLY OR ANY HIDDEN FEE*
                            </li>
                        </ul>
                        <div className='w-full'>
                            <button
                                onClick={() => setOpenPayBtn({
                                    serviceName: 'Web Design - Free',
                                    source: 'Offers',
                                    amount: 10,
                                    currency: 'USD',
                                    quantity: 1,
                                    path: '/package/offers',
                                })}
                                className='mt-3 w-full font-medium uppercase bg-cyan-400 hover:bg-transparent text-white hover:text-cyan-400 border-2 hover:border-2 border-cyan-400 text-base py-3 px-5 rounded-full duration-300'
                            >
                                Buy Now
                            </button>
                        </div>
                    </div>
                    <div className='card shadow-[0px_5px_15px_0px_rgba(0,0,20,0.5)] p-6 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600'>
                        <div>
                            <h1 className='md:text-6xl text-5xl font-bold text-white mb-5'>
                                $200.00
                            </h1>
                        </div>
                        <hr />
                        <div className='my-3 relative'>
                            <h1 className='md:text-3xl text-2xl font-semibold text-white'>
                                Web Design- <br /> Plus
                            </h1>
                            <div className='absolute top-1/2 -translate-y-1/2 -right-6 bg-black text-white font-medium text-center px-5 py-1'>
                                <div className='absolute top-1/2 -translate-y-1/2 -left-5 w-0 h-0 border-r-black border-transparent border-t-[28px] border-b-[28px] border-r-[20px] border-l-0'>
                                </div>
                                <p>75% OFF!</p>
                                <del>$798</del>
                            </div>
                        </div>
                        <hr />
                        <ul className='text-sm font-medium text-white flex flex-col gap-3 my-3 w-full h-[300px] overflow-y-auto scrollBar'>
                            <li className='flex items-start gap-2'>
                                <i className="fa-solid fa-check mt-1"></i>
                                3 Pages Website Design
                            </li>
                            <li className='flex items-start gap-2'>
                                <i className="fa-solid fa-check mt-1"></i>
                                Content Management System (WordPress)
                            </li>
                            <li className='flex items-start gap-2'>
                                <i className="fa-solid fa-check mt-1"></i>
                                Mobile Responsive
                            </li>
                            <li className='flex items-start gap-2'>
                                <i className="fa-solid fa-check mt-1"></i>
                                Hover Effects
                            </li>
                            <li className='flex items-start gap-2'>
                                <i className="fa-solid fa-check mt-1"></i>
                                2 Banner Designs
                            </li>
                            <li className='flex items-start gap-2'>
                                <i className="fa-solid fa-check mt-1"></i>
                                Sliding Banner
                            </li>
                            <li className='flex items-start gap-2'>
                                <i className="fa-solid fa-check mt-1"></i>
                                2 Stock Photos (You can provide us more)
                            </li>
                            <li className='flex items-start gap-2'>
                                <i className="fa-solid fa-check mt-1"></i>
                                Contact/Query Form
                            </li>
                            <li className='flex items-start gap-2'>
                                <i className="fa-solid fa-check mt-1"></i>
                                6 Revisions
                            </li>
                            <li className='flex items-start gap-2'>
                                <i className="fa-solid fa-check mt-1"></i>
                                Complete W3C Certified HTML
                            </li>
                            <li className='flex items-start gap-2'>
                                <i className="fa-solid fa-check mt-1"></i>
                                Complete Deployment
                            </li>
                            <li className='flex items-start gap-2'>
                                <i className="fa-solid fa-check mt-1"></i>
                                *** Value Added Services ***
                            </li>
                            <li className='flex items-start gap-2'>
                                <i className="fa-solid fa-check mt-1"></i>
                                Complete Source Files
                            </li>
                            <li className='flex items-start gap-2'>
                                <i className="fa-solid fa-check mt-1"></i>
                                100% Ownership Rights
                            </li>
                            <li className='flex items-start gap-2'>
                                <i className="fa-solid fa-check mt-1"></i>
                                100% Approval Assurance
                            </li>
                            <li className='flex items-start gap-2'>
                                <i className="fa-solid fa-check mt-1"></i>
                                *** ADD ONS ***
                            </li>
                            <li className='flex items-start gap-2'>
                                <i className="fa-solid fa-check mt-1"></i>
                                $50 Per Additional Page.
                            </li>
                            <li className='flex items-start gap-2'>
                                <i className="fa-solid fa-check mt-1"></i>
                                $100 Additional for 1 Year Domain & Hosting.
                            </li>
                            <li className='flex items-start gap-2'>
                                <i className="fa-solid fa-check mt-1"></i>
                                $150 Payment Integration
                            </li>
                            <li className='flex items-start gap-2'>
                                <i className="fa-solid fa-check mt-1"></i>
                                $250 Shopping Cart Integration
                            </li>
                            <li className='flex items-start gap-2'>
                                <i className="fa-solid fa-check mt-1"></i>
                                *NO MONTHLY OR ANY HIDDEN FEE*
                            </li>
                        </ul>
                        <div className='w-full'>
                            <button
                                onClick={() => setOpenPayBtn({
                                    serviceName: 'Web Design - Plus',
                                    source: 'Offers',
                                    amount: 200,
                                    currency: 'USD',
                                    quantity: 1,
                                    path: '/package/offers',
                                })}
                                className='mt-3 w-full font-medium uppercase bg-cyan-400 hover:bg-transparent text-white hover:text-cyan-400 border-2 hover:border-2 border-cyan-400 text-base py-3 px-5 rounded-full duration-300'
                            >
                                Buy Now
                            </button>
                        </div>
                    </div>
                    <div className='card shadow-[0px_5px_15px_0px_rgba(0,0,20,0.5)] p-6 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600'>
                        <div>
                            <h1 className='md:text-6xl text-5xl font-bold text-white mb-5'>
                                $400.00
                            </h1>
                        </div>
                        <hr />
                        <div className='my-3 relative'>
                            <h1 className='md:text-3xl text-2xl font-semibold text-white'>
                                Web Design- <br /> Pro
                            </h1>
                            <div className='absolute top-1/2 -translate-y-1/2 -right-6 bg-black text-white font-medium text-center px-5 py-1'>
                                <div className='absolute top-1/2 -translate-y-1/2 -left-5 w-0 h-0 border-r-black border-transparent border-t-[28px] border-b-[28px] border-r-[20px] border-l-0'>
                                </div>
                                <p>75% OFF!</p>
                                <del>$1298</del>
                            </div>
                        </div>
                        <hr />
                        <ul className='text-sm font-medium text-white flex flex-col gap-3 my-3 w-full h-[300px] overflow-y-auto scrollBar'>
                            <li className='flex items-start gap-2'>
                                <i className="fa-solid fa-check mt-1"></i>
                                Up to 6 Pages Website Design
                            </li>
                            <li className='flex items-start gap-2'>
                                <i className="fa-solid fa-check mt-1"></i>
                                6 Stock Photos (You can provide us more)
                            </li>
                            <li className='flex items-start gap-2'>
                                <i className="fa-solid fa-check mt-1"></i>
                                3 Banner Designs
                            </li>
                            <li className='flex items-start gap-2'>
                                <i className="fa-solid fa-check mt-1"></i>
                                Sliding Banner
                            </li>
                            <li className='flex items-start gap-2'>
                                <i className="fa-solid fa-check mt-1"></i>
                                Hover Effects
                            </li>
                            <li className='flex items-start gap-2'>
                                <i className="fa-solid fa-check mt-1"></i>
                                Content Management System (WordPress)
                            </li>
                            <li className='flex items-start gap-2'>
                                <i className="fa-solid fa-check mt-1"></i>
                                Mobile Responsive
                            </li>
                            <li className='flex items-start gap-2'>
                                <i className="fa-solid fa-check mt-1"></i>
                                FREE 12 Month Domain Name and Hosting
                            </li>
                            <li className='flex items-start gap-2'>
                                <i className="fa-solid fa-check mt-1"></i>
                                5 Professional Email ID's
                            </li>
                            <li className='flex items-start gap-2'>
                                <i className="fa-solid fa-check mt-1"></i>
                                Search Engine Submission
                            </li>
                            <li className='flex items-start gap-2'>
                                <i className="fa-solid fa-check mt-1"></i>
                                Unlimited Revisions
                            </li>
                            <li className='flex items-start gap-2'>
                                <i className="fa-solid fa-check mt-1"></i>
                                Complete W3C Certified HTML
                            </li>
                            <li className='flex items-start gap-2'>
                                <i className="fa-solid fa-check mt-1"></i>
                                Industry specified Team of Expert Designers and Developers
                            </li>
                            <li className='flex items-start gap-2'>
                                <i className="fa-solid fa-check mt-1"></i>
                                Complete Deployment
                            </li>
                            <li className='flex items-start gap-2'>
                                <i className="fa-solid fa-check mt-1"></i>
                                48 to 72 hours TAT
                            </li>
                            <li className='flex items-start gap-2'>
                                <i className="fa-solid fa-check mt-1"></i>
                                *** Value Added Services ***
                            </li>
                            <li className='flex items-start gap-2'>
                                <i className="fa-solid fa-check mt-1"></i>
                                Complete Source Files
                            </li>
                            <li className='flex items-start gap-2'>
                                <i className="fa-solid fa-check mt-1"></i>
                                100% Ownership Rights
                            </li>
                            <li className='flex items-start gap-2'>
                                <i className="fa-solid fa-check mt-1"></i>
                                100% Approval Assurance
                            </li>
                            <li className='flex items-start gap-2'>
                                <i className="fa-solid fa-check mt-1"></i>
                                *** ADD ONS ***
                            </li>
                            <li className='flex items-start gap-2'>
                                <i className="fa-solid fa-check mt-1"></i>
                                $50 Per Additional Page.
                            </li>
                            <li className='flex items-start gap-2'>
                                <i className="fa-solid fa-check mt-1"></i>
                                $100 Additional for 1 Year Domain & Hosting.
                            </li>
                            <li className='flex items-start gap-2'>
                                <i className="fa-solid fa-check mt-1"></i>
                                $150 Payment Integration
                            </li>
                            <li className='flex items-start gap-2'>
                                <i className="fa-solid fa-check mt-1"></i>
                                $250 Shopping Cart Integration
                            </li>
                            <li className='flex items-start gap-2'>
                                <i className="fa-solid fa-check mt-1"></i>
                                *NO MONTHLY OR ANY HIDDEN FEE*
                            </li>
                        </ul>
                        <div className='w-full'>
                            <button
                                onClick={() => setOpenPayBtn({
                                    serviceName: 'Web Design - Pro',
                                    source: 'Offers',
                                    amount: 400,
                                    currency: 'USD',
                                    quantity: 1,
                                    path: '/package/offers',
                                })}
                                className='mt-3 w-full font-medium uppercase bg-cyan-400 hover:bg-transparent text-white hover:text-cyan-400 border-2 hover:border-2 border-cyan-400 text-base py-3 px-5 rounded-full duration-300'
                            >
                                Buy Now
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            <section className='py-12 w-full bg-[#290259]'>
                <div className='2xl:w-[1200px] sm:w-4/5 w-11/12 mx-auto grid lg:grid-cols-2 grid-cols-1 gap-10 items-center'>
                    <div className='lg:text-start text-center'>
                        <h1 className='text-4xl font-bold text-white'>
                            Call Us & Discuss
                        </h1>
                        <h2 className='md:text-2xl text-xl font-medium text-gray-300 mt-4'>
                            Your Project With Our Experts Today
                        </h2>
                    </div>
                    <div className='flex sm:flex-row flex-col justify-between gap-6'>
                        <a
                            href='tel:+1 2486771972'
                            className='py-3 w-full text-center rounded-full border-2 border-cyan-400 text-cyan-400 text-lg font-medium'
                        >
                            <i className="fa-solid fa-phone mr-2"></i>
                            +1 2486771972
                        </a>
                        <Link
                            to="/get-estimate"
                            className='py-3 text-center w-full rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-cyan-500 hover:to-blue-600 text-white text-lg font-medium'
                        >
                            Get a quote
                        </Link>
                    </div>
                </div>
            </section>
            <section className='py-16 px-5 bg-white'>
                <div>
                    <h1 className='md:text-5xl text-3xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500'>
                        Need assistance? We’re here for you!
                    </h1>
                    <div className='mt-10'>
                        <h2 className='text-2xl font-medium text-gray-600 text-center'>
                            Ecera System
                        </h2>
                        <div className='w-full flex justify-center'>
                            <ul className='mt-5 w-max flex flex-col gap-y-5 text-lg font-medium text-gray-500'>
                                <li className='flex items-center gap-3'>
                                    <i className="fa-solid fa-envelope text-2xl"></i>
                                    <a href="mailto:sales@ecerasystem.com">
                                        sales@ecerasystem.com
                                    </a>
                                </li>
                                <li className='flex items-center gap-3'>
                                    <i className="fa-solid fa-phone text-2xl"></i>
                                    <a href="tel:+12486771972">
                                        +1 2486771972
                                    </a>
                                </li>
                                <li className='flex items-start gap-3'>
                                    <i className="fa-solid fa-location-dot text-2xl"></i>
                                    <p>
                                        33405 Colony Park Drive Farmington Hills MI 48331
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        <Footer />

        {/* <-- Payment Gateway --> */}
        <PaymentButton
            openPayBtn={openPayBtn}
            setOpenPayBtn={setOpenPayBtn}
        />
    </>);
};

export default PackOffers;