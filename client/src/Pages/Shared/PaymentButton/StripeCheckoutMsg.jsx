import React from 'react';
import { useNavigate } from 'react-router-dom';
import PageTitle from '../PageTitle';

const StripeCheckoutMsg = () => {
    const searchQuery = window.location.search;
    const query = new URLSearchParams(searchQuery);
    const queryObj = Object.fromEntries(query);
    const navigate = useNavigate();

    return (<>
        <PageTitle
            title={`${(queryObj?.success && 'Payment Successful!') || (queryObj?.canceled && 'Payment Cancelled')}`}
        />
        <div className='w-screen h-screen bg-gray-50 flex justify-center items-center'>
            {
                queryObj?.canceled &&
                <div className='sm:w-96 w-11/12 h-auto text-center bg-white p-8 rounded-lg'>
                    <div className='block text-center'>
                        <i className="fa-solid fa-circle-xmark text-5xl text-red-600"></i>
                    </div>
                    <h2 className='text-3xl font-medium text-gray-600 py-5'>Payment Cancelled</h2>
                    <p className='text-base font-medium text-gray-600 mb-4'>
                        Unable to process payment
                    </p>
                    <button
                        onClick={() => {
                            navigate(queryObj.path)
                        }}
                        className='w-full py-2 rounded text-center bg-slate-500 hover:bg-slate-600 duration-300 text-white text-lg font-medium'
                    >
                        OK
                    </button>
                </div>
            }
            {
                queryObj?.success &&
                <div className='sm:w-96 w-11/12 h-auto text-center bg-white p-8 rounded-lg'>
                    <div className='block text-center'>
                        <i className="fa-solid fa-circle-check text-5xl text-emerald-500"></i>
                    </div>
                    <h2 className='text-3xl font-medium text-gray-600 py-5'>Payment Successful!</h2>
                    <p className='text-base font-medium text-gray-600 mb-4'>
                        Thank you for your payment
                    </p>
                    <button
                        onClick={() => {
                            navigate(queryObj.path)
                        }}
                        className='w-full py-2 rounded text-center bg-emerald-500 hover:bg-emerald-600 duration-300 text-white text-lg font-medium'
                    >
                        OK
                    </button>
                </div>
            }
        </div>
    </>);
};

export default StripeCheckoutMsg;