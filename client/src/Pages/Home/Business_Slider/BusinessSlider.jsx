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
        <section className='2xl:w-[1100px] xl:w-4/5 w-11/12 mx-auto'>
            <div>
                <Link
                    to={'/get-estimate'}
                    className='bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-cyan-500 hover:to-blue-600 text-white text-lg font-medium py-3 block mx-auto mt-20 w-40 text-center shadow-black/20 rounded-lg'
                >
                    Get a Quote
                </Link>
                <h1 className='text-center mt-16 md:text-[40px] md:leading-normal text-3xl font-semibold leading-none text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500'>
                    Here's how Ecera System can benefit your business
                </h1>
            </div>

            <div className='pt-10 pb-20 sm:w-11/12 w-4/5 mx-auto text-center relative'>
                <div className='w-full'>
                    <Slider ref={setSliderRef} {...settings}>
                        {
                            data.map((item, index) =>
                                <div key={index}>
                                    <div className='border rounded-md sm:mx-3 mx-6'>
                                        <div className='rounded-md bg-gray-100'>
                                            <img src={item.img} alt="" className='w-full h-36 mx-auto rounded-t-md ' />
                                            <h1 className='text-center text-base font-medium text-gray-600 py-4'>
                                                {
                                                    item.title
                                                }
                                            </h1>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    </Slider>
                </div>

                {/* <-- Left button --> */}
                <button
                    onClick={() => { sliderRef?.slickPrev() }}
                    className='absolute top-1/2 lg:-left-20 -left-10 -translate-y-1/2 z-10 text-black/50 hover:text-black duration-300'
                >
                    <i className="fa-solid fa-chevron-left md:text-3xl text-2xl"></i>
                </button>

                {/* <-- Right button --> */}
                <button
                    onClick={() => { sliderRef?.slickNext() }}
                    className='absolute top-1/2 lg:-right-20 -right-10 -translate-y-1/2 z-10 text-black/50 hover:text-black duration-300'
                >
                    <i className="fa-solid fa-chevron-right md:text-3xl text-2xl"></i>
                </button>
            </div>
        </section>
    );
};

export default BusinessSlider;