import React, { useState, useEffect } from 'react';
import { getCategories, saveBudget } from '../services/api';

export default function NewBudget() {
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
            await saveBudget(form)
            alert('orçamento salvo!')
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
                    <h3>Novo Orçamento/Meta</h3>
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
                            <label htmlFor="amount">Limite</label>
                            <div className="input-group">
                                <input type="number" className={'form-control ' + (errors?.amount && 'is-invalid')} name='amount' id="amount" placeholder="Digite um valor limite" step="0.01" />

                                <div id="amountFeedback" className="invalid-feedback">
                                    {errors?.amount}
                                </div>
                            </div>
                        </div>

                        <div className="form-group mb-2">
                            <label htmlFor="start_date">Início</label>

                            <div className="input-group">
                                <input type="date" className={'form-control ' + (errors?.start_date && 'is-invalid')} name='start_date' id="start_date" />

                                <div id="startDateFeedback" className="invalid-feedback">
                                    {errors?.start_date}
                                </div>
                            </div>
                        </div>

                        <div className="form-group mb-2">
                            <label htmlFor="date">Fim</label>

                            <div className="input-group">
                                <input type="date" className={'form-control ' + (errors?.end_date && 'is-invalid')} name='end_date' id="end_date" />

                                <div id="endDateFeedback" className="invalid-feedback">
                                    {errors?.end_date}
                                </div>
                            </div>
                        </div>

                        <div className="d-flex flex-row justify-content-center">
                            <button type="button" className="btn btn-success btn-block" onClick={submitForm}>Salvar</button>
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
