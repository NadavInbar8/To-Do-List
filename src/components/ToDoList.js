import React from 'react';
import Todo from "./Todo";

const TodoList = ({ todos, setTodos, filteredTodos, deleteFunction}) => {

    return(
        <div className="todo-container">
            <ul className="todo-list">
            {filteredTodos.map((todo) => (
                    <Todo
                         key={todo.id} 
                         text={todo.inputText}
                         deleteFunction={deleteFunction}
                    />
                ))} 

            </ul>
        </div>
    )
}
export default TodoList;
