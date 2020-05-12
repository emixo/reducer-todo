import React from "react"
import Todo from "./todo"


export default function TodoList({ state, toggleCompleted }) {
    return (
        <div>
            {state.tasks.map((task) => {
            return <Todo key={task.id} id={task.id} completed={task.completed} toggleCompleted={toggleCompleted} taskName={task.taskName}/>
          })}
        </div>
    )
}