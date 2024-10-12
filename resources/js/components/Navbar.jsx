import React from 'react';

export default function Navbar() {
    return (
        <div className="d-flex flex-row justify-content-between">
            <strong>Charity</strong>
            <a href="/logout">Log out</a>
        </div>
    );
}
