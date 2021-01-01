import React from "react";
import PropTypes from "prop-types";

export default function TodoItem(props) {
  const getStyle = () => {
    return {
      backgroundColor: "#f4f4f4",
      padding: "10px",
      borderBottom: "1px #ccc dotted",
      textDecoration: props.todo.completed ? "line-through" : "none",
    };
  };
  const markComplete = (e) => {
    console.log(props)
  }

  const {id,title} = props.todo;

  return (
    <div style={getStyle()}>
      <input type="checkbox" onChange={props.markComplete.bind(this,id)} /> 
      {title}
    </div>
  );
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
};
