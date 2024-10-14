import React from 'react';

export default function Table({ head, children, title="Tabela" }) {
    return (
        <div className="container mt-5">
            <h3 className="text-center mb-4">{title}</h3>
            <div className="table-responsive">
                <table className="table table-bordered table-striped">
                    <thead className="thead-dark">
                        <tr>
                            {head.map((field, i) => <th key={i}>{field}</th>)}
                        </tr>
                    </thead>
                    <tbody>
                        { children }
                    </tbody>
                </table>
            </div>
        </div>
    );
}
