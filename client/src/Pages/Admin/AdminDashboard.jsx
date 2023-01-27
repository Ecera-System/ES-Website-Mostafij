import React from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import useGetUser from '../../api/useGetUser';
import eceraLogo from '../../Images/Nav_logo/ecera-logo.png';


const AdminDashboard = () => {
    const [userData, loading] = useGetUser();

    if (loading) {
        return <div className='fixed inset-0 z-50 w-screen h-screen flex items-center justify-center bg-white/70 text-gray-600'>
            Loading...
        </div>
    }

    return (<>
        <div className='w-full bg-blue-50 flex justify-center'>
            <div className='2xl:w-[1200px] w-full lg:h-screen overflow-auto border-t flex lg:gap-6'>
                <aside className='lg:block hidden lg:w-1/4 h-full bg-white sticky top-0'>
                    <Link to={'/'} className='inline-block pl-8 pt-3'>
                        <img
                            className='w-14 h-14'
                            src={eceraLogo}
                            alt="ecera logo"
                        />
                    </Link>
                    <ul className='h-auto normal-case p-6'>
                        <li>
                            <NavLink
                                to={'/admin/manage-users'}
                                className={({ isActive }) =>
                                (isActive
                                    ? 'w-full px-4 py-3 text-blue-600 bg-blue-50 duration-300 flex items-center gap-3 rounded-md' :
                                    'w-full px-4 py-3 text-gray-600 hover:text-blue-600 hover:bg-blue-50 duration-300 flex items-center gap-3 rounded-md'
                                )}
                            >
                                <i class="fa-solid fa-users"></i> Manage Users
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to={'/admin/services-order'}
                                className={({ isActive }) =>
                                (isActive
                                    ? 'w-full px-4 py-3 text-blue-600 bg-blue-50 duration-300 flex items-center gap-3 rounded-md' :
                                    'w-full px-4 py-3 text-gray-600 hover:text-blue-600 hover:bg-blue-50 duration-300 flex items-center gap-3 rounded-md'
                                )}
                            >
                                <i class="fa-solid fa-list-ol"></i> Services Order
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to={'/admin/registration-users'}
                                className={({ isActive }) =>
                                (isActive
                                    ? 'w-full px-4 py-3 text-blue-600 bg-blue-50 duration-300 flex items-center gap-3 rounded-md' :
                                    'w-full px-4 py-3 text-gray-600 hover:text-blue-600 hover:bg-blue-50 duration-300 flex items-center gap-3 rounded-md'
                                )}
                            >
                                <i class="fa-solid fa-id-card"></i> Registration Users
                            </NavLink>
                        </li>
                    </ul>
                </aside>
                <div className='lg:w-3/4 w-full mt-6 mr-6 rounded-md'>
                    <Outlet />
                </div>
            </div>
        </div>
    </>);
};

export default AdminDashboard;