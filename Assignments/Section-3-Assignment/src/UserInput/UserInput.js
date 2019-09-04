import React from 'react';
// onChange is defined by the react library but changed was defined by you in the App.js
// onChange is the event that triggers the change to the userName form the UserOutput, that is, 
// if we skip onChange then the new username will not be displayed in the UserOutput

const userInput = (props) =>{
    const inputStyle ={
        border: '2px solid red'
    };

    return (
        <div className="userInput">    
            <input type="text" 
                   style = {inputStyle}
                   onChange={props.changed}
                   value = {props.currentName}>
            </input>
        </div>
    )
};

export default userInput;