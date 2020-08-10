import { ADD_TODO, DELETE_TODO, FETCH_TODOS } from "../actions/type";

export default (state = { todos: [{'name':'TODO #1', 'id': 0},{'name':'TODO #2', 'id': 1},{'name':'TODO #3', 'id': 2}] }, action) => {
  switch (action.type) {
    case ADD_TODO:
      {
        let todos = [...state.todos];
        let newTodo = action.data;
        if (todos.length > 0) {
          newTodo.id=todos[todos.length-1].id+1;
        }
        else{
          newTodo.id = 0;
        }
        todos.push(newTodo);
        return { ...state, todos }
      }

    case DELETE_TODO:
      {
        let todos = [...state.todos];
        let index = todos.findIndex(c => c.id === action.data);
        if (index !== -1) {
            todos.splice(index, 1);
        }
        return { ...state, todos }
      }

    default:
      return state;
  }
}