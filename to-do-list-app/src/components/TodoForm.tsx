import React, { useRef } from 'react';

const TodoForm = ({ addTodo }) => {
  const todoInput = useRef(null); // Using uncontrolled component

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todoInput.current.value) {
      addTodo(todoInput.current.value);
      todoInput.current.value = ""; // Clear input
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
