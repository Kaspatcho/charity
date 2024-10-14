import React, { useState, useEffect } from 'react';
import Table from '../components/Table';
import { getBudgets } from '../services/api';

export default function Budgets() {
    const [budgets, setBudgets] = useState([]);
    useEffect(() => {
        async function fetchData() {
            const budgets = await getBudgets()
            setBudgets(budgets)
        }
        fetchData()
    }, []);

    return <Table title='Orçamentos'
            head={['Categoria', 'Limite', 'Início', 'Fim']}
        >
        {budgets.map((row, index) =>
            <tr key={index}>
                <td key={`category${index}`}>{row.category.name}</td>
                <td key={`amount${index}`}>
                    {
                        parseFloat(row.amount).toLocaleString('pt-BR',{
                            style: "currency",
                            currency: row.author.currency,
                        })
                    }
                </td>
                <td key={`start${index}`}>{row.start_date}</td>
                <td key={`end${index}`}>{row.end_date}</td>
            </tr>
        )}
    </Table>
}
