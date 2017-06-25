import { combineReducers } from "redux";
import todos, * as fromTodos from "./todos";

const todoApp = combineReducers({
  todos
})

export default todoApp;

export const getVisibleTodoList = (state, filter) => {
  return fromTodos.getVisibleTodoList(state.todos, filter);
}
