import {useState} from "react";

const todoForm = ({addTodo}) => {
    const [value, setValue] = useState("")
    const [categoria, setCategoria] = useState("")
    const handleSubmit = (e) => {
        e.preventDefault()
        if(!value || !categoria) {return}
        addTodo(value, categoria)
        setValue("")
        setCategoria("") 
    }

    return (
        <div className="todo-form">
            <h2>Cria nova tarefa</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" value={value} placeholder="Digite o título" onChange={(e) => setValue(e.target.value)}/>
                <select value={categoria} onChange={(e) => setCategoria(e.target.value)}>
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