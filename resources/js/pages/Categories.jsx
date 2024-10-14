import React, { useState, useEffect } from 'react';
import Table from '../components/Table';
import { getCategories } from '../services/api';

export default function Categories() {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        async function fetchData() {
            const categories = await getCategories()
            setCategories(categories)
        }
        fetchData()
    }, []);

    return <Table head={['Categoria', 'Tipo']}>
        {categories.map((row, index) =>
            <tr key={index}>
                <td key={`name${index}`}>{row.name}</td>
                <td key={`type${index}`}>
                    {row.type == 'expense' ? 'Despesa' : 'Receita'}
                </td>
            </tr>
        )}
    </Table>
}
