export const taskReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TASK":
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
    case "TOGGLE_COMPLETED":
      // const completedTasks = state.tasks.map((task) => {
      //   if (task.id === action.payload) {
      //     task.completed = !task.completed;
      //   }
      //   return task;
      // });
      // return {
      //   ...state,
      //   tasks: completedTasks,
      // };
      return { 
        ...state, 
        tasks: state.tasks.map(e => {
          if (e.id === action.payload) {
            return {
              ...e, completed: !e.completed
            }
          }
          return e 
        })
      }
    case "CLEAR_COMPLETED":
      const incompleteTasks = state.tasks.filter((task) => {
          return task.completed === false
      });
      return {
        ...state,
        tasks: incompleteTasks,
      };
    default:
      return state;
  }
};

export const initialTasks = {
  tasks: [
    {
      taskName: "testing",
      completed: false,
      id: Date.now(),
    },
  ],
};