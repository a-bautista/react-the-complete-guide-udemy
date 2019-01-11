import React from 'react';
import './UserOutput.css';

//props is used to pass properties from html elements to functions
const userOutput = (props) => {
    return(
        <div className="UserOutput">
            <p>Paragraph 1: {props.userName}</p>
            <p>Paragraph 2: </p>
        </div>
    )
};

export default userOutput;
