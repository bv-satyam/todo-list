import React from 'react';
import { connect } from 'react-redux';
import { deleteTodo, fetchTodos } from './actions/todo-action';

const Todos=({deleteTodo, todos})=>{
  const todoItems=[];
  todos.forEach(todo=>{
  todoItems.push(
    <div key={todo.id}>
      <li>{todo.name} <button className="btn btn-delete" onClick={()=>{deleteTodo(todo.id)}}>X</button>
      </li>
    </div>
  )
  });return(
    <div className="list-container">
      <ul className="list">
        {todoItems}
      </ul>
    </div>
    )
  }

const stateAsProps = (reducers) => {
  return {
    todos: reducers.todos
  }
}

export default connect(stateAsProps, {deleteTodo})(Todos);
