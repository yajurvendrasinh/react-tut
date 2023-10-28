import './styles.css';
import { useEffect, useState } from 'react';

function TaskSchedular() {
  const [taskTodo, setTaskTodo] = useState([]);
  const [taskInProgress, setTaskInProgress] = useState([]);
  const [taskCompleted, setTaskCompleted] = useState([]);

  const createTask = () => {
    let newTask = {
      id: Math.ceil(Math.random() * 25).toString(),
      expectedTime: 3000,
    };
    setTaskTodo((prevTask) => [...prevTask, newTask]);
  };

  let todoQueue = taskTodo.map((task) => {
    return (
      <div key={task.id} className='queue-task to-do'>
        {task.id}
      </div>
    );
  });

  const shiftTask = () => {
    let changedItem;

    if (taskInProgress.length < 2) {
      changedItem = taskTodo.shift();

      setTaskTodo(taskTodo);
      setTaskInProgress((currentTask) => [...currentTask, changedItem]);
    } else {
      changedItem = taskInProgress.shift();
      setTaskInProgress(taskInProgress);
      setTaskCompleted((completedTask) => [...completedTask, changedItem]);
    }
  };

  let progressQueue = taskInProgress.map((task) => {
    return (
      <div key={task.id} className='queue-task in-progress'>
        {task.id}
      </div>
    );
  });

  let completedQueue = taskCompleted.map((task) => {
    return (
      <div key={task.id} className='queue-task completed'>
        {task.id}
      </div>
    );
  });

  return (
    <div className='container'>
      <div className='row'>
        <div className='queue'>{todoQueue}</div>
        <div className='queue'>{progressQueue}</div>
        <div className='queue'>{completedQueue}</div>
      </div>
      <div className='row'>
        <button onClick={createTask}>Create task</button>
        <button onClick={shiftTask}>Shift To Next</button>
      </div>
    </div>
  );
}

export default TaskSchedular;
