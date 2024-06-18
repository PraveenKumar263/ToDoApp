import './App.css';
import { Header } from './components/Header';
import { Form } from './components/Form';
import { useState } from 'react';

function App() {
  const [taskList, setTaskList] = useState([]);
  const addTask = newTask => setTaskList([...taskList, newTask]);
  const removeTask = taskToRemove  => setTaskList(taskList.filter(task => task !== taskToRemove ));
  return (
    <div className="App">
      <Header />
      <Form taskList={taskList} addTask={addTask} />

    </div>
  );
}

export default App;
