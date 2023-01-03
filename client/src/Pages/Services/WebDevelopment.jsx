import React, { useState } from 'react';
import Header from '../Shared/Header/Header';
import PageTitle from '../Shared/PageTitle';
import banner from '../../Images/Web_Development/web_dev-banner.jpg';
import ContactSideButton from '../Shared/ContactSideButton/ContactSideButton';
import custom1 from '../../Images/Web_Development/custom1.png';
import custom2 from '../../Images/Web_Development/custom2.png';
import custom3 from '../../Images/Web_Development/custom3.png';
import feature1 from '../../Images/Web_Development/feature-1.png';
import feature2 from '../../Images/Web_Development/feature-2.png';
import feature3 from '../../Images/Web_Development/feature-3.png';
import feature4 from '../../Images/Web_Development/feature-4.png';
import feature5 from '../../Images/Web_Development/feature-5.png';
import feature6 from '../../Images/Web_Development/feature-6.png';
import feature7 from '../../Images/Web_Development/feature-7.png';
import feature8 from '../../Images/Web_Development/feature-8.png';
import feature9 from '../../Images/Web_Development/feature-9.png';
import Footer from '../Shared/Footer/Footer';
import { Link } from 'react-router-dom';

const WebDevelopment = () => {
    const [img, setImg] = useState(feature1);

    return (<>
        <PageTitle title='Website Development'></PageTitle>
        <Header></Header>
        <ContactSideButton />
        <div className='w-full'>
            <section
                style={{ backgroundImage: `url(${banner})` }}
                className='w-full xl:h-[500px] md:h-[400px] h-80 bg-cover bg-no-repeat bg-fixed relative before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-[#031859]/60'
            >
                <div className='relative w-full h-full px-5 flex items-center justify-center text-center z-10'>
                    <div>
                        <h1 className='md:text-5xl text-3xl font-semibold text-white uppercase'>
                            Website designers and developers
                        </h1>
                        <p className='text-gray-300 sm:text-lg text-base italic font-medium py-3'>
                            How can our team help to transform your next big idea? We’d love to hear from you.
                        </p>
                        <p className='text-gray-200 text-lg font-medium pt-10 pb-5'>
                            Services / Website Development
                        </p>
                        <Link
                            to="/contact"
                            className='inline-block text-lg text-white font-medium py-2 px-10 border-2 border-white rounded hover:text-[#031859] hover:bg-white duration-300'
                        >
                            Connect with us
                        </Link>
                    </div>
                </div>
            </section>
            <section className='md:w-3/4 sm:w-4/5 w-11/12 mx-auto mt-20'>
                <h1 className='text-center md:text-[40px] md:leading-snug text-3xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500'>
                    One Web Design Codebase To Rule Every Platform!
                </h1>
                <p className='text-gray-500 text-base text-center lg:mx-10 mt-5 mb-10'>
                    Our talented web designers punctiliously build fully cross platform,inter-operability websites for our customers. The target audience can access your websites from any device they own. We are a complete team of designers, developers, and strategists, building the websites required by the customers.
                </p>
                <div className='grid lg:grid-cols-3 grid-cols-1 gap-10 pt-5 lg:text-start text-center'>
                    <div>
                        <img src={custom1} alt="" className='mx-auto w-44 h-auto' />
                        <h4 className='text-xl font-medium text-center text-teal-500 py-3'>
                            Customized Design
                        </h4>
                        <p className='text-gray-500 text-base'>
                            We have customized templates where you can choose according to your requirements and also design according to the customer requirements and full fill the satisfaction of the customer idea about their webpage.
                        </p>
                    </div>
                    <div>
                        <img src={custom2} alt="" className='mx-auto w-44 h-auto' />
                        <h4 className='text-xl font-medium text-center text-teal-500 py-3'>
                            Cost-effective Services
                        </h4>
                        <p className='text-gray-500 text-base'>
                            With our team, the cost of your development will be affordable and saves your money at high level due to experienced developers and we also provide offers to new customers according to their business sites.
                        </p>
                    </div>
                    <div>
                        <img src={custom3} alt="" className='mx-auto w-44 h-auto' />
                        <h4 className='text-xl font-medium text-center text-teal-500 py-3'>
                            Technologies
                        </h4>
                        <p className='text-gray-500 text-base'>
                            We work on latest technologies which comprises of upgraded features which result in saving time and cost and it will be easier for the user to access it according to their need.
                        </p>
                    </div>
                </div>
            </section>
            <section className='md:w-3/4 sm:w-4/5 w-11/12 mx-auto my-20'>
                <h1 className='text-center md:text-[40px] md:leading-snug text-3xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500'>
                    Fix your corporate systems by picking right web specialists
                </h1>
                <p className='text-gray-500 md:text-lg text-base text-center lg:mx-10 mt-5 mb-10'>
                    Indirect employee has talented web designers in the designing and development industry with a strong business orientation. We maintain our competitive edge with unique design and a highly qualified team of website designers, who are focused on business goals and corporate branding.
                </p>
                <h2 className='text-3xl font-bold text-center text-gray-600 pt-5'>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                        stroke="currentColor" className="w-10 h-10 mr-1 inline-block"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zM12 2.25V4.5m5.834.166l-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243l-1.59-1.59" />
                    </svg>
                    You can click and view the features
                </h2>
                <div className='flex lg:flex-row flex-col lg:items-start items-center justify-between lg:gap-0 gap-10 mt-5'>
                    <div className='lg:w-3/5 w-full border-4 border-white drop-shadow-[0px_5px_15px_rgba(0,0,255,0.45)]'>
                        <img src={img} alt="" className='w-full h-auto' />
                    </div>
                    <ul className='lg:w-2/5 w-full lg:pl-16 pl-10 flex flex-col gap-y-5 text-lg font-medium text-gray-500'>
                        <li
                            onClick={() => setImg(feature1)}
                            className={`flex items-center gap-x-3 cursor-pointer hover:scale-105 hover:text-cyan-500 duration-300 ease-linear ${img === feature1 && 'text-cyan-500 scale-105'}`}
                        >
                            <i className="fa-solid fa-code"></i>
                            <span>Valid HTML5 + CSS3</span>
                        </li>
                        <li
                            onClick={() => setImg(feature2)}
                            className={`flex items-center gap-x-4 cursor-pointer hover:scale-105 hover:text-cyan-500 duration-300 ease-linear ${img === feature2 && 'text-cyan-500 scale-105'}`}
                        >
                            <i className="fa-solid fa-rocket"></i>
                            <span>Bootstrap Templates</span>
                        </li>
                        <li
                            onClick={() => setImg(feature3)}
                            className={`flex items-center gap-x-4 cursor-pointer hover:scale-105 hover:text-cyan-500 duration-300 ease-linear ${img === feature3 && 'text-cyan-500 scale-105'}`}
                        >
                            <i className="fa-brands fa-wordpress"></i>
                            <span>Wordpress site</span>
                        </li>
                        <li
                            onClick={() => setImg(feature4)}
                            className={`flex items-center gap-x-3 cursor-pointer hover:scale-105 hover:text-cyan-500 duration-300 ease-linear ${img === feature4 && 'text-cyan-500 scale-105'}`}
                        >
                            <i className="fa-solid fa-cloud-arrow-up"></i>
                            <span>Cloud Hosting</span>
                        </li>
                        <li
                            onClick={() => setImg(feature5)}
                            className={`flex items-center gap-x-3 cursor-pointer hover:scale-105 hover:text-cyan-500 duration-300 ease-linear ${img === feature5 && 'text-cyan-500 scale-105'}`}
                        >
                            <i className="fa-brands fa-php"></i>
                            <span>PHP Developer</span>
                        </li>
                        <li
                            onClick={() => setImg(feature6)}
                            className={`flex items-center gap-x-4 cursor-pointer hover:scale-105 hover:text-cyan-500 duration-300 ease-linear ${img === feature6 && 'text-cyan-500 scale-105'}`}
                        >
                            <i className="fa-solid fa-comment"></i>
                            <span>Chatbot Design</span>
                        </li>
                        <li
                            onClick={() => setImg(feature7)}
                            className={`flex items-center gap-x-3 cursor-pointer hover:scale-105 hover:text-cyan-500 duration-300 ease-linear ${img === feature7 && 'text-cyan-500 scale-105'}`}
                        >
                            <svg
                                className="w-6 h-6 inline-block"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none" viewBox="0 0 24 24" strokeWidth={2}
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                            </svg>
                            <span>Fully Responsive</span>
                        </li>
                        <li
                            onClick={() => setImg(feature8)}
                            className={`flex items-center gap-x-4 cursor-pointer hover:scale-105 hover:text-cyan-500 duration-300 ease-linear ${img === feature8 && 'text-cyan-500 scale-105'}`}
                        >
                            <i className="fa-solid fa-star"></i>
                            <span>Beautiful UI</span>
                        </li>
                        <li
                            onClick={() => setImg(feature9)}
                            className={`flex items-center gap-x-4 cursor-pointer hover:scale-105 hover:text-cyan-500 duration-300 ease-linear ${img === feature9 && 'text-cyan-500 scale-105'}`}
                        >
                            <i className="fa-solid fa-heart"></i>
                            <span>Free Updates & Support</span>
                        </li>
                    </ul>
                </div>
            </section>
        </div>
        <Footer></Footer>
    </>);
};

export default WebDevelopment;