import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const DesktopMenu = ({ login, isLoggedIn, openProfile, setOpenProfile, profile, isEnlistco }) => {

    return (<>
        <ul className='hidden lg:flex items-center xl:gap-x-8 gap-x-5 text-lg font-medium'>
            <li className='py-4 cursor-pointer hover:text-blue-600 duration-300 relative group/services'>
                Services
                <i className="fa-solid fa-angle-down text-sm ml-2"></i>

                {/* ==============Dropdown============== */}
                <ul className='absolute top-14 -left-5 z-30 group-hover/services:left-0 w-64 h-auto bg-white overflow-hidden shadow-md rounded-md opacity-0 group-hover/services:opacity-100 invisible group-hover/services:visible duration-700'>
                    <li>
                        <NavLink
                            to={'/website-development'}
                            className='block normal-case text-lg cursor-pointer px-8 py-4 text-gray-600 hover:text-blue-600 hover:bg-blue-50 duration-300'
                        >
                            Website Development
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to={'/digital-marketing'}
                            className='block normal-case text-lg cursor-pointer px-8 py-4 text-gray-600 hover:text-blue-600 hover:bg-blue-50 duration-300'
                        >
                            Digital Marketing
                        </NavLink>
                    </li>
                </ul>

            </li>
            <li className='py-4 cursor-pointer hover:text-blue-600 duration-300 relative group/packages'>
                Packages
                <i className="fa-solid fa-angle-down text-sm ml-2"></i>

                {/* ==============Dropdown============== */}
                <ul className='absolute top-14 -left-5 z-30 group-hover/packages:left-0 w-64 h-auto bg-white overflow-hidden shadow-md rounded-md opacity-0 group-hover/packages:opacity-100 invisible group-hover/packages:visible duration-700'>
                    <li>
                        <NavLink
                            to={'/package/web-design'}
                            className='block normal-case text-lg cursor-pointer px-8 py-4 text-gray-600 hover:text-blue-600 hover:bg-blue-50 duration-300'
                        >
                            Website Design
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to={'/package/digital-marketing'}
                            className='block normal-case text-lg cursor-pointer px-8 py-4 text-gray-600 hover:text-blue-600 hover:bg-blue-50 duration-300'
                        >
                            Digital Marketing
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to={'/package/in-INR'}
                            className='block normal-case text-lg cursor-pointer px-8 py-4 text-gray-600 hover:text-blue-600 hover:bg-blue-50 duration-300'
                        >
                            Package In INR
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to={'/package/offers'}
                            className='block normal-case text-lg cursor-pointer px-8 py-4 text-gray-600 hover:text-blue-600 hover:bg-blue-50 duration-300'
                        >
                            Offers
                        </NavLink>
                    </li>
                </ul>
            </li>
            <li>
                <NavLink
                    to={'/remote-employees'}
                    className='block py-4 cursor-pointer hover:text-blue-600 duration-300'
                >
                    Hire Virtual Employees
                </NavLink>
            </li>
            <li className='py-4 cursor-pointer hover:text-blue-600 duration-300 relative group/it_staff'>
                IT Staffing Solutions
                <i className="fa-solid fa-angle-down text-sm ml-2"></i>

                {/* ==============Dropdown============== */}
                <ul className='absolute top-14 -left-5 z-30 group-hover/it_staff:left-0 w-64 h-auto bg-white overflow-hidden shadow-md rounded-md opacity-0 group-hover/it_staff:opacity-100 invisible group-hover/it_staff:visible duration-700'>
                    <li>
                        <NavLink
                            to={'/IT-staffing'}
                            className='block normal-case text-lg cursor-pointer px-8 py-4 text-gray-600 hover:text-blue-600 hover:bg-blue-50 duration-300'
                        >
                            IT Staffing Overview
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to={'/career-overview'}
                            className='block normal-case text-lg cursor-pointer px-8 py-4 text-gray-600 hover:text-blue-600 hover:bg-blue-50 duration-300'
                        >
                            Career Overview
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to={'/employee-benefits'}
                            className='block normal-case text-lg cursor-pointer px-8 py-4 text-gray-600 hover:text-blue-600 hover:bg-blue-50 duration-300'
                        >
                            Employee Benefits
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to={'/immigration'}
                            className='block normal-case text-lg cursor-pointer px-8 py-4 text-gray-600 hover:text-blue-600 hover:bg-blue-50 duration-300'
                        >
                            Immigration
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to={'/careers'}
                            className='block normal-case text-lg cursor-pointer px-8 py-4 text-gray-600 hover:text-blue-600 hover:bg-blue-50 duration-300'
                        >
                            Current-Opening
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to={'/careers'}
                            className='block normal-case text-lg cursor-pointer px-8 py-4 text-gray-600 hover:text-blue-600 hover:bg-blue-50 duration-300'
                        >
                            Join-Us
                        </NavLink>
                    </li>
                </ul>
            </li>
            <li className='flex items-center justify-center relative'>
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
                            className='normal-case bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-cyan-500 hover:to-blue-600 text-white text-lg py-3 px-10 rounded-lg'
                        >
                            Login
                        </Link>) :
                        (isEnlistco ?
                            <Link
                                to='/coming-soon'
                                className='bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-cyan-500 hover:to-blue-600 text-white text-lg py-3 px-10 rounded-lg'
                            >
                                Enlistco
                            </Link>
                            : <Link
                                to='/get-estimate'
                                className='normal-case bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-cyan-500 hover:to-blue-600 text-white text-lg py-3 px-5 rounded-lg'
                            >
                                Get Estimate
                            </Link>)
                }
                {openProfile && profile}
            </li>
        </ul>
    </>);
};

export default DesktopMenu;