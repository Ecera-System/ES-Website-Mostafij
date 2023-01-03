import React from 'react';

const TopNavigation = () => {
    return (
        <div className='w-full bg-slate-900'>
            <div className='2xl:w-[1200px] xl:w-full mx-auto flex items-center md:justify-between justify-center px-16 py-3 text-white'>
                <ul className='md:flex hidden items-center gap-x-10'>
                    <li>
                        <a
                            className='flex items-center gap-x-2 hover:text-gray-300 duration-300'
                            href="mailto:sales@ecerasytem.com"
                        >
                            <i className="fa-regular fa-envelope text-lg leading-none"></i>
                            sales@ecerasytem.com
                        </a>
                    </li>
                    <li>
                        <a
                            className='flex items-center gap-x-2 hover:text-gray-300 duration-300'
                            href="tel:+12486771972"
                        >
                            <i className="fa-solid fa-phone-volume"></i>
                            +1 2486771972
                        </a>
                    </li>
                </ul>
                <ul className='flex items-center gap-x-10'>
                    <li>
                        <a
                            target={'blank'}
                            className='hover:text-gray-300 duration-300'
                            href="https://www.facebook.com/ecerasystem/"
                        >
                            <i className="fa-brands fa-facebook-f text-lg leading-none"></i>
                        </a>
                    </li>
                    <li>
                        <a
                            target={'blank'}
                            className='hover:text-gray-300 duration-300'
                            href="https://www.instagram.com/ecerasystem/"
                        >
                            <i className="fa-brands fa-instagram text-lg leading-none"></i>
                        </a>
                    </li>
                    <li>
                        <a
                            target={'blank'}
                            className='hover:text-gray-300 duration-300'
                            href="https://www.linkedin.com/company/ecera/"
                        >
                            <i className="fa-brands fa-linkedin-in text-lg leading-none"></i>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default TopNavigation;