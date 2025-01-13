import { useState } from 'react';
import Todo from './components/todo';
import TodoForm from './components/todoForm';
import './app.css';

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Criar funcionalidade x",
      categoria: "(Trabalho)",
      isCompleted: false,
    },
    {
      id: 2,
      text: "Ir para a academia",
      categoria: "(Pessoal)",
      isCompleted: true,
    },
    {
      id: 3,
      text: "Estudar React",
      categoria: "(Estudos)",
      isCompleted: false,
    },

  ]);
  const addTodo = (text,categoria) => {
      const newTodo = [...todos,{
      id: Math.floor(Math.random() * 10000),
      text,
      categoria,
      isCompleted: false
    },];

    setTodos(newTodo)
  }

  const removeTodo = (id) => {
    const newTodo = [...todos]
    const filteredTodos = newTodo.filter((todo) => todo.id !== id ? todo : null)
    setTodos(filteredTodos)
  }

  const completeTodo = (id) => {
    const newTodo = [...todos]
    newTodo.map((todo) => todo.id === id ? todo.Iscompleted = !todo.Iscompleted : todo)
    setTodos(newTodo)
  }

  return (
    <div className='app'>
      <h1>Lista de tarefas</h1>
      <div className="todo-list">
        {todos.map((todo) => (
          <Todo key={todo.id} todo = {todo} removeTodo= {removeTodo} completeTodo = {completeTodo}/>
        ))}
      </div>
      <TodoForm addTodo={addTodo}/>
    </div>
  )
}

export default App
