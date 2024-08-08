import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ isOnline, children }) => {
    if (!isOnline) {
        return <Navigate to="/signup" replace />;
    }

    return children;
};

export default ProtectedRoute;
