import React from 'react';

export default function Sidebar() {
    return (
        <div className="d-flex flex-column justify-content-center">
            <a href="/">
                <p className="p-2">Dashboard</p>
            </a>

            <a href="/transactions">
                <p className="p-2">Transactions</p>
            </a>

            <a href="/categories">
                <p className="p-2">Categories</p>
            </a>
        </div>
    );
}
