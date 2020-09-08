import React, { createContext, useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

export const TaskListContext = createContext();

const TaskListContextProvider = (props) => {
  const initialState = JSON.parse(localStorage.getItem("tasks")) || []
  const [tasks, setTasks] = useState(initialState);
  const [edit, setEdit] = useState(null);

  useEffect(()=>{
      localStorage.setItem("tasks", JSON.stringify(tasks))
  }, [tasks])

  const addTask = (title) => {
    setTasks((prevState) => [...prevState, { title, id: uuidv4() }]);
  };

  const removeTask = (id) => {
    let _tasks = [...tasks];
    _tasks = _tasks.filter((task) => task.id !== id);
    setTasks(_tasks);
  };

  const clearTasks = () => {
    setTasks([]);
  };

  const findItem = (id) => {
    const _task = [...tasks];
    const task = _task.find((task) => task.id === id);
    setEdit(task);
  };

  const editTask = (title, id) => {
    const newTasks = tasks.map((task) =>
      task.id === id ? { title, id } : task
    );

    setTasks(newTasks)
    setEdit(null)
  };

  return (
    <TaskListContext.Provider
      value={{ tasks, addTask, removeTask, clearTasks, findItem, edit, editTask }}
    >
      {props.children}
    </TaskListContext.Provider>
  );
};

export default TaskListContextProvider;
