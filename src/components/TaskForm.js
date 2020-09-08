import React, { useContext, useState, useEffect, useCallback } from "react";
import { TaskListContext } from "../context/TaskListContext";

const TaskForm = React.memo(() => {
  const { addTask, clearTasks, edit, editTask } = useContext(TaskListContext);
  const [title, setTitle] = useState("");

  console.log("TaskForm");

  const handleSubmit = useCallback(
    (event) => {
      event.preventDefault();
      if (edit) {
        editTask(title, edit.id);
      } else {
        addTask(title);
        setTitle("");
      }
    },
    [edit, title, editTask , addTask]
  );

  useEffect(() => {
    if (edit) {
      setTitle(edit.title);
    } else {
      setTitle("");
    }
  }, [edit]);

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="task-input"
        placeholder="Add Task..."
        required
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <div className="buttons">
        <button type="submit" className="btn add-task-btn">
          {" "}
          {edit ? "Edit Task" : "Add Task"}
        </button>
        <button onClick={clearTasks} className="btn clear-btn">
          {" "}
          Clear
        </button>
      </div>
    </form>
  );
});

export default TaskForm;
