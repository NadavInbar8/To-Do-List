import React, { useState, useEffect } from 'react';
import './App.css';
import Form from "./components/Form";
import TodoList from './components/ToDoList';

function App() {

  const [inputText , setInputText] = useState("");
  const [todos, setTodos] = useState([]);
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
  }, [todos, status]);

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
  <h1>React To-Do List</h1>
      </header>
      <Form
       inputText={inputText}
       todos={todos}
       status={status}
       setTodos= {setTodos}
       setInputText={setInputText}
       setStatus={setStatus}
 />
      <TodoList filteredTodos={filteredTodos} todos={todos} setTodos={setTodos}/>
    </div>
  );
}

export default App;
