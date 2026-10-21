import TodoListItem from './TodoListItem';

function TodoListItemProps({ todoList }) {
  return (
    <ul>
      {todoList.map((todo) => (
        <TodoListItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
}

export default TodoListItemProps;
