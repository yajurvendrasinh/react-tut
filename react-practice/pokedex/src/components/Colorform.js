import { useState } from 'react';
import Colorpaltte from './Colorpaltte';
import CustomButton from './CustomButton';

const Colorform = () => {
  const [userTask, setUserTask] = useState('');
  const [chosenColor, setChosenColor] = useState('');
  const [taskError, setTaskError] = useState(false);
  const [coloError, setColorError] = useState(false);

  function handleInputChange(e) {
    setUserTask(e.target.value);
  }

  function chooseColor(colorName) {
    console.log('Damn chose color', colorName);
    setChosenColor(colorName);
  }

  function submitData(e) {
    setTaskError(false);
    setColorError(false);
    let taskItem;
    if (!userTask) {
      setTaskError(true);
      e.preventDefault();
    }
    if (!chosenColor) {
      setColorError(true);
      e.preventDefault();
    } else {
      taskItem = {
        task: userTask,
        color: chosenColor,
      };
    }

    console.log('Damn submit data', userTask, chosenColor, taskItem);
  }

  function resetData() {
    setUserTask('');
    setChosenColor('');
    setTaskError(false);
    setColorError(false);
  }

  function deleteTask() {
    console.log('deleteTask');
    prompt('are you sure', '');
  }

  return (
    <div>
      <form onSubmit={submitData} onReset={resetData}>
        <input onChange={handleInputChange} value={userTask} />
        {taskError && <span>Set Task first</span>}
        <Colorpaltte chooseColor={chooseColor} chosenColor={chosenColor} />
        {coloError && <span>Set color first</span>}
        <CustomButton type='submit' value='Submit' />
        <CustomButton type='reset' value='Clear' />
      </form>

      <CustomButton value='Delete' handleClick={deleteTask} />
    </div>
  );
};

export default Colorform;
