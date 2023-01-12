import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const useGetOrders = () => {
    const [orderData, setOrderData] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_V1_URL}/payment/order`, {
            method: 'GET',
            headers: {
                'Authorization': localStorage.getItem('user_token')
            }
        })
            .then(res => {
                setOrderData(res.data);
                setLoading(false)
            })
            .catch(err => {
                setLoading(false);
                if (err?.response?.data?.logout) {
                    localStorage.removeItem('user_token');
                    return navigate('/login');
                }
            });
    }, [ orderData, navigate]);

    return [orderData, loading];
};

export default useGetOrders;