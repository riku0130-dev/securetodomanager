import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './DashboardPage.css';
import TaskInput from '../components/Todo/TaskInput';
import TaskList from '../components/Todo/TaskList';
import TaskFilter from '../components/Todo/TaskFilter';

function DashboardPage() {

    const navigate = useNavigate();

    const handleLogout = () => {
        navigate('/login');
    };

    const [tasks, setTasks] = useState([]);
    const [filter, setFilter] = useState('all');

    const addTask = (task) => {
        setTasks([...tasks, { id: Date.now(), text: task, completed: false }]);
    };

    const toggleTaskCompletion = (taskId) => {
        setTasks(tasks.map(task =>
            task.id === taskId ? { ...task, completed: !task.completed } : task
        ));
    };

    const deleteTask = (taskId) => {
        setTasks(tasks.filter(task => task.id !== taskId));
    };

    const filteredTasks = tasks.filter(task => {
        if (filter === 'completed') return task.completed;
        if (filter === 'uncompleted') return !task.completed;
        return true;
    });

    return (
        <div class="DashboardPage">
            <header>
                <button className="logout-button" onClick={handleLogout}>ログアウト</button>
            </header>
            <div className="todo">
                <h1>ToDo List</h1>
                <TaskInput addTask={addTask} />
                {/* <TaskFilter setFilter={setFilter} /> */}
                <TaskList tasks={filteredTasks} toggleTaskCompletion={toggleTaskCompletion} deleteTask={deleteTask} />
            </div>
        </div>
    );
};

export default DashboardPage;