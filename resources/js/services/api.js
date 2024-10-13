import axios from "axios";

export async function getTransactions() {
    return (await axios.get('/api/transactions')).data;
}
