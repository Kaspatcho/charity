import React from 'react';

export default function Navbar() {
    return (
        <div className="d-flex flex-row justify-content-between navbar mb-2 px-4">
            <strong>Charity</strong>
            <a href="/logout">Sair</a>
        </div>
    );
}
