import React from 'react';

const PassportFile = ({ openPassport, setOpenPassport }) => {

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
            <object
                data={openPassport}
                className={`2xl:w-[1200px] xl:w-[80%] w-11/12 ${openPassport.endsWith(".pdf") ? 'h-full' : 'h-auto'}`}
                download=''
            >
            </object>

        </div>
    );
};

export default PassportFile;