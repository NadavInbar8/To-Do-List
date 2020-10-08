import React, { useState } from 'react';


const Todo = ({ text, deleteFunction }) => {

    const [isComplete, setIsComplete] = useState(false);
    
    const completeFunction = () => {
        setIsComplete(!isComplete);
    }

    return(
        <div className="todo" >
         <div>
    <li className={`todo-item ${isComplete ? "completed" : ""}`}>{text}</li>
         </div>
         <div className="todo-buttons">
                <button onClick={completeFunction} className="complete-btn">
                <li className="fas fa-check"></li>
                </button>
                <button  className="duplicate-btn">
                <i className="fas fa-clone"></i>
                </button>
                <button  className="edit-btn">
                <i className="fas fa-edit"></i>
                </button>
                <button onClick={() => deleteFunction(Todo.key)} className="trash-btn">
                    <li className="fas fa-trash"></li>
                </button>  
         </div>
        </div>
    )
}
export default Todo;

