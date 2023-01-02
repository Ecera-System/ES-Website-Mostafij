import React from 'react';
import certification1 from '../../../Images/Certification_icons/certification1.png';
import certification2 from '../../../Images/Certification_icons/certification2.png';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (<>
        {/* <div className='w-full bg-[#0F5996]'>
            <ul className='list-none w-full flex items-center justify-center flex-wrap gap-x-10 gap-y-5 text-gray-200 p-5'>
                <li className='hover:underline duration-300'>
                    <Link to={'/about'}>About Us</Link>
                </li>
                <li className='hover:underline duration-300'>
                    <Link to={'/contact'}>Contact Us</Link>
                </li>
                <li className='hover:underline duration-300'>
                    <Link to={'/careers'}>Careers</Link>
                </li>
                <li className='hover:underline duration-300'>
                    <Link to={'/blog'}>Blog</Link>
                </li>
                <li className='hover:underline duration-300'>
                    <Link to={'/invoice'}>Pay Invoice</Link>
                </li>
                <li className='hover:underline duration-300'>
                    <Link to={'faq'}>FAQ</Link>
                </li>
                <li className='hover:underline duration-300'>
                    <Link to={'trainings'}>Trainings</Link>
                </li>
            </ul>
        </div> */}
        <footer className='w-full bg-[#021D40]'>
            <div className='w-11/12 mx-auto'>
                <div className='w-full py-10 grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-2 items-start gap-6'>
                    {/* <ul className='flex flex-col gap-5'>
                        <li className='flex gap-x-3 items-center'>
                            <img className='w-8 h-8' src={logo} alt="" />
                            <h1 className='text-gray-100 text-2xl font-semibold'>
                                Ecera System
                            </h1>
                        </li>
                        <li>
                            <h4 className='text-gray-100 text-lg font-medium'>Address:</h4>
                            <p className='text-base text-gray-400 ml-2'>
                                33405 Colony Park Drive Farmington Hills MI 48331
                            </p>
                        </li>
                        <li>
                            <h4 className='text-gray-100 text-lg font-medium'>Email:</h4>
                            <p className='text-base text-gray-400 ml-2'>
                                sales@ecerasystem.com
                            </p>
                        </li>
                    </ul> */}
                    <ul className='flex flex-col gap-14'>
                        <li>
                            <ul className='flex flex-col gap-5'>
                                <li>
                                    <h2 className='text-gray-100 text-xl font-medium'>
                                        Learning Program
                                    </h2>
                                </li>
                                <li>
                                    <a
                                        href="https://ecerasystem.com/training/" target={'blank'}
                                        className='text-gray-400 text-base hover:underline hover:text-white duration-300'
                                    >
                                        MERN Stack
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <ul className='flex flex-col gap-3'>
                                <li>
                                    <h2 className='text-gray-100 text-xl font-medium mb-2'>
                                        For Business
                                    </h2>
                                </li>
                                <li>
                                    <Link
                                        to="/remote-employees"
                                        className='text-gray-400 text-base hover:underline hover:text-white duration-300'
                                    >
                                        Hire Developers
                                    </Link>
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <ul className='flex flex-col gap-3'>
                        <li>
                            <h2 className='text-gray-100 text-xl font-medium mb-2'>
                                Ecera System
                            </h2>
                        </li>
                        <li>
                            <Link
                                className='text-gray-400 text-base hover:underline hover:text-white duration-300'
                                to={'/about'}
                            >
                                About Us
                            </Link>
                        </li>
                        <li>
                            <Link
                                className='text-gray-400 text-base hover:underline hover:text-white duration-300'
                                to={'/careers'}
                            >
                                Careers
                            </Link>
                        </li>
                        <li>
                            <Link
                                className='text-gray-400 text-base hover:underline hover:text-white duration-300'
                                to={'/blog'}
                            >
                                Blog
                            </Link>
                        </li>
                        <li>
                            <Link
                                className='text-gray-400 text-base hover:underline hover:text-white duration-300' to={'/invoice'}
                            >Pay Invoice</Link>
                        </li>
                        <li>
                            <Link
                                className='text-gray-400 text-base hover:underline hover:text-white duration-300'
                                to={'/trainings'}
                            >Trainings</Link>
                        </li>
                    </ul>
                    <ul className='flex flex-col gap-3'>
                        <li>
                            <h2 className='text-gray-100 text-xl font-medium mb-2'>
                                Support
                            </h2>
                        </li>
                        <li>
                            <Link
                                to={'/contact'}
                                className='text-gray-400 text-base hover:underline hover:text-white duration-300'
                            >Contact Us</Link>
                        </li>
                        <li>
                            <a href="/" className='text-gray-400 text-base hover:underline hover:text-white duration-300'>
                                Privacy Policy
                            </a>
                        </li>
                        <li>
                            <a href="/" className='text-gray-400 text-base hover:underline hover:text-white duration-300'>
                                Cookies Policy
                            </a>
                        </li>
                        <li>
                            <Link
                                to={'faq'}
                                className='text-gray-400 text-base hover:underline hover:text-white duration-300'
                            >FAQ</Link>
                        </li>
                        <li>
                            <Link
                                to="/terms-of-services"
                                className='text-gray-400 text-base hover:underline hover:text-white duration-300'
                            >
                                Terms of Services
                            </Link>
                        </li>
                    </ul>
                    <ul className='flex flex-col gap-2'>
                        <li>
                            <h2 className='text-gray-100 text-xl font-medium'>
                                Certification
                            </h2>
                        </li>
                        <li className='flex sm:flex-row flex-col sm:items-center gap-3'>
                            <img src={certification1} alt="certification" className='sm:w-2/5 w-4/5 h-auto rounded-md' />
                            {/* <img src={certification3} alt="certification" className='w-1/3 h-auto' /> */}
                            <img src={certification2} alt="certification" className='sm:w-2/5 w-4/5 h-auto rounded-md' />
                        </li>
                    </ul>
                </div>
                <hr />
                <div className='py-5 flex sm:flex-row flex-col-reverse justify-between items-center gap-2'>
                    <div>
                        <p className='text-sm text-gray-400'>&copy; {new Date().getFullYear()} Ecera System™. All Rights Reserved.</p>
                    </div>
                    <ul className='flex items-center gap-x-6'>
                        <li>
                            <a
                                target={'blank'}
                                href="https://www.facebook.com/ecerasystem/"
                                className='text-xl text-gray-400 hover:text-gray-50 duration-300 cursor-pointer'
                            >
                                <i className="fa-brands fa-facebook"></i>
                            </a>
                        </li>
                        <li>
                            <a
                                target={'blank'}
                                href="https://www.instagram.com/ecerasystem/"
                                className='text-xl text-gray-400 hover:text-gray-50 duration-300 cursor-pointer'
                            >
                                <i className="fa-brands fa-instagram"></i>
                            </a>
                        </li>
                        <li>
                            <a
                                href="/"
                                className='text-xl text-gray-400 hover:text-gray-50 duration-300 cursor-pointer'
                            >
                                <i className="fa-brands fa-twitter"></i>
                            </a>
                        </li>
                        <li>
                            <a
                                target={'blank'}
                                href="https://github.com/Ecera-System"
                                className='text-xl text-gray-400 hover:text-gray-50 duration-300 cursor-pointer'
                            >
                                <i className="fa-brands fa-github"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    </>);
};

export default Footer;