import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import PageTitle from '../Shared/PageTitle';
import axios from 'axios';

const ResetPassword = () => {
    const { reset_token } = useParams();
    const [formData, setFormData] = useState({
        password: '',
        confirmPassword: ''
    });
    const [formErrors, setFormErrors] = useState({});
    const [showPass1, setShowPass1] = useState(false);
    const [showPass2, setShowPass2] = useState(false);
    const [loading, setLoading] = useState(false);


    // <!-- onChange input -->
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    // <!-- Validate form function -->
    const validateForm = (data) => {
        let errors = {};

        if (!data.password) {
            errors.password = 'Password is required!';
        } else if (!/^(?=.*[!@#$%^&*])(?=.*[0-9])(?=.*[A-Z]).{6,}$/.test(data.password)) {
            errors.password = 'Password must be strong or at least 6 characters!';
        }

        if (!data.confirmPassword) {
            errors.confirmPassword = 'Confirm Password is required!';
        } else if (data.confirmPassword !== data.password) {
            errors.confirmPassword = 'Confirm Password does not match Password!';
        }

        return errors;
    };


    // <!-- Submit Form Data -->
    const handleSubmit = async (event) => {
        event.preventDefault();
        const errors = validateForm(formData);
        if (Object.keys(errors).length === 0) {
            setFormErrors({});
            setLoading(true);
            await axios.patch(`${process.env.REACT_APP_API_V1_URL}/user/reset-password`, formData, {
                method: 'PATCH',
                headers: {
                    'Authorization': reset_token
                }
            })
                .then(res => {
                    if (res.data.path) return window.location.href = res.data.path;
                })
                .catch(err => {
                    setFormErrors({ error: err?.response?.data?.message });
                    console.log(err);
                });
            setLoading(false);
        } else {
            setFormErrors(errors);
        }
    };

    return (<>
        <PageTitle title="Let's Create a New Password" />
        <section className='py-20'>
            <div className='sm:w-[30rem] w-11/12 mx-auto'>
                <h1 className='text-3xl font-semibold text-gray-700 mt-2 text-center'>
                    Let's Create a New Password
                </h1>
                <form onSubmit={handleSubmit} className='mt-10 text-gray-500'>
                    <label
                        htmlFor='password'
                        className='font-medium text-base'
                    >
                        New Password
                        <div className='relative mt-2'>
                            <input
                                onChange={handleChange}
                                id='password' name='password'
                                type={showPass1 ? 'text' : 'password'}
                                className={`px-3 py-2 font-normal text-base w-full border focus:outline-0 focus:shadow-[4px_5px_5px_rgba(0,0,255,0.1)] ${formErrors?.password ? "border-red-600" : "border-gray-200"}`}
                            />
                            <span
                                onClick={() => setShowPass1(!showPass1)}
                                className='absolute top-1/2 -translate-y-1/2 right-3 cursor-pointer'
                            >
                                {showPass1 ?
                                    <i class="fa-solid fa-eye-slash"></i> :
                                    <i class="fa-sharp fa-solid fa-eye"></i>
                                }
                            </span>
                        </div>
                        {
                            formErrors?.password &&
                            <p className='mt-1 text-sm text-red-600'>
                                <i className="fa-solid fa-triangle-exclamation mr-1"></i>
                                {formErrors?.password}
                            </p>
                        }
                    </label>
                    <label
                        htmlFor='confirmPassword'
                        className='font-medium text-base block mt-4'
                    >
                        Confirm Password
                        <div className='relative mt-2'>
                            <input
                                onChange={handleChange}
                                id='confirmPassword' name='confirmPassword'
                                type={showPass2 ? 'text' : 'password'}
                                className={`px-3 py-2 font-normal text-base w-full border focus:outline-0 focus:shadow-[4px_5px_5px_rgba(0,0,255,0.1)] ${formErrors?.confirmPassword ? "border-red-600" : "border-gray-200"}`}
                            />
                            <span
                                onClick={() => setShowPass2(!showPass2)}
                                className='absolute top-1/2 -translate-y-1/2 right-3 cursor-pointer'
                            >
                                {showPass2 ?
                                    <i class="fa-solid fa-eye-slash"></i> :
                                    <i class="fa-sharp fa-solid fa-eye"></i>
                                }
                            </span>
                        </div>
                        {
                            formErrors?.confirmPassword &&
                            <p className='mt-1 text-sm text-red-600'>
                                <i className="fa-solid fa-triangle-exclamation mr-1"></i>
                                {formErrors?.confirmPassword}
                            </p>
                        }
                    </label>
                    <div className='mt-10 w-full text-center'>
                        <button
                            type="submit"
                            disabled={loading}
                            className='inline-block bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-cyan-500 hover:to-blue-600 text-white text-lg font-medium py-2.5 px-10 rounded'
                        >
                            {loading ? 'Loading...' : 'Submit'}
                        </button>
                    </div>
                    {
                        formErrors?.error && <p className='mt-5 text-sm text-center text-red-600'>
                            <i className="fa-solid fa-triangle-exclamation mr-1"></i>
                            {formErrors?.error}
                        </p>
                    }
                </form>
            </div>
        </section>
    </>);
};

export default ResetPassword;