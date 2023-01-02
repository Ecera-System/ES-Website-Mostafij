import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ContactSideButton = () => {
    // const [toggle, setToggle] = useState(false);

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    // };

    return (
        // <aside className={`fixed top-1/2 -translate-y-1/2 z-50 duration-300 ease-linear ${toggle ? 'left-0' : '-left-96'}`}>
        //     <div
        //         onClick={() => setToggle(!toggle)}
        //         className='absolute top-1/2 -translate-y-1/2 -right-20 w-16 h-16 flex items-center justify-center bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-cyan-500 hover:to-blue-600 shadow-md rounded-full cursor-pointer'
        //     >
        //         {toggle ?
        //             <i className="fa-solid fa-xmark text-2xl text-white"></i>
        //             :
        //             <i className="fa-regular fa-envelope text-2xl text-white"></i>
        //         }
        //     </div>
        //     <div className='w-96 bg-white border p-8 drop-shadow-[0_35px_35px_rgba(0,0,0,0.35)]'>
        //         <h1 className='text-3xl text-center text-gray-500'>Contact Us</h1>
        //         <form onSubmit={handleSubmit} className='flex flex-col gap-3 mt-5 mb-2'>
        //             <input
        //                 id="name"
        //                 type="text"
        //                 className='w-full border rounded text-base py-1.5 px-3 outline-blue-800'
        //                 placeholder='Name'
        //             />
        //             <input
        //                 id="email"
        //                 type="email"
        //                 className='w-full border rounded text-base py-1.5 px-3 outline-blue-800'
        //                 placeholder='Email Address'
        //             />
        //             <input
        //                 id="phoneNumber"
        //                 type="number"
        //                 className='w-full border rounded text-base py-1.5 px-3 outline-blue-800'
        //                 placeholder='Phone Number'
        //             />
        //             <textarea
        //                 id="message"
        //                 className='w-full border rounded text-base py-1.5 px-3 outline-blue-800'
        //                 placeholder='Message here...'
        //                 cols="" rows="3"
        //             ></textarea>
        //             <input
        //                 type="button"
        //                 className='w-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-cyan-500 hover:to-blue-600 text-white text-lg font-medium py-1.5 rounded cursor-pointer'
        //                 value="Send Message"
        //             />
        //         </form>
        //     </div>
        // </aside>
        <aside>
            <Link
                to='/get-estimate'
                className='fixed top-1/2 -translate-y-1/2 left-3 z-50 w-16 h-16 flex items-center justify-center bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-cyan-500 hover:to-blue-600 shadow-md rounded-full cursor-pointer'
            >
                <i className="fa-regular fa-envelope text-2xl text-white"></i>
            </Link>
        </aside >
    );
};

export default ContactSideButton;