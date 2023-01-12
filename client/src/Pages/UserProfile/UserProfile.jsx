import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Header from '../Shared/Header/Header';

const UserProfile = () => {
    return (<>
        <Header login={true} />
        <div className='w-full h-screen bg-blue-50 flex justify-center'>
            <div className='2xl:w-[1200px] xl:w-[90%] lg:w-[96%] w-full mt-5 flex justify-center items-start lg:gap-6'>
                <aside className='lg:block hidden xl:w-1/5 lg:w-[22%] sticky'>
                    <ul className='bg-white h-auto rounded-md overflow-hidden normal-case p-6'>
                        <li>
                            <Link
                                to={'/profile/order-history'}
                                className='w-full px-4 py-3 text-gray-600 hover:text-blue-600 hover:bg-blue-50 duration-300 flex items-center gap-3 rounded-md'
                            >
                                <i className="fa-solid fa-tags"></i> Order History
                            </Link>
                        </li>
                    </ul>
                </aside>
                <div className='xl:w-4/5 lg:w-[78%] w-full'>
                    <Outlet />
                </div>
            </div>
        </div>
    </>);
};

export default UserProfile;