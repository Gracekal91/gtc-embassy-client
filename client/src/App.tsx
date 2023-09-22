import React, { useEffect, useRef } from 'react';
import './assests/scss/app.scss';
import Auth from './pages/Auth';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { DashboardEm } from './pages/employee/DashboardEm';
import Loader from './components/shared/Loader';
import {Visas} from "./pages/employee/Visas";
import {VisaDetail} from "./pages/employee/VisaDetail";
import ProtectedRoute from "./components/shared/Protected";
import {isAuthenticated} from "./utils/helper";
import {ClientFormPage} from "./pages/client/ClientFormPage";
import {ApplicationLandingPage} from "./pages/client/ApplicationLandingPage";

function App() {
    const isLoggedIn: boolean = isAuthenticated();
    const location = useLocation();
    const redirectComponentRef = useRef(null);

    useEffect(() => {
        if (isLoggedIn) {
            if (location.state && location.state.from) {
                // Set the redirect component for Navigate
                // @ts-ignore
                redirectComponentRef.current = <Navigate to={location.state.from} />;
            } else {
                // @ts-ignore
                redirectComponentRef.current = <Navigate to="/dashboard-em" />;
            }
        }
    }, [isLoggedIn, location]);

    // Provide a default redirection option in case redirectComponentRef.current is null
    const defaultRedirect = <Navigate to="/dashboard-em" />;

    // @ts-ignore
    return (
        <div className="app">
            <Routes>
                {<Route path="/" element={<Auth LoggedIn={isLoggedIn}/> } />}
                <Route path='dashboard-em' element={
                <ProtectedRoute>
                    <DashboardEm />
                </ProtectedRoute>
                } />
                <Route path="/visas" element={<Visas />}/>
                <Route path="/visas/:id" element={ <VisaDetail/> }/>
                <Route path='/applications' element={<ApplicationLandingPage /> }/>
                <Route path='/applications/visa' element={<ClientFormPage /> }/>
            </Routes>
        </div>
    );
}

export default App;
