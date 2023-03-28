import React from 'react';
import Header from '../Shared/Header/Header';
import PageTitle from '../Shared/PageTitle';
import Footer from '../Shared/Footer/Footer';

const Testimonial = () => {
    return (<>
        <PageTitle title='Testimonial' />
        <Header></Header>
        <section className='w-full text-white bg-blue-400'>
            <div className='pt-16 pb-24'>
                <h1 className='text-center md:text-5xl text-3xl mb-5 font-semibold'>
                    Our clients speak
                </h1>
                <p className='text-center text-lg font-medium'>
                    We have been working with clients around the world
                </p>
                <div className='mt-28 mb-10 2xl:w-[1200px] xl:w-[90%] lg:w-4/5 w-11/12 mx-auto grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-10 gap-y-24 items-start text-center'>
                    <div className='px-6 pb-8 pt-12 rounded-tl-[3rem] rounded-br-[3rem] border relative'>
                        <div className='absolute -top-1/4 left-1/2 translate-x-[-50%] w-24 h-24 border-[3px] rounded-full'>
                            <img
                                loading='lazy'
                                src='/Images/Testimonials/bill-smith.png'
                                alt=""
                                className='w-full h-full rounded-full'
                            />
                        </div>
                        <h4 className='text-lg font-medium uppercase'>Bill Smith</h4>
                        <p className='text-base font-medium'>Business Owner</p>
                        <p className='text-base mt-5 text-start'>
                            <span className='relative mr-2'>
                                <i className="fa-solid fa-quote-left absolute -bottom-6 -left-2 text-8xl text-white/20"></i>
                            </span>
                            I contacted these guys to revamp my business website and the revamp was done within 2 weeks as per my requirements. People behind The Designs Zone are best at what they do.
                        </p>

                        <div className="absolute -bottom-[34px] left-[30px] w-0 h-0 border-b-[34px] border-b-transparent border-l-[34px]">
                            <div className="relative top-0 -left-8 w-0 h-0 border-b-[28px] border-b-transparent border-l-[28px] border-l-blue-400"></div>
                        </div>
                    </div>
                    <div className='px-6 pb-8 pt-12 rounded-tl-[3rem] rounded-br-[3rem] border relative'>
                        <div className='absolute -top-1/4 left-1/2 translate-x-[-50%] w-24 h-24 border-[3px] rounded-full'>
                            <img
                                loading='lazy'
                                src='/Images/Testimonials/ronnda-zezula.png'
                                alt=""
                                className='w-full h-full rounded-full'
                            />
                        </div>
                        <h4 className='text-lg font-medium uppercase'>Ronnda Zezula</h4>
                        <p className='text-base font-medium'>Entrepreneur</p>
                        <p className='text-base mt-5 text-start'>
                            <span className='relative mr-2'>
                                <i className="fa-solid fa-quote-left absolute -bottom-6 -left-2 text-8xl text-white/20"></i>
                            </span>
                            My wife needed a website for her home-based business and I got it made for her with the help of The Designs Zone. I was kept in loop at all times and the website turned out amazing.
                        </p>

                        <div className="absolute -bottom-[34px] left-[30px] w-0 h-0 border-b-[34px] border-b-transparent border-l-[34px]">
                            <div className="relative top-0 -left-8 w-0 h-0 border-b-[28px] border-b-transparent border-l-[28px] border-l-blue-400"></div>
                        </div>
                    </div>
                    <div className='px-6 pb-8 pt-12 rounded-tl-[3rem] rounded-br-[3rem] border relative'>
                        <div className='absolute -top-1/4 left-1/2 translate-x-[-50%] w-24 h-24 border-[3px] rounded-full'>
                            <img
                                loading='lazy'
                                src='/Images/Testimonials/isac-redman.png'
                                alt=""
                                className='w-full h-full rounded-full'
                            />
                        </div>
                        <h4 className='text-lg font-medium uppercase'>Isac Redman</h4>
                        <p className='text-base font-medium'>Entrepreneur</p>
                        <p className='text-base mt-5 text-start'>
                            <span className='relative mr-2'>
                                <i className="fa-solid fa-quote-left absolute -bottom-6 -left-2 text-8xl text-white/20"></i>
                            </span>
                            I found The Designs Zone through some searching on Google. The account managers, designers and sales person, all are very humble, polite and a masters in their field. Thank you for such creative work.
                        </p>

                        <div className="absolute -bottom-[34px] left-[30px] w-0 h-0 border-b-[34px] border-b-transparent border-l-[34px]">
                            <div className="relative top-0 -left-8 w-0 h-0 border-b-[28px] border-b-transparent border-l-[28px] border-l-blue-400"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <Footer></Footer>
    </>);
};

export default Testimonial;