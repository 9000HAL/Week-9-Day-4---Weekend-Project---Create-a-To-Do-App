const TodoItem = ({ todo, removeTodo }) => {
    return (
      <div>
        {todo}
        <button onClick={() => removeTodo(todo)}>Remove</button>
      </div>
    );
  }
  
  export default TodoItem;
  