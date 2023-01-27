import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useGetUser from '../api/useGetUser';

const RequireAdmin = ({ children }) => {
    const [userData, loading] = useGetUser();
    const location = useLocation();

    if (loading) {
        return <div className='fixed inset-0 z-50 w-screen h-screen flex items-center justify-center bg-white/70 text-gray-600'>
            Loading...
        </div>
    };

    if (userData?.role !== 'admin') {
        localStorage.removeItem('user_token');
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return children;
};

export default RequireAdmin;