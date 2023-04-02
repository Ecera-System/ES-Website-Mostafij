import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import emailRegex from '../Shared/emailRegex';
import PageTitle from '../Shared/PageTitle';
import ForgotPassword from './ForgotPassword'; 

const Login = () => {
    const [loading, setLoading] = useState(false);
    const [isReset, setIsReset] = useState(false);
    const [emailValidate, setEmailValidate] = useState({ email: '', error: '' });
    const [passValidate, setPassValidate] = useState({ password: '', error: '' });
    const [resData, setResData] = useState({ data: '', success: '', error: '' });
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    useEffect(() => {
        if (resData.error || resData.success) {
            setTimeout(() => {
                setResData({
                    ...resData, error: '', success: ''
                })
            }, 5000);
        };

        const token = localStorage.getItem('user_token');
        if (token) {
            return navigate(from, { replace: true });
        }
    }, [resData, navigate, from]);


    // <-- Login button -->
    const handleSignIn = async e => {
        e.preventDefault();

        if (!emailRegex.test(emailValidate.email)) {
            return setEmailValidate({
                ...emailValidate, error: 'Please enter a valid email address.'
            });
        }
        else if (!passValidate.password) {
            return setPassValidate({
                ...passValidate, password: '', error: 'Please enter a valid password.'
            })
        }
        else {
            setLoading(true);
            await axios.post(`${process.env.REACT_APP_API_V1_URL}/user/login`, {
                email: emailValidate.email,
                password: passValidate.password
            })
                .then(res => {
                    if (res.data) {
                        localStorage.setItem('user_token', res.data.user);
                        setResData({
                            ...resData, data: res.data, success: res.data.message, error: ''
                        })
                        setLoading(false);
                        navigate(from, { replace: true });
                    }
                })
                .catch(err => {
                    err && setResData({
                        ...resData, success: '', error: err.response.data.message
                    });
                    setLoading(false);
                })
        }
    };

    return (<>
        <PageTitle title={'Login'}></PageTitle>
        <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
            <div className="relative py-3 sm:w-[31rem] w-11/12 mx-auto">
                <div
                    className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-300 shadow-lg transform rotate-6 rounded-3xl">
                </div>
                <div className="relative px-8 py-10 bg-white shadow-lg rounded-3xl sm:p-14 overflow-hidden">

                    <div
                        className={`absolute left-0 w-full h-max text-base text-center duration-500 ${(resData.success && 'top-0 text-emerald-500 py-3 bg-emerald-100') ||
                            (resData.error && 'top-0 text-red-600 py-3 bg-red-100') || '-top-20'}`}
                    >
                        <p className=''>
                            {resData.error &&
                                <span>
                                    <i className="fa-solid fa-triangle-exclamation mr-1"></i>
                                    {resData.error}
                                </span>
                            }
                            {resData.success &&
                                <span>
                                    <i className="fa-solid fa-circle-check mr-1"></i>
                                    {resData.success}
                                </span>
                            }
                        </p>
                    </div>
                    {isReset ?
                        <ForgotPassword
                            resData={resData}
                            setResData={setResData}
                        /> :
                        <div className="w-full">
                            <div>
                                <h1 className="md:text-4xl text-2xl font-semibold text-gray-700">At first Login</h1>
                            </div>
                            <form
                                onSubmit={handleSignIn}
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
                                <div className="relative">
                                    <input
                                        onChange={(e) => {
                                            e.target.value && setPassValidate({
                                                ...passValidate, password: e.target.value, error: ''
                                            })
                                        }}
                                        className={`peer placeholder-transparent h-10 w-full border-b-2 focus:outline-none ${passValidate?.error ? 'border-red-600 focus:border-red-600' : 'border-gray-200 focus:border-blue-600'}`}
                                        autoComplete="off"
                                        id="password" name="password" type="password"
                                        placeholder="Password"
                                    />
                                    <label
                                        htmlFor="password"
                                        className="absolute left-0 -top-4 text-gray-500 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 transition-all peer-focus:-top-4 peer-focus:text-gray-500 peer-focus:text-sm"
                                    >Password</label>
                                    {
                                        passValidate?.error &&
                                        <p className='mt-1 text-sm text-red-600'>
                                            <i className="fa-solid fa-triangle-exclamation mr-1"></i> {passValidate?.error}
                                        </p>
                                    }
                                    <p className='text-end pt-2'>
                                        <span
                                            onClick={() => setIsReset(true)}
                                            className='text-sm font-medium text-blue-600 hover:underline cursor-pointer'
                                        >Forgot Password?</span>
                                    </p>
                                </div>
                                <div className=''>
                                    <button
                                        disabled={loading}
                                        type='submit'
                                        className="bg-blue-600 hover:bg-blue-700 duration-300 text-lg font-medium text-white rounded-md w-full py-2"
                                    >
                                        {
                                            loading ? 'Loading...' : 'Login'
                                        }
                                    </button>
                                </div>
                                <p className='text-sm font-medium'>
                                    New user?
                                    <Link
                                        to={'/signup?source=login'}
                                        className='text-blue-600 ml-2 hover:underline'
                                    >Signup Here</Link>
                                </p>
                            </form>
                        </div>
                    }
                </div>
            </div>
        </div>
    </>);
};

export default Login;