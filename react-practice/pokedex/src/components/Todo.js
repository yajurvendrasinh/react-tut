import { useState, useRef } from 'react';

function Todo({ todos, addtask }) {
  const todoInput = useRef();

  const todoList = todos.map((task, index) => {
    return (
      <li key={index}>
        <span>{task.id} </span>
        {task.task}
      </li>
    );
  });

  const theTask = (e) => {
    return todoInput.current.value;
    // console.log(todoInput.current.value);
  };
  addtask(theTask);

  return (
    <div>
      <h1>Todo :</h1>
      <input type='text' ref={todoInput} />
      <button onClick={theTask}>Add Task</button>
      <button>Clear List</button>
      <div>
        <h5>Todo Left:</h5>
        {todoList}
      </div>
    </div>
  );
}

export default Todo;
