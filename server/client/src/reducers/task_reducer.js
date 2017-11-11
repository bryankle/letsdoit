import {
  ADD_TASK,
  DELETE_TASK,
  LOAD_TASKS,
  COMPLETE_TASK,
  CLEAR_COMPLETED
} from "../actions/types";

export default (state = [], action) => {
  switch (action.type) {
    case LOAD_TASKS:
      console.log(action);
      return action.payload; // Loads users tasks into state
    case ADD_TASK:
      console.log("ADD_TASK");
      console.log(action.payload);
      console.log("state", state);
      return [...state, action.payload];
    case COMPLETE_TASK:
      console.log("REDUCERS - COMPLETE_TASK");
      console.log("action.payload", action.payload);
      const { userId, taskId } = action.payload;
      console.log("state", state);
      var completedTask = state.find(task => {
        console.log(task.id, "and", taskId);
        return task.id === parseInt(taskId);
      });
      completedTask.completed = true;
      console.log("completedTask", completedTask);
      return [...state];
    case CLEAR_COMPLETED:
      console.log("REDUCERS - CLEAR_COMPLETED");
      console.log("state", state);

      return state.filter(task => !task.completed);
    default:
      console.log("Default reducer");
      return state;
  }
};
