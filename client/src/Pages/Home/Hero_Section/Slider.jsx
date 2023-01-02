import React from 'react';
import { Link } from 'react-router-dom';

const Slider = ({ item }) => {
    const { img, title, content, bgColor, textColor, btnPath } = item;

    return (<>
        {/* ============================Carousel Images============================ */}
        <div className={`w-full h-full m-auto grid lg:grid-cols-2 items-center ${bgColor}`}>
            <div className='lg:px-20 px-10 text-center text-gray-100'>
                <h1 className='md:text-[40px] text-3xl uppercase md:mb-10 mb-5'>
                    {title}
                </h1>
                <p className='md:text-lg text-base'>
                    {content}
                </p>
                <Link to={btnPath}>
                    <button
                        className={
                            `inline-block mt-10 text-lg font-medium ${textColor} bg-white hover:text-white hover:bg-transparent border-2 border-white duration-300 px-5 py-2 rounded-md`
                        }
                    >
                        Learn more
                    </button>
                </Link>
            </div>
            <div className='lg:block hidden'>
                <img
                    src={img}
                    alt="Slider images"
                    className='w-full h-full'
                />
            </div>
        </div>
    </>);
};

export default Slider;