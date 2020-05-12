import React, {useState, useReducer} from 'react';
import './App.css';
import { taskReducer, initialTasks } from "./reducers/taskReducer"
import todoList from "./components/todoList"
import todoForm from "./components/todoForm"



function App() {
  const [state, dispatch] = useReducer(taskReducer, initialTasks)
  const [newTask, setNewTask] = useState("")

  const captureTask = (e) => {
    setNewTask(e.target.value)
  }

  const addTask = (task) => {
    const newTaskObj = {
      taskName: task,
      completed: false,
      id: Date.now(),
    };
    if(newTask !== "") {
      dispatch({ type: "ADD_TASK", payload: newTaskObj });
      setNewTask("");
    }
  };

  const clearCompleted = () => {
    dispatch({ type: "CLEAR_COMPLETED" });
  };

  const toggleCompleted = (id) => {
    // console.log(id);
    dispatch({ type: "TOGGLE_COMPLETED", payload: id });
  };

  return (
    <div className="App">
      <header>
        <title>Tasks</title>
      </header>
      <todoForm addTask={addTask} newTask={newTask} captureTask={captureTask} clearCompleted={clearCompleted}/>
      <section>
      <todoList state={state} toggleCompleted={toggleCompleted} />
      </section>
    </div>
  );
}

export default App;
