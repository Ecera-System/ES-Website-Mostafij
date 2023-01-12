import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Navigate, useLocation } from 'react-router-dom';
import stripe from '../../../Images/Payment/stripe.png';
import razorpay from '../../../Images/Payment/razorpay.png';
import useLoggedIn from '../../../AuthHook/useLoggedIn';
import { razorpayApi, stripePayApi } from '../../../api/PaymentApi';
import useGetUser from '../../../api/useGetUser';


const PaymentButton = ({ openPayBtn, setOpenPayBtn }) => {
    const [isLoggedIn] = useLoggedIn();
    const location = useLocation();
    const [loading, setLoading] = useState('');
    const [razorpayRes, setRazorpayRes] = useState(null);
    const [userData] = useGetUser();

    // <-- Razorpay payment verify api -->
    useEffect(() => {
        if (razorpayRes?.razorpay_payment_id) {
            axios.post(`${process.env.REACT_APP_API_V1_URL}/payment/razorpay-verify`, razorpayRes)
                .then(res => { })
                .catch(err => { })
        }
    }, [razorpayRes]);

    if (openPayBtn && !isLoggedIn) {
        return <Navigate to="/login" state={{ from: location }} replace />
    };


    // <-- Stripe Button -->
    const stripePayButton = async () => {
        setLoading('stripe');
        await stripePayApi({
            ...openPayBtn,
            userName: userData.name,
            userEmail: userData.email,
            phoneNumber: userData.phoneNumber,
            amount: openPayBtn.amount * 100,
            paymentMethod: 'Stripe',
        });
        setLoading('');
        setOpenPayBtn('');
    };


    // <-- Razorpay Button -->
    const razorpayButton = async () => {
        setLoading('razorpay');
        await razorpayApi({
            ...openPayBtn,
            userName: userData.name,
            userEmail: userData.email,
            phoneNumber: userData.phoneNumber,
            amount: openPayBtn.amount * 100,
            paymentMethod: 'Razorpay',
        }, setRazorpayRes);
        setLoading('');
        setOpenPayBtn('');
    };

    return (<>
        <section className={`fixed inset-0 z-50 w-screen h-screen bg-white flex items-center justify-center duration-300 ${openPayBtn ? 'scale-100' : 'scale-0'}`}>
            <div className='md:w-[40rem] sm:w-4/5 w-11/12 mx-auto py-32 px-10 border flex md:flex-row flex-col items-center justify-center md:gap-12 gap-6 relative rounded-2xl'>
                <button
                    onClick={() => setOpenPayBtn('')}
                    className='absolute top-6 right-8 text-4xl text-gray-500 hover:text-gray-600'
                >
                    <i className="fa-solid fa-xmark"></i>
                </button>
                <div className='w-full'>
                    <img src={stripe} alt="Stripe logo" className='w-auto mx-auto h-20' />
                    <button
                        onClick={stripePayButton}
                        disabled={loading === 'stripe'}
                        className='text-lg font-medium py-3 w-full md:mt-3 rounded text-white bg-blue-600 hover:bg-blue-700 duration-300'
                    >
                        {
                            loading === 'stripe' ? 'Loading...' : 'Pay with Stripe'
                        }
                    </button>
                </div>
                <div className='w-full'>
                    <img src={razorpay} alt="Razorpay logo" className='w-auto mx-auto h-20' />
                    <button
                        onClick={razorpayButton}
                        disabled={loading === 'razorpay'}
                        className='text-lg font-medium py-3 w-full md:mt-3 rounded text-white bg-blue-600 hover:bg-blue-700 duration-300'
                    >
                        {
                            loading === 'razorpay' ? 'Loading...' : 'Pay with Razorpay'
                        }
                    </button>
                </div>
            </div>
        </section>
    </>);
};

export default PaymentButton;