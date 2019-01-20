import React from 'react';
import './Person.css';
//import classes from './Person.css';
import Radium from 'radium';

const person = (props) => {
   const style = {
        '@media (min-wdith: 500px)' :{
            width: '450px'
        } 
    };
    return (
        <div className="Person" style={style}>   
            <p onClick={props.click}>I am a {props.name} and I am {props.age} years old.</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed}/> 
        </div>
    )

};

// export default Radium(person);
export default Radium(person);