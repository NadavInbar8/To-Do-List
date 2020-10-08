import React from 'react';
import Todo from "./Todo";

const TodoList = ({ todos, setTodos, filteredTodos, deleteFunction}) => {

    const deleteFunction = () => {
        setTodos(todos.filter((e) => e.id !== todo.id))
    }

    return(
        <div className="todo-container">
            <ul className="todo-list">
            {filteredTodos.map((todo) => (
                    <Todo
                         id={todo.id} 
                         text={todo.inputText}
                         deleteFunction={deleteFunction}
                    />
                ))} 

            </ul>
        </div>
    )
}
export default TodoList;
