import axios from 'axios';
import React, { useState } from 'react';
import emailRegex from '../Shared/emailRegex';
import PageTitle from '../Shared/PageTitle';

const ForgotPassword = ({ resData, setResData }) => {
    const [loading, setLoading] = useState();
    const [emailValidate, setEmailValidate] = useState({ email: '', error: '' });
    const [resetSuccess, setResetSuccess] = useState('');

    const handleReset = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const res = await axios.post(`${process.env.REACT_APP_API_V1_URL}/user/forgot-password`, {
                email: emailValidate.email
            });
            setResetSuccess(res.data.message)
        } catch (err) {
            setResData({
                ...resData, success: '', error: err.response.data.message
            });
        };
        setLoading(false);
    };

    return (<>
        <PageTitle title="Forgot Password" />
        <div className="w-full">
            <div>
                <h1 className="md:text-4xl text-2xl font-semibold text-gray-700">Forgot Password</h1>
            </div>
            <form
                onSubmit={handleReset}
                className="pt-8 text-base leading-6 space-y-6 text-gray-600 sm:text-lg sm:leading-7"
            >
                <div className="relative">
                    <input
                        onChange={(e) => {
                            emailRegex.test(e.target.value) ?
                                setEmailValidate({
                                    ...emailValidate, email: e.target.value, error: ''
                                }) :
                                setEmailValidate({
                                    ...emailValidate, email: e.target.value, error: 'Please enter a valid email address.'
                                })
                        }}
                        className={`peer placeholder-transparent h-10 w-full border-b-2 focus:outline-none ${emailValidate?.error ? 'border-red-600 focus:border-red-600' : 'border-gray-200 focus:border-blue-600'}`}
                        autoComplete="off"
                        id="email" name="email" type="text"
                        placeholder="Email address"
                    />
                    <label
                        htmlFor="email"
                        className="absolute left-0 -top-4 text-gray-500 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 transition-all peer-focus:-top-4 peer-focus:text-gray-500 peer-focus:text-sm"
                    >Email Address</label>
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
                        {
                            loading ? 'Loading...' : 'Next'
                        }
                    </button>
                </div>
            </form>
        </div>
        {
            resetSuccess &&
            <div
                onClick={() => setResetSuccess('')}
                className='fixed inset-0 bg-black/70 flex items-center justify-center'
            >
                <div className='bg-white sm:w-[26rem] w-11/12 h-max sm:p-8 p-6 rounded-lg'>
                    <div className='w-full flex justify-center'>
                        <img src="/Images/email_sent.png" alt="Email Icon" className='w-24 h-auto object-cover' />
                    </div>
                    <p className='text-base text-gray-500 mb-6 text-center'>
                        {resetSuccess}
                    </p>
                    <div className='w-full flex justify-end'>
                        <button
                            onClick={() => setResetSuccess('')}
                            className='px-8 py-2 bg-blue-600 text-white rounded-md shadow'
                        >Ok
                        </button>
                    </div>
                </div>
            </div>
        }
    </>);
};

export default ForgotPassword;