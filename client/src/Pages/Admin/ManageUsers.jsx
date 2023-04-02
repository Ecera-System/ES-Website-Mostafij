import axios from 'axios';
import React, { useState } from 'react';
import useGetAllUsers from '../../api/useGetAllUsers';
import PageTitle from '../Shared/PageTitle';

const ManageUsers = () => {
    const [allUsers, loading] = useGetAllUsers();
    const [isConfirm, setIsConfirm] = useState({ id: '', type: '' });
    const [dLoading, setDLoading] = useState(false);

    const handleConfirm = async (confirm) => {
        setDLoading(true);

        if (confirm.type === 'delete') {
            await axios.delete(`${process.env.REACT_APP_API_V1_URL}/admin/user/${confirm.id}`, {
                method: 'DELETE',
                headers: {
                    'Authorization': localStorage.getItem('user_token')
                }
            })
                .then(res => { })
                .catch(err => { });
        }
        else {
            await axios.patch(`${process.env.REACT_APP_API_V1_URL}/admin/user/${confirm.id}`, {
                role: confirm.type
            }, {
                method: 'DELETE',
                headers: {
                    'Authorization': localStorage.getItem('user_token')
                }
            })
                .then(res => { })
                .catch(err => { });
        }

        setDLoading(false);
        setIsConfirm({ id: '', type: '' });
    };

    return (<>
        <PageTitle title='Manage Users'></PageTitle>
        {loading ?
            <div className='w-full h-screen flex items-center justify-center text-2xl text-gray-600'>
                Loading...
            </div>
            :
            <div className='w-full text-gray-700'>
                <h1 className='md:text-4xl text-3xl text-center pb-3 text-accent font-medium'>Manage Users</h1>
                <div className="w-full h-full px-6 bg-white rounded-md">
                    <table className="table w-full">
                        <thead>
                            <tr className='text-base font-medium'>
                                <th className='py-4 text-start'>Name</th>
                                <th className='py-4 text-start'>Phone Number</th>
                                <th className='py-4 text-start'>Email</th>
                                <th className='py-4 text-start'>Role</th>
                                <th className='py-4 text-start'>Create Admin</th>
                            </tr>
                        </thead>
                        <tbody className=''>
                            {
                                allUsers.map((user) => <tr key={user._id} className='text-sm font-medium text-gray-500'>
                                    <td className='py-2 pr-3 border-t'>{user.name}</td>
                                    <td className='py-2 pr-3 border-t font-normal'>{user.phoneNumber}</td>
                                    <td className='py-2 pr-3 border-t font-normal'>{user.email}</td>
                                    <td className='py-2 pr-3 border-t font-normal'>{user.role}</td>
                                    <td className='py-2 pr-3 border-t font-normal flex justify-between'>
                                        <div>
                                            <button
                                                onClick={() => setIsConfirm({ id: user._id, type: 'admin' })}
                                                className='bg-blue-600 hover:bg-blue-700 duration-300 text-white px-3 py-1 rounded'
                                            >
                                                Admin
                                            </button>
                                            {/* <button
                                                onClick={() => setIsConfirm({ id: user._id, type: 'sub-admin' })}
                                                className='bg-cyan-500 hover:bg-cyan-600 duration-300 text-white px-2 py-1 rounded ml-3'
                                            >
                                                Sub-admin
                                            </button> */}
                                        </div>
                                        {
                                            user.role !== 'admin' &&
                                            <button
                                                onClick={() => setIsConfirm({ id: user._id, type: 'delete' })}
                                                className='text-xl hover:text-red-600 group/delete duration-300 relative'
                                            >
                                                <i className="fa-regular fa-trash-can"></i>
                                                <span className='group-hover/delete:opacity-100 opacity-0 group-hover/delete:visible invisible duration-300 absolute top-8 left-1/2 -translate-x-1/2 z-30 py-1 px-2 rounded text-xs bg-black/80 text-white'>Delete</span>
                                            </button>
                                        }
                                    </td>
                                </tr>)
                            }
                        </tbody >
                    </table>
                </div>
            </div>
        }

        {
            isConfirm.id &&
            <div className="fixed inset-0 bg-black/70 top-0 left-0 z-30 flex items-center justify-center">
                <div className="sm:w-[400px] w-11/12 sm:p-10 p-6 text-center bg-white rounded-md">
                    <h3 className="font-medium text-3xl text-gray-600">Are you sure!</h3>
                    <p className="text-lg py-4 text-gray-600">Do you want to confirm it?</p>
                    <div className="flex justify-between gap-10 mt-5">
                        <button
                            onClick={() => setIsConfirm({ id: '', type: '' })}
                            className="w-[140px] bg-slate-600 text-white hover:bg-slate-700 duration-300 py-2.5 uppercase rounded-md"
                        >No
                        </button>
                        <button
                            onClick={() => handleConfirm(isConfirm)}
                            disabled={dLoading}
                            className="w-[140px] bg-blue-600 text-white hover:bg-blue-700 duration-300 py-2.5 uppercase rounded-md"
                        >
                            {dLoading ? 'Loading...' : 'Yes'}
                        </button>

                    </div>
                </div>
            </div>
        }
    </>);
};

export default ManageUsers;