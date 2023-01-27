import React from 'react';
import certification1 from '../../../Images/Certification_icons/certification1.png';
import certification2 from '../../../Images/Certification_icons/certification2.png';

const Footer = () => {
    return (<>
        <footer className='w-full bg-[#021D40]'>
            <div className='2xl:w-[1200px] w-11/12 mx-auto'>
                <div className='w-full py-10 grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-2 items-start gap-6'>
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
                                    <a
                                        href="/remote-employees"
                                        className='text-gray-400 text-base hover:underline hover:text-white duration-300'
                                    >
                                        Hire Developers
                                    </a>
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
                            <a
                                className='text-gray-400 text-base hover:underline hover:text-white duration-300'
                                href={'/about'}
                            >
                                About Us
                            </a>
                        </li>
                        <li>
                            <a
                                className='text-gray-400 text-base hover:underline hover:text-white duration-300'
                                href={'/careers'}
                            >
                                Careers
                            </a>
                        </li>
                        <li>
                            <a
                                className='text-gray-400 text-base hover:underline hover:text-white duration-300'
                                href={'/blog'}
                            >
                                Blog
                            </a>
                        </li>
                        <li>
                            <a
                                className='text-gray-400 text-base hover:underline hover:text-white duration-300' href={'/invoice'}
                            >Pay Invoice</a>
                        </li>
                        <li>
                            <a
                                href={'/registration?source=footer'}
                                className='text-gray-400 text-base hover:underline hover:text-white duration-300'
                            >Registration</a>
                        </li>
                    </ul>
                    <ul className='flex flex-col gap-3'>
                        <li>
                            <h2 className='text-gray-100 text-xl font-medium mb-2'>
                                Support
                            </h2>
                        </li>
                        <li>
                            <a
                                href={'/contact'}
                                className='text-gray-400 text-base hover:underline hover:text-white duration-300'
                            >Contact Us</a>
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
                            <a
                                href={'/faq'}
                                className='text-gray-400 text-base hover:underline hover:text-white duration-300'
                            >FAQ</a>
                        </li>
                        <li>
                            <a
                                href="/terms-of-services"
                                className='text-gray-400 text-base hover:underline hover:text-white duration-300'
                            >
                                Terms of Services
                            </a>
                        </li>
                    </ul>
                    <ul className='flex flex-col gap-2'>
                        <li>
                            <h2 className='text-gray-100 text-xl font-medium'>
                                Certification
                            </h2>
                        </li>
                        <li className='flex flex-col sm:items-center gap-5'>
                            <a
                                target={'blank'}
                                href='https://www.dnb.com/'
                                className='sm:w-full w-4/5 h-auto grid md:grid-cols-2 grid-cols-1 items-center md:gap-0 gap-3 text-gray-400 hover:text-gray-50 duration-300'
                            >
                                <h2 className='text-sm font-medium break-words'>D&B Credibility Certified</h2>
                                <img
                                    src={certification1}
                                    alt="D&B Credibility Certified"
                                    className='rounded-md w-[146px] h-[52px]'
                                />
                            </a>
                            <a
                                target={'blank'}
                                href='https://www.e-verify.gov/'
                                className='sm:w-full w-4/5 h-auto grid md:grid-cols-2 grid-cols-1 items-center md:gap-0 gap-3 text-gray-400 hover:text-gray-50 duration-300'
                            >
                                <h2 className='text-sm font-medium'>E- Verified</h2>
                                <img
                                    src={certification2}
                                    alt="E- Verified"
                                    className='rounded-md w-[146px] h-[52px]'
                                />
                            </a>
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
                                target={'blank'}
                                href="/"
                                className='text-xl text-gray-400 hover:text-gray-50 duration-300 cursor-pointer'
                            >
                                <i className="fa-brands fa-twitter"></i>
                            </a>
                        </li>
                        <li>
                            <a
                                // target={'blank'}
                                href="/"
                                className='text-xl text-gray-400 hover:text-gray-50 duration-300 cursor-pointer'
                            >
                                <i className="fa-brands fa-linkedin"></i>
                            </a>
                        </li>
                        <li>
                            <a
                                // target={'blank'}
                                href="/"
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