import React, { useState, useEffect } from 'react';
import Todo from './components/Todo';
import TodoForm from './components/TodoForm';
import './App.css';

function App() {
  const [todo, setTodo] = useState([
  {
    text: "Learn about React",
    isCompleted: false
  },
  {
    text: "Meet friend for lunch",
    isCompleted: false
  },
  {
    text: "Build a todo app",
    isCompleted: false
  } 
  ]);

  useEffect(()=>{
    const todo = JSON.parse(localStorage.getItem('todo'));
    if (todo){
      setTodo(todo);
    }
  },[]);

  useEffect(()=>{
    localStorage.setItem('todo', JSON.stringify(todo));
  },[todo]);

  const addTodo = text => {
    const newTodo = [...todo, { text}];
    setTodo(newTodo);
  };

  const completedTodo = index => {
    const newTodo = [...todo];
    newTodo[index].isCompleted = true;
    setTodo(newTodo);
  };

  const removeTodo = index => {
    const newTodo = [...todo];
    newTodo.splice(index,1);
    setTodo(newTodo);
  };

  return (
    <div className="App">
      <h2>ToDo with React</h2>
      <div className="todo-list">
        {todo.map((todo, index) =>(
          <Todo 
            key={index} 
            index={index} 
            todo={todo}
            completedTodo={completedTodo}
            removeTodo={removeTodo}
          />
        ))}
        <TodoForm addTodo={addTodo}/>
      </div>
    </div>
  );
}

export default App;
