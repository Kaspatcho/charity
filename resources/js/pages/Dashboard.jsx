import React, { useState, useEffect } from 'react';
import Progress from '../components/Progress';
import { getBudgetProgress, getBalance } from '../services/api';

export default function Dashboard() {
    const [budgets, setBudgets] = useState([]);
    const [balance, setBalance] = useState(0);
    useEffect(() => {
        async function fetchData() {
            const budgets = await getBudgetProgress()
            const balance = await getBalance()
            setBalance(balance)
            setBudgets(budgets)
        }
        fetchData()
    }, []);

    return (
        <div className="container">
            <div className='d-flex flex-column'>
                <div className="d-flex flex-row justify-content-between align-items-center mb-3 mt-2">
                    <h3>Saldo:</h3>
                    <h5 className={balance < 0 ? 'text-danger' : ''}>
                        {
                            parseFloat(balance).toLocaleString('pt-BR', {
                                style: "currency",
                                currency: budgets[0]?.author.currency ?? 'USD',
                            })
                        }
                    </h5>
                </div>

                <h3>Orçamentos/Metas</h3>
                <hr />
                {budgets
                    .sort((a, b) => (b.total / b.amount) - (a.total / a.amount))
                    .map((row, index) =>
                        <div className='mb-3' key={'div' + index}>
                            <div className="d-flex flex-row justify-content-between align-items-center">
                                <h3 key={'h3' + index}>{row.category.name}</h3>
                                <span className='text-secondary'>
                                    {
                                        parseFloat(row.total).toLocaleString('pt-BR', {
                                            style: "currency",
                                            currency: row.author.currency,
                                        })
                                    } /
                                    {
                                        parseFloat(row.amount).toLocaleString('pt-BR', {
                                            style: "currency",
                                            currency: row.author.currency,
                                        })
                                    }
                                </span>
                            </div>
                            <Progress
                                key={'progress' + index}
                                value={row.total} max={row.amount}
                                mustGrow={row.category.type == 'income'}
                                >
                                {(row.total / row.amount * 100).toFixed(2)}%
                            </Progress>
                        </div>
                    )}
            </div>
        </div>
    );
}
