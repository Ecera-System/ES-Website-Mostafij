import React, { useState } from 'react';
import ContactSideButton from '../Shared/ContactSideButton/ContactSideButton';
import Header from '../Shared/Header/Header';
import PageTitle from '../Shared/PageTitle';
import banner from '../../Images/globe-banner.png';
import gtco from '../../Images/Digital_Marketing/gtco.png';
import seoBanner from '../../Images/Digital_Marketing/seo-banner.jpg';
import dataDriven from '../../Images/Digital_Marketing/data-driven.png';
import omnichannel from '../../Images/Digital_Marketing/omnichannel-icon.jpg';
import industryExpert from '../../Images/Digital_Marketing/industry-expert.png';
import monitoring from '../../Images/Digital_Marketing/monitoring.jpg';
import customDigital from '../../Images/Digital_Marketing/custom-digital.jpg';
import competitive from '../../Images/Digital_Marketing/competitive.png';
import ctaBanner from '../../Images/Digital_Marketing/cta-banner.jpg';
import whyDigital from '../../Images/Digital_Marketing/why-digital.png';
import cardsBackground from '../../Images/Digital_Marketing/cards-background.jpg';
import Footer from '../Shared/Footer/Footer';
import { Link } from 'react-router-dom';


const faq = [
    {
        question: 'What is Digital Marketing?',
        ans: 'Digital marketing encompasses all aspects and activities of marketing an organization, business, or brand across digital channels on the internet. Digital marketing strategies and tactics are crafted to target specific online audiences across a variety of internet-connected devices. Digital marketing includes optimization across search engines (the likes of Google and Bing), visibility and engagement on social media platforms, email marketing communications, website design and development and integrated applications to connect and engage with prospects and customers.'
    },
    {
        question: 'What does a Digital Marketer do?',
        ans: 'A digital marketer is a marketing specialist who understands how to develop and deploy effective marketing strategies online. A digital marketer understands connecting with an online audience. They can ensure your brand engages with your consumer from the first point of contact through after-sales service.'
    },
    {
        question: 'Would your business benefit from Digital Marketing Services?',
        ans: "Every single brand has to have an online representation of the business. However, your digital footprint won't have any impact if you don't market it successfully. Every business would benefit from an ongoing, comprehensive digital marketing strategy and the support of an expert marketing team."
    },
    {
        question: 'How cost-effective is Digital Marketing compared with Traditional Marketing?',
        ans: "Digital marketing is cost-effective in that you can get your message directly in front of your ideal audience. Consider that traditional marketing casts a wide net across the general public. In contrast, digital marketing takes a targeted approach and engages the consumer with the right message at the right time. You can measure your digital marketing efforts and the costs involved quite easily and mitigate unnecessary spending. This is far more difficult with traditional marketing campaigns. What's more, the costs involved with hiring a digital marketing agency are dependent on the project scope."
    },
];


const DigitalMarketing = () => {
    const [faqIndex1, setFaqIndex1] = useState(false);

    return (<>
        <PageTitle title='Digital Marketing'></PageTitle>
        <Header></Header>
        <ContactSideButton />
        <section
            style={{ backgroundImage: `url(${banner})` }}
            className='w-full xl:h-[500px] md:h-[400px] h-80 bg-no-repeat bg-center bg-fixed bg-[#141d38]'
        >
            <div className='w-full h-full flex items-center justify-center text-center'>
                <div className='mx-5'>
                    <h1 className='md:text-5xl text-3xl font-semibold text-white uppercase'>
                        Digital Marketing
                    </h1>
                    <p className='text-gray-300 md:text-lg text-base italic font-medium py-3'>
                        Grow Your Client Base With Data-Driven and Targeted Strategies
                    </p>
                    <p className='text-gray-300 text-lg font-medium pt-10 pb-5'>
                        Services / <span className='text-gray-100'>Digital Marketing</span>
                    </p>
                </div>
            </div>
        </section>
        <section>
            <div className='2xl:w-[1200px] xl:w-3/4 md:w-4/5 w-[90%] mx-auto py-10 flex lg:flex-row flex-col-reverse items-center lg:gap-10 gap-8'>
                <div className='lg:w-1/2 w-full text-base text-gray-500'>
                    <p>
                        <span className='text-lg font-medium'>Ecera System</span> is a dynamic, versatile and full-service digital marketing agency that doesn’t rely on smoke and mirrors to attract new clients. Instead, Ecera System trusts its own search engine optimization (SEO) and marketing skills to drive new customers to our website.
                    </p>
                    <p className='mt-4'>
                        We’re not a static company. We don’t limit ourselves to specific industries. We have the experience and professionals to build a custom website and use multiple digital marketing services to assist any size company in any industry.
                    </p>
                </div>
                <div className='lg:w-1/2 w-full p-5'>
                    <img src={gtco} alt="" className='w-max mx-auto h-auto' />
                </div>
            </div>
            <div className='lg:w-[42rem] md:w-4/5 w-[90%] mx-auto text-base lg:text-center text-start text-gray-500 pb-10'>
                <p>
                    Ecera System works with you to produce customized digital marketing services and a
                    plan that aligns with your unique business needs. We become an extension of your
                    team, a partner that understands your market and goals, rather than just an agency
                    that executes strategies blindly. Our reviews and testimonials speak volumes. We earn
                    your business every day with month-to-month contracts.
                </p>
                <p className='mt-4'>
                    Take a look below at the wide variety of digital marketing services Ecera System
                    offers. Contact us today to learn more about how we can help your business!
                </p>
            </div>
        </section>
        <section className='py-14'>
            <div className='2xl:w-[1200px] lg:w-[90%] md:w-4/5 w-11/12 mx-auto'>
                <h1 className='text-center md:text-[40px] md:leading-snug text-3xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500'>
                    Why Your Business Needs Digital Marketing
                </h1>
                <p className='md:text-lg text-base font-medium text-center text-gray-500 mt-3'>
                    Engage More Clients and Rank High On Search Results
                </p>
                <div className='flex lg:flex-row flex-col-reverse items-center lg:gap-16 gap-10 xl:p-16 sm:p-10 p-7 mt-10 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-xl drop-shadow-[0px_10px_10px_rgba(0,100,255,0.45)]'>
                    <div className='lg:w-1/2 w-full text-base text-gray-100'>
                        <p>
                            The importance of Digital Marketing cannot be overemphasized in today’s digitally-oriented world. A strong online presence gives you the advantage of reaching a prospective customer who is already searching the product/ service you offer. So, it is important that you strengthen your online visibility through a carefully planned digital marketing strategy that involves SEO, SMO, PPC, Email Marketing and much else. Remember, making your company visible is important for improving your brand image.
                        </p>
                        <p className='xl:mt-4 mt-2'>
                            Don’t waste your investment in marketing techniques that do not deliver measurable results. Partner with Ecera System Internet Marketing Agency today and establish your market dominance with our targeted digital marketing solutions.
                        </p>
                    </div>
                    <div className='lg:w-1/2 w-full'>
                        <img src={seoBanner} alt="" className='w-full h-auto rounded-xl' />
                    </div>
                </div>
            </div>
        </section>
        <section className='py-10'>
            <div className='2xl:w-[1200px] md:w-4/5 w-11/12 mx-auto'>
                <h1 className='text-center md:text-[40px] md:leading-snug text-3xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500'>
                    Why Choose Us
                </h1>
                <p className='md:text-lg text-base font-medium text-center text-gray-500'>
                    Boost Your Revenue Growth Rate and Achieve Online Success
                </p>
                <div className='mt-8 grid lg:grid-cols-2 grid-cols-1 items-start gap-12'>
                    <div className='flex items-start justify-between gap-x-5'>
                        <div className='w-24'>
                            <img src={dataDriven} alt="" className='w-max h-auto' />
                        </div>
                        <div className='w-full'>
                            <h2 className='text-xl font-medium text-gray-600'>
                                Data-driven Digital Marketing Services
                            </h2>
                            <p className='sm:text-base text-sm text-gray-500 mt-2'>
                                We analyze your brand’s strengths, weaknesses, opportunities and threats (SWOT) to create up-to-date metrics and generate actionable insights.
                            </p>
                        </div>
                    </div>
                    <div className='flex items-start justify-between gap-x-5'>
                        <div className='w-24'>
                            <img src={omnichannel} alt="" className='w-max h-auto' />
                        </div>
                        <div className='w-full'>
                            <h2 className='text-xl font-medium text-gray-600'>
                                Omnichannel Personalization
                            </h2>
                            <p className='sm:text-base text-sm text-gray-500 mt-2'>
                                At Ecera System, we perform audience analyses and needs assessments to develop customized internet marketing strategies that drive more business.
                            </p>
                        </div>
                    </div>
                    <div className='flex items-start justify-between gap-x-5'>
                        <div className='w-24'>
                            <img src={industryExpert} alt="" className='w-max h-auto' />
                        </div>
                        <div className='w-full'>
                            <h2 className='text-xl font-medium text-gray-600'>
                                Industry Experts
                            </h2>
                            <p className='sm:text-base text-sm text-gray-500 mt-2'>
                                We keep track of the latest trends and innovations, develop goal-oriented strategies and ensure all our campaigns meet search engine guidelines.
                            </p>
                        </div>
                    </div>
                    <div className='flex items-start justify-between gap-x-5'>
                        <div className='w-24'>
                            <img src={monitoring} alt="" className='w-max h-auto' />
                        </div>
                        <div className='w-full'>
                            <h2 className='text-xl font-medium text-gray-600'>
                                Campaign Monitoring and Evaluation
                            </h2>
                            <p className='sm:text-base text-sm text-gray-500 mt-2'>
                                At Ecera System, we establish your campaign metrics and perform regular monitoring and evaluation to determine your strategies' success.
                            </p>
                        </div>
                    </div>
                    <div className='flex items-start justify-between gap-x-5'>
                        <div className='w-24'>
                            <img src={customDigital} alt="" className='w-max h-auto' />
                        </div>
                        <div className='w-full'>
                            <h2 className='text-xl font-medium text-gray-600'>
                                Custom Digital Marketing Framework
                            </h2>
                            <p className='sm:text-base text-sm text-gray-500 mt-2'>
                                We review your current marketing strategies and digital presence, set key performance indicators (KPIs), identify your brand personality and integrate your customer experience in all levels of your strategy-building.
                            </p>
                        </div>
                    </div>
                    <div className='flex items-start justify-between gap-x-5'>
                        <div className='w-24'>
                            <img src={competitive} alt="" className='w-max h-auto' />
                        </div>
                        <div className='w-full'>
                            <h2 className='text-xl font-medium text-gray-600'>
                                Competitive Pricing
                            </h2>
                            <p className='sm:text-base text-sm text-gray-500 mt-2'>
                                We shape our internet marketing services based on your industry demands, online needs and financial capacity. In this way, we help you acquire the online attention you need without breaking the bank.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section
            style={{ background: `linear-gradient(rgba(40, 58, 90, 0.9), rgba(40, 58, 90, 0.9)), url(${ctaBanner}) fixed center center` }}
            className='w-full lg:py-20 py-12 bg-no-repeat bg-center bg-fixed bg-[#141d38]'
        >
            <div className='2xl:w-[1200px] lg:w-3/4 md:w-4/5 w-11/12 mx-auto text-center text-gray-200'>
                <h1 className='text-center md:text-[40px] text-3xl md:leading-snug font-medium text-gray-100'>
                    Maintain a Perfectly Balanced Suite of Online Marketing Services
                </h1>
                <p className='mt-4 lg:mx-24 font-medium'>
                    EceraSystem is a full-service digital marketing agency with a long history of delivering great results for our clients. We take an individualized approach to every customer project. In some cases we may focus more on SEO, while in others we’ll dig more into PPC, social media or conversion optimization.
                </p>
                <p className='md:mt-4 mt-2 lg:mx-24 font-medium'>
                    It’s often best to get a totally clean start where EceraSystem will work with your team to restructure your entire online strategy and web design from the ground up, leading to a higher customer conversion rate and additional sales. EceraSystem offers the right combination of online marketing services to deliver the very best results.
                </p>
                <Link
                    to={'/get-estimate'}
                    className='inline-block text-lg text-white font-medium py-2 px-10 mt-10 border-2 border-white rounded hover:text-[#031859] hover:bg-white duration-300'
                >
                    Get a quote
                </Link>
            </div>
        </section>
        <section className='py-14'>
            <div className='2xl:w-[1200px] sm:w-4/5 w-11/12 mx-auto'>
                <h1 className='text-center md:text-[40px] md:leading-snug text-3xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500'>
                    Why Your Business Should Be Using Digital Marketing Services
                </h1>
                <div className='mt-5 grid lg:grid-cols-2 grid-cols-1 gap-x-10 items-center text-lg text-gray-500'>
                    <div className=''>
                        <p>
                            The online marketing industry is growing at an unprecedented rate. According to eMarketer, businesses in the U.S. spend more than $110 billion on digital advertising. With more companies investing their time and resources in online marketing, relying on your old advertising tactics is not enough to win over customers.
                        </p>
                        <p className='mt-10'>
                            Increase your sales volume and build a robust digital foundation with value-driven internet marketing services. Digital marketing helps you:
                        </p>
                    </div>
                    <div>
                        <img src={whyDigital} alt="" />
                    </div>
                    <ul className='flex flex-col gap-y-5 mt-8'>
                        <li className='flex items-center gap-x-3'>
                            <span className='p-[3px] border-2 border-blue-700 rounded-full'></span>
                            Save time, money and resources
                        </li>
                        <li className='flex items-center gap-x-3'>
                            <span className='p-[3px] border-2 border-blue-700 rounded-full'></span>
                            Acquire huge ROI
                        </li>
                        <li className='flex items-center gap-x-3'>
                            <span className='p-[3px] border-2 border-blue-700 rounded-full'></span>
                            Track your campaign results
                        </li>
                        <li className='flex items-center gap-x-3'>
                            <span className='p-[3px] border-2 border-blue-700 rounded-full'></span>
                            Adjust your strategies based on analytics and data
                        </li>
                        <li className='flex items-center gap-x-3'>
                            <span className='p-[3px] border-2 border-blue-700 rounded-full'></span>
                            Leverage precise audience targeting
                        </li>
                    </ul>
                    <ul className='flex flex-col gap-y-5 mt-8'>
                        <li className='flex items-center gap-x-3'>
                            <span className='p-[3px] border-2 border-blue-700 rounded-full'></span>
                            Build your brand reputation across online channels
                        </li>
                        <li className='flex items-center gap-x-3'>
                            <span className='p-[3px] border-2 border-blue-700 rounded-full'></span>
                            Maximize various customer touchpoints
                        </li>
                        <li className='flex items-center gap-x-3'>
                            <span className='p-[3px] border-2 border-blue-700 rounded-full'></span>
                            Promote greater consumer engagement
                        </li>
                        <li className='flex items-center gap-x-3'>
                            <span className='p-[3px] border-2 border-blue-700 rounded-full'></span>
                            Drive profitable long-term growth
                        </li>
                        <li className='flex items-center gap-x-3'>
                            <span className='p-[3px] border-2 border-blue-700 rounded-full'></span>
                            Improve your conversion rates
                        </li>
                    </ul>
                </div>
            </div>
        </section>
        <section
            style={{ background: `linear-gradient(rgba(40, 58, 90, 0.9), rgba(40, 58, 90, 0.9)), url(${cardsBackground}) fixed center center` }}
            className='w-full py-20 bg-no-repeat bg-cover'
        >
            <div className='2xl:w-[1200px] xl:w-4/5 lg:w-11/12 sm:w-4/5 w-11/12 mx-auto'>
                <h1 className='text-center md:text-[40px] text-3xl md:leading-snug font-medium text-gray-50'>
                    Digital Marketing Services
                </h1>
                <p className='md:text-lg text-base text-center mt-5 text-gray-200'>
                    Our full-service digital marketing agency offers affordable and effective digital marketing plans. We work to deliver improved rankings, increased traffic and, in turn, more business.
                </p>
                <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-8 gap-10 mt-10'>
                    <div>
                        <div className='w-full h-52 p-1.5 rounded-lg shadow-[0px_5px_20px_0px_rgba(0,0,20,0.45)] bg-gradient-to-r from-blue-600 via-teal-500 to-purple-600 hover:from-purple-600 hover:via-teal-500 hover:to-blue-600 hover:scale-110 duration-500'>
                            <p className='w-full h-full font-medium text-gray-500 p-6 rounded-md bg-white'>
                                We help you improve your Google ranking and increase your organic (non-paid) website traffic. SEO is more than just incorporating keywords and we can help to optimize all elements.
                            </p>
                        </div>
                        <h2 className='text-2xl font-medium text-white text-center py-2'>
                            Search Engine Optimization
                        </h2>
                    </div>
                    <div>
                        <div className='w-full h-52 p-1.5 rounded-lg shadow-[0px_5px_20px_0px_rgba(0,0,20,0.45)] bg-gradient-to-r from-blue-600 via-teal-500 to-purple-600 hover:from-purple-600 hover:via-teal-500 hover:to-blue-600 hover:scale-110 duration-500'>
                            <p className='w-full h-full font-medium text-gray-500 p-6 rounded-md bg-white'>
                                Search engine advertising, also known as pay-per-click advertising, helps you reach new customers and guarantees a consistent traffic flow to your website.
                            </p>
                        </div>
                        <h2 className='text-2xl font-medium text-white text-center my-2'>
                            Search Engine Advertising
                        </h2>
                    </div>
                    <div>
                        <div className='w-full h-52 p-1.5 rounded-lg shadow-[0px_5px_20px_0px_rgba(0,0,20,0.45)] bg-gradient-to-r from-blue-600 via-teal-500 to-purple-600 hover:from-purple-600 hover:via-teal-500 hover:to-blue-600 hover:scale-110 duration-500'>
                            <p className='w-full h-full font-medium text-gray-500 p-6 rounded-md bg-white'>
                                Our digital marketing agency identifies your goals, performs competitor benchmarking and evaluates your customers' online behavior.
                            </p>
                        </div>
                        <h2 className='text-2xl font-medium text-white text-center my-2'>
                            Social Media Marketing
                        </h2>
                    </div>
                    <div>
                        <div className='w-full h-52 p-1.5 rounded-lg shadow-[0px_5px_20px_0px_rgba(0,0,20,0.45)] bg-gradient-to-r from-blue-600 via-teal-500 to-purple-600 hover:from-purple-600 hover:via-teal-500 hover:to-blue-600 hover:scale-110 duration-500'>
                            <p className='w-full h-full font-medium text-gray-500 p-6 rounded-md bg-white'>
                                Content marketing helps you increase online visibility, traffic and brand awareness. We offer effective SEO-copywriting that resonates with your target audience.
                            </p>
                        </div>
                        <h2 className='text-2xl font-medium text-white text-center my-2'>
                            Content Marketing
                        </h2>
                    </div>
                    <div>
                        <div className='w-full h-52 p-1.5 rounded-lg shadow-[0px_5px_20px_0px_rgba(0,0,20,0.45)] bg-gradient-to-r from-blue-600 via-teal-500 to-purple-600 hover:from-purple-600 hover:via-teal-500 hover:to-blue-600 hover:scale-110 duration-500'>
                            <p className='w-full h-full font-medium text-gray-500 p-6 rounded-md bg-white'>
                                We create personalized email newsletters to keep your emails out of spam folders and encourage your customers to take your desired action.
                            </p>
                        </div>
                        <h2 className='text-2xl font-medium text-white text-center my-2'>
                            Email Marketing
                        </h2>
                    </div>
                    <div>
                        <div className='w-full h-52 p-1.5 rounded-lg shadow-[0px_5px_20px_0px_rgba(0,0,20,0.45)] bg-gradient-to-r from-blue-600 via-teal-500 to-purple-600 hover:from-purple-600 hover:via-teal-500 hover:to-blue-600 hover:scale-110 duration-500'>
                            <p className='w-full h-full p-6 font-medium text-gray-500 rounded-md bg-white'>
                                At Ecera System, we understand the nuances of eCommerce web design. When you sell products online, the design of your website is crucial to its success.
                            </p>
                        </div>
                        <h2 className='text-2xl font-medium text-white text-center my-2'>
                            ECommerce Web Design
                        </h2>
                    </div>
                </div>
            </div>
        </section>
        <section className='py-20'>
            <div className='xl:w-[800px] lg:w-3/5 sm:w-4/5 w-11/12 mx-auto'>
                <h1 className='text-center md:text-[40px] md:leading-snug text-3xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500'>
                    Digital Marketing Services FAQs
                </h1>
                <ul className='mt-10 flex flex-col gap-y-4'>
                    {
                        faq.map((item, index) => <li key={index}>
                            <button
                                onClick={() => {
                                    faqIndex1 === index ?
                                        setFaqIndex1('') :
                                        setFaqIndex1(index)
                                }}
                                className={`text-start flex items-center justify-between w-full text-gray-600 md:text-xl text-base font-medium py-4 px-5 hover:text-gray-200 hover:bg-[#021D40] duration-300 ${faqIndex1 === index ? 'bg-[#021D40] text-gray-200' : 'bg-gray-200'}`}
                            >
                                {item.question}
                                {
                                    faqIndex1 === index ?
                                        <i className="fa-solid fa-minus"></i>
                                        :
                                        <i className="fa-solid fa-plus"></i>
                                }
                            </button>
                            {
                                faqIndex1 === index &&
                                <div className='text-gray-500 p-5 border border-t-0 border-[#021D40]'>
                                    <p>{
                                        item.ans
                                    }</p>
                                </div>
                            }
                        </li>)
                    }
                </ul>
            </div>
        </section>
        <Footer></Footer>
    </>);
};

export default DigitalMarketing;