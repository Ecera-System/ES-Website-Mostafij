import React, { useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ContactSideButton from '../Shared/ContactSideButton/ContactSideButton';
import Header from '../Shared/Header/Header';
import PageTitle from '../Shared/PageTitle';
import Footer from '../Shared/Footer/Footer';


const slide = [
    {
        img: '/Images/IT_Staffing/app_dev.jpg',
        title: 'App Development'
    },
    {
        img: '/Images/IT_Staffing/it_consultancy.jpg',
        title: 'IT Consultancy'
    },
    {
        img: '/Images/IT_Staffing/digital_marketing.jpg',
        title: 'Digital Marketing'
    },
    {
        img: '/Images/IT_Staffing/qa_and_testing.jpg',
        title: 'QA & Testing'
    },
    {
        img: '/Images/IT_Staffing/web_design.jpg',
        title: 'Website Design'
    }
];

const ITStaffing = () => {
    const [faqIndex1, setFaqIndex1] = useState(false);
    const [faqIndex2, setFaqIndex2] = useState(false);
    const [faqIndex3, setFaqIndex3] = useState(false);

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        appendDots: dots => (
            <div
                style={{
                    bottom: "-50px"
                }}
            >
                <ul style={{ margin: "0px" }}> {dots} </ul>
            </div>
        ),
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 1,
                    dots: true
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true
                }
            }
        ]
    };

    return (<>
        <PageTitle title='IT Staffing Solutions'></PageTitle>
        <Header />
        <ContactSideButton />
        <section
            style={{ backgroundImage: `url(/Images/globe-banner.png)` }}
            className='w-full xl:h-[500px] md:h-[400px] h-80 bg-no-repeat bg-center bg-fixed bg-[#020a23]'
        >
            <div className='w-11/12 mx-auto h-full flex items-center justify-center text-center'>
                <div>
                    <h1
                        style={{ textShadow: '2px 2px rgba(0,0,0, 0.2)' }}
                        className='md:text-5xl text-3xl font-semibold text-white uppercase'
                    >
                        We help achieve biggest goals
                    </h1>
                    <p
                        style={{ textShadow: '2px 2px rgba(0,0,0, 0.1)' }}
                        className='text-gray-200 md:text-lg text-base italic font-medium py-3'
                    >
                        We are committed to providing our customers with exceptional service <br /> while offering our employees the best training.
                    </p>
                    <p
                        style={{ textShadow: '2px 2px rgba(0,0,0, 0.2)' }}
                        className='text-gray-300 text-lg font-medium pt-10 pb-5'
                    >
                        Services / <span className='text-gray-100'>IT Staffing Solutions</span>
                    </p>
                </div>
            </div>
        </section>
        <section className='py-20'>
            <h1 className='text-center md:text-5xl md:leading-snug text-3xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500'>
                Services We Offers
            </h1>
            <div className='2xl:w-[1200px] xl:w-[85%] lg:w-11/12 md:w-[85%] w-11/12 mx-auto mt-10'>
                <Slider {...settings}>
                    {
                        slide.map(item =>
                            <div key={item.title}>
                                <div className='border rounded-md p-3 sm:mx-3 mx-6'>
                                    <div className='rounded-md bg-gray-100'>
                                        <img loading='lazy'
                                            className='w-full h-36 mx-auto rounded-t-md'
                                            src={item.img}
                                            alt=""
                                        />
                                        <h1 className='p-4 text-center lg:text-lg text-base font-medium text-gray-500 mt-3'>
                                            {
                                                item.title
                                            }
                                        </h1>
                                    </div>
                                </div>
                            </div>)
                    }
                </Slider>
            </div>
        </section>
        <section className='py-16'>
            <div className='2xl:w-[1200px] xl:w-4/5 lg:w-11/12 md:w-3/4 w-11/12 mx-auto grid lg:grid-cols-2 grid-cols-1 items-center gap-12'>
                <div>
                    <img
                        loading='lazy'
                        src='/Images/IT_Staffing/it5.jpg'
                        alt=""
                        className='w-full md:h-[350px] sm:h-[300px] h-[300px] rounded-lg'
                    />
                </div>
                <div>
                    <h2 className='text-3xl lg:text-start text-center font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500'>
                        Reach the talent on global level with IT Staffing Services
                    </h2>
                    <div className='w-40 h-0.5 bg-gray-500 relative mt-6 mb-8'>
                        <span
                            className='absolute top-1/2 -translate-y-1/2 left-1 w-0.5 h-4 rotate-[30deg] bg-gray-500'
                        />
                        <span
                            className='absolute top-1/2 -translate-y-1/2 left-2.5 w-0.5 h-4 rotate-[30deg] bg-gray-500'
                        />
                    </div>
                    <p className='text-lg text-gray-500'>
                        Ecera System has been delivering driven IT staffing services to its clients. We combine our expertise and knowledge to build agile and future-proof IT Staffing solutions. Our strategies and result-oriented services have gained us a reputation of a leading IT staffing companies in India and across the globe. Ecera System aims to serve as a reliable medium to its clients that want valuable talent in the most cost-effective way.
                    </p>
                </div>
            </div>
        </section>
        <section className='py-16'>
            <div className='2xl:w-[1200px] xl:w-4/5 lg:w-11/12 md:w-3/4 w-11/12 mx-auto flex lg:flex-row flex-col-reverse items-center gap-12'>
                <div className='lg:w-1/2 w-full'>
                    <h2 className='text-3xl md:text-start text-center font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500'>
                        Hire talent smoothly with Contract to Hire IT Staffing Services
                    </h2>
                    <div className='w-40 h-0.5 bg-gray-500 relative mt-6 mb-8'>
                        <span
                            className='absolute top-1/2 -translate-y-1/2 left-1 w-0.5 h-4 rotate-[30deg] bg-gray-500'
                        />
                        <span
                            className='absolute top-1/2 -translate-y-1/2 left-2.5 w-0.5 h-4 rotate-[30deg] bg-gray-500'
                        />
                    </div>
                    <p className='text-lg text-gray-500 mt-5'>
                        Our contract to hire IT staffing services allows you to try out a talent temporarily before making any long-term commitments. It projects high chances of the seamless transition of this temporary employee to a permanent one. IT staffing company in India has made quite a buzz over the last few years, and we have managed to contribute to its success with our unique approach.
                    </p>
                </div>
                <div className='lg:w-1/2 w-full'>
                    <img
                        loading='lazy'
                        src='/Images/IT_Staffing/talent.jpg'
                        alt=""
                        className='w-full h-auto rounded-lg'
                    />
                </div>
            </div>
        </section>
        <section className='pt-14 pb-20'>
            <div className='2xl:w-[1200px] lg:w-4/5 md:w-3/4 w-11/12 mx-auto grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 items-start gap-10'>
                <div className='text-center'>
                    <h2 className='text-5xl font-light text-gray-700'>
                        5000
                    </h2>
                    <p className='text-lg text-gray-500 font-medium mt-4'>
                        <span
                            className='w-3 h-3 rounded-full bg-gradient-to-r from-blue-900 to-cyan-500 inline-block mr-2'
                        />
                        LinkedIn Followers
                    </p>
                </div>
                <div className='text-center'>
                    <h2 className='text-5xl font-light text-gray-700'>
                        2020
                    </h2>
                    <p className='text-lg text-gray-500 font-medium mt-4'>
                        <span
                            className='w-3 h-3 rounded-full bg-gradient-to-r from-red-600 to-yellow-500 inline-block mr-2'
                        />
                        Year Ecera was founded
                    </p>
                </div>
                <div className='text-center'>
                    <h2 className='text-5xl font-light text-gray-700'>
                        360
                    </h2>
                    <p className='text-lg text-gray-500 font-medium mt-4'>
                        <span
                            className='w-3 h-3 rounded-full bg-gradient-to-r from-blue-600 to-violet-600 inline-block mr-2'
                        />
                        5 Star Rating
                    </p>
                </div>
                <div className='text-center'>
                    <h2 className='text-5xl font-light text-gray-700'>
                        50
                    </h2>
                    <p className='text-lg text-gray-500 font-medium mt-4'>
                        <span
                            className='w-3 h-3 rounded-full bg-gradient-to-r from-blue-600 to-emerald-500 inline-block mr-2'
                        />
                        Satisfied Clients
                    </p>
                </div>
            </div>
        </section>
        <section className='py-16 bg-gray-50'>
            <h1 className='text-center md:text-[40px] md:leading-snug text-3xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500'>
                IT Staffing
            </h1>
            <div className='2xl:w-[1200px] xl:w-[85%] lg:w-3/5 w-4/5 mx-auto grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 items-center xl:gap-6 gap-8 mt-10'>
                <div className='h-full w-full p-6 bg-white shadow-lg rounded-lg duration-300 ease-linear hover:-translate-y-2 group/card'>
                    <div className='text-[65px] text-purple-600 text-center'>
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </div>
                    <h4 className='text-2xl font-light duration-300 group-hover/card:text-purple-600 py-3'>
                        Regular Monitoring
                    </h4>
                    <p className='text-base text-gray-500'>
                        Employee monitoring software that tracks staff’s activity on their work computers
                    </p>
                </div>
                <div className='h-full w-full p-6 bg-white shadow-lg rounded-lg duration-300 ease-linear hover:-translate-y-2 group/card'>
                    <div className='text-[65px] text-purple-600 text-center'>
                        <i className="fa-solid fa-street-view"></i>
                    </div>
                    <h4 className='text-2xl font-light duration-300 group-hover/card:text-purple-600 py-3'>
                        Wide Range of skills
                    </h4>
                    <p className='text-base text-gray-500'>
                        IT staffing should meet a wide range of solutions from organizations looking for project or contract support.
                    </p>
                </div>
                <div className='h-full w-full p-6 bg-white shadow-lg rounded-lg duration-300 ease-linear hover:-translate-y-2 group/card'>
                    <div className='text-[65px] text-purple-600 text-center'>
                        <i className="fa-solid fa-people-group"></i>
                    </div>
                    <h4 className='text-2xl font-light duration-300 group-hover/card:text-purple-600 py-3'>
                        Dedicated Team
                    </h4>
                    <p className='text-base text-gray-500'>
                        Client-centric model with dedicated teams.the candidate selection is conducted with proper regard to their soft and hard skills.
                    </p>
                </div>
                <div className='h-full w-full p-6 bg-white shadow-lg rounded-lg duration-300 ease-linear hover:-translate-y-2 group/card'>
                    <div className='text-[65px] text-purple-600 text-center'>
                        <i className="fa-solid fa-headset"></i>
                    </div>
                    <h4 className='text-2xl font-light duration-300 group-hover/card:text-purple-600 py-3'>
                        24/7 support
                    </h4>
                    <p className='text-base text-gray-500'>
                        Our mission here at 24/7 Staffing is to provide continuous care and services that are individualized, meet quality expectations, and client satisfaction.
                    </p>
                </div>
            </div>
        </section>
        <section className='py-16 bg-gray-50'>
            <div className='2xl:w-[1200px] lg:w-4/5 md:w-3/5 sm:w-4/5 w-11/12 mx-auto'>
                <h1 className='text-center md:text-[40px] md:leading-snug text-3xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500'>
                    Benefits of our staffing services
                </h1>
                <div className='grid lg:grid-cols-2 grid-cols-1 gap-10 mt-8'>
                    <div>
                        <h2 className='text-2xl font-semibold text-gray-700'>
                            1. Skilled Staff Selection
                        </h2>
                        <p className='text-base font-medium text-gray-500 ml-6 mt-1'>
                            Our personnel not only align with the specific skills sets needed to perform a given task but also align with your company culture and values.
                        </p>
                    </div>
                    <div>
                        <h2 className='text-2xl font-semibold text-gray-700'>
                            2. Save Off-Shore
                        </h2>
                        <p className='text-base font-medium text-gray-500 ml-6 mt-1'>
                            You can engage our staff from our own premises – making savings on both setup and administration charges. We are equipped with the latest systems and software..
                        </p>
                    </div>
                    <div>
                        <h2 className='text-2xl font-semibold text-gray-700'>
                            3. Continuous Assessment
                        </h2>
                        <p className='text-base font-medium text-gray-500 ml-6 mt-1'>
                            We continuously monitor the progress of our staffs – maintaining a high level of clarity in addressing staff related issues so that it does not affect performance.
                        </p>
                    </div>
                    <div>
                        <h2 className='text-2xl font-semibold text-gray-700'>
                            4. Rapid Integration into Processes
                        </h2>
                        <p className='text-base font-medium text-gray-500 ml-6 mt-1'>
                            Our personnel not only align with the specific skills sets needed to perform a given task but also align with your company culture and values.
                        </p>
                    </div>
                    <div>
                        <h2 className='text-2xl font-semibold text-gray-700'>
                            5. Scale up or scale down
                        </h2>
                        <p className='text-base font-medium text-gray-500 ml-6 mt-1'>
                            Our personnel not only align with the specific skills sets needed to perform a given task but also align with your company culture and values.
                        </p>
                    </div>
                </div>
            </div>
        </section>
        <section className='py-16'>
            <h1 className='text-center md:text-[40px] md:leading-snug text-3xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500'>
                IT Staffing Solutions
            </h1>
            <div className='2xl:w-[1200px] xl:w-[85%] lg:w-11/12 md:w-4/5 w-11/12 mx-auto grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10 mt-10'>
                <div className='w-full h-full bg-gradient-to-r from-blue-600 via-teal-500 to-purple-600 p-2.5 overflow-hidden'>
                    <img
                        loading='lazy'
                        src='/Images/IT_Staffing/itt.jpg'
                        alt=""
                        className='w-full h-full duration-300 ease-linear hover:scale-110'
                    />
                </div>
                <div className='w-full h-full bg-gradient-to-r from-blue-600 via-teal-500 to-purple-600 p-2.5 overflow-hidden'>
                    <img
                        loading='lazy'
                        src='/Images/IT_Staffing/itt2.jpg'
                        alt=""
                        className='w-full h-full duration-300 ease-linear hover:scale-110'
                    />
                </div>
                <div className='w-full h-full bg-gradient-to-r from-blue-600 via-teal-500 to-purple-600 p-2.5 overflow-hidden'>
                    <img
                        loading='lazy'
                        src='/Images/IT_Staffing/itt3.jpg'
                        alt=""
                        className='w-full h-full duration-300 ease-linear hover:scale-110'
                    />
                </div>
                <div className='w-full h-full bg-gradient-to-r from-blue-600 via-teal-500 to-purple-600 p-2.5 overflow-hidden'>
                    <img
                        loading='lazy'
                        src='/Images/IT_Staffing/itt4.jpg'
                        alt=""
                        className='w-full h-full duration-300 ease-linear hover:scale-110'
                    />
                </div>
                <div className='w-full h-full bg-gradient-to-r from-blue-600 via-teal-500 to-purple-600 p-2.5 overflow-hidden'>
                    <img
                        loading='lazy'
                        src='/Images/IT_Staffing/itt5.jpg'
                        alt=""
                        className='w-full h-full duration-300 ease-linear hover:scale-110'
                    />
                </div>
                <div className='w-full h-full bg-gradient-to-r from-blue-600 via-teal-500 to-purple-600 p-2.5 overflow-hidden'>
                    <img
                        loading='lazy'
                        src='/Images/IT_Staffing/itt6.jpg'
                        alt=""
                        className='w-full h-full duration-300 ease-linear hover:scale-110'
                    />
                </div>
                <div className='w-full h-full bg-gradient-to-r from-blue-600 via-teal-500 to-purple-600 p-2.5 overflow-hidden'>
                    <img
                        loading='lazy'
                        src='/Images/IT_Staffing/itt7.jpg'
                        alt=""
                        className='w-full h-full duration-300 ease-linear hover:scale-110'
                    />
                </div>
                <div className='w-full h-full bg-gradient-to-r from-blue-600 via-teal-500 to-purple-600 p-2.5 overflow-hidden'>
                    <img
                        loading='lazy'
                        src='/Images/IT_Staffing/itt8.jpg'
                        alt=""
                        className='w-full h-full duration-300 ease-linear hover:scale-110'
                    />
                </div>
                <div className='w-full h-full bg-gradient-to-r from-blue-600 via-teal-500 to-purple-600 p-2.5 overflow-hidden'>
                    <img
                        loading='lazy'
                        src='/Images/IT_Staffing/itt9.jpg'
                        alt=""
                        className='w-full h-full duration-300 ease-linear hover:scale-110'
                    />
                </div>
            </div>
            <div className='w-full mx-auto bg-violet-50 md:py-16 py-10 md:mt-20 mt-10 text-violet-900'>
                <div className='2xl:w-[800px] lg:w-3/5 w-4/5 mx-auto'>
                    <p className='md:text-2xl text-xl font-medium italic leading-relaxed'>
                        "The quality of candidates provided by Judge and ease of doing business, including flexibility, is second to none. Judge offers a wide range of services and they are able to offer alternative solutions that make it easier to resolve our business needs."
                    </p>
                    <p className='text-center md:text-2xl text-xl font-medium italic leading-relaxed mt-5'>
                        Bill M.
                    </p>
                </div>
            </div>
        </section>
        <section className='pb-20'>
            <div className='2xl:w-[700px] lg:w-3/5 md:w-4/5 w-11/12 mx-auto'>
                <h1 className='text-center md:text-[40px] md:leading-snug text-3xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500'>
                    Have any Question?
                </h1>
                <ul className='mt-10 flex flex-col gap-y-4'>
                    <li>
                        <button
                            onClick={() => setFaqIndex1(!faqIndex1)}
                            className={`flex items-center justify-between w-full text-gray-600 md:text-xl text-base font-medium py-4 px-5 hover:text-gray-200 hover:bg-[#021D40] duration-300 ${faqIndex1 ? 'bg-[#021D40] text-gray-200' : 'bg-gray-200'}`}
                        >
                            What is an IT staffing firm?
                            {
                                faqIndex1 ?
                                    <i className="fa-solid fa-minus"></i>
                                    :
                                    <i className="fa-solid fa-plus"></i>
                            }
                        </button>
                        {
                            faqIndex1 &&
                            <div className='text-gray-500 p-5 border border-t-0 border-[#021D40]'>
                                <p>
                                    IT staffing firms work with companies to help fill open technology roles within their organization. Also known as IT staffing agencies, recruitment firms, search firms, or placement agencies, IT staffing firms match companies with job seekers based on skill sets and organizational fit on a contract, temp-to-perm, or direct placement basis. Many agencies have relationships with a wide variety of companies and hiring managers across all industries and are able to place talent in the best position to meet their needs.
                                </p>
                            </div>
                        }
                    </li>
                    <li>
                        <button
                            onClick={() => setFaqIndex2(!faqIndex2)}
                            className={`flex items-center justify-between w-full text-gray-600 md:text-xl text-base font-medium py-4 px-5 hover:text-gray-200 hover:bg-[#021D40] duration-300 ${faqIndex2 ? 'bg-[#021D40] text-gray-200' : 'bg-gray-200'}`}
                        >
                            What are the types of IT staffing?
                            {
                                faqIndex2 ?
                                    <i className="fa-solid fa-minus"></i>
                                    :
                                    <i className="fa-solid fa-plus"></i>
                            }
                        </button>
                        {
                            faqIndex2 &&
                            <div className='text-gray-500 p-5 border border-t-0 border-[#021D40]'>
                                <p>
                                    IT staffing agencies work with companies to place technology professionals in a variety of roles. Typically, that is on a contract, temp-to-perm, or direct placement basis. (link to IT Staffing Options section where these are further defined??)
                                </p>
                            </div>}
                    </li>
                    <li>
                        <button
                            onClick={() => setFaqIndex3(!faqIndex3)}
                            className={`flex items-center justify-between w-full text-gray-600 md:text-xl text-base font-medium py-4 px-5 hover:text-gray-200 hover:bg-[#021D40] duration-300 ${faqIndex3 ? 'bg-[#021D40] text-gray-200' : 'bg-gray-200'}`}
                        >
                            How do staffing agencies recruit?
                            {
                                faqIndex3 ?
                                    <i className="fa-solid fa-minus"></i>
                                    :
                                    <i className="fa-solid fa-plus"></i>
                            }
                        </button>
                        {
                            faqIndex3 &&
                            <div className='text-gray-500 p-5 border border-t-0 border-[#021D40]'>
                                <p>
                                    Every need and search for IT recruitment is unique, but most searches follow a prescribed process. At Judge we take a 6-step approach to our recruiting. <br />
                                    1. Goal Discussion – Clear understanding of the position, business need, corporate culture, and any special requirements. 2. Targeted Searches – Utilizing a team of recruiters to search for talent in several ways that include but are not limited to our proprietary database and AI & machine learning matching of ideal candidates, social media outreach, tapping into personal & corporate networks, advertising across job boards & other platforms, and pipeline development & referrals. 3. Candidate Screening – Using a series of techniques including phone / face-to-face / virtual interviews, skills tests, reference checks, and technical assessments, Judge makes sure any candidates presented are right for the job and the company. 4. Candidate Selection & Submission – Submitting worthy candidates with a comprehensive overview, resume, skill match summary, availability, and rates & expectations. 5. Offers & Onboarding – once an offer is presented and accepted, our in-house compliance teams is able to complete the necessary background checks & drug screens and prepare the new hire to begin work. 6. Performance Evaluation & Relationship Management – candidate care and communication is critical to any successful engagement. Through personal and regular outreach to the candidate and hiring manager, we are able to assess, correct, and ensure the highest levels of contractor retention.
                                </p>
                            </div>
                        }
                    </li>
                </ul>
            </div>
        </section>
        <Footer />
    </>);
};

export default ITStaffing;