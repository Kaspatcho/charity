import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Transactions from './pages/Transactions';
import Categories from './pages/Categories';

export default function App() {
    return (
        <div>
            <div className="row mb-4">
                <Navbar />
            </div>
            <div className="row">
                <div className="col-xl-1 col-md-2 col-sm-3">
                    <Sidebar />
                </div>
                <div className="col-xl-11 col-md-10 col-sm-8">
                    <Router>
                        <Routes>
                            <Route path="/" element={<Dashboard />} />
                            <Route path="/transactions" element={<Transactions />} />
                            <Route path="/categories" element={<Categories />} />
                        </Routes>
                    </Router>
                </div>
            </div>
        </div>
    );
}
