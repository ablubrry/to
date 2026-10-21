import { useState } from 'react';
import TodoList from './TodoList';
import './App.css';

const todos = [
  { id: 1, title: "Finish lesson 1" },
  { id: 2, title: "Start lesson 2" },
  { id: 3, title: "Turn in both assignments" }
];

function App() {
  const [todoList, setTodoList] = useState(todos);

  return (
    <div>
      <h1>Todo List</h1>
      <TodoList todoList={todoList} />
    </div>
  );
}

export default App;
