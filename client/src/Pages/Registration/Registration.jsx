import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import emailRegex from '../Shared/emailRegex';
import PageTitle from '../Shared/PageTitle';

const Registration = () => {
    const [nameValidate, setNameValidate] = useState({ name: '', error: '' });
    const [phoneValidate, setPhoneValidate] = useState({ phone: '', error: '' });
    const [emailValidate, setEmailValidate] = useState({ email: '', error: '' });
    const [passportValidate, setPassportValidate] = useState({ passport: '', error: '' });
    const [loading, setLoading] = useState(false);
    const [resData, setResData] = useState({ success: '', error: '' });
    const navigate = useNavigate();

    useEffect(() => {
        if (resData.error) {
            setTimeout(() => {
                setResData({
                    ...resData, error: ''
                })
            }, 5000);
        };
    }, [resData]);


    // <-- Submit button -->
    const handleSubmit = async (e) => {
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
        else if (!passportValidate.passport) {
            return setPassportValidate({
                ...passportValidate, error: 'Please enter your passport copy!'
            });
        }
        else {
            setLoading(true);
            const formData = new FormData();
            formData.append('passport', passportValidate.passport);

            let passportData;
            await axios.post(`${process.env.REACT_APP_API_V1_URL}/user/upload-passport`, formData)
                .then(res => {
                    passportData = res.data
                })
                .catch(err => {
                    setLoading(false);
                    return setResData({
                        ...resData, success: '', error: err.response.data
                    })
                });

            if (passportData) {
                await axios.post(`${process.env.REACT_APP_API_V1_URL}/user/registration`, {
                    name: nameValidate.name,
                    phoneNumber: phoneValidate.phone,
                    email: emailValidate.email,
                    passport: passportData.filename,
                    role: 'user',
                    source: 'Registration',
                })
                    .then(res => {
                        if (res.data) {
                            setLoading(false);
                            navigate('/invoice', {
                                state: {
                                    registrationId: res.data._id,
                                    name: res.data.name,
                                    phoneNumber: res.data.phoneNumber,
                                    email: res.data.email,
                                }
                            })
                        }
                    })
                    .catch(err => {
                        err && setResData({
                            ...resData, success: '', error: err.response.data
                        });
                        setLoading(false);
                    });
            }
            setLoading(false);
        }
    };

    return (<>
        <PageTitle title="Registration"></PageTitle>
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
                            <h1 className="md:text-4xl text-2xl font-semibold text-gray-700">
                                Fill out this form
                            </h1>
                        </div>
                        <form onSubmit={handleSubmit} className="pt-8 text-base leading-6 space-y-6 text-gray-600 sm:text-lg sm:leading-7">
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
                            <div className="relative">
                                <label
                                    className="block mb-1.5 text-gray-500 text-base"
                                    htmlFor="passport_file"
                                >Passport*</label>
                                <input
                                    onChange={(e) => {
                                        e.target.files ?
                                            setPassportValidate({
                                                ...passportValidate, passport: e.target.files[0], error: ''
                                            }) :
                                            setPassportValidate({
                                                ...passportValidate, passport: '', error: 'Please enter your passport copy!'
                                            })
                                    }}
                                    className="block w-full p-1 text-sm text-gray-700 border border-gray-300 rounded cursor-pointer bg-gray-50 focus:outline-none"
                                    id="passport_file"
                                    type="file" name='passport'
                                />
                                {
                                    passportValidate?.error &&
                                    <p className='mt-1 text-sm text-red-600'>
                                        <i className="fa-solid fa-triangle-exclamation mr-1"></i> {passportValidate?.error}
                                    </p>
                                }
                            </div>
                            <div>
                                <button
                                    disabled={loading}
                                    type='submit'
                                    className="bg-blue-600 hover:bg-blue-700 duration-300 text-lg font-medium text-white rounded-md w-full py-2 mt-2"
                                >
                                    {loading ? 'Loading...' : 'Submit'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </>);
};

export default Registration;