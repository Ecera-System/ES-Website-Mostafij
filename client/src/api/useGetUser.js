import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const useGetUser = () => {
    const [userData, setUserData] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_V1_URL}/user/single`, {
            method: 'GET',
            headers: {
                'Authorization': localStorage.getItem('user_token')
            }
        })
            .then(res => {
                setUserData(res.data);
                setLoading(false)
            })
            .catch(err => {
                setLoading(false);
                if (err?.response?.data?.notExist) {
                    localStorage.removeItem('user_token');
                    return navigate('/login');
                }
            });
    }, [userData, navigate]);

    return [userData, loading];
};

export default useGetUser;