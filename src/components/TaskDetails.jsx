import React from 'react'
import { CgLaptop } from 'react-icons/cg';
import { useHistory, useParams } from 'react-router-dom';
import "./TaskDetails.css"
import Button from './Button';

const TaskDetails = () => {
    const params = useParams();
    const history = useHistory();
        // use Params vê se tem algum parametro no path e se tiver dá acesso à isso
        // Use history é possivel acessar outras paginas da aplicação

    const handleBackButtonClick = () => {
        history.goBack();
    }
    // Botão de voltar
    return ( 
        <>
        <div className="back-button-container">
            <Button onClick={handleBackButtonClick}>Voltar</Button>
        </div>
        <div className="task-details-container">
            <h2>{params.taskTitle}</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui maxime commodi sint dolorum voluptates eveniet?</p>
        </div>
        </>
     );
}
 
export default TaskDetails;

