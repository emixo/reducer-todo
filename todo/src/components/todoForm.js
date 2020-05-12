import React from 'react'
export default function TodoForm({ addTask, newTask, captureTask,clearCompleted }) {
    return (
        <div>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          addTask(newTask);
        }}>
        <label htmlFor="taskInput">New Task:</label>
        <input
          type="text"
          name="taskInput"
          value={newTask}
          onChange={captureTask}
        />
        <button>Add Task</button>
      </form>
      <button onClick={clearCompleted}>Clear Completed</button>
      </div>
    );
  }