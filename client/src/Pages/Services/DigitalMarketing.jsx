import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../Shared/Header/Header';
import PageTitle from '../Shared/PageTitle';
import Footer from '../Shared/Footer/Footer';


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
    const [isOver, setIsOver] = useState(1);

    return (<>
        <PageTitle title='Digital Marketing'></PageTitle>
        <Header></Header>
        <section
            className='w-full h-auto bg-gradient-to-r from-blue-600 to-purple-600 py-20'
        >
            <div className='2xl:w-[1100px] lg:w-[90%] sm:w-4/5 w-11/12 h-full mx-auto grid lg:grid-cols-2 grid-cols-1 items-center lg:gap-0 gap-20'>
                <div className='lg:text-start text-center'>
                    <h1 className='md:text-5xl text-3xl font-bold md:leading-[3.5rem] text-white'>
                        Digital Marketing
                    </h1>
                    <p className='text-gray-200 sm:text-lg text-base italic font-medium py-3'>
                        Grow Your Client Base With Data-Driven and Targeted Strategies
                    </p>
                    <Link
                        to="/contact"
                        className='inline-block text-lg text-white font-medium mt-5 py-2 px-10 border-2 border-white rounded hover:text-blue-600 hover:bg-white duration-300'
                    >
                        Request a Quote
                    </Link>
                </div>
                <div className='grid lg:place-content-end place-content-center'>
                    <img
                        className='w-[450px] h-auto'
                        src='/Images/Digital_Marketing/gtco.png'
                        alt="website design featured work"
                    />
                </div>
            </div>
        </section>
        <div className=' flex items-center justify-center sm:gap-5 gap-3 sm:mt-16 mt-12'>
            <div className='w-1.5 h-1.5 border-2 border-blue-600 rounded-full'></div>
            <div className='w-2 h-2 border-2 border-blue-600 rounded-full'></div>
            <div className='w-3 h-3 border-2 border-blue-600 rounded-full'></div>
            <div className='w-32 h-3 border-2 border-blue-600 rounded-full'></div>
            <div className='w-3 h-3 border-2 border-blue-600 rounded-full'></div>
            <div className='w-2 h-2 border-2 border-blue-600 rounded-full'></div>
            <div className='w-1.5 h-1.5 border-2 border-blue-600 rounded-full'></div>
        </div>
        <section className='py-16'>
            <div className='2xl:w-[1200px] xl:w-3/4 md:w-4/5 w-[90%] mx-auto flex lg:flex-row flex-col-reverse items-center lg:gap-10 gap-8'>
                <div className='lg:w-1/2 w-full text-base text-gray-500'>
                    <p>
                        <span className='text-lg font-medium'>Ecera System</span> is a dynamic, versatile and full-service digital marketing agency that doesn’t rely on smoke and mirrors to attract new clients. Instead, Ecera System trusts its own search engine optimization (SEO) and marketing skills to drive new customers to our website.
                    </p>
                    <p className='mt-4'>
                        Ecera System works with you to produce customized digital marketing services and a
                        plan that aligns with your unique business needs. We become an extension of your
                        team, a partner that understands your market and goals, rather than just an agency
                        that executes strategies blindly. Our reviews and testimonials speak volumes. We earn
                        your business every day with month-to-month contracts.
                    </p>
                </div>
                <div className='lg:w-1/2 w-full pl-5'>
                    <div className='w-full h-full bg-gradient-to-r from-blue-600 to-purple-600'>
                        <img
                            loading='lazy'
                            src='/Images/Digital_Marketing/cta-banner.jpg'
                            alt=""
                            className='w-max mx-auto h-auto relative -top-3 -left-3'
                        />
                    </div>
                </div>
            </div>
        </section>
        <div className='flex items-center sm:gap-5 gap-3 my-5'>
            <hr className='w-full h-0.5 bg-blue-500' />
            <div className='w-6 h-3 border-2 border-blue-500 rounded-full'></div>
            <div className='w-96 h-3 border-2 border-blue-500 rounded-full'></div>
            <div className='w-6 h-3 border-2 border-blue-500 rounded-full'></div>
            <hr className='w-full h-0.5 bg-blue-500' />
        </div>
        <section className='pt-16 pb-20'>
            <div className='2xl:w-[1100px] md:w-4/5 w-11/12 mx-auto'>
                <h1 className='text-center md:text-5xl md:leading-snug text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500'>
                    Why Choose Us
                </h1>
                <p className='md:text-lg text-base font-medium text-center text-gray-500'>
                    Boost Your Revenue Growth Rate and Achieve Online Success
                </p>
                <div className='mt-14 grid lg:grid-cols-2 grid-cols-1 items-center lg:gap-0 gap-10'>
                    <div className='w-full h-[24rem] rounded-2xl overflow-hidden relative' style={{ boxShadow: '0 4px 30px 10px rgb(0 0 0 0.30)' }}>
                        <div
                            className='w-full h-full bg-no-repeat bg-center bg-cover duration-300'
                            style={{
                                backgroundImage: `url(
                                    ${(isOver === 1 && '/Images/Digital_Marketing/data_driven_dm.png') ||
                                    (isOver === 2 && '/Images/Digital_Marketing/industry_experts_dm.jpg') ||
                                    (isOver === 3 && '/Images/Digital_Marketing/dm_framework.jpg') ||
                                    (isOver === 4 && '/Images/Digital_Marketing/omnichannel_personalization_dm.jpg') ||
                                    (isOver === 5 && '/Images/Digital_Marketing/campaign_monitoring_dm.jpg') ||
                                    (isOver === 6 && '/Images/Digital_Marketing/competitive_pricing_dm.jpg')
                                    })`
                            }} />
                        <div
                            className='absolute inset-0 bg-[#000066cb] text-center text-lg font-medium'
                        >
                            <p
                                className={`absolute inset-0 grid place-items-center text-white p-8 duration-500 ease-linear ${isOver === 1 ? 'scale-100 translate-x-0' : 'scale-0 translate-x-[100vh]'}`}
                            >
                                We analyze your brand’s strengths, weaknesses, opportunities and threats (SWOT) to create up-to-date metrics and generate actionable insights.
                            </p>
                            <p
                                className={`absolute inset-0 grid place-items-center text-white p-8 duration-500 ease-linear ${isOver === 2 ? 'scale-100 translate-x-0' : 'scale-0 translate-x-[100vh]'}`}
                            >
                                We keep track of the latest trends and innovations, develop goal-oriented strategies and ensure all our campaigns meet search engine guidelines.
                            </p>
                            <p
                                className={`absolute inset-0 grid place-items-center text-white p-8 duration-500 ease-linear ${isOver === 3 ? 'scale-100 translate-x-0' : 'scale-0 translate-x-[100vh]'}`}
                            >
                                We review your current marketing strategies and digital presence, set key performance indicators (KPIs), identify your brand personality and integrate your customer experience in all levels of your strategy-building.
                            </p>
                            <p
                                className={`absolute inset-0 grid place-items-center text-white p-8 duration-500 ease-linear ${isOver === 4 ? 'scale-100 translate-x-0' : 'scale-0 translate-x-[100vh]'}`}
                            >
                                At Ecera System, we perform audience analyses and needs assessments to develop customized internet marketing strategies that drive more business.
                            </p>
                            <p
                                className={`absolute inset-0 grid place-items-center text-white p-8 duration-500 ease-linear ${isOver === 5 ? 'scale-100 translate-x-0' : 'scale-0 translate-x-[100vh]'}`}
                            >
                                At Ecera System, we establish your campaign metrics and perform regular monitoring and evaluation to determine your strategies' success.
                            </p>
                            <p
                                className={`absolute inset-0 grid place-items-center text-white p-8 duration-500 ease-linear ${isOver === 6 ? 'scale-100 translate-x-0' : 'scale-0 translate-x-[100vh]'}`}
                            >
                                We shape our internet marketing services based on your industry demands, online needs and financial capacity. In this way, we help you acquire the online attention you need without breaking the bank.
                            </p>
                        </div>
                    </div>
                    <ul className='md:text-lg text-base font-medium uppercase text-blue-500 xl:pl-16 md:pl-10 flex flex-col lg:gap-8 gap-6'>
                        <li
                            className={`hover:text-blue-700 duration-300 cursor-pointer flex items-start gap-2 ${isOver === 1 && 'text-blue-700 scale-105'}`}
                            onMouseOver={() => setIsOver(1)}
                        >
                            <i className="fa-solid fa-arrow-left-long mt-1.5"></i>
                            Data-driven Digital Marketing Services
                        </li>
                        <li
                            className={`hover:text-blue-700 duration-300 cursor-pointer flex items-start gap-2 ${isOver === 2 && 'text-blue-700 scale-105'}`}
                            onMouseOver={() => setIsOver(2)}
                        >
                            <i className="fa-solid fa-arrow-left-long mt-1.5"></i>
                            Industry Experts
                        </li>
                        <li
                            className={`hover:text-blue-700 duration-300 cursor-pointer flex items-start gap-2 ${isOver === 3 && 'text-blue-700 scale-105'}`}
                            onMouseOver={() => setIsOver(3)}
                        >
                            <i className="fa-solid fa-arrow-left-long mt-1.5"></i>
                            Custom Digital Marketing Framework
                        </li>
                        <li
                            className={`hover:text-blue-700 duration-300 cursor-pointer flex items-start gap-2 ${isOver === 4 && 'text-blue-700 scale-105'}`}
                            onMouseOver={() => setIsOver(4)}
                        >
                            <i className="fa-solid fa-arrow-left-long mt-1.5"></i>
                            Omnichannel Personalization
                        </li>
                        <li
                            className={`hover:text-blue-700 duration-300 cursor-pointer flex items-start gap-2 ${isOver === 5 && 'text-blue-700 scale-105'}`}
                            onMouseOver={() => setIsOver(5)}
                        >
                            <i className="fa-solid fa-arrow-left-long mt-1.5"></i>
                            Campaign Monitoring and Evaluation
                        </li>
                        <li
                            className={`hover:text-blue-700 duration-300 cursor-pointer flex items-start gap-2 ${isOver === 6 && 'text-blue-700 scale-105'}`}
                            onMouseOver={() => setIsOver(6)}
                        >
                            <i className="fa-solid fa-arrow-left-long mt-1.5"></i>
                            Competitive Pricing
                        </li>
                    </ul>
                </div>
            </div>
        </section>
        <div className='flex items-center sm:gap-5 gap-3'>
            <hr className='w-full h-0.5 bg-blue-500' />
            <div className='w-6 h-3 border-2 border-blue-500 rounded-full'></div>
            <div className='w-96 h-3 border-2 border-blue-500 rounded-full'></div>
            <div className='w-6 h-3 border-2 border-blue-500 rounded-full'></div>
            <hr className='w-full h-0.5 bg-blue-500' />
        </div>
        <section className='pt-20 pb-24'>
            <div className='2xl:w-[1200px] lg:w-[90%] md:w-4/5 w-11/12 mx-auto'>
                <h1 className='text-center md:text-5xl md:leading-snug text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500'>
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
                        <img
                            loading='lazy'
                            src='/Images/Digital_Marketing/seo-banner.jpg'
                            alt=""
                            className='w-full h-auto rounded-xl'
                        />
                    </div>
                </div>
            </div>
        </section>
        <section
            style={{ background: `linear-gradient(rgba(40, 58, 90, 0.9), rgba(40, 58, 90, 0.9)), url(/Images/Digital_Marketing/cta-banner.jpg) fixed center center` }}
            className='w-full lg:py-20 py-12 bg-no-repeat bg-center bg-fixed bg-[#141d38]'
        >
            <div className='2xl:w-[1200px] lg:w-3/4 md:w-4/5 w-11/12 mx-auto text-center text-gray-200'>
                <h1 className='text-center md:text-5xl text-3xl md:leading-snug font-semibold text-gray-100'>
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
        <section className='py-20'>
            <div className='2xl:w-[1200px] sm:w-4/5 w-11/12 mx-auto'>
                <h1 className='text-center md:text-5xl md:leading-snug text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500'>
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
                        <img loading='lazy' src='/Images/Digital_Marketing/why-digital.png' alt="" />
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
            style={{ background: `linear-gradient(rgba(40, 58, 90, 0.9), rgba(40, 58, 90, 0.9)), url(/Images/Digital_Marketing/cards-background.jpg) fixed center center` }}
            className='w-full py-20 bg-no-repeat bg-cover'
        >
            <div className='2xl:w-[1200px] xl:w-4/5 lg:w-11/12 sm:w-4/5 w-11/12 mx-auto'>
                <h1 className='text-center md:text-5xl text-3xl md:leading-snug font-semibold text-gray-50'>
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
                <h1 className='text-center md:text-5xl md:leading-snug text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-cyan-500'>
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