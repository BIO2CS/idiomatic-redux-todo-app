import { v4 } from "node-uuid";
import * as api from "../api";

export const addTodo = (text) => {
  return {
    type: "ADD_TODO",
    id: v4(),
    text
  };
};

export const toggleTodo = (id) => {
  return {
    type: "TOGGLE_TODO",
    id
  };
};

const receiveTodos = (filter, response) => ({
  type: "RECEIVE_TODOS",
  response,
  filter
});

export const fetchTodos = (filter) => {
  return api.fetchTodos(filter).then(response => {
    return receiveTodos(filter, response);
  })
}
