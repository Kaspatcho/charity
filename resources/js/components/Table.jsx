import React from 'react';

export default function Table({ head, keys, data }) {
    return (
        <div className="container mt-5">
            <h3 className="text-center mb-4">Transações Recentes</h3>
            <div className="table-responsive" style={{maxHeight: '70vh', overflowY: 'scroll'}}>
                <table className="table table-bordered table-striped">
                    <thead className="thead-dark">
                        <tr>
                            {head.map((field, i) => {
                                return <th key={i}>{field}</th>
                            })}
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((row, rowIndex) => {
                            return <tr key={rowIndex}>
                                {
                                    keys.map((key, keyIndex) => {
                                        return <td key={keyIndex}>{row[key]}</td>
                                    })
                                }
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
