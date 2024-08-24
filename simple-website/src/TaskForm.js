import React, { useState } from 'react';
import axios from 'axios';

const TaskForm = ({ refreshTasks, user }) => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        axios.post('http://127.0.0.1:8000/api/tasks/', { 
                title: title,
                description: description,
                user: user.id,
            })
            .then(res => {
                refreshTasks();
                setTitle("");  // Reset title
                setDescription("");  // Reset description
            })
            .catch(err => console.log(err));
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Task Title"
                    required
                />
            </div>
            <div>
                <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Task Description"
                />
            </div>
            <button type="submit">Add Task</button>
        </form>
    );
};

export default TaskForm;

        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        