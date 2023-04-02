import moment from 'moment';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useGetRegistrations from '../../../api/useGetRegistrations';
import PageTitle from '../../Shared/PageTitle';
import PassportFile from './PassportFile';

const RegistrationUsers = () => {
    const [registrationData, loading] = useGetRegistrations();
    const [openPassport, setOpenPassport] = useState('');
    const navigate = useNavigate();

    return (<>
        <PageTitle title='Registration Users'></PageTitle>
        {loading ?
            <div className='w-full h-screen flex items-center justify-center text-2xl text-gray-600'>
                Loading...
            </div>
            :
            <div className='w-full text-gray-700'>
                <h1 className='md:text-4xl text-3xl text-center pb-3 text-accent font-medium'>Registration Users</h1>
                {
                    registrationData.length !== 0 ?
                        <div className="w-full h-full px-6 bg-white rounded-md overflow-auto">
                            <table className="table w-full">
                                <thead>
                                    <tr className='text-base font-medium'>
                                        <th className='py-4 pr-5 text-start'>
                                            <h2 className='w-max'>Name</h2>
                                        </th>
                                        <th className='py-4 pr-5 text-start'>
                                            <h2 className='w-max'>Phone Number</h2>
                                        </th>
                                        <th className='py-4 pr-5 text-start'>
                                            <h2 className='w-max'>Email</h2>
                                        </th>
                                        <th className='py-4 pr-5 text-start'>
                                            <h2 className='w-max'>Passport</h2>
                                        </th>
                                        <th className='py-4 pr-5 text-start'>
                                            <h2 className='w-max'>Services Order</h2>
                                        </th>
                                        <th className='py-4 px-5 text-start'>
                                            <h2 className='w-max'>Created At</h2>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className=''>
                                    {
                                        registrationData.map((data, index) => <tr key={data._id} className='text-sm font-medium text-gray-500'>
                                            <td className='py-2 pr-5 border-t'>
                                                <p className='w-max'>{data.name}</p>
                                            </td>
                                            <td className='py-2 pr-5 border-t'>
                                                <p className='w-max'>{data.phoneNumber}</p>
                                            </td>
                                            <td className='py-2 pr-5 border-t'>
                                                <p className='w-max'>{data.email}</p>
                                            </td>
                                            <td className='py-2 pr-5 border-t'>
                                                <button
                                                    onClick={() =>
                                                        setOpenPassport(process.env.REACT_APP_API_V1_URL + data.passport)
                                                    }
                                                    className='inline-block w-max text-blue-600 hover:underline'
                                                >
                                                    View passport
                                                </button>
                                            </td>
                                            <td className='py-2 pr-5 border-t text-center'>
                                                <button
                                                    onClick={() => navigate('/admin/services-order', {
                                                        state: { serviceOrders: data.serviceOrders }
                                                    })}
                                                    className='inline-block w-max px-1 font-semibold text-blue-600 hover:underline'
                                                    disabled={data?.serviceOrders?.length === 0}
                                                >
                                                    {data?.serviceOrders?.length}
                                                </button>
                                            </td>
                                            <td className='py-2 px-5 border-t'>
                                                <p className='w-max'>
                                                    {
                                                        moment(data.createdAt).format("MMM Do YYYY")
                                                    }
                                                </p>
                                            </td>
                                        </tr>)
                                    }
                                </tbody >
                            </table>
                        </div> :
                        <div>
                            <p className='text-xl text-gray-400 text-center mt-40'>No Records Found</p>
                        </div>
                }
            </div>
        }
        {
            openPassport &&
            <PassportFile
                openPassport={openPassport}
                setOpenPassport={setOpenPassport}
            />
        }
    </>);
};

export default RegistrationUsers;