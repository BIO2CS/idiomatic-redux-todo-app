import React from "react";

const Todo = ({ text, completed, onClick }) => (
  <li
    onClick={onClick}
    style={{textDecoration: completed ? "line-through" : "none"}
  }>
    {text}
  </li>
);

Todo.propTypes = {
  text: React.PropTypes.string.isRequired,
  completed: React.PropTypes.bool.isRequired,
  onClick: React.PropTypes.func.isRequired
};

export default Todo;
