import React, { useEffect, useState } from "react";
import { Route, useNavigate } from "react-router-dom";
import {isAuthenticated} from "../../utils/helper";

interface ProtectedRouteProps {
    children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const checkUserToken = () => {
        if (!isAuthenticated()) {
            setIsLoggedIn(false);
            return navigate('/');
        }
        setIsLoggedIn(true);
    };

    useEffect(() => {
        checkUserToken();
    }, [isLoggedIn]);

    return <>{isLoggedIn ? children : null}</>;
};

export default ProtectedRoute;
