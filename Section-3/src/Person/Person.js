import React from "react";
import "./Person.css";

/*  props is a convention parameter, you can type in any name you want
    props.children displays the the content that is between <Person></Person>
    Below is a functional component
*/

const person = props => {
  return (
    <div className="Person">
      <p onClick={props.click}>
        I am a {props.name} and I am {props.age} years old.
      </p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} />
    </div>
  );
};

export default person;
