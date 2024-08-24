import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TaskList from './TaskList';
import TaskForm from './TaskForm';

function App() {
    const [tasks, setTasks] = useState([]);
    const [currentUser] = useState({ id: 1, username: 'fredy' }); // Mock current user

    const refreshTasks = () => {
        axios.get('http://127.0.0.1:8000/api/tasks/')
            .then(res => {
                setTasks(res.data);
            })
            .catch(err => console.log(err));
    };

    useEffect(() => {
        refreshTasks();
    }, []);

    return (
        <div className="App">
            <h1>Task Manager</h1>
            <TaskForm refreshTasks={refreshTasks} user={currentUser} />
            <TaskList tasks={tasks} />
        </div>
    );
}

export default App;