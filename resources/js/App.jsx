import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';

export default function App() {
    return (
        <div>
            <div className="row mb-4">
                <Navbar />
            </div>
            <div className="row">
                <div className="col-1">
                    <Sidebar />
                </div>
                <div className="col-8">
                    <Router>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/dashboard" element={<Dashboard />} />
                        </Routes>
                    </Router>
                </div>
            </div>
        </div>
    );
}
