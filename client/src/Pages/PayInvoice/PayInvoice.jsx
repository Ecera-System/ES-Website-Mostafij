import React, { useState } from 'react';
import PageTitle from '../Shared/PageTitle';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';

const PayInvoice = () => {
    const [loading, setLoading] = useState(false);

    const searchQuery = window.location.search;
    const query = new URLSearchParams(searchQuery);
    const queryObj = Object.fromEntries(query);

    // <-- Payment button -->
    const stripePayButton = async () => {
        setLoading(true);
        await axios.post(`${process.env.REACT_APP_API_V1_URL}/payment/create-checkout-session`, {
            serviceName: 'Web Design and Services',
            price: 200000,
            source: 'Pay Invoice',
            paymentMethod: 'Stripe'
        })
            .then(res => {
                if (res?.data?.url) {
                    window.location = res?.data?.url;
                    setLoading(false);
                };
            })
            .catch(err => {
                err && console.log(err);
                setLoading(false);
            });
    };

    return (<>
        {
            queryObj?.canceled && <div className='fixed top-0 left-0 z-50 w-full h-full bg-black/60 flex justify-center items-center' >
                <div className='sm:w-96 w-11/12 h-auto text-center bg-white p-8 rounded-lg'>
                    <div className='block text-center'>
                        <i class="fa-solid fa-circle-xmark text-5xl text-red-600"></i>
                    </div>
                    <h2 className='text-3xl font-medium text-gray-600 py-5'>Payment Cancelled</h2>
                    <p className='text-base font-medium text-gray-600 mb-4'>
                        Unable to process payment
                    </p>
                    <button
                        onClick={() => {
                            window.location.search = ''
                        }}
                        className='w-full py-2 rounded text-center bg-slate-500 hover:bg-slate-600 duration-300 text-white text-lg font-medium'
                    >
                        OK
                    </button>
                </div>
            </div>
        }
        {
            queryObj?.success && <div className='fixed top-0 left-0 z-50 w-full h-full bg-black/60 flex justify-center items-center' >
                <div className='sm:w-96 w-11/12 h-auto text-center bg-white p-8 rounded-lg'>
                    <div className='block text-center'>
                        <i class="fa-solid fa-circle-check text-5xl text-emerald-500"></i>
                    </div>
                    <h2 className='text-3xl font-medium text-gray-600 py-5'>Payment Successful!</h2>
                    <p className='text-base font-medium text-gray-600 mb-4'>
                        Thank you for your payment
                    </p>
                    <button
                        onClick={() => {
                            window.location.search = ''
                        }}
                        className='w-full py-2 rounded text-center bg-emerald-500 hover:bg-emerald-600 duration-300 text-white text-lg font-medium'
                    >
                        OK
                    </button>
                </div>
            </div>
        }
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
        <section className='h-80 flex items-center justify-center'>
            <div className='md:w-[420px] w-64 mx-auto flex md:flex-row flex-col items-center justify-center md:gap-10 gap-5'>
                <button
                    onClick={stripePayButton}
                    disabled={loading}
                    className='text-lg font-medium py-3 w-full rounded text-white bg-blue-600 hover:bg-blue-700 duration-300'
                >
                    {
                        loading ? 'Loading...' : 'Pay with Stripe'
                    }
                </button>
                <button
                    className='text-lg font-medium py-3 w-full rounded text-white bg-blue-600 hover:bg-blue-700 duration-300'
                >
                    Pay with Razorpay
                </button>
            </div>
        </section>
        <Footer></Footer>
    </>);
};

export default PayInvoice;