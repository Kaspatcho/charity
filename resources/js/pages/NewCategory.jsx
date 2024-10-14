import React, { useState } from 'react';
import { saveCategory } from '../services/api';

export default function NewCategory() {
    const [errors, setErrors] = useState({});

    async function submitForm({ target }) {
        const form = target.parentElement.parentElement
        try {
            await saveCategory(form)
            alert('categoria salva!')
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
                    <h3>Nova Categoria</h3>
                </div>
                <div className="card-body">
                    <form>
                        <div className="form-group mb-2">
                            <label htmlFor="category">Categoria</label>
                            <div className="input-group">
                                <input type="text" className={'form-control ' + (errors?.name && 'is-invalid')} name='name' id="name" placeholder="Nome da categoria"/>

                                <div id="nameFeedback" className="invalid-feedback">
                                    {errors?.name}
                                </div>
                            </div>
                        </div>

                        <div className="form-group mb-2">
                            <label htmlFor="recurring">Tipo</label>

                            <div className="input-group">
                                <select className={"form-select " + (errors?.type && 'is-invalid')} name='type' id="type" defaultValue=''>
                                    <option value="">Escolha o Tipo</option>
                                    <option value="expense">Despesa</option>
                                    <option value="income">Receita</option>
                                </select>

                                <div id="typeFeedback" className="invalid-feedback">
                                    {errors?.type}
                                </div>
                            </div>
                        </div>

                        <div className="d-flex flex-row justify-content-center">
                            <button type="button" className="btn btn-success btn-block" onClick={submitForm}>Adicionar Categoria</button>
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
