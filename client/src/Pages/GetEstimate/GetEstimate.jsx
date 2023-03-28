import React, { useState } from 'react';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';
import PageTitle from '../Shared/PageTitle';

const GetEstimate = () => {
    window.scrollTo(0, 0)
    const [error, setError] = useState({ file: false, requiredServices: false });

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     const firstName = e.target.firstName.value;
    //     const lastName = e.target.lastName.value;
    //     const email = e.target.email.value;
    //     const contactNumber = e.target.cNumber.value;
    //     const skypeWhatsApp = e.target.skypeWhatsApp.value;
    //     const approximateBudget = e.target.approximateBudget.value;
    //     const webDevelopment = e.target.webDevelopment.checked;
    //     const digitalMarketing = e.target.digitalMarketing.checked;
    //     const mobileAppDevelopment = e.target.mobileAppDevelopment.checked;
    //     const remoteEmployees = e.target.remoteEmployees.checked;
    //     const ITStaffingSolutions = e.target.ITStaffingSolutions.checked;
    //     const projectDetails = e.target.projectDetails.value || '';
    //     const documentFile = e.target.documentFile.files[0] || '';

    //     const requiredServices = !(webDevelopment || digitalMarketing || mobileAppDevelopment || remoteEmployees || ITStaffingSolutions) ? '' : {
    //         webDevelopment,
    //         digitalMarketing,
    //         mobileAppDevelopment,
    //         remoteEmployees,
    //         ITStaffingSolutions,
    //     }
    //     if (!requiredServices) return (
    //         document
    //             .querySelector('#requiredServices')
    //             ?.scrollIntoView({ block: "center", behavior: "smooth" }),
    //         setError({ ...error, requiredServices: true })
    //     )

    //     if (documentFile) {
    //         if (
    //             !(documentFile.type === "application/pdf" ||
    //                 documentFile.type === "image/jpeg" ||
    //                 documentFile.type === "image/jpg" ||
    //                 documentFile.type === "image/png" ||
    //                 documentFile.type === "image/svg+xml")
    //         ) return setError({ ...error, file: true });
    //     };

    //     localStorage.setItem('getEstimate', JSON.stringify({
    //         firstName,
    //         lastName,
    //         email,
    //         contactNumber,
    //         skypeWhatsApp,
    //         approximateBudget,
    //         requiredServices,
    //         projectDetails,
    //         documentFile,
    //     }))

    // };

    return (<>
        <PageTitle title='Get Estimate' />
        <Header></Header>
        {/* <section className='w-full'>
            <div className='xl:w-3/5 lg:w-3/4 md:w-[90%] sm:w-11/12 w-[98%] border-2 rounded-lg md:p-8 p-5 mx-auto mt-10 mb-20'>
                <h1 className='text-center text-3xl font-semibold text-gray-600'>Fill The Details</h1>
                <form onSubmit={handleSubmit}>
                    <div className='w-full grid md:grid-cols-2 grid-cols-1 gap-5 md:mt-8 mt-5'>
                        <label htmlFor="firstName">
                            <span className='font-medium text-gray-500'>First Name *</span>
                            <input
                                className='w-full mt-2 px-4 py-[10px] rounded-md text-base bg-gray-100 text-gray-500 outline-blue-800'
                                type="text"
                                id="firstName" required
                                placeholder='Enter your first name'
                            />
                        </label>
                        <label htmlFor="lastName">
                            <span className='font-medium text-gray-500'>Last Name *</span>
                            <input
                                className='w-full mt-2 px-4 py-[10px] rounded-md text-base bg-gray-100 text-gray-500 outline-blue-800'
                                type="text"
                                id="lastName" required
                                placeholder='Enter your last name'
                            />
                        </label>
                    </div>
                    <div className='w-full grid md:grid-cols-2 grid-cols-1 gap-5 md:mt-8 mt-5'>
                        <label htmlFor="email">
                            <span className='font-medium text-gray-500'>Email Address *</span>
                            <input
                                className='w-full mt-2 px-4 py-[10px] rounded-md text-base bg-gray-100  text-gray-500 outline-blue-800'
                                type="email"
                                id="email" required
                                placeholder='Enter your email'
                            />
                        </label>
                        <label htmlFor="cNumber">
                            <span className='font-medium text-gray-500'>Contact Number *</span>
                            <input
                                className='w-full mt-2 px-4 py-[10px] rounded-md text-base bg-gray-100 text-gray-500 outline-blue-800'
                                type="number"
                                id="cNumber" required
                                placeholder='Enter your Contact Number'
                            />
                        </label>
                    </div>
                    <div className='w-full grid md:grid-cols-2 grid-cols-1 gap-5 md:mt-8 mt-5'>
                        <label htmlFor="skypeWhatsApp">
                            <span className='font-medium text-gray-500'>
                                Skype ID / WhatsApp Number / other *
                            </span>
                            <input
                                className='w-full mt-2 px-4 py-[10px] rounded-md text-base bg-gray-100 text-gray-500 outline-blue-800'
                                type="text"
                                id="skypeWhatsApp" required
                                placeholder='Skype ID / WhatsApp Number / other'
                            />
                        </label>
                        <label htmlFor="approximateBudget">
                            <span className='font-medium text-gray-500'>Approximate Budget *</span>
                            <select
                                id='approximateBudget' required
                                className='w-full mt-2 px-4 py-[10px] rounded-md text-base bg-gray-100 outline-blue-800 text-gray-500'
                            >
                                <option value="">Select type</option>
                                <option value="Less than $10000">Less than $10000</option>
                                <option value="$10000 - $25000">$10000 - $25000</option>
                                <option value="$25000 - $50000">$25000 - $50000</option>
                                <option value="$50000+">$50000+</option>
                                <option value="Negotiable">Negotiable</option>
                            </select>
                        </label>
                    </div>
                    <div className='w-full mt-8' id='requiredServices'>
                        <span className={`font-medium ${error.requiredServices ? 'text-red-500' : 'text-gray-500'}`}>
                            Choose Required Services *
                        </span>
                        <div className='flex flex-col gap-y-2 mt-3 ml-4'>
                            <label
                                className='w-max flex items-center gap-x-2 text-base cursor-pointer text-gray-500'
                                htmlFor="webDevelopment"
                            >
                                <input
                                    id='webDevelopment'
                                    type="checkbox"
                                />
                                Web Development
                            </label>
                            <label
                                className='w-max flex items-center gap-x-2 text-base cursor-pointer text-gray-500'
                                htmlFor="digitalMarketing"
                            >
                                <input
                                    id='digitalMarketing'
                                    type="checkbox"
                                />
                                Digital Marketing
                            </label>
                            <label
                                className='w-max flex items-center gap-x-2 text-base cursor-pointer text-gray-500'
                                htmlFor="mobileAppDevelopment"
                            >
                                <input
                                    id='mobileAppDevelopment'
                                    type="checkbox"
                                />
                                Mobile App Development
                            </label>
                            <label
                                className='w-max flex items-center gap-x-2 text-base cursor-pointer text-gray-500'
                                htmlFor="remoteEmployees"
                            >
                                <input
                                    id='remoteEmployees'
                                    type="checkbox"
                                />
                                Remote Employees
                            </label>
                            <label
                                className='w-max flex items-center gap-x-2 text-base cursor-pointer text-gray-500'
                                htmlFor="ITStaffingSolutions"
                            >
                                <input
                                    id='ITStaffingSolutions'
                                    type="checkbox"
                                />
                                IT Staffing Solutions
                            </label>
                        </div>
                    </div>
                    <div className='w-full mt-8'>
                        <label htmlFor="projectDetails">
                            <span className='font-medium text-gray-500'>
                                Project Details
                            </span>
                            <textarea
                                id="projectDetails"
                                className='w-full mt-2 px-4 py-[10px] rounded-md text-base bg-gray-100 text-gray-500 outline-blue-800'
                                placeholder='Write your project details here...'
                                cols="" rows="6"
                            ></textarea>
                        </label>
                    </div>
                    <div className='w-full mt-8'>
                        <label htmlFor="documentFile">
                            <span className='font-medium text-gray-500'>
                                Upload a Document
                                <span className='ml-2 font-normal'>(Optional)</span>
                            </span>
                            <input
                                type="file"
                                id="documentFile"
                                className={`w-full mt-2 px-4 py-[10px] rounded-md text-base bg-gray-100 text-gray-500 ${error.file ? 'border-2 border-red-600' : ''}`}
                            />
                        </label>
                        <p className={`text-sm mt-2 ${error.file ? 'text-red-600 ' : ' text-gray-500'}`}>
                            ** Only pdf,jpg,jpeg,svg files are allowed
                        </p>
                    </div>
                    <div className='w-full mt-8'>
                        <button
                            type='submit'
                            className='w-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-cyan-500 hover:to-blue-600 text-white text-lg font-medium tracking-wide py-3 rounded-lg'
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </section> */}
        <section
            className='pb-20 pt-44 lg:mt-10 bg-no-repeat bg-cover'
            style={{ backgroundImage: `url(/Images/hp-img-closer-bg.png)` }}
        >
            <div className='2xl:w-[1200px] xl:w-4/5 lg:w-11/12 md:w-4/5 w-11/12 mx-auto flex lg:flex-row flex-col-reverse justify-between'>
                <div className='lg:w-1/2 w-full lg:text-start text-center'>
                    <h2 className='text-4xl text-blue-900'>
                        Questions? We'll put you on the right path.
                    </h2>
                    <p className='text-base text-gray-500 my-5'>
                        Ask about Ecera System products, pricing, implementation, or anything else. Our highly trained reps are standing by, ready to help.
                    </p>
                    <p className='text-lg font-medium text-gray-700'>
                        Please write to -
                        <a href="mailto:sales@ecerasystem.com" className='ml-2'>
                            sales@ecerasystem.com
                        </a>
                    </p>
                </div>
                <div className='lg:w-1/2 w-full'>
                    <img loading='lazy' src='/Images/qna.png' alt="" className='max-w-full max-h-full mx-auto' />
                </div>
            </div>
        </section>
        <Footer></Footer>
    </>);
};

export default GetEstimate;