import React, { useState, useEffect } from 'react';
import Table from '../components/Table';
import { getTransactions } from '../services/api';

export default function Transactions() {
    const [transactions, setTransactions] = useState([]);
    useEffect(() => {
        async function fetchData() {
            const transactions = await getTransactions()
            setTransactions(transactions)
        }
        fetchData()
    }, []);

    return (
        <Table head={['Categoria', 'Tipo', 'Valor', 'Data', 'Recorrente?', 'Descrição']}>
            {
                transactions.map((row, index) =>
                    <tr key={index}>
                        <td key={`category${index}`}>{row.category}</td>
                        <td key={`type${index}`}>
                            {row.type == 'expense' ? 'Despesa' : 'Receita'}
                        </td>
                        <td key={`amount${index}`} style={{ color: row.type == 'expense' ? 'red' : 'black' }}>
                            {row.type == 'expense' && '-'}
                            {
                                parseFloat(row.amount).toLocaleString('pt-BR',{
                                    style: "currency",
                                    currency: row.currency,
                                })
                            }
                        </td>
                        <td key={`date${index}`}>{row.date}</td>
                        <td key={`recurring${index}`}>
                            {row.recurring ? 'SIM' : 'NÃO'}
                        </td>
                        <td key={`description${index}`}>{row.description}</td>
                    </tr>
                )
            }
        </Table>
    );
}
