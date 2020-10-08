import React, { useState, useEffect } from 'react';
import './App.css';
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {

  // save the todos in array:
  const [todos, setTodos] = useState([]);

  // input text of each todo:
  const [inputText, setInputText] = useState("");

  // status if completed to the filter
  const [status , setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);


  useEffect(() =>{
    getLocalStorage();
  },[]);

  useEffect(() => {
    const filterHandler = () => {
      switch(status){
        case 'completed':
          setFilteredTodos(todos.filter(todo => todo.completed === true));
          break;
        case 'uncompleted':
          setFilteredTodos(todos.filter(todo => todo.completed === false));
          break;
        default:
            setFilteredTodos(todos);
            break;
      }
  
    }
    filterHandler();
    saveLocalStorage();
  });


  const saveLocalStorage = () => {
      localStorage.setItem('todos', JSON.stringify(todos));
  }

  const getLocalStorage = () => {
    if(localStorage.getItem('todos') == null){
      localStorage.setItem('todos', JSON.stringify([]));
    }
    else {
      let LocalData = JSON.parse(localStorage.getItem('todos'));
      setTodos(LocalData);
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>react todo list v2</h1>
      </header>
      <Form 
      inputText={inputText}
      todos={todos}
      setInputText={setInputText}
      setTodos={setTodos}
      />
      <TodoList 
      todos={todos}
      setTodos={setTodos}
      filteredTodos={filteredTodos}
      setFilteredTodos={setFilteredTodos}
      />

    </div>
  );
}

export default App;
