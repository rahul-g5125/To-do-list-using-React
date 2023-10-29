import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export const Todo = ({ task, deleteTodo, editTodo, toggleComplete }) => {
  return (
    <div className="Todo">
      <input
        type="checkbox"
        onChange={() => {
          toggleComplete(task.id);
        }}
      />
      <p className={`${task.completed ? "completed" : "incompleted"}`}>
        {task.task}
      </p>
      <div>
        <FontAwesomeIcon
          className="delete-icon"
          icon={faTrash}
          onClick={() => deleteTodo(task.id)}
        />
      </div>
    </div>
  );
};
