import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const PassportFile = ({ openPassport, setOpenPassport }) => {
    const [isPDF, setIsPDF] = useState(false);
    const [loading, setLoading] = useState(true);

    // <!-- Checking file extension ->
    useEffect(() => {
        axios.get(openPassport)
            .then(res => {
                setLoading(false);
                if (res.headers.get('Content-Type') === 'application/pdf') {
                    setIsPDF(true);
                }
            })
            .catch(err => {
                setLoading(false);
            })
    }, []);

    return (
        <div className='fixed inset-0 bg-black/70 flex items-start justify-center overflow-auto'>
            <div
                onClick={() => setOpenPassport('')}
                className='absolute top-5 left-5 p-1 text-white hover:text-gray-600 hover:bg-blue-50 duration-300 cursor-pointer rounded-full'
            >
                <svg className="w-8 h-8"
                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                    strokeWidth={2} stroke="currentColor"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>

            </div>
            {
                loading ?
                    <div className='w-full h-screen flex items-center justify-center text-2xl text-white'>
                        Loading...
                    </div>
                    :
                    <div className='2xl:max-w-6xl xl:max-w-5xl h-screen overflow-auto'>
                        <embed
                            src={openPassport}
                            className={`2xl:w-[72rem] xl:w-[64rem] ${isPDF ? 'h-screen' : 'h-auto'}`}
                        />
                    </div>
            }

        </div>
    );
};

export default PassportFile;