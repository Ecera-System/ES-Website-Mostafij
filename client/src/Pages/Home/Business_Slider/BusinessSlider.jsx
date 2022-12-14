import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import slide1 from '../../../Images/Business_Slider/slide1.jpg'
import slide2 from '../../../Images/Business_Slider/slide2.jpg'
import slide3 from '../../../Images/Business_Slider/slide3.jpg'
import slide4 from '../../../Images/Business_Slider/slide4.jpg'
import slide5 from '../../../Images/Business_Slider/slide5.jpg'
import slide6 from '../../../Images/Business_Slider/slide6.jpg'


const data = [
    {
        img: slide1,
        title: 'Experienced Employees'
    },
    {
        img: slide2,
        title: 'Variety of Services'
    },
    {
        img: slide3,
        title: 'Flexibility'
    },
    {
        img: slide4,
        title: 'Relationship with Clients'
    },
    {
        img: slide5,
        title: 'Proper Chain of Command'
    },
    {
        img: slide6,
        title: 'Round the Clock Support'
    },
];

const BusinessSlider = () => {

    const [sliderRef, setSliderRef] = useState(null);

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1,
                }
            }
        ]
    }


    return (
        <section className='xl:w-4/5 w-11/12 mx-auto'>
            <div>
                <Link
                    to={'/get-estimate'}
                    className='bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-cyan-500 hover:to-blue-600 text-white text-lg font-medium py-3 block mx-auto my-10 w-40 text-center shadow-black/20 shadow-xl rounded-lg'
                >
                    Get a Quote
                </Link>
                <h1 className='text-center md:text-[40px] md:leading-normal text-3xl font-semibold leading-none text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500'>
                    Here's how Ecera System can benefit your business
                </h1>
            </div>

            <div className='py-10 w-[75%] mx-auto text-center relative'>
                <div className='w-full'>
                    <Slider ref={setSliderRef} {...settings}>
                        {
                            data.map((item, index) =>
                                <div key={index} className=''>
                                    <div className='border-2 border-blue-600 rounded-full lg:w-48 lg:h-48 w-36 h-36 mx-auto'>
                                        <img
                                            className='w-full h-full rounded-full border'
                                            src={item.img}
                                            alt=""
                                        />
                                    </div>
                                    <h4 className='font-bold md:text-base text-sm text-gray-700 mt-3 mx-2 text-center'>{item.title}</h4>
                                </div>
                            )
                        }
                    </Slider>
                </div>

                {/* =============Left button============= */}
                <div
                    onClick={() => { sliderRef?.slickPrev() }}
                    className='absolute top-1/2 lg:-left-20 -left-10 -translate-y-1/2 z-10 bg-black/50 hover:bg-black duration-300 py-2 px-3 rounded-lg cursor-pointer'
                >
                    <i className="fa-solid fa-chevron-left text-2xl text-white"></i>
                </div>

                {/* =============Right button============= */}
                <div
                    onClick={() => { sliderRef?.slickNext() }}
                    className='absolute top-1/2 lg:-right-20 -right-10 -translate-y-1/2 z-10 bg-black/50 hover:bg-black duration-300 py-2 px-3 rounded-lg cursor-pointer'
                >
                    <i className="fa-solid fa-chevron-right text-2xl text-white"></i>
                </div>
            </div>
        </section>
    );
};

export default BusinessSlider;