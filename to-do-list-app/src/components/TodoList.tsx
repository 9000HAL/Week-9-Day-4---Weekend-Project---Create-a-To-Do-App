import TodoItem from './TodoItem';

const TodoList = ({ todos, removeTodo }) => {
  return (
    <div>
      {todos.map((todo, index) => (
        <TodoItem key={index} todo={todo} removeTodo={removeTodo} />
      ))}
    </div>
  );
}

export default TodoList;
