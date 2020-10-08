import React from 'react';

const Form = ({ inputText , setInputText, todos, setTodos }) => {

    const inputTextHandler = (event) =>{
        setInputText(event.target.value);
    }

    const submitTodoHandler = (event) => {
        event.preventDefault();
        setTodos([
            ...todos, {inputText, completed: false, id:Math.random()*1000}
        ])
        setInputText("");
    }

    return(
        <form>
            <div className="form-div">
                <input value={inputText} onChange={inputTextHandler} type="text" className="todo-input" placeholder="Add a To-do" />
                <button onClick={submitTodoHandler} className="btn" type="submit">
                    <i className="fas fa-plus-square"></i>
                </button>
                <div className="select">
                    <select className="fillter-todo">
                        <option value="all" > All </option>
                        <option value="completed" > Completed </option>
                        <option value="uncompleted" > Uncompleted </option>
                    </select>
                </div>
            </div>
        </form>
    )
}

export default Form;
