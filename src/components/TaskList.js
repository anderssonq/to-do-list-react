import React, { useContext, useCallback } from "react";
import { TaskListContext } from "../context/TaskListContext";
import Task from "./Task";
const TaskList = () => {
  const { tasks, removeTask, findItem } = useContext(TaskListContext);
  console.log("TaskList");

  const onHandleDeleteItem = useCallback((id) => {
    removeTask(id);
  }, [removeTask]);

  const onHandleFindItem = useCallback((id) => {
    findItem(id);
  }, [findItem]);

  return (
    <div>
      {tasks.length ? (
        <ul className="list">
          {tasks.map((task) => {
            return (
              <Task
                task={task}
                key={task.id}
                onDelete={() => onHandleDeleteItem(task.id)}
                onFind={() => onHandleFindItem(task.id)}
              />
            );
          })}
        </ul>
      ) : (
        <p className="no-tasks">No Tasks</p>
      )}
    </div>
  );
};

export default TaskList;
