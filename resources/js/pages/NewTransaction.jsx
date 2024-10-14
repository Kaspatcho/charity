import React, { useState, useEffect } from 'react';
import { getCategories, saveTransaction } from '../services/api';

export default function NewTransaction() {
    const [categories, setCategories] = useState([]);
    const [errors, setErrors] = useState({});

    useEffect(() => {
        async function fetchData() {
            const categories = await getCategories()
            setCategories(categories)
        }
        fetchData()
    }, []);

    async function submitForm({ target }) {
        const form = target.parentElement.parentElement
        try {
            await saveTransaction(form)
            alert('transação salva!')
            form.reset()
        } catch (error) {
            console.log(error)
            const { response: { data: { errors } } } = error
            setErrors(errors)
        }
    }

    return (
        <div className="container">
            <div className="card">
                <div className="card-header text-center">
                    <h3>Nova Transação</h3>
                </div>
                <div className="card-body">
                    <form>
                        <div className="form-group mb-2">
                            <label htmlFor="category">Categoria</label>
                            <div className="input-group">
                                <select className={"form-select " + (errors?.category && 'is-invalid')} name='category' id="category" defaultValue=''>
                                    <option value="" disabled>Selecione uma categoria</option>
                                    {categories.map(v =>
                                        <option key={'category_option_' + v.id} value={v.id}>{v.name}</option>
                                    )}
                                </select>

                                <div id="categoryFeedback" className="invalid-feedback">
                                    {errors?.category}
                                </div>
                            </div>
                        </div>

                        <div className="form-group mb-2">
                            <label htmlFor="amount">Valor</label>
                            <div className="input-group">
                                <input type="number" className={'form-control ' + (errors?.amount && 'is-invalid')} name='amount' id="amount" placeholder="Digite um valor" step="0.01" />

                                <div id="amountFeedback" className="invalid-feedback">
                                    {errors?.amount}
                                </div>
                            </div>
                        </div>

                        <div className="form-group mb-2">
                            <label htmlFor="date">Data da Transição</label>

                            <div className="input-group">
                                <input type="date" className={'form-control ' + (errors?.date && 'is-invalid')} name='date' id="date" />

                                <div id="dateFeedback" className="invalid-feedback">
                                    {errors?.date}
                                </div>
                            </div>
                        </div>

                        <div className="form-group mb-2">
                            <label htmlFor="recurring">Recorrente</label>

                            <div className="input-group">
                                <select className={"form-select " + (errors?.recurring && 'is-invalid')} name='recurring' id="recurring" defaultValue='0'>
                                    <option value="0">Não</option>
                                    <option value="1">Sim</option>
                                </select>

                                <div id="recurringFeedback" className="invalid-feedback">
                                    {errors?.recurring}
                                </div>
                            </div>
                        </div>
                        <div className="form-group mb-2">
                            <label htmlFor="description">Descrição</label>

                            <div className="input-group">
                                <textarea className={'form-control ' + (errors?.description && 'is-invalid')} name='description' id="description" rows="3" placeholder="Digite uma descrição breve para essa transição"></textarea>

                                <div id="dateFeedback" className="invalid-feedback">
                                    {errors?.description}
                                </div>
                            </div>

                        </div>
                        <div className="d-flex flex-row justify-content-center">
                            <button type="button" className="btn btn-success btn-block" onClick={submitForm}>Salvar Transição</button>
                        </div>
                    </form>
                </div>
                <div className="card-footer text-center">
                    <small className="text-muted">Cuide das suas finanças!</small>
                </div>
            </div>
        </div>
    )
}
