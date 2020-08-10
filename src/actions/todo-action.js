import { ADD_TODO, DELETE_TODO, FETCH_TODOS } from "./type";

export const fetchTodos = () => (dispatch) => {
  let action = { type: FETCH_TODOS};
  dispatch(action);
}

export const addTodo = (todo) => (dispatch) => {
  dispatch({ type: ADD_TODO, data: todo });
}

export const deleteTodo = (id) => (dispatch) => {
  dispatch({ type: DELETE_TODO, data: id });
}