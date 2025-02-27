import React from "react";
import Todo from "./Todo";

import { connect } from 'react-redux';
import { getTodos } from '../redux/selectors';

const TodoList = ({ todos }) => (
  <ul className="todo-list">
    {todos && todos.length
      ? todos.map((todo, index) => {
          return <Todo key={`todo-${todo.id}`} todo={todo} />;
        })
      : "No todos, yay!"}
  </ul>
);

export default connect(state => ({todos: getTodos(state)})) (TodoList);
