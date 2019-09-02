import React from "react";
import "./Person.css";

/*  
    props is a convention parameter, you can type in any name you want
    props.children displays the the content that is between <Person></Person>
    Below you have a functional component where props.click is the property that allows to click on any part of the
    <p> tag to change the state of the class and props.changed is the property that changes the name to any given
    text that is typed in the input text field. 

    You define what you want to change in the nameChangeHandler, then you define in the Person.js component what
    exactly you will change and lastly you define how to call this new event with the changed property. 

    nameChangeHandler = event => {
        this.setState({
            people: [
                { name: "Alex", age: 29 },
                { name: event.target.value, age: 20 },
                { name: "Stephanie", age: 30 },
                { name: "Jeremiah", age: 45 }
                ]
            });
        };

    <div>
        <Person
            name={this.state.people[1].name}
            age={this.state.people[1].age}
            changed={this.nameChangeHandler}
            >
        </Person>
    </div>

    changed is a property already defined in the Person.js component

    <input type="text" onChange={props.changed} />
*/

const person = props => {
  return (
    <div className="Person">
      <p onClick={props.click}>
        I am a {props.name} and I am {props.age} years old.
      </p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name} />
    </div>
  );
};

export default person;
