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
        <Table title='Transações Recentes'
            head={['Categoria', 'Tipo', 'Valor', 'Data', 'Recorrente?', 'Descrição']}
        >
            {
                transactions.map((row, index) =>
                    <tr key={index}>
                        <td key={`category${index}`}>{row.category.name}</td>
                        <td key={`type${index}`}>
                            {row.category.type == 'expense' ? 'Despesa' : 'Receita'}
                        </td>
                        <td key={`amount${index}`} style={{ color: row.category.type == 'expense' ? 'red' : 'black' }}>
                            {row.category.type == 'expense' && '-'}
                            {
                                parseFloat(row.amount).toLocaleString('pt-BR',{
                                    style: "currency",
                                    currency: row.author.currency,
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
