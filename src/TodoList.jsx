function TodoList() {
  
const todoList = [
    { id: 1, title: "Finish lesson 1" },
    { id: 2, title: "Start lesson 2" },
    { id: 3, title: "Turn in both assignments" }
  ];

  return (
    <ul>
      {todoList.map((todo) => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </ul>
  );
}

export default TodoList;