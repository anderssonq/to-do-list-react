import React from "react";

const Task = React.memo(({ task, onDelete, onFind }) => {
  console.log("Task");

  return (
    <li className="list-item">
      <span>{task.title}</span>
      <div>
        <button className="btn-delete task-btn" onClick={onDelete}>
          <i className="fas fa-trash"></i>
        </button>
        <button className="btn-edit task-btn" onClick={onFind}>
          <i className="fas fa-pen"></i>
        </button>
      </div>
    </li>
  );
});

export default Task;
