import React, { useState } from "react";
import logo from './logo.svg';
import './App.css';
import TodoForm from "/react-amplify-app/src/components/TodoForm.js"
import TodoList from "/react-amplify-app/src/components/TodoList.js"

function App() {
  const [todos, setTodos] = useState([]);
  
  function addTodo(todo){
    setTodos([todo,...todos]);
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <p>Todo</p>
        <TodoForm addTodo={addTodo}/>
        <TodoList todos={todos} />
      </header>
    </div>
  );
}

export default App;

