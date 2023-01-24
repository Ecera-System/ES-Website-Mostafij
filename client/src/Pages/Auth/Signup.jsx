import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import emailRegex from '../Shared/emailRegex';
import PageTitle from '../Shared/PageTitle';


const Signup = () => {
    const [nameValidate, setNameValidate] = useState({ name: '', error: '' });
    const [phoneValidate, setPhoneValidate] = useState({ phone: '', error: '' });
    const [emailValidate, setEmailValidate] = useState({ email: '', error: '' });
    const [passValidate, setPassValidate] = useState({ password: '', error: '' });
    const [showPass, setShowPass] = useState(false);
    const [loading, setLoading] = useState(false);
    const [resData, setResData] = useState({ data: '', success: '', error: '' });
    // <-- Password Regex -->
    const [regexOpen, setRegexOpen] = useState(false);
    const [capital, setCapital] = useState(false);
    const [number, setNumber] = useState(false);
    const [special, setSpecial] = useState(false);
    const [digit, setDigit] = useState(false);

    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    useEffect(() => {
        if (resData.error) {
            setTimeout(() => {
                setResData({
                    ...resData, error: ''
                })
            }, 5000);
        };

        const token = localStorage.getItem('user_token');
        if (token) {
            return navigate(from, { replace: true });
        }
    }, [resData, navigate, from]);


    // <== ===============Password onChange=============== ==>
    const handlePassChange = (e) => {
        const password = e.target.value;
        if (password) {
            setPassValidate({ ...passValidate, password: password, error: '' });
            setRegexOpen(true)
        } else {
            setPassValidate({ ...passValidate, password: '' });
            setRegexOpen(false);
        };

        (password.match(/[A-Z]/) !== null) ? setCapital(true) : setCapital(false);
        (password.match(/[0-9]/) !== null) ? setNumber(true) : setNumber(false);
        (password.match(/[!@#$%^&*]/) !== null) ? setSpecial(true) : setSpecial(false);
        (password.length > 5) ? setDigit(true) : setDigit(false);
    };


    // <== ===============Sign-up Button=============== ==>
    const handleSignUp = async (e) => {
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
        else if (!emailRegex.test(emailValidate.email)) {
            return setEmailValidate({
                ...emailValidate, error: 'Please enter a valid email address.'
            });
        }
        else if (!passValidate.password.match(/^(?=.*[!@#$%^&*])(?=.*[0-9])(?=.*[A-Z]).{6,}$/)) {
            return setPassValidate({
                ...passValidate, error: 'Please enter a valid password.'
            });
        }
        else {
            setLoading(true);
            await axios.post(`${process.env.REACT_APP_API_V1_URL}/user/signup`, {
                name: nameValidate.name,
                phoneNumber: phoneValidate.phone,
                email: emailValidate.email,
                password: passValidate.password,
                role: 'user'
            })
                .then(res => {
                    if (res.data) {
                        setLoading(false);
                        setResData({
                            ...resData, success: res.data.message, error: ''
                        })
                    }
                })
                .catch(err => {
                    err && setResData({
                        ...resData, success: '', error: err.response.data.message
                    });
                    setLoading(false);
                });
        }
    };

    return (<>
        <PageTitle title={'Sign Up'}></PageTitle>
        <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
            <div className="relative py-3 sm:w-[31rem] w-11/12 mx-auto">
                <div
                    className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-300 shadow-lg transform -rotate-6 rounded-3xl">
                </div>
                <div className="relative px-8 py-10 bg-white shadow-lg rounded-3xl sm:p-14 overflow-hidden">

                    <div className={`absolute left-0 w-full h-max text-base text-red-600 py-3 bg-red-100 text-center duration-500 ${resData.error ? 'top-0' : '-top-20'}`}>
                        <p className=''>
                            <i className="fa-solid fa-triangle-exclamation mr-1"></i> {resData.error}
                        </p>
                    </div>

                    <div className="w-full">
                        <div>
                            <h1 className="md:text-4xl text-2xl font-semibold text-gray-700">Connect with us</h1>
                        </div>
                        <form onSubmit={handleSignUp} className="pt-8 text-base leading-6 space-y-6 text-gray-600 sm:text-lg sm:leading-7">
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
                                        emailRegex.test(e.target.value) ?
                                            setEmailValidate({
                                                ...emailValidate, email: e.target.value, error: ''
                                            }) :
                                            setEmailValidate({
                                                ...emailValidate, email: '', error: 'Please enter a valid email address.'
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
                            <div className="relative group/showPass">
                                <input
                                    onChange={handlePassChange}
                                    autoComplete="off"
                                    id="password" name="password"
                                    type={showPass ? "text" : "password"}
                                    className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-200 focus:outline-none focus:border-blue-600"
                                    placeholder="Password"
                                />
                                <label
                                    htmlFor="password"
                                    className="absolute left-0 -top-4 text-gray-500 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 transition-all peer-focus:-top-4 peer-focus:text-gray-500 peer-focus:text-sm"
                                >Password*
                                </label>
                                <span
                                    onClick={() => setShowPass(!showPass)}
                                    className='group-hover/showPass:opacity-100 peer-focus:opacity-100 opacity-0 duration-500 absolute top-3 right-0 cursor-pointer'
                                >
                                    {showPass ?
                                        <svg className="bi bi-eye w-5 h-5 text-gray-500"
                                            xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                            viewBox="0 0 16 16">
                                            <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                                            <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                                        </svg>
                                        :
                                        <svg className="bi bi-eye-slash w-5 h-5 text-gray-500"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="currentColor" viewBox="0 0 16 16" >
                                            <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z" />
                                            <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z" />
                                            <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z" />
                                        </svg>
                                    }
                                </span>
                                {
                                    regexOpen &&
                                    <p className='text-sm mt-2 text-emerald-500'>
                                        Password should be
                                        <span className={`ml-1 ${!capital && 'text-red-600'}`}>one capital letter,</span>
                                        <span className={`ml-1 ${!number && 'text-red-600'}`}>one number,</span>
                                        <span className={`ml-1 ${!special && 'text-red-600'}`}>one special character,</span> and
                                        <span className={`ml-1 ${!digit && 'text-red-600'}`}>min 6 characters.</span>
                                    </p>
                                }
                                {
                                    passValidate?.error &&
                                    <p className='mt-1 text-sm text-red-600'>
                                        <i className="fa-solid fa-triangle-exclamation mr-1"></i> {passValidate?.error}
                                    </p>
                                }
                            </div>
                            <div className=''>
                                <button
                                    disabled={loading}
                                    type='submit'
                                    className="bg-blue-600 hover:bg-blue-700 duration-300 text-lg font-medium text-white rounded-md w-full py-2"
                                >
                                    {loading ? 'Loading...' : 'Sign up'}
                                </button>
                            </div>
                            <p className='text-sm font-medium'>
                                Have an account?
                                <Link
                                    to={'/login?source=signup'}
                                    className='text-blue-600 ml-2 hover:underline'
                                >Login</Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        {
            resData.success &&
            <div
                onClick={() => setResData(
                    { ...resData, success: "" }
                )}
                className='fixed top-0 left-0 w-screen h-screen bg-black/60 flex items-center justify-center'
            >
                <div className='bg-white sm:w-[28rem] w-11/12 h-max sm:p-10 p-6 rounded-lg'>
                    <div className='w-full flex justify-center'>
                        <svg className="w-16 h-16 p-3 border-2 rounded-full text-emerald-500"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                    </div>
                    <h4 className='md:text-4xl text-3xl font-medium text-emerald-500 py-4 mb-2 text-center'>Sign-up success!</h4>
                    <p className='text-base text-gray-500 my-6 text-center'>
                        Please Check your inbox of registered email.
                    </p>
                    <button
                        onClick={() => setResData(
                            { ...resData, success: "" }
                        )}
                        className='w-full rounded-md py-3 text-base font-medium shadow bg-slate-600 hover:bg-slate-700 duration-300 text-white'
                    >OK
                    </button>
                </div>
            </div>
        }
    </>);
};

export default Signup;