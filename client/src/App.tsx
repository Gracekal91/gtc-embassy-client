import React, { useEffect, useRef } from 'react';
import './assests/scss/app.scss';
import Auth from './pages/Auth';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { DashboardEm } from './pages/employee/DashboardEm';
import Loader from './components/shared/Loader';
import {Visas} from "./pages/employee/Visas";
import {VisaDetail} from "./pages/employee/VisaDetail";


function App() {
    const isAuthorized = sessionStorage.getItem('isAuth');
    const location = useLocation();

    const redirectComponentRef = useRef(null);

    useEffect(() => {
        if (isAuthorized) {
            if (location.state && location.state.from) {
                // Set the redirect component for Navigate
                // @ts-ignore
                redirectComponentRef.current = <Navigate to={location.state.from} />;
            } else {
                // @ts-ignore
                redirectComponentRef.current = <Navigate to="/dashboard-em" />;
            }
        }
    }, [isAuthorized, location]);

    // Provide a default redirection option in case redirectComponentRef.current is null
    const defaultRedirect = <Navigate to="/dashboard-em" />;

    return (
        <div className="app">
            <Routes>
                {<Route path="/" element={<Auth LoggedIn={isAuthorized}/> } />}
                <Route path="/dashboard-em" element={<DashboardEm />} />
                <Route path="/visas" element={<Visas />}/>
                <Route path="/visas/:id" element={ <VisaDetail/> }/>
            </Routes>
        </div>
    );
}

export default App;
