import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import eceraLogo from '../../../Images/Nav_logo/ecera-logo.png'
import TopNavigation from './TopNavigation';

const Header = () => {
    const [scroll, setScroll] = useState(false);
    const [openMenu, setOpenMenu] = useState(false);
    const [openDropdown1, setOpenDropdown1] = useState(false);
    const [openDropdown2, setOpenDropdown2] = useState(false);

    window.addEventListener('scroll', () => {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if (scrollTop > 48) {
            setScroll(true);
        }
        else {
            setScroll(false);
        }
    });

    return (
        <header className='w-full h-[121px] text-gray-600'>
            {/* =====================Top Navigation===================== */}
            <TopNavigation></TopNavigation>

            {/* =====================Main Navigation===================== */}
            <nav className={`w-full bg-white ${scroll ? 'fixed top-0 left-0 right-0 z-40 shadow-md' : ''}`}>
                <div className='2xl:w-[1200px] xl:w-full mx-auto flex items-center justify-between lg:px-14 sm:px-6 px-3 py-2'>

                    {/* ===========Right Logo=========== */}
                    <div>
                        <Link to={'/'}>
                            <img
                                className='w-14 h-14'
                                src={eceraLogo}
                                alt="ecera logo"
                            />
                        </Link>
                    </div>

                    {/* ===========Left Menu items=========== */}
                    {/* ===========Desktop view=========== */}
                    <ul className='hidden lg:flex items-center xl:gap-x-8 gap-x-5 text-base font-medium uppercase'>
                        <li className='py-4 cursor-pointer hover:text-blue-600 duration-300 relative group/services'>
                            Services
                            <i className="fa-solid fa-angle-down text-sm ml-2"></i>

                            {/* ==============Dropdown============== */}
                            <ul className='absolute top-14 -left-5 z-30 group-hover/services:left-0 w-64 h-auto bg-white overflow-hidden shadow-md rounded-md opacity-0 group-hover/services:opacity-100 invisible group-hover/services:visible duration-700'>
                                <li>
                                    <Link
                                        to={'/website-development'}
                                        className='block normal-case text-lg cursor-pointer px-8 py-4 text-gray-600 hover:text-blue-600 hover:bg-blue-50 duration-300'
                                    >
                                        Website Development
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to={'/digital-marketing'}
                                        className='block normal-case text-lg cursor-pointer px-8 py-4 text-gray-600 hover:text-blue-600 hover:bg-blue-50 duration-300'
                                    >
                                        Digital Marketing
                                    </Link>
                                </li>
                            </ul>

                        </li>
                        <li className='py-4 cursor-pointer hover:text-blue-600 duration-300 relative group/packages'>
                            Packages
                            <i className="fa-solid fa-angle-down text-sm ml-2"></i>

                            {/* ==============Dropdown============== */}
                            <ul className='absolute top-14 -left-5 z-30 group-hover/packages:left-0 w-64 h-auto bg-white overflow-hidden shadow-md rounded-md opacity-0 group-hover/packages:opacity-100 invisible group-hover/packages:visible duration-700'>
                                <li>
                                    <Link
                                        to={'/package/web-design'}
                                        className='block normal-case text-lg cursor-pointer px-8 py-4 text-gray-600 hover:text-blue-600 hover:bg-blue-50 duration-300'
                                    >
                                        Website Design
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to={'/package/digital-marketing'}
                                        className='block normal-case text-lg cursor-pointer px-8 py-4 text-gray-600 hover:text-blue-600 hover:bg-blue-50 duration-300'
                                    >
                                        Digital Marketing
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to={'/package/in-INR'}
                                        className='block normal-case text-lg cursor-pointer px-8 py-4 text-gray-600 hover:text-blue-600 hover:bg-blue-50 duration-300'
                                    >
                                        Package In INR
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to={'/package/offers'}
                                        className='block normal-case text-lg cursor-pointer px-8 py-4 text-gray-600 hover:text-blue-600 hover:bg-blue-50 duration-300'
                                    >
                                        Offers
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <Link
                                to={'/remote-employees'}
                                className='block py-4 cursor-pointer hover:text-blue-600 duration-300'
                            >
                                Hire Virtual Employees
                            </Link>
                        </li>
                        <li>
                            <Link
                                to={'/IT-consultancy'}
                                className='block py-4 cursor-pointer hover:text-blue-600 duration-300'
                            >
                                IT Staffing Solutions
                            </Link>
                        </li>
                        <li className=''>
                            <Link
                                to='/get-estimate'
                                className='normal-case bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-cyan-500 hover:to-blue-600 text-white text-lg py-3 px-5 rounded-lg'
                            >
                                Get Estimate
                            </Link>
                        </li>
                    </ul>

                    {/* ===========Mobile view=========== */}
                    <button
                        className={`lg:hidden block text-2xl`}
                        onClick={() => setOpenMenu(!openMenu)}
                    >
                        <i className="fa-solid fa-bars"></i>
                    </button>

                    {/* Side Menu */}
                    <aside className={`lg:hidden w-full h-full fixed top-0 ${openMenu ? 'right-0' : '-right-[1024px]'} z-50 duration-500 ease-in bg-black/50`}>
                        <ul className='sm:w-[420px] w-[90%] h-full absolute top-0 right-0 bg-white flex flex-col items-start font-medium'>
                            <li className='px-10 py-3'>
                                <button
                                    className='text-3xl text-gray-500 hover:text-gray-700 duration-300'

                                    onClick={() => setOpenMenu(!openMenu)}
                                >
                                    <i className="fa-solid fa-xmark"></i>
                                </button>
                            </li>
                            <li
                                onClick={() => setOpenDropdown1(!openDropdown1)}
                                className={`w-full px-10 py-4 flex justify-between items-center cursor-pointer hover:text-blue-600 hover:bg-blue-50 ${openDropdown1 ? 'text-blue-600 bg-blue-50' : 'text-gray-600'} duration-300`}
                            >
                                Services
                                {
                                    openDropdown1 ?
                                        <i className="fa-solid fa-angle-up text-base ml-2"></i>
                                        :
                                        <i className="fa-solid fa-angle-down text-base ml-2"></i>

                                }

                            </li>
                            {/* ==============Dropdown============== */}
                            <ul className={`w-full origin-top ${openDropdown1 ? 'scale-y-100 h-auto' : 'scale-y-0 h-0'} duration-300 ease-linear`}>
                                <li>
                                    <Link
                                        to={'/website-development'}
                                        className='block normal-case px-10 py-4 text-gray-600 hover:text-blue-600 hover:bg-blue-50 duration-300'
                                    >
                                        Website Development
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to={'/digital-marketing'}
                                        className='block normal-case px-10 py-4 text-gray-600 hover:text-blue-600 hover:bg-blue-50 duration-300'
                                    >
                                        Digital Marketing
                                    </Link>
                                </li>
                            </ul>

                            <li
                                onClick={() => setOpenDropdown2(!openDropdown2)}
                                className={`w-full px-10 py-4 flex justify-between items-center cursor-pointer hover:text-blue-600 hover:bg-blue-50 ${openDropdown2 ? 'text-blue-600 bg-blue-50' : 'text-gray-600'} duration-300`}
                            >
                                Packages
                                {
                                    openDropdown2 ?
                                        <i className="fa-solid fa-angle-up text-base ml-2"></i>
                                        :
                                        <i className="fa-solid fa-angle-down text-base ml-2"></i>

                                }

                            </li>
                            {/* ==============Dropdown============== */}
                            <ul className={`w-full origin-top ${openDropdown2 ? 'scale-y-100 h-auto' : 'scale-y-0 h-0'} duration-300 ease-linear`}>
                                <li>
                                    <Link
                                        to={'/package/web-design'}
                                        className='block normal-case px-10 py-4 text-gray-600 hover:text-blue-600 hover:bg-blue-50 duration-300'
                                    >
                                        Website Design
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to={'/package/digital-marketing'}
                                        className='block normal-case px-10 py-4 text-gray-600 hover:text-blue-600 hover:bg-blue-50 duration-300'
                                    >
                                        Digital Marketing
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to={'/package/in-INR'}
                                        className='block normal-case px-10 py-4 text-gray-600 hover:text-blue-600 hover:bg-blue-50 duration-300'
                                    >
                                        Package In INR
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to={'/package/offers'}
                                        className='block normal-case px-10 py-4 text-gray-600 hover:text-blue-600 hover:bg-blue-50 duration-300'
                                    >
                                        Offers
                                    </Link>
                                </li>
                            </ul>

                            <li className='w-full'>
                                <Link
                                    to={'/remote-employees'}
                                    className='block normal-case px-10 py-4 text-gray-600 hover:text-blue-600 hover:bg-blue-50 duration-300'
                                >
                                    Hire Virtual Employees
                                </Link>
                            </li>
                            <li className='w-full'>
                                <Link
                                    to={'/IT-consultancy'}
                                    className='block normal-case px-10 py-4 text-gray-600 hover:text-blue-600 hover:bg-blue-50 duration-300'
                                >
                                    IT Staffing Solutions
                                </Link>
                            </li>
                            <li className='w-full py-4 px-10'>
                                <Link
                                    to='/get-estimate'
                                    className='inline-block w-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-cyan-500 hover:to-blue-600 text-white text-lg py-3 text-center rounded-lg'
                                >
                                    Get Estimate
                                </Link>
                            </li>
                        </ul>
                    </aside>
                </div>
            </nav>
            <hr />
        </header>
    );
};

export default Header;