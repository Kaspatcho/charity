import React from 'react';

export default function Sidebar() {
    return (
        <div className="d-flex flex-column justify-content-center sidebar">
            <a href="/">
                <p className="p-2">Painel</p>
            </a>

            <a href="/transactions">
                <p className="p-2">Transações</p>
            </a>

            <a href="/categories">
                <p className="p-2">Categorias</p>
            </a>

            <a href="/budgets">
                <p className="p-2">Orçamentos</p>
            </a>
        </div>
    );
}
