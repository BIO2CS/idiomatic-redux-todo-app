import { combineReducers } from "redux";

const todo = (state, action) => {
  switch(action.type) {
    case "ADD_TODO":
      return {
        id: action.id,
        text: action.text,
        completed: false
      };
    case "TOGGLE_TODO":
      if (state.id !== action.id) {
        return state;
      }
      return {
        ...state,
        completed: !state.completed
      }
    default:
      return state;
  }
};

const byIds = (state = {}, action) => {
  switch(action.type) {
    case "ADD_TODO":
    case "TOGGLE_TODO":
      return {
        ...state,
        [action.id]: todo(state[action.id], action)
      };
    default:
      return state;
  }
};

const allIds = (state = [], action) => {
  switch(action.type) {
    case "ADD_TODO":
      return [...state, action.id];
    default:
      return state;
  }
};

const todos = combineReducers({
  byIds,
  allIds
});

export default todos;

const getAllIds = (state) => {
  return state.allIds.map(id => state.byIds[id]);
}

export const getVisibleTodoList = (state, filter) => {
  const allIds = getAllIds(state);
  switch(filter) {
    case "all":
      return allIds;
    case "completed":
      return allIds.filter(todo => todo.completed);
    case "active":
      return allIds.filter(todo => !todo.completed);
    default:
      return allIds;
  }
};
