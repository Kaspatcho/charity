import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Transactions from './pages/Transactions';
import Categories from './pages/Categories';
import Budgets from './pages/Budgets';
import NewTransaction from './pages/NewTransaction';
import NewCategory from './pages/NewCategory';

export default function App() {
    return (
        <div>
            <div className="row mb-5">
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
                            <Route path="/budgets" element={<Budgets />} />
                            <Route path="/transaction/new" element={<NewTransaction />} />
                            <Route path="/category/new" element={<NewCategory />} />
                        </Routes>
                    </Router>
                </div>
            </div>
        </div>
    );
}
