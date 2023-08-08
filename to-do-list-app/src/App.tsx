import './App.css'
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import EncouragementButton from './components/EncouragementButton';

const App = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  }

  const removeTodo = (todoToRemove) => {
    setTodos(todos.filter(todo => todo !== todoToRemove));
  }

  return (
    <div>
      <Navbar />
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} removeTodo={removeTodo} />
      <EncouragementButton />
    </div>
  );
}

export default App;
