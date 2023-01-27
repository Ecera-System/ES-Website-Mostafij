import moment from 'moment';
import React from 'react';

const OrderDetails = ({ openOrder, setOpenOrder }) => {
    return (
        <div
            className={`${openOrder ? 'opacity-100 visible' : 'opacity-0 invisible'} duration-300 fixed inset-0 z-50 bg-black/60`}
        >
            <aside className={`absolute top-0 ${openOrder ? 'right-0' : '-right-[500px]'} duration-300 w-[500px] h-screen bg-white p-5`}>
                <div
                    onClick={() => setOpenOrder('')}
                    className='inline-block px-2.5 text-gray-500 hover:text-gray-600 hover:bg-blue-50 duration-300 text-2xl leading-normal cursor-pointer rounded-full'
                >
                    <i class="fa-solid fa-xmark"></i>
                </div>
                <ul className='w-full mx-2 mt-3 flex flex-col gap-5'>
                    <li className='flex items-center'>
                        <span className='w-2/6 text-sm text-gray-500'>Service Name</span>
                        <span className='w-4/6 text-base text-gray-600'>{openOrder?.serviceName}</span>
                    </li>
                    <li className='flex items-center'>
                        <span className='w-2/6 text-sm text-gray-500'>Amount</span>
                        <span className='w-4/6 text-base text-gray-600'>
                            {openOrder?.currency?.toUpperCase() === 'USD' && <>&#36;</>}
                            {openOrder?.currency?.toUpperCase() === 'INR' && <>&#8377;</>}
                            {openOrder?.totalAmount}
                            <span className='text-sm ml-3'>
                                {openOrder?.currency?.toUpperCase()}
                            </span>
                        </span>
                    </li>
                    <li className='flex items-center'>
                        <span className='w-2/6 text-sm text-gray-500'>Payment Method</span>
                        <span className='w-4/6 text-base text-gray-600'>{openOrder?.paymentMethod}</span>
                    </li>
                    <li className='flex items-center'>
                        <span className='w-2/6 text-sm text-gray-500'>Transaction ID</span>
                        <span className='w-4/6 text-base text-gray-600'>{openOrder?.transactionId}</span>
                    </li>
                    <li className='flex items-center'>
                        <span className='w-2/6 text-sm text-gray-500'>Order Source</span>
                        <span className='w-4/6 text-base text-gray-600'>{openOrder?.source}</span>
                    </li>
                    <li className='flex items-center'>
                        <span className='w-2/6 text-sm text-gray-500'>Created At</span>
                        <span className='w-4/6 text-base text-gray-600'>
                            {moment(openOrder.createdAt).format("MMM Do YYYY")}
                        </span>
                    </li>
                    <li className='text-center text-xl text-gray-500 mt-2'>
                        User
                    </li>
                    <li className='flex items-center'>
                        <span className='w-2/6 text-sm text-gray-500'>Name</span>
                        <span className='w-4/6 text-base text-gray-600'>{openOrder?.userName}</span>
                    </li>
                    <li className='flex items-center'>
                        <span className='w-2/6 text-sm text-gray-500'>Email</span>
                        <span className='w-4/6 text-base text-gray-600'>{openOrder?.userEmail}</span>
                    </li>
                    <li className='flex items-center'>
                        <span className='w-2/6 text-sm text-gray-500'>Phone Number</span>
                        <span className='w-4/6 text-base text-gray-600'>{openOrder?.phoneNumber}</span>
                    </li>
                </ul>
            </aside>
        </div>
    );
};

export default OrderDetails;