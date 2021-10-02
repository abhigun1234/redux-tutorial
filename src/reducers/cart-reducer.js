import { initialTasks } from "../data/tasks";
import * as actionTypes from "../constants/action-types";

//reducer is a function that receives an action and returns new state.
export const cartReducer = (state = initialTasks, action) => {
  switch (action.type)
  {
    case actionTypes.CREATE_TASK:

      return [ ...state];
    
    case actionTypes.DELETE_TASK:
      return state.filter(task => task.id !== action.payload);

    default:
      return state;
  }
};
