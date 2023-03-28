import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const MobileMenu = ({ login, isLoggedIn, openProfile, setOpenProfile, profile, isEnlistco }) => {
    const [openMenu, setOpenMenu] = useState(false);
    const [openDropdown1, setOpenDropdown1] = useState(false);
    const [openDropdown2, setOpenDropdown2] = useState(false);
    const [openDropdown3, setOpenDropdown3] = useState(false);

    return (<>
        <button
            className={`lg:hidden block text-2xl`}
            onClick={() => setOpenMenu(!openMenu)}
        >
            <i className="fa-solid fa-bars"></i>
        </button>

        {/* Side Menu */}
        <aside className={`lg:hidden w-full h-full fixed top-0 right-0 ${openMenu ? 'visible opacity-100 z-50' : 'invisible opacity-0'} duration-700 bg-black/50`}>
            <ul className={`sm:w-[420px] w-[90%] h-full overflow-y-auto scrollbar-none bg-white flex flex-col items-start font-medium duration-500 absolute top-0 ${openMenu ? 'right-0' : '-right-[1024px]'}`}>
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
                        <NavLink
                            to={'/website-development'}
                            className='block normal-case px-10 py-4 text-gray-600 hover:text-blue-600 hover:bg-blue-50 duration-300'
                        >
                            Website Development
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to={'/digital-marketing'}
                            className='block normal-case px-10 py-4 text-gray-600 hover:text-blue-600 hover:bg-blue-50 duration-300'
                        >
                            Digital Marketing
                        </NavLink>
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
                {/* <-- Dropdown --> */}
                <ul className={`w-full origin-top ${openDropdown2 ? 'scale-y-100 h-auto' : 'scale-y-0 h-0'} duration-300 ease-linear`}>
                    <li>
                        <NavLink
                            to={'/package/web-design'}
                            className='block normal-case px-10 py-4 text-gray-600 hover:text-blue-600 hover:bg-blue-50 duration-300'
                        >
                            Website Design
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to={'/package/digital-marketing'}
                            className='block normal-case px-10 py-4 text-gray-600 hover:text-blue-600 hover:bg-blue-50 duration-300'
                        >
                            Digital Marketing
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to={'/package/in-INR'}
                            className='block normal-case px-10 py-4 text-gray-600 hover:text-blue-600 hover:bg-blue-50 duration-300'
                        >
                            Package In INR
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to={'/package/offers'}
                            className='block normal-case px-10 py-4 text-gray-600 hover:text-blue-600 hover:bg-blue-50 duration-300'
                        >
                            Offers
                        </NavLink>
                    </li>
                </ul>

                <li className='w-full'>
                    <NavLink
                        to={'/remote-employees'}
                        className='block normal-case px-10 py-4 text-gray-600 hover:text-blue-600 hover:bg-blue-50 duration-300'
                    >
                        Hire Virtual Employees
                    </NavLink>
                </li>
                <li
                    onClick={() => setOpenDropdown3(!openDropdown3)}
                    className={`w-full px-10 py-4 flex justify-between items-center cursor-pointer hover:text-blue-600 hover:bg-blue-50 ${openDropdown3 ? 'text-blue-600 bg-blue-50' : 'text-gray-600'} duration-300`}
                >
                    IT Staffing Solutions
                    {
                        openDropdown3 ?
                            <i className="fa-solid fa-angle-up text-base ml-2"></i>
                            :
                            <i className="fa-solid fa-angle-down text-base ml-2"></i>

                    }
                </li>

                {/* <-- Dropdown --> */}
                <ul className={`w-full origin-top ${openDropdown3 ? 'scale-y-100 h-auto' : 'scale-y-0 h-0'} duration-300 ease-linear`}>
                    <li>
                        <NavLink
                            to={'/IT-staffing'}
                            className='block normal-case px-10 py-4 text-gray-600 hover:text-blue-600 hover:bg-blue-50 duration-300'
                        >
                            IT Staffing Overview
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to={'/career-overview'}
                            className='block normal-case px-10 py-4 text-gray-600 hover:text-blue-600 hover:bg-blue-50 duration-300'
                        >
                            Career Overview
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to={'/employee-benefits'}
                            className='block normal-case px-10 py-4 text-gray-600 hover:text-blue-600 hover:bg-blue-50 duration-300'
                        >
                            Employee Benefits
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to={'/immigration'}
                            className='block normal-case px-10 py-4 text-gray-600 hover:text-blue-600 hover:bg-blue-50 duration-300'
                        >
                            Immigration
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to={'/careers'}
                            className='block normal-case px-10 py-4 text-gray-600 hover:text-blue-600 hover:bg-blue-50 duration-300'
                        >
                            Current-Opening
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to={'/careers'}
                            className='block normal-case px-10 py-4 text-gray-600 hover:text-blue-600 hover:bg-blue-50 duration-300'
                        >
                            Join-Us
                        </NavLink>
                    </li>
                </ul>

                <li className='w-full py-4 px-10 relative'>
                    {
                        login ? (isLoggedIn ?
                            <button
                                className=''
                                onClick={() => setOpenProfile(!openProfile)}
                            >
                                <svg className="bi bi-person-circle w-10 h-10 text-gray-500 hover:text-blue-600 duration-300"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor" viewBox="0 0 16 16">
                                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                                    <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
                                </svg>

                            </button> :
                            <Link
                                to='/login?source=header_nav'
                                className='inline-block w-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-cyan-500 hover:to-blue-600 text-white text-lg py-3 text-center rounded-lg'
                            >
                                Login
                            </Link>)
                            :
                            (isEnlistco ?
                                <Link
                                    to='/coming-soon'
                                    className='inline-block w-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-cyan-500 hover:to-blue-600 text-white text-lg py-3 px-10 text-center rounded-lg'
                                >
                                    Enlistco
                                </Link> :
                                <Link
                                    to='/get-estimate'
                                    className='inline-block w-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-cyan-500 hover:to-blue-600 text-white text-lg py-3 text-center rounded-lg'
                                >
                                    Get Estimate
                                </Link>)
                    }
                    {openProfile && profile}
                </li>
            </ul>
        </aside>
    </>);
};

export default MobileMenu;