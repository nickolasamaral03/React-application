import React, { useEffect, useState } from 'react';
import {v4 as uuiddv4} from 'uuid';
import {BrowserRouter as Router, Route,} from "react-router-dom";
import axios from 'axios'

import Header from './components/Header';
import Tasks from './components/tasks';
import AddTask from './components/AddTask';
import TaskDetails from './components/TaskDetails';


import './App.css';
import { BrowserRouter, Link, Switch } from 'react-router-dom';


const App = () => {
  const [tasks, setTasks] = useState([
    {
      id:'1',
      title: 'Estudar Programação',
      completed: false,
    },
    {
      id: '2',
      title: 'Ler Livros',
      completed: true,

    },
  ]);

  useEffect(() => {
    const fetchTasks = async () => {
      const {data} = await axios.get (
        'https://jsonplaceholder.cypress.io/todos?_limit=10'
      );
        setTasks(data);
    }

    fetchTasks();
  }, []);


  const handleTaskClick = (taskId) => {
    const newTasks = tasks.map (task => {
      if (task.id == taskId) return { ...task, completed: !task.completed }
      return task; 
    });
// Se o Id for diferente retorna a mesma lista se não acrescenta mais uma task

    setTasks(newTasks)
  }

  const handleTaskAddition = (tasktitle) => {
    const newTasks = [
      ...tasks,
      {
        title: tasktitle,
        id: uuiddv4(),
        completed: false,
      },
    ];
      
      setTasks(newTasks)
    // Cria a nova tarefa
    
  };

  const handleTaskDeletion = (taskId) => {
    const newTasks = tasks.filter(task => task.id != taskId)

    setTasks(newTasks)
  };
  
  return (
		<Router>
			<div className="container">
				<Header />
			
      <Route
					path="/"
					exact 
          render={() => (  
            <>
							<AddTask handleTaskAddition={handleTaskAddition}/>
							<Tasks
								tasks={tasks}
								handleTaskClick={handleTaskClick}
								handleTaskDeletion={handleTaskDeletion}
                />
            </>
          )
        }
				/>
        <Route path="/:tasktitle" exact component={TaskDetails}/>
        </div>
        </Router>
        
        );
      };
      export default App;
          
        
                
        
        
        
      
				
				
           
           
           

  

  