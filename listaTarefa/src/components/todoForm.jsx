import React from "react";

const todoForm = () => {
    return (
        <div className="todo-form">
            <h2>Cria nova tarefa</h2>
            <form>
                <input type="text" placeholder="Digite o título"/>
                <select>
                    <option value="">Selecione uma opção</option>
                    <option value="Trabalho">Trabalho</option>
                    <option value="Pessoal">Pessoal</option>
                    <option value="Estudos">Estudos</option>
                </select>
                <button type="submit">Criar tarefa</button>
            </form>
        </div>
    )
}

export default todoForm