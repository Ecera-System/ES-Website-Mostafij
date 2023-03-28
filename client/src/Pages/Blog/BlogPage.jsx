import React from 'react';
import ContactSideButton from '../Shared/ContactSideButton/ContactSideButton';
import Header from '../Shared/Header/Header';
import PageTitle from '../Shared/PageTitle';
import { Link } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';

const BlogPage = () => {
    return (<>
        <PageTitle title='Blog Page'></PageTitle>
        <Header />
        <ContactSideButton />
        <section className='py-24 bg-no-repeat bg-center bg-cover text-center'
            style={{ backgroundImage: `url(/Images/packages-bg.jpg)` }}
        >
            <h1 className='md:text-5xl text-3xl font-semibold text-white uppercase'>
                Blog Page
            </h1>
            <p className='text-gray-400 text-base pt-10 pb-5'>
                <Link className='hover:text-gray-200 duration-300 mr-2' to='/'>Home</Link>
                /<span className='text-gray-100 ml-2'>Blog</span>
            </p>
        </section>
        <section className='py-20'>
            <div className='2xl:w-[1200px] sm:w-4/5 w-11/12 mx-auto'>
                <h2 className='2xl:mx-20 text-center md:text-[40px] md:leading-snug text-3xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 mb-14'>
                    How to choose the best web design company at a high quality but a significantly low cost?
                </h2>
                <div className='grid md:grid-cols-2 grid-cols-1 items-center lg:gap-20 gap-10'>
                    <div className='w-full'>
                        <img
                            loading='lazy'
                            src='/Images/Blog_Page/splas.jpg'
                            alt=""
                            className='max-w-full h-auto shadow-[0px_5px_20px_0px_rgba(0,0,255,0.4)] rounded-xl'
                        />
                    </div>
                    <div>
                        <p className='text-gray-500 lg:text-lg text-base'>
                            Searching for the best company for web designing at low cost with high-quality service is difficult as there are large numbers of companies and it requires some effort. There are many companies that can satisfy your needs but we have to choose the most accurate one. While choosing a web designing company we should consider creative design, innovative technology solutions, development, and deliver market-defining high-quality solutions that create value and reliability.
                        </p>
                    </div>
                </div>
            </div>
        </section>
        <section className='py-12 bg-blue-100'>
            <div className='2xl:w-[1200px] md:w-4/5 w-11/12 mx-auto'>
                <h1 className='text-4xl font-semibold text-center text-gray-700'>
                    Following are the features
                </h1>
                <div className='grid lg:grid-cols-3 sm:grid-cols-2 gap-8 mt-12'>
                    <div className='bg-white rounded-2xl p-8 hover:-translate-y-2 duration-300'>
                        <img
                            loading='lazy'
                            src='/Images/Blog_Page/work-process-item-01.png'
                            alt="" className='mx-auto'
                        />
                        <Link to='/blog/#' className='block text-base uppercase text-gray-600 hover:text-blue-600 hover:underline duration-300 text-center mt-5'>
                            Experienced Employee
                        </Link>
                    </div>
                    <div className='bg-white rounded-2xl p-8 hover:-translate-y-2 duration-300'>
                        <img loading='lazy' src='/Images/Blog_Page/work-process-item-01.png' alt="" className='mx-auto' />
                        <Link to='/blog/#' className='block text-base uppercase text-gray-600 hover:text-blue-600 hover:underline duration-300 text-center mt-5'>
                            VARIETY OF SERVICES
                        </Link>
                    </div>
                    <div className='bg-white rounded-2xl p-8 hover:-translate-y-2 duration-300'>
                        <img loading='lazy' src='/Images/Blog_Page/work-process-item-01.png' alt="" className='mx-auto' />
                        <Link to='/blog/#' className='block text-base uppercase text-gray-600 hover:text-blue-600 hover:underline duration-300 text-center mt-5'>
                            COMMITTMENT BY THE COMPANY
                        </Link>
                    </div>
                    <div className='bg-white rounded-2xl p-8 hover:-translate-y-2 duration-300'>
                        <img loading='lazy' src='/Images/Blog_Page/work-process-item-01.png' alt="" className='mx-auto' />
                        <Link to='/blog/#' className='block text-base uppercase text-gray-600 hover:text-blue-600 hover:underline duration-300 text-center mt-5'>
                            FLEXIBILITY
                        </Link>
                    </div>
                    <div className='bg-white rounded-2xl p-8 hover:-translate-y-2 duration-300'>
                        <img loading='lazy' src='/Images/Blog_Page/work-process-item-01.png' alt="" className='mx-auto' />
                        <Link to='/blog/#' className='block text-base uppercase text-gray-600 hover:text-blue-600 hover:underline duration-300 text-center mt-5'>
                            RELATIONSHIP WITH CLIENTS
                        </Link>
                    </div>
                    <div className='bg-white rounded-2xl p-8 hover:-translate-y-2 duration-300'>
                        <img loading='lazy' src='/Images/Blog_Page/work-process-item-01.png' alt="" className='mx-auto' />
                        <Link to='/blog/#' className='block text-base uppercase text-gray-600 hover:text-blue-600 hover:underline duration-300 text-center mt-5'>
                            PROPER CHAIN OF COMMAND
                        </Link>
                    </div>
                </div>
            </div>
        </section>
        <section className='py-20'>
            <div className='2xl:w-[1200px] sm:w-4/5 w-[90%] mx-auto grid lg:grid-cols-2 grid-cols-1 gap-16'>
                <div className='border-2 border-gray-400'>
                    <div
                        className='h-full bg-right-top bg-no-repeat p-10 bg-white relative top-5 left-5 hover:top-0 hover:left-0 duration-300 shadow-[0px_0px_20px_rgb(0,0,0,0.1)]'
                        style={{ backgroundImage: `url(/Images/Blog_Page/card-pattern-4.png)` }}
                    >
                        <div className='flex gap-x-3 items-center'>
                            <img loading='lazy' src='/Images/Blog_Page/testimonial-icon-1.png' alt="" />
                            <p className='text-2xl font-medium text-gray-700'>
                                Experienced Employees
                            </p>
                        </div>
                        <p className='text-gray-600 text-base font-medium mt-1'>
                            Any company becomes best by their employees, so they try to gather a team of professionals that can shape and mold their collective experiences, as they can not afford mistakes in such competition. Ecera systems have the best and experienced employees in web designing as low as $99.
                        </p>
                    </div>
                </div>
                <div className='border-2 border-gray-400'>
                    <div
                        className='h-full bg-right-top bg-no-repeat p-10 bg-white relative top-5 left-5 hover:top-0 hover:left-0 duration-300 shadow-[0px_0px_20px_rgb(0,0,0,0.1)]'
                        style={{ backgroundImage: `url(/Images/Blog_Page/card-pattern-4.png)` }}
                    >
                        <div className='flex gap-x-3 items-center'>
                            <img loading='lazy' src='/Images/Blog_Page/testimonial-icon-2.png' alt="" />
                            <p className='text-2xl font-medium text-gray-700'>
                                Variety of services
                            </p>
                        </div>
                        <p className='text-gray-600 text-base font-medium mt-1'>
                            A company with a wide range of services will have the highest exposure to web design tools and techniques. A company which is expertise in web designing, content management systems, digital marketing, or providing employees is considered to be a highly professional firm like Ecera system. Before hiring its services, you need to consider the list of services provided by the company.
                        </p>
                    </div>
                </div>
                <div className='border-2 border-gray-400'>
                    <div
                        className='h-full bg-right-top bg-no-repeat p-10 bg-white relative top-5 left-5 hover:top-0 hover:left-0 duration-300 shadow-[0px_0px_20px_rgb(0,0,0,0.1)]'
                        style={{ backgroundImage: `url(/Images/Blog_Page/card-pattern-4.png)` }}
                    >
                        <div className='flex gap-x-3 items-center'>
                            <img loading='lazy' src='/Images/Blog_Page/testimonial-icon-1.png' alt="" />
                            <p className='text-2xl font-medium text-gray-700'>
                                Commitment by the company
                            </p>
                        </div>
                        <p className='text-gray-600 text-base font-medium mt-1'>
                            Company should be committed to providing defect-free software products .before choosing any company you should check the reviews given by the customers who already used the services of the company.
                        </p>
                    </div>
                </div>
                <div className='border-2 border-gray-400'>
                    <div
                        className='h-full bg-right-top bg-no-repeat p-10 bg-white relative top-5 left-5 hover:top-0 hover:left-0 duration-300 shadow-[0px_0px_20px_rgb(0,0,0,0.1)]'
                        style={{ backgroundImage: `url(/Images/Blog_Page/card-pattern-4.png)` }}
                    >
                        <div className='flex gap-x-3 items-center'>
                            <img loading='lazy' src='/Images/Blog_Page/testimonial-icon-2.png' alt="" />
                            <p className='text-2xl font-medium text-gray-700'>
                                Flexibility
                            </p>
                        </div>
                        <p className='text-gray-600 text-base font-medium mt-1'>
                            Flexibility is necessary for a web development company if the customer wants any change company should be open to accepting the ideas and it implements them even at the final stage of your web design. The team of web designers and developers should able to adjust with you according to your needs. Their main objective should be to provide services that lead to customer satisfaction
                        </p>
                    </div>
                </div>
                <div className='border-2 border-gray-400'>
                    <div
                        className='h-full bg-right-top bg-no-repeat p-10 bg-white relative top-5 left-5 hover:top-0 hover:left-0 duration-300 shadow-[0px_0px_20px_rgb(0,0,0,0.1)]'
                        style={{ backgroundImage: `url(/Images/Blog_Page/card-pattern-4.png)` }}
                    >
                        <div className='flex gap-x-3 items-center'>
                            <img loading='lazy' src='/Images/Blog_Page/testimonial-icon-1.png' alt="" />
                            <p className='text-2xl font-medium text-gray-700'>
                                Relationship with clients
                            </p>
                        </div>
                        <p className='text-gray-600 text-base font-medium mt-1'>
                            Good company will always maintain good relations with its clients. It should be committing towards the clients and handle every issue related to the designed website. To understand the customer requirement company should conduct a weekly meeting and review the work they have done. If you are interested in creating a website for your business Ecera System for best web development services
                        </p>
                    </div>
                </div>
                <div className='border-2 border-gray-400'>
                    <div
                        className='h-full bg-right-top bg-no-repeat p-10 bg-white relative top-5 left-5 hover:top-0 hover:left-0 duration-300 shadow-[0px_0px_20px_rgb(0,0,0,0.1)]'
                        style={{ backgroundImage: `url(/Images/Blog_Page/card-pattern-4.png)` }}
                    >
                        <div className='flex gap-x-3 items-center'>
                            <img loading='lazy' src='/Images/Blog_Page/testimonial-icon-2.png' alt="" />
                            <p className='text-2xl font-medium text-gray-700'>
                                Proper chain of command
                            </p>
                        </div>
                        <p className='text-gray-600 text-base font-medium mt-1'>
                            Company should have step-by-step models for transforming products or services from ideas to reality. Like a physical product that requires planning, designing, manufacture, and selling – same way we need proper step by step planning for digital marketing what all digital mix should be used to increase a business’s efficiency
                        </p>
                    </div>
                </div>
            </div>
        </section>
        <Footer />
    </>);
};

export default BlogPage;