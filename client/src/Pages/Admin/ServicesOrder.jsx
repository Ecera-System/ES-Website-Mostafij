import moment from 'moment';
import React from 'react';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import useGetAllOrders from '../../api/useGetAllOrders';
import PageTitle from '../Shared/PageTitle';
import OrderDetails from './OrderDetails';

const ServicesOrder = () => {
    const location = useLocation();
    const [allOrderData, loading] = useGetAllOrders(location?.state?.serviceOrders);
    const [openBtn, setOpenBtn] = useState(null);
    const [openOrder, setOpenOrder] = useState('');

    return (<>
        <PageTitle title='Services Order'></PageTitle>
        {loading ?
            <div className='w-full h-screen flex items-center justify-center text-2xl text-gray-600'>
                Loading...
            </div>
            :
            <div className='w-full text-gray-700'>
                <h1 className='md:text-4xl text-3xl text-center pb-3 text-accent font-medium'>Services Order</h1>
                {allOrderData.length !== 0 ?
                    <div className="w-full h-full px-6 bg-white rounded-md">
                        <table className="table w-full">
                            <thead>
                                <tr className='text-base font-medium'>
                                    <th className='py-4 text-start'>Service Name</th>
                                    <th className='py-4 text-start'>Amount</th>
                                    <th className='py-4 text-start'>Transaction Id</th>
                                    <th className='py-4 text-start'>User Email</th>
                                    <th className='py-4 text-start'>Date</th>
                                    <th className='py-4 text-start'></th>
                                </tr>
                            </thead>
                            <tbody className=''>
                                {
                                    allOrderData.map((data, index) => <tr key={data._id} className='text-sm font-medium text-gray-500'>
                                        <td className='py-2 pr-3 border-t'>{data.serviceName}</td>
                                        <td className='py-2 pr-3 border-t'>
                                            {data.currency.toUpperCase() === 'USD' && <>&#36;</>}
                                            {data.currency.toUpperCase() === 'INR' && <>&#8377;</>}
                                            {data.totalAmount}
                                            <span className='ml-3'>
                                                {data.currency.toUpperCase()}
                                            </span>
                                        </td>
                                        <td className='py-2 pr-3 border-t font-normal'>{data.transactionId}</td>
                                        <td className='py-2 pr-3 border-t font-normal'>{data.userEmail}</td>
                                        <td className='py-2 pr-3 border-t font-normal'>{
                                            moment(data.createdAt).format("MMM Do YYYY")
                                        }</td>
                                        <td className='py-2 pr-3 border-t font-normal'>
                                            <div className='w-max relative'>
                                                <button
                                                    onClick={() => {
                                                        openBtn || openBtn === 0 ? setOpenBtn(null) : setOpenBtn(index)
                                                    }}
                                                    className={`text-lg px-2 hover:bg-blue-100 hover:text-gray-600 duration-300 rounded ${openBtn === index ? 'bg-blue-100 text-gray-600' : 'bg-blue-50'}`}
                                                >
                                                    <i className="fa-solid fa-ellipsis"></i>
                                                </button>
                                                {openBtn === index &&
                                                    <ul className='absolute top-8 right-0 z-10 w-52 bg-white border border-blue-200 rounded-md overflow-hidden shadow-lg'>
                                                        <li
                                                            onClick={() => setOpenOrder(data)}
                                                            className='hover:bg-blue-50 hover:text-blue-600 py-2 px-3 cursor-pointer'
                                                        >
                                                            Order Details
                                                        </li>
                                                    </ul>
                                                }
                                            </div>
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
        <OrderDetails openOrder={openOrder} setOpenOrder={setOpenOrder} />
    </>);
};

export default ServicesOrder;