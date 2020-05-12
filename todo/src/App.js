import React, {useState, useReducer} from 'react';
import './App.css';
import { taskReducer, initialTasks } from "./reducers/taskReducer"
import TodoList from "./components/todoList"
import TodoForm from "./components/todoForm"



function App() {
  const [newTask, setNewTask] = useState("")
  const [state, dispatch] = useReducer(taskReducer, initialTasks)

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

  const toggleCompleted = (task) => {
    dispatch({ type: "TOGGLE_COMPLETED", payload: task.id });
  };

  const clearCompleted = () => {
    dispatch({ type: "CLEAR_COMPLETED" });
  };

  return (
    <div className="App">
      <header>
        <h1>Tasks</h1>
      </header>
      <TodoForm addTask={addTask} newTask={newTask} captureTask={captureTask} clearCompleted={clearCompleted}/>
      <section>
      <TodoList state={state} toggleCompleted={toggleCompleted} dispatch={dispatch}/>
      </section>
    </div>
  );
}

export default App;
