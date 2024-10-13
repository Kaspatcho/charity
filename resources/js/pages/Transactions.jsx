import React, { useState, useEffect } from 'react';
import Table from '../components/Table';
import { getTransactions } from '../services/api';

export default function Transactions() {
    const [transactions, setTransactions] = useState([]);
    useEffect(() => {
        async function fetchData() {
            const t = await getTransactions()
            setTransactions(t.map(v => {
                let amount = v.type == 'expense' ? -v.amount : v.amount
                amount = parseFloat(amount).toLocaleString('pt-BR', { style: "currency", currency: v.currency, });
                return {
                    ...v, recurring: v.recurring ? 'SIM' : 'NÃO',
                    type: v.type == 'expense' ? 'Despesa' : 'Receita',
                    amount,
                }
            }))
        }
        fetchData()
    }, []);

    return (
        <Table
            head={['Categoria', 'Tipo', 'Valor', 'Data', 'Recorrente?', 'Descrição']}
            keys={['category', 'type', 'amount', 'date', 'recurring', 'description']}
            data={transactions}
        />
    );
}
