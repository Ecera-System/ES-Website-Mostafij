import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const useGetAllOrders = (data) => {
    const [allOrderData, setAllOrderData] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_V1_URL}/admin/services-order?orderIds=${data}`, {
            method: 'GET',
            headers: {
                'Authorization': localStorage.getItem('user_token')
            }
        })
            .then(res => {
                setAllOrderData(res.data);
                setLoading(false)
            })
            .catch(err => {
                setLoading(false);
                if (err?.response?.data?.logout) {
                    localStorage.removeItem('user_token');
                    return navigate('/login');
                }
            });
    }, [data, allOrderData, navigate]);

    return [allOrderData, loading];
};

export default useGetAllOrders;