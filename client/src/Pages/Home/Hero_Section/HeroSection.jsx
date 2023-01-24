import React, { useEffect, useState } from 'react';
import slider1 from '../../../Images/Banner_Slider/slider-1.png';
import slider2 from '../../../Images/Banner_Slider/slider-2.png';
import slider3 from '../../../Images/Banner_Slider/slider-3.png';
import slider4 from '../../../Images/Banner_Slider/slider-4.png';
import Slider from './Slider';

const data = [
    {
        img: slider1,
        title: 'Web Design & Development',
        content: 'Ecera System is a trusted brand that provides the wide range of website development services. We not only create beautiful websites suiting your requirement in your budget but also provide web hosting services.We carry more than just good coding skills. Our experience makes us stand out from other web development.',
        bgColor: 'bg-[#021D40]',
        textColor: 'text-[#021D40]',
        btnPath: '/website-development'
    },
    {
        img: slider2,
        title: 'Digital Marketing',
        content: "Ecera System is a dynamic, versatile and full-service digital marketing agency that doesn’t rely on smoke and mirrors to attract new clients. Instead, Ecera System trusts its own search engine optimization (SEO) and marketing skills to drive new customers to our website.Digital Marketing Services include SEM, SEO, SMM.etc",
        bgColor: 'bg-[#5A081D]',
        textColor: 'text-[#5A081D]',
        btnPath: '/digital-marketing'
    },
    {
        img: slider3,
        title: 'Remote Employees',
        content: 'Ecera System take responsibilities to offer professional services to its clientele for maximum growth to their business in all directions. Hire experts with experience for all your tasks whether you need virtual assistants, web developers, app developers, data entry experts or internet marketing experts; Ecera System has a verstile team to complete your assigned tasks on time and within competitive cost.',
        bgColor: 'bg-[#165E08]',
        textColor: 'text-[#165E08]',
        btnPath: '/remote-employees'
    },
    {
        img: slider4,
        title: 'IT Consultancy',
        content: 'Starting a business requires analytical thinking, determined organization, and detailed record-keeping. It’s important to be aware of your competition and either appropriate or improve upon their successful tactics. Trust our top minds to eliminate workflow pain points, implement new tech, and consolidate app portfolios.We help bring bold strategies to transform our clients from being Market followers to Market Leaders.',
        bgColor: 'bg-[#1A0000]',
        textColor: 'text-[#1A0000]',
        btnPath: '/IT-staffing'
    },
];

const HeroSection = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const slideInterval = setInterval(() => {
            setCurrentIndex(currentIndex => currentIndex < 3 ? currentIndex + 1 : 0)
        }, 5000);

        return () => clearInterval(slideInterval);
    }, []);


    const handlePrevious = () => {
        const preIndex = currentIndex === 0 ? data.length - 1 : currentIndex - 1;
        setCurrentIndex(preIndex);
    };


    const handleNext = () => {
        const nextIndex = currentIndex === data.length - 1 ? 0 : currentIndex + 1;
        setCurrentIndex(nextIndex);
    };


    const handleDotSlide = index => {
        setCurrentIndex(index)
    };

    return (
        <section>
            <div className='relative 2xl:w-[1200px] mx-auto xl:w-full'>
                <div className='w-full overflow-hidden'>
                    <div
                        className='grid grid-cols-4 w-[400%] h-[80vh] scroll-smooth duration-1000 ease-in-out'
                        style={{ transform: `translateX(-${currentIndex * 25}%)` }}
                    >
                        {
                            data.map((item, index) => <Slider item={item} key={index} />)
                        }
                    </div>
                </div>

                {/* ====================Carousel Left button==================== */}
                <div
                    onClick={handlePrevious}
                    className='absolute top-1/2 lg:left-5 left-0 -translate-y-1/2 z-10 hover:bg-black/50 duration-300 py-3 px-4 rounded-lg cursor-pointer'
                >
                    <i className="fa-solid fa-chevron-left text-4xl text-white"></i>
                </div>

                {/* ====================Carousel Right button==================== */}
                <div
                    onClick={handleNext}
                    className='absolute top-1/2 lg:right-5 right-0 -translate-y-1/2 z-10 hover:bg-black/50 duration-300 py-3 px-4 rounded-lg cursor-pointer'
                >
                    <i className="fa-solid fa-chevron-right text-4xl text-white"></i>
                </div>

                {/* ====================Carousel Dot buttons==================== */}
                <div className='absolute bottom-5 left-0 right-0 mx-auto w-max flex items-center gap-6'>
                    {data.map((item, index) => (
                        <div
                            key={index}
                            className={`text-2xl cursor-pointer hover:text-white duration-300 ${currentIndex === index ? 'text-white' : 'text-gray-500'}`}
                            onClick={() => handleDotSlide(index)}
                        >
                            &#9679;
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HeroSection;