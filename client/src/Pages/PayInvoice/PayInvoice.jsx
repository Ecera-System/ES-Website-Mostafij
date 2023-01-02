import React, { useState } from 'react';
import PageTitle from '../Shared/PageTitle';
import { Link } from 'react-router-dom';
import eceraLogo from '../../Images/Nav_logo/ecera-logo.png';
import Footer from '../Shared/Footer/Footer';

const PayInvoice = () => {
    const [scroll, setScroll] = useState(false);
    const [openMenu, setOpenMenu] = useState(false);

    window.addEventListener('scroll', () => {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if (scrollTop > 10) {
            setScroll(true);
        }
        else {
            setScroll(false);
        }
    });

    return (<>
        <PageTitle title='Invoice Payment for Web Design and Services - ES'></PageTitle>
        <section className='text-center bg-gradient-to-r from-violet-700 to-blue-600'>
            <header className='w-full h-[72px] text-gray-600'>
                <nav className={`w-full flex items-center justify-between lg:px-14 px-5 py-2 duration-200 ease-out fixed left-0 top-0 z-50 ${scroll ? 'bg-white shadow-md' : 'bg-transparent text-gray-50'}`}>
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

                    {/* ========================Left Menu items======================== */}
                    {/* ===========Desktop view=========== */}
                    <ul className='hidden lg:flex items-center gap-x-8 text-base font-medium'>
                        {/* <li className={`py-4 cursor-pointer duration-300 relative group/services ${scroll ? 'hover:text-blue-600' : 'hover:text-blue-400'}`}>
                            MERN
                        </li>
                        <li className={`py-4 cursor-pointer duration-300 relative group/packages ${scroll ? 'hover:text-blue-600' : 'hover:text-blue-400'}`}>
                            H1B visa process
                        </li>
                        <li className={`py-4 cursor-pointer duration-300 relative group/packages ${scroll ? 'hover:text-blue-600' : 'hover:text-blue-400'}`}>
                            Invoice Payment for Web Design ans services
                        </li> */}
                        <li className=''>
                            <Link
                                to='#'
                                className={`${scroll ? 'py-3 px-6 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-cyan-500 hover:to-blue-600 text-white' : 'py-[10px] px-[22px] border-2 box-border border-white'} text-base rounded-lg `}
                            >
                                Login
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
                    <aside className={`lg:hidden w-full h-full fixed top-0 ${openMenu ? 'right-0' : '-right-[1024px]'} z-50 duration-300 ease-linear bg-black/50`}>
                        <ul className='sm:w-[420px] w-[90%] h-full absolute top-0 right-0 bg-white flex flex-col items-start font-medium'>
                            <li className='px-10 py-3'>
                                <button
                                    className='text-3xl text-gray-500 hover:text-gray-700 duration-300'

                                    onClick={() => setOpenMenu(!openMenu)}
                                >
                                    <i className="fa-solid fa-xmark"></i>
                                </button>
                            </li>
                            {/* <li className='w-full text-start normal-case cursor-pointer px-10 py-3 text-gray-600 hover:text-blue-600 hover:bg-blue-50 duration-300'>
                                <a
                                    href='#'
                                    className='w-full h-full'
                                >
                                    MERN
                                </a>
                            </li>
                            <li className='w-full text-start normal-case cursor-pointer px-10 py-3 text-gray-600 hover:text-blue-600 hover:bg-blue-50 duration-300'>
                                <a
                                    href='#'
                                    className='w-full h-full'
                                >
                                    H1B visa process
                                </a>
                            </li>
                            <li className='w-full text-start normal-case cursor-pointer px-10 py-3 text-gray-600 hover:text-blue-600 hover:bg-blue-50 duration-300'>
                                <a
                                    href='#'
                                    className='w-full h-full'
                                >
                                    Invoice Payment for Web Design ans services
                                </a>
                            </li> */}
                            <li className='w-full h-full px-10'>
                                <a
                                    href='#'
                                    className='inline-block w-full rounded-lg normal-case cursor-pointer py-3 my-2 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-cyan-500 hover:to-blue-600 text-white text-base duration-300'
                                >
                                    Login
                                </a>
                            </li>
                        </ul>
                    </aside>
                </nav>
            </header>
            <div className='md:py-32 py-20 md:w-3/4 w-4/5 mx-auto'>
                <h1 className='md:text-6xl text-3xl text-center text-white'>
                    Invoice Payment for Web Design and Services
                </h1>
                <p className='text-gray-400 text-base pt-10 pb-5'>
                    <Link className='hover:text-gray-200 duration-300 mr-2' to='/'>Home</Link>
                    /<span className='text-gray-100 ml-2'>Invoice Payment for Web Design and Services</span>
                </p>
            </div>
        </section>
        <section className='py-16'>
            <div className='xl:w-3/5 lg:w-4/5 md:w-11/12 w-64 mx-auto grid md:grid-cols-4 grid-cols-1 md:gap-10 gap-5'>
                <button
                    className='text-base font-medium py-2 w-full rounded text-white bg-[#1DBF73] hover:bg-[#19A463] duration-300'
                >
                    Payment (USD)
                </button>
                <button
                    className='text-base font-medium py-2 w-full rounded text-white bg-[#1DBF73] hover:bg-[#19A463] duration-300'
                >
                    Payment (USA)
                </button>
                <button
                    className='text-base font-medium py-2 w-full rounded text-white bg-[#1DBF73] hover:bg-[#19A463] duration-300'
                >
                    Payment (INDIA)
                </button>
                <button
                    className='text-base font-medium py-2 w-full rounded text-white bg-[#1DBF73] hover:bg-[#19A463] duration-300'
                >
                    Pay in USD
                </button>
            </div>
        </section>
        <Footer></Footer>
    </>);
};

export default PayInvoice;