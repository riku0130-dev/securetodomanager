import React, { useState } from 'react';
import '../../pages/DashboardPage.css';

function TaskInput({ addTask }) {
    const [task, setTask] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (task.trim()) {
            addTask(task);
            setTask('');
        }
    };

    return (
        <form className="task-input" onSubmit={handleSubmit}>
            <input
                type="text"
                value={task}
                onChange={(e) => setTask(e.target.value)}
                placeholder="Add a new task"
            />
            <button type="submit">Add</button>
        </form>
    );
}

export default TaskInput;