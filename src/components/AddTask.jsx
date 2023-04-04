import React, { useState } from 'react';

import Button from './Button'

import './AddTask.css';

const AddTask = ({handleTaskAddition}) => {
    const [inputData, setInputData] = useState ('')
    
    const handleInputChange = (e) => {
        setInputData(e.target.value);
    };
    // Serviu para guardar as informações alocadas no input
    
    const handleAddTaskClick = () => {
        handleTaskAddition(inputData);
        setInputData('');
    // o que o usuario escrever está no inputdata
    } 
    
    return (
    <div className='add-task-container'>
            <input 
            onChange={handleInputChange} 
            value = {inputData}
            className='add-task-input' 
            type="text" 
            />;
            <div className="add-task-button-container">
                <Button onClick={handleAddTaskClick}>Adicionar</Button>
            </div>
        </div>
    );    
};

 
export default AddTask;
 