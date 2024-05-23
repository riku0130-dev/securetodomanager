import React from 'react';
import '../../pages/DashboardPage.css';

function TaskItem({ task, toggleTaskCompletion, deleteTask }) {
    return (
        <li>
            {/* <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleTaskCompletion(task.id)}
            /> */}
            <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
                {task.text}
            </span>
            <button onClick={() => deleteTask(task.id)}>Delete</button>
        </li>
    );
}

export default TaskItem;