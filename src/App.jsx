import './App.css';
import TodoList from './TodoList.jsx';
import TodoForm from './TodoForm.jsx';

function App() {
  return (
    <div>
      <h1>Tasks to Do</h1>
      <TodoForm />
      <TodoList />
    </div>
  );
import './App.css'
function App() {
const todoList = [
{id: 1, title: "Finish lesson 1"},
{id: 2, title: "Start lesson 2"},
{id: 3, title: "Turn in both assignments"}
]

  return (
    <div>
      <h1>Tasks to Do</h1>
      <ul>
        {todoList.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul> 
    </div>
  )
}

export default App;