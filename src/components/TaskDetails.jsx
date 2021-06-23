import React from 'react';
import { useHistory, useParams } from 'react-router-dom';

import Button from './Button';

import "./TaskDetails.css";

const TaskDetails = () => {
    const params = useParams();
    const history = useHistory();

    const HandleBackButtonClick = () => {
        history.goBack();
    }

    return ( 
        <>
            <div className="back-button-container">
                <Button onClick={HandleBackButtonClick}>Voltar</Button>
            </div>

            <div className="task-details-container">
                <h2>{params.taskTitle}</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae iusto deserunt debitis doloremque sint tempore.</p>
            </div>

        </>
     );
}
 
export default TaskDetails;