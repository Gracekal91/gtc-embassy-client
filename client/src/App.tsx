import React from 'react';
import './assests/scss/app.scss';
import Auth from './pages/Auth';
import {Routes, Route} from 'react-router-dom';
import {DashboardEm} from "./pages/employee/DashboardEm";
import Loader from "./components/shared/Loader";

function App() {
  return (
    <div className="app">
        <Routes>
            <Route path='/' element={<Auth />} />
            <Route path='/dashboard-em' element={<DashboardEm />} />
        </Routes>
    </div>
  );
}

export default App;
