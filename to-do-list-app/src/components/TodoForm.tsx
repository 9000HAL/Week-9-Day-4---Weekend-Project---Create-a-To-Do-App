import React, { useRef } from 'react';

const TodoForm = ({ addTodo }) => {
  const todoInput = useRef(null); // using uncontrolled component

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todoInput.current.value) {
      addTodo(todoInput.current.value);
      todoInput.current.value = ""; // clear input
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input ref={todoInput} placeholder="Add a to-do item" />
      <button type="submit">Add</button>
    </form>
  );
}

export default TodoForm;
