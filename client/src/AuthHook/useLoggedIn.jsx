import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const useLoggedIn = () => {
    const [isLoggedIn, setIsLoggedIn] = useState('');
    const [logout, setIsLogout] = useState(false);
    const token = localStorage.getItem('user_token');
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    useEffect(() => {
        if (logout) {
            localStorage.removeItem('user_token');
            return navigate(from, { replace: true });
        }
        if (token) {
            setIsLoggedIn(token)
        }
        else {
            setIsLoggedIn('')
        }
    }, [logout, navigate, from, token, isLoggedIn]);

    return [isLoggedIn, setIsLogout];
};

export default useLoggedIn;