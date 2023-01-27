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
                <div className="w-full h-full px-6 bg-white rounded-md">
                    <table className="table w-full">
                        <thead>
                            <tr className='text-base font-medium'>
                                <th className='py-4 text-start'>Name</th>
                                <th className='py-4 text-start'>Phone Number</th>
                                <th className='py-4 text-start'>Email</th>
                                <th className='py-4 text-start'>Passport</th>
                                <th className='py-4 text-start'>Services Order</th>
                                <th className='py-4 text-start'>Created At</th>
                            </tr>
                        </thead>
                        <tbody className=''>
                            {
                                registrationData.map((data, index) => <tr key={data._id} className='text-sm font-medium text-gray-500'>
                                    <td className='py-2 pr-3 border-t'>{data.name}</td>
                                    <td className='py-2 pr-3 border-t'>{data.phoneNumber}</td>
                                    <td className='py-2 pr-3 border-t'>{data.email}</td>
                                    <td className='py-2 pr-3 border-t'>
                                        <button
                                            onClick={() =>
                                                setOpenPassport(process.env.REACT_APP_API_V1_URL + '/passport-file/' + data.passport)
                                            }
                                            className='text-blue-600 hover:underline'
                                        >
                                            View passport
                                        </button>
                                    </td>
                                    <td className='py-2 pr-3 border-t text-center'>
                                        <button
                                            onClick={() => navigate('/admin/services-order', {
                                                state: { serviceOrders: data.serviceOrders }
                                            })}
                                            className='px-1 font-semibold text-blue-600 hover:underline'
                                            disabled={data?.serviceOrders?.length === 0}
                                        >
                                            {data?.serviceOrders?.length}
                                        </button>
                                    </td>
                                    <td className='py-2 pr-3 border-t'>{
                                        moment(data.createdAt).format("MMM Do YYYY")
                                    }</td>
                                </tr>)
                            }
                        </tbody >
                    </table>
                </div>
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