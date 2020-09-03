import React from 'react';
import '../App.css';

function Todo({todo, index, completedTodo,removeTodo}) {
    return (
        <div 
            className="todo"
            style={{ textDecoration: todo.isCompleted ? "line-through" : ""}}
        >
            {todo.text}

            <div>
                <button onClick={()=>completedTodo(index)}>Complete</button>
                <button onClick={()=>removeTodo(index)}>x</button>
            </div>
        </div>
    );
}
export default Todo;