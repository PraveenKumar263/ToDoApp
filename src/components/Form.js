import { useState } from "react";

export function Form({ taskList, addTask }) {
  const [taskName, setTaskName] = useState("");
  const [taskDesc, setTaskDesc] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    // Ensure field are not null
    if (!taskName.trim() || !taskDesc.trim()) {
      alert("Task name and description cannot be empty!");
      return;
    }

    // Get last item's ID or default to 0
    const lastTaskID = taskList.length > 0 ? taskList.slice(-1).id : 0;

    // New task obk
    const newTask = {
      id: lastTaskID + 1,
      name: taskName,
      desc: taskDesc,
      status: "NotComplete"
    };

    addTask(newTask);

    // Clear input fields
    setTaskName("");
    setTaskDesc("");
  };

  return (
    <form id="form-box" onSubmit={handleSubmit} className="my-4 justify-content-center">
      <div className="mb-3 mx-4">
        <input 
          type="text" 
          className="form-control" 
          id="taskName" 
          placeholder="Todo Name"
          value={taskName}
          onChange={event => setTaskName(event.target.value)}
        />
      </div>
      <div className="mb-3 mx-4">
        <input 
          type="text" 
          className="form-control" 
          id="taskDesc" 
          placeholder="Todo Description"
          value={taskDesc}
          onChange={event => setTaskDesc(event.target.value)}
        />
      </div>
      <div className="mb-3 mx-4">
        <button 
          className="btn btn-primary px-4"
          type="submit"
        >
          Add ToDo
        </button>
      </div>
      
    </form>
  );
}
