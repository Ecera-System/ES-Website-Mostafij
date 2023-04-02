import React from 'react';
import ContactSideButton from '../Shared/ContactSideButton/ContactSideButton';
import Header from '../Shared/Header/Header';
import PageTitle from '../Shared/PageTitle';
import Footer from '../Shared/Footer/Footer';

const EmployeeBenefits = () => {
    return (<>
        <PageTitle title='Employee Benefits'></PageTitle>
        <Header />
        <ContactSideButton />
        <section
            style={{ backgroundImage: `url(/Images/packages-bg.jpg)` }}
            className='w-full md:py-36 py-28 bg-no-repeat bg-center bg-cover'
        >
            <div className='w-11/12 mx-auto h-full flex items-center justify-center text-center'>
                <div>
                    <h1 className='md:text-5xl text-3xl font-semibold text-white uppercase'>
                        Employee Benefits
                    </h1>
                </div>
            </div>
        </section>
        <section className='2xl:w-[1100px] lg:w-4/5 w-11/12 mx-auto py-14 flex md:flex-row flex-col items-start md:gap-0 gap-10'>
            <div className='md:w-2/6 w-full'>
                <div className='w-max'>
                    <h2 className='text-3xl font-medium text-blue-600'>
                        Quick Links
                        <i className="fa-solid fa-link ml-2"></i>
                    </h2>
                    <div className='w-full h-0.5 bg-gray-200 my-5' />
                    <ul className='flex flex-col gap-3 text-base font-medium text-gray-500'>
                        <li>
                            <a
                                href="/career-overview"
                                className='duration-300 hover:text-blue-600'
                            >
                                <span className='w-3 h-3 rounded-full bg-gradient-to-r from-blue-600 to-cyan-400 inline-block mt-2 mr-2' />
                                Career Overview
                            </a>
                        </li>
                        <li>
                            <a
                                href="/employee-benefits"
                                className='text-blue-600'
                            >
                                <span className='w-3 h-3 rounded-full bg-gradient-to-r from-blue-600 to-cyan-400 inline-block mt-2 mr-2' />
                                Employee Benefit
                            </a>
                        </li>
                        <li>
                            <a
                                href="/immigration"
                                className='duration-300 hover:text-blue-600'
                            >
                                <span className='w-3 h-3 rounded-full bg-gradient-to-r from-blue-600 to-cyan-400 inline-block mt-2 mr-2' />
                                Immigration
                            </a>
                        </li>
                        <li>
                            <a
                                href="/careers"
                                className='duration-300 hover:text-blue-600'
                            >
                                <span className='w-3 h-3 rounded-full bg-gradient-to-r from-blue-600 to-cyan-400 inline-block mt-2 mr-2' />
                                Current-Opening
                            </a>
                        </li>
                        <li>
                            <a
                                href="/about"
                                className='duration-300 hover:text-blue-600'
                            >
                                <span className='w-3 h-3 rounded-full bg-gradient-to-r from-blue-600 to-cyan-400 inline-block mt-2 mr-2' />
                                Join-Us
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='md:w-4/6 w-full'>
                <h1 className='text-4xl font-medium text-blue-600'>
                    Employee Benefits
                </h1>
                <p className='text-lg font-medium text-gray-500 my-5'>
                    We constantly review and add new programs to benefit our employees.
                </p>
                <h4 className='text-2xl text-gray-500'>
                    Our employee benefits programs
                </h4>
                <div className='my-6'>
                    <h5 className='text-lg font-medium text-gray-500 mb-2'>
                        Health & Dental Insurance
                    </h5>
                    <p className='text-base text-gray-500'>
                        Ecera System offer health and dental benefits for employees and their dependents in US. We offer a medical PPO plan. Our plan provides access to a large group of medical facilities and doctors across the United States. Please contact Ecera System’ HR Department for details.
                    </p>
                </div>
                <div className='my-6'>
                    <h5 className='text-lg font-medium text-gray-500 mb-2'>
                        Flexible Spending Account (FSA)
                    </h5>
                    <p className='text-base text-gray-500'>
                        A flexible spending account (FSA) is a tax-advantaged financial account allow employees to set aside a portion of earnings to pay for qualified expenses as per the FSA Guidelines for medical and dependent care expenses. Money deducted from an employee's pay into an FSA is not subject to payroll taxes, resulting in substantial payroll tax savings. Please contact Ecera System’ HR Department for details.
                    </p>
                </div>
                <div className='my-6'>
                    <h5 className='text-lg font-medium text-gray-500 mb-2'>
                        Retirement Planning – 401(K) Plan
                    </h5>
                    <p className='text-base text-gray-500'>
                        We offer a 401(k) plan to all our employees. The 401(k) plan is a type of employer-sponsored retirement plan in the United States and named after a section of the U.S. Internal Revenue Code. A 401(k) plan allows employees to save for retirement while deferring income taxes on the saved money or earnings until withdrawal. The employee elects to have a portion of his or her wage paid directly, or "deferred", into his or her 401(k) account. In participant-directed plans (the most common option), the employee can select from a number of investment options, usually an assortment of mutual funds that emphasize stocks, bonds, money market investments, or some mix of the above. The employee can generally re-allocate money among these investment choices at any time. Contact Ecera System HR Department for details.
                    </p>
                </div>
                <div className='my-6'>
                    <h5 className='text-lg font-medium text-gray-500 mb-2'>
                        Employee Bonus Referral Program
                    </h5>
                    <p className='text-base text-gray-500'>
                        Any employee on Ecera System Inc. payroll can participate with the exception of Ecera System executive staff, employees in the Human Resources Department, and direct or indirect supervisors of the designated job opening or any employee involved in the hiring process. Any full or part-time position that has been posted on the Ecera System website is bonus eligible for $500 - $1000 depending upon the position. Referral should complete an Employee Referral Bonus Form and submit it with the application for employment (this can be done as late as the new employee's first day of work). Only candidates referred from external sources qualify for the bonus. Anyone who has worked for Ecera System within the past 12 months does not qualify as bonus eligible candidates. This includes regular, student, as well as employees working at Ecera System through a temporary agency or as an independent consultant. You will receive bonus after the employee has worked for 90 consecutive business days with Ecera System. Both you and the new employee must be employed by Ecera System at the time of the bonus payment.
                    </p>
                </div>
            </div>
        </section>
        <Footer></Footer>
    </>);
};

export default EmployeeBenefits;