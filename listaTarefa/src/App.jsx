import { useState } from 'react';
import Todo from './components/todo';
import TodoForm from './components/todoForm';
import './app.css';

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Criar funcionalidade x",
      categoria: "trabalho",
      isCompleted: false,
    },
    {
      id: 2,
      text: "Ir para a academia",
      categoria: "pessoal",
      isCompleted: true,
    },
    {
      id: 3,
      text: "Estudar React",
      categoria: "estudos",
      isCompleted: false,
    },

  ]);

  return (
    <div className='app'>
      <h1>Lista de tarefas</h1>
      <div className="todo-list">
        {todos.map((todo) => (
          <Todo key={todo.id} todo = {todo}/>
        ))}
      </div>
      <TodoForm />
    </div>
  )
}

export default App
