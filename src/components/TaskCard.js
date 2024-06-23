import { useState } from "react";

export function TaskCard({ task, removeTask, updateTask }) {
    const [editedTask, setEditedTask] = useState({ ...task });
    const [isEditing, setIsEditing] = useState(false);

    const handleStatusChange = (e) => {
        if (isEditing) {
            setEditedTask({ ...editedTask, status: e.target.value }); // Update status
        }
    };

    const handleNameChange = (e) => {
        if (isEditing) {
            setEditedTask({ ...editedTask, name: e.target.value }); // Update name
        }
    };

    const handleDescChange = (e) => {
        if (isEditing) {
            setEditedTask({ ...editedTask, desc: e.target.value }); // Update description
        }
    };

    const handleEdit = () => {
        setIsEditing(true); // Enable editing mode
    };

    const handleSave = () => {
        
        updateTask(editedTask); // Update task list (parent) with edited values
        setIsEditing(false); // Disable editing mode
    };

    const handleCancel = () => {
        setIsEditing(false); // Disable editing mode without saving
        setEditedTask({ ...task }); // Reset editedTask state to original task
    };

    const statusLabelDiv = (
        <div className="task-status">
            <label htmlFor="statusInput">Status Filter:</label>
            <select
                value={editedTask.status === "Completed" ? "Completed": "Not Completed"}
                onChange={handleStatusChange}
                className="form-select mb-2"
                style={{ 
                    width: 'fit-content', 
                    backgroundColor: editedTask.status === "Completed" ? "#074d03": "#9e8903",
                    color: "white",
                    textAlign: "center",
                    outline: "none"
                }}
            >
                <option value="NotComplete">Not Completed</option>
                <option value="Completed">Completed</option>
            </select>
        </div>
    );
    

    return (
        <div className="col mb-5 mx-3 my-2">
            <div className="card">
                <div className="card-body">
                    {/* In edit mode allow task fields to be modified */}
                    {isEditing ? (
                        <>
                            <label htmlFor="nameInput">Name:</label>
                            <input
                                id="nameInput"
                                type="text"
                                value={editedTask.name}
                                onChange={handleNameChange}
                                className="form-control mb-2"
                            />
                            <label htmlFor="descInput">Description:</label>
                            <textarea
                                id="descInput"
                                value={editedTask.desc}
                                onChange={handleDescChange}
                                className="form-control mb-2"
                            />
                            {statusLabelDiv}
                            <div className="button-box">
                                <button className="btn btn-success me-2 my-2" onClick={handleSave}>Save</button>
                                <button className="btn btn-warning" onClick={handleCancel}>Cancel</button>
                            </div>
                        </>
                    ) : (
                        <>
                            {/* Static task details is shown*/}
                            <p>Name: {task.name}</p>
                            <p>Desc: {task.desc}</p>
                            {statusLabelDiv}
                            <div className="button-box">
                                <button className="btn btn-success me-2 my-2" onClick={handleEdit}>Edit</button>
                                <button className="btn btn-danger" onClick={() => removeTask(task)}>Remove</button>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}
