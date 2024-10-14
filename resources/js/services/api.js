import axios from "axios";

export async function getTransactions() {
    return (await axios.get('/api/transactions')).data;
}

export async function getCategories() {
    return (await axios.get('/api/categories')).data;
}

export async function getBudgets() {
    return (await axios.get('/api/budgets')).data;
}

export async function getBudgetProgress() {
    return (await axios.get('/api/budgets/progress')).data;
}

export async function getBalance() {
    return (await axios.get('/api/balance')).data;
}

export async function saveTransaction(form) {
    return (await axios.post('/api/transaction', form, { headers: { 'Content-Type': 'application/json' } }));
}

export async function saveCategory(form) {
    return (await axios.post('/api/category', form, { headers: { 'Content-Type': 'application/json' } }));
}

export async function saveBudget(form) {
    return (await axios.post('/api/budget', form, { headers: { 'Content-Type': 'application/json' } }));
}
