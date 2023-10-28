// Hello! Today we’ll be looking into implementing a task queues scheduler in a frontend application.

// The system defines a concept of a “task”, which is an abstraction over a chunk of work that is stubbed with a simple wait function for a specified executionTime milliseconds.

// The behavior of the system will be as follows. There will be 3 queues. To do, in progress and completed. The queue scheduler is going to put tasks from the “to do” queue, into the “in progress” queue. The tasks are then going to execute for a predefined amount of time. Once they’re completed, they should be moved to the “completed” queue by the queue scheduler.

// For the first part, please create a UI satisfying the following requirements:

// There should be 3 queues:
// “to do” being the first queue, with red rectangle representing each task
// “in progress” being the second queue, with yellow rectangle representing each task
// “completed” being the third queue, with green rectangle representing each task
// There are between 1 to 3 tasks in each of the queues
// //
// For the next part of this assignment, please expand the UI with interactive buttons. The behavior is shown in the loom video: https://www.loom.com/share/671fe9eb53284fd48d03d47cec1988f4

// Requirements:

// There is a “Create task” button
// There is a “Move to the next queue” button
// Create task button should generate a new task on click, and add it to “to do” queue
// Move to the next queue button should move a task from “to do” to “in progress” if “in progress” queue is not full.
// Move to the next queue button should move a task from “in progress” to “done” if “in progress” queue is full.
// There can be no more than 2 tasks in the “in progress” queue

function ColorQueue({ color, selectSwatch }) {
  // const selectSwatch = (e) => {
  //   console.log(e.target.getAttribute('key'));
  // };

  // const colorBlocks = colors.map((color) => {
  return (
    <div
      key={color}
      value={color}
      className={`${color} color-block`}
      onClick={selectSwatch}
    ></div>
  );
  // });

  // return (
  //   <div className='container' queueId={id}>
  //     {colorBlocks}
  //   </div>
  // );
}

export default ColorQueue;
