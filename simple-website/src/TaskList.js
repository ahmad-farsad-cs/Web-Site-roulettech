import React from 'react';

const TaskList = ({ tasks }) => {
    return (
        <div>
            <h2>Task List</h2>
            <ul>
                {tasks.map(task => (
                    <li key={task.id}>
                        <h3>{task.title}</h3>
                        <p>{task.description}</p>
                        <p>Completed: {task.completed ? 'Yes' : 'No'}</p>
                        <p>User: {task.user}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TaskList;