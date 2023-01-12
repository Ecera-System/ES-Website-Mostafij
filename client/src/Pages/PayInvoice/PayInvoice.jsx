import React, { useEffect, useState } from 'react';
import PageTitle from '../Shared/PageTitle';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';
import stripe from '../../Images/Payment/stripe.png';
import razorpay from '../../Images/Payment/razorpay.png';
import { razorpayApi, stripePayApi } from '../../api/PaymentApi';


const PayInvoice = () => {
    const [nameValidate, setNameValidate] = useState({ name: '', error: '' });
    const [phoneValidate, setPhoneValidate] = useState({ phone: '', error: '' });
    const [emailValidate, setEmailValidate] = useState({ email: '', error: '' });
    const [openForm, setOpenForm] = useState('');
    const [loading, setLoading] = useState(false);
    const [razorpayRes, setRazorpayRes] = useState(null);


    // <-- Razorpay payment verify api -->
    useEffect(() => {
        if (razorpayRes?.razorpay_payment_id) {
            axios.post(`${process.env.REACT_APP_API_V1_URL}/payment/razorpay-verify`, razorpayRes)
                .then(res => { })
                .catch(err => { })
        }
    }, [razorpayRes]);


    // <--  Payment -->
    const contactDetails = async (e) => {
        e.preventDefault();
        if (nameValidate.name.match(/^\s*$/)) {
            return setNameValidate({
                ...nameValidate, error: 'Full name is required'
            });
        }
        else if (!phoneValidate.phone.match(/^-?\d+\.?\d*$/)) {
            return setPhoneValidate({
                ...phoneValidate, error: 'Phone number is required'
            });
        }
        else if (!emailValidate.email.match(/^[\w-]+@([\w-]+\.)+[\w-]{2,6}$/)) {
            return setEmailValidate({
                ...emailValidate, error: 'Please enter a valid email address.'
            });
        }
        // <-- Stirpe payment api -->
        else if (openForm === 'stripe') {
            setLoading(true);
            await stripePayApi({
                userName: nameValidate.name,
                userEmail: emailValidate.email,
                phoneNumber: phoneValidate.phone,
                serviceName: 'Web Design and Services',
                amount: 2000 * 100,
                currency: 'USD',
                quantity: 1,
                source: 'Pay Invoice',
                paymentMethod: 'Stripe',
                path: '/invoice',
            })
        }

        // <-- Razorpay payment api -->
        else if (openForm === 'razorpay') {
            setLoading(true);
            await razorpayApi({
                userName: nameValidate.name,
                userEmail: emailValidate.email,
                phoneNumber: phoneValidate.phone,
                serviceName: 'Web Design and Services',
                amount: 2000 * 100,
                currency: 'USD',
                quantity: 1,
                source: 'Pay Invoice',
                paymentMethod: 'Razorpay',
                path: '/invoice',
            }, setRazorpayRes);
        };

        setLoading(false);
        setOpenForm('');
    };

    return (<>
        <PageTitle title='Invoice Payment for Web Design and Services - ES'></PageTitle>
        <Header></Header>
        <section className='text-center bg-gradient-to-r from-violet-700 to-blue-600'>
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
        <section className='h-full w-full py-16 flex items-center justify-center'>
            <div className='md:w-[40rem] sm:w-4/5 w-11/12 mx-auto py-32 px-10 border flex md:flex-row flex-col items-center justify-center md:gap-12 gap-6 relative rounded-2xl'>
                <div className='w-full'>
                    <img src={stripe} alt="Stripe logo" className='w-auto mx-auto h-20' />
                    <button
                        onClick={() => setOpenForm('stripe')}
                        disabled={loading}
                        className='text-lg font-medium py-3 w-full md:mt-3 rounded text-white bg-blue-600 hover:bg-blue-700 duration-300'
                    >
                        Pay with Stripe
                    </button>
                </div>
                <div className='w-full'>
                    <img src={razorpay} alt="Razorpay logo" className='w-auto mx-auto h-20' />
                    <button
                        disabled={loading}
                        onClick={() => setOpenForm('razorpay')}
                        className='text-lg font-medium py-3 w-full md:mt-3 rounded text-white bg-blue-600 hover:bg-blue-700 duration-300'
                    >
                        Pay with Razorpay
                    </button>
                </div>
            </div>
        </section>
        <Footer></Footer>

        <div className={`fixed inset-0 z-50 bg-black/60 flex items-center justify-center duration-200 ${openForm ? 'scale-100' : 'scale-0'}`}>
            <form
                onSubmit={contactDetails}
                className='sm:w-[32rem] w-11/12 mx-auto px-8 py-10 sm:p-14 bg-white border rounded-3xl text-base leading-6 flex flex-col gap-6 text-gray-600 sm:text-lg sm:leading-7 relative'
            >
                <button onClick={() => setOpenForm('')} className='absolute top-5 right-7 text-3xl text-gray-500 hover:text-gray-600'>
                    <i className="fa-solid fa-xmark"></i>
                </button>
                <h1 className="md:text-4xl text-2xl pb-5 font-semibold text-gray-700">Please fill out this</h1>
                <div className="relative">
                    <input
                        onChange={(e) => {
                            e.target.value.match(/^\s*$/) ?
                                setNameValidate({
                                    ...nameValidate, name: e.target.value, error: 'Full name is required'
                                }) :
                                setNameValidate({
                                    ...nameValidate, name: e.target.value, error: ''
                                })
                        }}
                        autoComplete="off"
                        id="name" name="name" type="text"
                        className={`peer placeholder-transparent h-10 w-full border-b-2 focus:outline-none ${nameValidate?.error ? 'border-red-600 focus:border-red-600' : 'border-gray-200 focus:border-blue-600'}`}
                        placeholder="Full Name"
                    />
                    <label
                        htmlFor="name"
                        className="absolute left-0 -top-4 text-gray-500 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 transition-all peer-focus:-top-4 peer-focus:text-gray-500 peer-focus:text-sm"
                    >Full Name*</label>
                    {
                        nameValidate?.error &&
                        <p className='mt-1 text-sm text-red-600'>
                            <i className="fa-solid fa-triangle-exclamation mr-1"></i> {nameValidate?.error}
                        </p>
                    }
                </div>
                <div className="relative">
                    <input
                        onChange={(e) => {
                            e.target.value.match(/^-?\d+\.?\d*$/) ?
                                setPhoneValidate({
                                    ...phoneValidate, phone: e.target.value, error: ''
                                }) :
                                setPhoneValidate({
                                    ...phoneValidate, phone: e.target.value, error: 'Phone number is required'
                                })
                        }}
                        className={`peer placeholder-transparent h-10 w-full border-b-2 focus:outline-none ${phoneValidate?.error ? 'border-red-600 focus:border-red-600' : 'border-gray-200 focus:border-blue-600'}`}
                        autoComplete="off"
                        id="phone" name="phone" type="tel"
                        placeholder="Phone Number"
                    />
                    <label
                        htmlFor="phone"
                        className="absolute left-0 -top-4 text-gray-500 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 transition-all peer-focus:-top-4 peer-focus:text-gray-500 peer-focus:text-sm"
                    >Phone Number*</label>
                    {
                        phoneValidate?.error &&
                        <p className='mt-1 text-sm text-red-600'>
                            <i className="fa-solid fa-triangle-exclamation mr-1"></i> {phoneValidate?.error}
                        </p>
                    }
                </div>
                <div className="relative">
                    <input
                        onChange={(e) => {
                            e.target.value.match(/^[\w-]+@([\w-]+\.)+[\w-]{2,6}$/) ?
                                setEmailValidate({
                                    ...emailValidate, email: e.target.value, error: ''
                                }) :
                                setEmailValidate({
                                    ...emailValidate, email: e.target.value, error: 'Please enter a valid email address.'
                                })
                        }}
                        className={`peer placeholder-transparent h-10 w-full border-b-2 focus:outline-none ${emailValidate?.error ? 'border-red-600 focus:border-red-600' : 'border-gray-200 focus:border-blue-600'}`}
                        autoComplete="off"
                        id="email" name="email" type="email"
                        placeholder="Email address"
                    />
                    <label
                        htmlFor="email"
                        className="absolute left-0 -top-4 text-gray-500 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 transition-all peer-focus:-top-4 peer-focus:text-gray-500 peer-focus:text-sm"
                    >Email Address*</label>
                    {
                        emailValidate?.error &&
                        <p className='mt-1 text-sm text-red-600'>
                            <i className="fa-solid fa-triangle-exclamation mr-1"></i> {emailValidate?.error}
                        </p>
                    }
                </div>
                <div className=''>
                    <button
                        disabled={loading}
                        type='submit'
                        className="bg-blue-600 hover:bg-blue-700 duration-300 text-lg font-medium text-white rounded-md w-full py-2"
                    >
                        {loading ? 'Loading...' : 'Submit'}
                    </button>
                </div>
            </form>
        </div>
    </>);
};

export default PayInvoice;