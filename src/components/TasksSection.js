import { TaskCard } from "./TaskCard";
import { useState } from "react";
import { useEffect } from "react";

export function TasksSection({ taskList, removeTask, updateTask }) {
    const [statusFilter, setStatusFilter] = useState("All");

    const handleStatusFilterChange = (e) => {
        setStatusFilter(e.target.value); // Update status filter
        // console.log(statusFilter);
    };

    useEffect(() => {
        // console.log(statusFilter);
    }, [statusFilter]); 

    // To stlye the status filter select box
    const getStatusFilterStyle = () => {
        switch (statusFilter) {
            case "All":
                return { backgroundColor: "rgb(250, 124, 143)", color: "white" };
            case "NotComplete":
                return { backgroundColor: "#9e8903", color: "white" };
            case "Completed":
                return { backgroundColor: "#074d03", color: "white" };
            default:
                return {};
        }
    };

    return (
        <div className="tasks-section-box mx-2">
            <div className="tasks-header-box">
                <div className="tasks-header">
                    <h3>My Todos</h3>
                </div>
                <div className="tasks-filter">
                    <label>Status Filter:</label>
                    <select 
                        id="status-filter" 
                        value={statusFilter} 
                        onChange={handleStatusFilterChange}
                        style={getStatusFilterStyle()} 
                    >
                        <option value="All">All</option>
                        <option value="NotComplete">Not Completed</option>
                        <option value="Completed">Completed</option>
                    </select>
                </div>
            </div>
            <div className="tasks-card">
                {/* Show cards/task that match selected filter status */}
                {taskList
                    .filter(task => statusFilter === "All" || task.status === statusFilter)
                    .map((task) => (
                        <TaskCard 
                            key={task.id}
                            task={task} 
                            removeTask={removeTask} 
                            updateTask={updateTask}
                        />
                    ))}
            </div>
        </div>
    );
}
