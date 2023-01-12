import moment from 'moment/moment';
import React from 'react';
import useGetOrders from '../../api/useGetOrders';
import PageTitle from '../Shared/PageTitle';

const OrderHistory = () => {
    const [orderData, loading] = useGetOrders();

    if (loading) {
        return <div>
            Loading...
        </div>
    }

    return (<>
        <PageTitle title='Order History'></PageTitle>
        <div className='w-full bg-white text-gray-700 p-6 mx-2 rounded-md'>
            <h1 className='md:text-[40px] text-3xl text-center pb-3 text-accent font-medium'>Order History</h1>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr className='text-base font-medium'>
                            <th className='py-3 text-start'>Service Name</th>
                            <th className='py-3 text-start'>Amount</th>
                            <th className='py-3 text-start'>Transaction Id</th>
                            <th className='py-3 text-start'>Payment Method</th>
                            <th className='py-3 text-start'>Date</th>
                        </tr>
                    </thead>
                    <tbody className=''>
                        {
                            orderData.map(data => <tr key={data._id} className='text-sm font-medium text-gray-500'>
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
                                <td className='py-2 pr-3 border-t font-normal'>{data.paymentMethod}</td>
                                <td className='py-2 pr-3 border-t font-normal'>{moment(data.createdAt).format("MMM Do YY")}</td>
                            </tr>)
                        }
                    </tbody >
                </table>
            </div>
        </div>
    </>);
};

export default OrderHistory;