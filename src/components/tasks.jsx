import React from 'react';
import Task from './task';

const Tasks = ({tasks, handleTaskClick, handleTaskDeletion}) => {
    
    return (
        <>
         {tasks.map((task) => (
         <Task
         key={task.id}
         task={task} 
         handleTaskClick={handleTaskClick} 
         handleTaskDeletion={handleTaskDeletion}/>
         ))}
         {/* Para cada task renderizar uma task */}
        </>
    )
};

export default Tasks;

