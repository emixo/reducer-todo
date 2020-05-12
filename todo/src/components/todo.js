import React from 'react';
function Todo({ taskName, completed, id, toggleCompleted, dispatch}) {
    return (
      <div
        // onClick={() => {
        //   toggleCompleted(id);
        // }}
        onClick={() => {
            dispatch({type:'TOGGLE_COMPLETED', payload:id})
        }}
        className={completed === true ? "completed" : ""}
      >
        {taskName}
      </div>
    );
  }
  
  export default Todo;