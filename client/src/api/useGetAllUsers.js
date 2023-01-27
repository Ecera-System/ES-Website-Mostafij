import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const useGetAllUsers = () => {
    const [allUsers, setAllUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_V1_URL}/admin/user`, {
            method: 'GET',
            headers: {
                'Authorization': localStorage.getItem('user_token')
            }
        })
            .then(res => {
                setAllUsers(res.data);
                setLoading(false)
            })
            .catch(err => {
                setLoading(false);
                if (err?.response?.data?.notExist) {
                    localStorage.removeItem('user_token');
                    return navigate('/login');
                }
            });
    }, [allUsers, navigate]);

    return [allUsers, loading];
};

export default useGetAllUsers;