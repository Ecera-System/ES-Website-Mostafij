import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import PageTitle from '../Shared/PageTitle';

const ActivateEmail = () => {
    const { activation_token } = useParams();
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [loading, setLoading] = useState(true)
    const navigate = useNavigate();

    useEffect(() => {
        if (activation_token) {
            const activationEmail = async () => {
                await axios.post(`${process.env.REACT_APP_API_V1_URL}/user/email/activate`,
                    { activation_token }
                )
                    .then(res => {
                        setSuccess(res.data.message);
                        setLoading(false);
                    })
                    .catch(err => {
                        err.response.data.message && setError(err.response.data.message);
                        setLoading(false);
                    })
            }
            activationEmail()
        }
    }, [activation_token]);

    return (<>
        <PageTitle title={
            (success && 'Verified success') || (error) || 'loading..'
        } />
        <div
            className='w-screen h-screen bg-no-repeat bg-auto bg-center bg-white'
        // style={{ backgroundImage: `url(${emailVerify})` }}
        >
            <div className='w-full h-full bg-slate-100/70 flex items-center justify-center'>
                <div className='sm:w-96 w-11/12 h-max sm:p-10 p-5 border rounded-md bg-white/50 shadow-lg text-center'>
                    <div className='w-full flex justify-center relative'>
                        {
                            error &&
                            <svg className='absolute sm:-top-[4.5rem] -top-14 left-auto right-auto w-16 h-16 p-3 rounded-full text-white bg-red-500 shadow-lg'
                                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                            </svg>
                        }
                        {
                            success &&
                            <svg className="absolute sm:-top-[4.5rem] -top-14 left-auto right-auto w-16 h-16 p-3 rounded-full text-white bg-emerald-500 shadow-lg"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                        }
                    </div>
                    <p className='sm:my-5 mt-10 mb-5 font-medium text-gray-500'>
                        {
                            loading ? 'Loading...' : <> {success || error} </>
                        }
                    </p>
                    {
                        success &&
                        <button
                            onClick={() => navigate('/login')}
                            className='text-lg font-medium text-emerald-500 hover:underline'
                        >
                            Now you can Log in
                        </button>
                    }
                </div>
            </div>
        </div>
    </>);
};

export default ActivateEmail;