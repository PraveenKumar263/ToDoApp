import './App.css';
import { Header } from './components/Header';
import { Form } from './components/Form';
import { useState } from 'react';
import INITIAL_TASKS from './data/taskData.json';
import { TasksSection } from './components/TasksSection';
import { useEffect } from "react";

function App() {

  // Manage tasks
  const [taskList, setTaskList] = useState(INITIAL_TASKS);
  
  // To add a new task
  const addTask = newTask => setTaskList([...taskList, newTask]);
  
  // To remove task
  const removeTask = taskToRemove  => setTaskList(taskList.filter(task => 
    task !== taskToRemove ));

  // To update existing task
  const updateTask = (updatedTask) => {
    const updatedList = taskList.map(task =>
        task.id === updatedTask.id ? updatedTask : task
    );
    setTaskList(updatedList);
  };
  useEffect(() => {
    // console.log("Task List Updated:", taskList);
}, [taskList]); 
  return (
    <div className="App">
      <Header />
      <Form taskList={taskList} addTask={addTask} />
      <TasksSection taskList={taskList} removeTask={removeTask} updateTask={updateTask}/>
    </div>
  );
}

export default App;
