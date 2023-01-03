import React, { useState } from 'react';
import ContactSideButton from '../Shared/ContactSideButton/ContactSideButton';
import Header from '../Shared/Header/Header';
import PageTitle from '../Shared/PageTitle';
import banner from '../../Images/packages-bg.jpg';
import { Link } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';

const faq1 = [
    {
        question: 'What Kind Of Technology Do You Support?',
        ans: 'We are proficient in HTML,CSS.We use Bootstrap and all the advanced web technologies which makes us better than the others.'
    },
    {
        question: 'What Is The Average Cost For A Website?',
        ans: 'We love this question... :-) This is by far our number one question. Unlike other companies we do not need treat you differently if you have more money or make more money than others. We treat every customers the same regardless of their status or company. This is the reason why we are the only company at our level that shows prices for a lot of most common web design, web development and online marketing builds. We have nothing to hide as we know our prices are fair and affordable when comparing apples to apples, with that being said the best way to see how much your website will cost is to talk to us.'
    },
    {
        question: 'When Is Payment Required For Your Web Site Design And Development Services?',
        ans: 'For small projects, 50% of the estimated fee must be provided prior to beginning work, with the remaining payment due upon completion of the project. For larger projects, an initial payment representing one-third of the estimated total fee is required. The second payment is required upon the halfway point, with the final third due upon completion of the project.'
    },
    {
        question: 'What If I am not satisfied by your service?',
        ans: 'Oh No! We really don’t hope for that. But as per our business agreement and policy, the unsatisfied customer will be paid off within 90 days(It normally takes that time to get our accounts set right and return the funds to you).'
    },
    {
        question: 'Will I have a say in the graphic design process?',
        ans: 'Definitely, Our goal is to satisfy you and your input is very important to us. You can give us any site that you like and we will be happy to emulate and still come up with a site that will be consistent and will represent your whole brand.'
    },
    {
        question: 'Do you redesign existing websites?',
        ans: "Yes. We can redesign existing sites and retain your organization's style or give you a completely new look. GalaxyVisions also can provide a free website evaluation. We will show you how your site can take advantage of the latest Web technologies."
    },
    {
        question: 'What is your response turnaround time?',
        ans: "We will respond to all the emails quickly. Approximately the first response can be expected within 90 minutes in our working hours. Within 24 hours all the first responses will be executed."
    },
    {
        question: 'How often should I update my website?',
        ans: "A website that sits stagnant for long periods of time, without any new or fresh content, is nothing more that an online brochure for your company. A successful website will interact with consumers and provide new and up to date information and content. Also, in terms of SEO, Google much prefers a website that is consistently updated. There’s no specific time limit on updating your website, just make sure it stays relevant."
    },
];

const faq2 = [
    {
        question: 'What is the cost for hiring a remote employee?',
        ans: 'We offer employees at $5/hr'
    },
    {
        question: 'What is a responsive website development?',
        ans: 'Responsive web design or responsive web development is an approach to improve the readability of the website pages across various devices, which includes PC desktops, retina displays, tablet screens and mobile phone screens.'
    },
    {
        question: 'Are your websites SEO friendly?',
        ans: "100% Yes!it's our obligation to you as a customer to make sure your website is visible online. So, for that reason we help you by building the website 100% SEO friendly and we use best practice on web design."
    },
    {
        question: 'How Long Does It Take To Create A Website?',
        ans: "The time it takes to build a site depends on the complexity of the site. If you have a deadline, we will work hard to meet it. The most common cause of delay is the content (text/images) from the client."
    },
    {
        question: 'Are your Websites Custom? Do you use templates?',
        ans: "Yes, everything we build is 100% Custom made with unlimited revisions to the design. We are custom starting from the design all the way to your administration area to manage the website yourself."
    },
    {
        question: 'Would my company benefit from digital marketing?',
        ans: "YES. You don’t have to replace your traditional marketing efforts with digital ones and if the word digital doesn’t come into your marketing strategy then your business will not thrive. It really is as simple as that."
    },
    {
        question: 'What is SEO in digital marketing?',
        ans: "SEO stands for Search Engine Optimization. It is the process of getting ''organic'' or ''free'' traffic to your website through search engines. It helps to improve quality and quantity of traffic on your website. SEO is mainly divided into 2 types : On-page SEO and Off-page SEO. In On-page SEO, you need to focus on optimizing your website by considering Google's ranking factors. The off-page SEO is about generating quality backlinks for your websites through different channels."
    },
    {
        question: 'Is SEO doing important?',
        ans: "Whenever user searches for a query, search engines process millions of pages before showing the results. According to a study, 75% people won’t even go to the second page of the search results. So if your website is not SEO optimized, it will be difficult to rank in first few results and you will lose qualty traffic which could be your potential customers. SEO can help you so that you can reach maximum target audience at right time. A digital marketing agency can suggest a tailored SEO strategy which will not only improve the online presence of your website but also get you quality traffic and provide measurable results."
    },
];


const FAQ = () => {
    const [faqIndex1, setFaqIndex1] = useState('');
    const [faqIndex2, setFaqIndex2] = useState('');


    return (<>
        <PageTitle title='Frequently Asked Questions'></PageTitle>
        <Header />
        <ContactSideButton />
        <div>
            <section className='py-24 bg-no-repeat bg-center text-center'
                style={{ backgroundImage: `url(${banner})` }}
            >
                <h1 className='md:text-5xl text-3xl font-semibold text-white uppercase'>
                    SOME FAQ’S
                </h1>
                <p className='text-gray-400 text-base pt-10 pb-5'>
                    <Link className='hover:text-gray-200 duration-300 mr-2' to='/'>Home</Link>
                    /<span className='text-gray-100 ml-2'>Faq's</span>
                </p>
            </section>
            <section className='py-16'>
                <div>
                    <h4 className='uppercase font-bold text-center text-blue-600'>
                        SOME FAQ’S
                    </h4>
                    <h1 className='text-4xl font-bold text-gray-700 text-center mt-3 mx-5'>
                        Read Most Frequent Questions
                    </h1>
                    <div className='xl:w-4/5 md:w-11/12 sm:w-4/5 w-11/12 mx-auto grid md:grid-cols-2 grid-cols-1 md:gap-10 gap-4 mt-14'>
                        <ul className='flex flex-col gap-y-4'>
                            {
                                faq1.map((item, index) => <li key={index}>
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
                        <ul className='flex flex-col gap-y-4'>
                            {
                                faq2.map((item, index) => <li key={index}>
                                    <button
                                        onClick={() => {
                                            faqIndex2 === index ?
                                                setFaqIndex2('') :
                                                setFaqIndex2(index)
                                        }}
                                        className={`text-start flex items-center justify-between w-full text-gray-600 md:text-xl text-base font-medium py-4 px-5 hover:text-gray-200 hover:bg-[#021D40] duration-300 ${faqIndex2 === index ? 'bg-[#021D40] text-gray-200' : 'bg-gray-200'}`}
                                    >
                                        {item.question}
                                        {
                                            faqIndex2 === index ?
                                                <i className="fa-solid fa-minus"></i>
                                                :
                                                <i className="fa-solid fa-plus"></i>
                                        }
                                    </button>
                                    {
                                        faqIndex2 === index &&
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
                </div>
            </section>
            <section className='py-16'>
                <div className='xl:w-2/5 md:w-1/2 sm:w-4/5 w-11/12 mx-auto'>
                    <h2 className='text-lg font-bold uppercase text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-cyan-500 text-center'>Tell Us</h2>
                    <h1 className='text-4xl font-semibold text-gray-700 mt-2 text-center'>
                        Any Question
                    </h1>
                    <form className='mt-10 text-gray-500'>
                        <label
                            htmlFor='name'
                            className='font-medium text-base'
                        >
                            Your name<span className='text-orange-600 ml-1'>*</span>
                            <input
                                id='name'
                                type="text" required
                                className="px-3 py-2 font-normal text-base w-full mt-2 border border-gray-200 focus:outline-0 focus:shadow-[4px_5px_5px_0px_rgba(0,0,255,0.3)]"
                            />
                        </label>
                        <label
                            htmlFor='email'
                            className='font-medium text-base block mt-3'
                        >
                            Email address<span className='text-orange-600 ml-1'>*</span>
                            <input
                                id='email'
                                type="email" required
                                className="px-3 py-2 font-normal text-base w-full mt-2 border border-gray-200 focus:outline-0 focus:shadow-[4px_5px_5px_0px_rgba(0,0,255,0.3)]"
                            />
                        </label>
                        <label
                            htmlFor='phone'
                            className='font-medium text-base block mt-3'
                        >
                            Phone number<span className='text-orange-600 ml-1'>*</span>
                            <input
                                id='phone'
                                type="number" required
                                className="px-3 py-2 font-normal text-base w-full mt-2 border border-gray-200 focus:outline-0 focus:shadow-[4px_5px_5px_0px_rgba(0,0,255,0.3)]"
                            />
                        </label>
                        <label
                            htmlFor='message'
                            className='font-medium text-base block mt-3'
                        >
                            Your Message<span className='text-orange-600 ml-1'>*</span>
                            <textarea
                                id='message'
                                rows="5" required
                                className='px-3 py-2 font-normal text-base w-full mt-2 border border-gray-200 focus:outline-0 focus:shadow-[4px_5px_5px_0px_rgba(0,0,255,0.3)]'
                            ></textarea>
                        </label>
                        <div className='mt-5 w-full text-center'>
                            <button
                                type="submit"
                                className='inline-block bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-cyan-500 hover:to-blue-600 text-white text-lg font-medium py-3 px-8 rounded'
                            >
                                Send message
                            </button>
                        </div>
                    </form>
                </div>
            </section>
        </div>
        <Footer />
    </>);
};

export default FAQ;