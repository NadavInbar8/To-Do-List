import React from 'react';

const Todo = ({ text, todos , setTodos, todo }) => {

    const deleteFunction =() => {
        setTodos(todos.filter((el) => el.id !== todo.id));
    };
    const completeFunction = () => {
        setTodos( todos.map( item => {
            if(item.id === todo.id){
                return{
                    ...item, completed: !item.completed
                }
            }
            return item;
        }))
    };

    const duplicateFunction = () => {
        console.log(todo);
        const newTodo = {inputText: todo.inputText, completed: todo.completed, id: Math.random()*1000};
        const newTodos = todos.slice();
        newTodos.push(newTodo);
        setTodos(newTodos);
    };

    return(
        <div className="todo">
            <li className={`todo-item ${todo.completed ? "completed" : ""}`}> {text} </li>
            <button onClick={completeFunction} className="complete-btn">
                <li className="fas fa-check"></li>
            </button>
            <button onClick={deleteFunction} className="trash-btn">
                <li className="fas fa-trash"></li>
            </button>
            <button onClick={duplicateFunction} className="duplicate-btn">
            <i class="fas fa-clone"></i>
            </button>
        </div>
    )
}
export default Todo;