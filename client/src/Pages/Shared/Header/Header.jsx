import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import useLoggedIn from '../../../AuthHook/useLoggedIn';
import DesktopMenu from './DesktopMenu';
import MobileMenu from './MobileMenu';
import TopNavigation from './TopNavigation';


const Header = ({ login, topNav, isEnlistco }) => {
    const [scroll, setScroll] = useState(false);
    const [isLoggedIn, setIsLogout] = useLoggedIn();
    const [openProfile, setOpenProfile] = useState(false);

    window.addEventListener('scroll', () => {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if (scrollTop > 48) {
            setScroll(true);
        }
        else {
            setScroll(false);
        }
    });

    const profile = <ul className='absolute lg:top-14 top-16 lg:right-0 lg:left-auto left-0 lg:w-72 w-full h-auto lg:py-2 bg-white rounded lg:shadow-[3px_5px_10px_5px_rgba(0,0,0,0.1)] overflow-hidden normal-case'>
        <li>
            <NavLink
                to={'/profile/order-history'}
                className='w-full px-10 py-3 text-gray-600 hover:text-blue-600 hover:bg-blue-50 duration-300 flex items-center gap-3'
            >
                <i className="fa-solid fa-tags"></i> Order History
            </NavLink>
        </li>
        <li>
            <button
                onClick={() => {
                    setIsLogout(true)
                }}
                className='w-full px-10 py-3 text-gray-600 hover:text-blue-600 hover:bg-blue-50 duration-300 flex items-center gap-3'
            >
                <i className="fa-solid fa-arrow-right-from-bracket"></i> Logout
            </button>
        </li>
    </ul>;

    return (
        <header className={`w-full ${topNav ? 'h-[76px]' : 'h-[121px]'} text-gray-600`}>
            {/* =====================Top Navigation===================== */}
            {topNav ? '' : <TopNavigation></TopNavigation>}

            {/* =====================Main Navigation===================== */}
            <nav className={`w-full bg-white ${scroll ? 'fixed top-0 left-0 right-0 z-40 shadow-md' : ''}`}>
                <div className='2xl:w-[1200px] xl:w-full mx-auto flex items-center justify-between 2xl:px-0 lg:px-14 sm:px-6 px-3 py-2'>

                    {/* ===========Right Logo=========== */}
                    <div>
                        <Link to={'/'}>
                            <img
                                loading='lazy'
                                className='w-14 h-14'
                                src='/Images/Nav_logo/ecera-logo.png'
                                alt="ecera logo"
                            />
                        </Link>
                    </div>

                    {/* ===========Left Menu items=========== */}
                    {/* <-- Desktop view --> */}
                    <DesktopMenu
                        login={login}
                        isLoggedIn={isLoggedIn}
                        openProfile={openProfile}
                        setOpenProfile={setOpenProfile}
                        profile={profile}
                        isEnlistco={isEnlistco}
                    />

                    {/* <-- Mobile view --> */}
                    <MobileMenu
                        login={login}
                        isLoggedIn={isLoggedIn}
                        openProfile={openProfile}
                        setOpenProfile={setOpenProfile}
                        profile={profile}
                        isEnlistco={isEnlistco}
                    />
                </div>
            </nav>
            <hr />
        </header>
    );
};

export default Header;