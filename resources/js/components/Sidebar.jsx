import React from 'react';

export default function Sidebar() {
    return (
        <div className="d-flex flex-column justify-content-center">
            <a href="/">
                <p className="p-2">Home</p>
            </a>

            <a href="/dashboard">
                <p className="p-2">Dashboard</p>
            </a>
        </div>
    );
}
