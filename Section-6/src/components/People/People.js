import React from "react";
import Person from "./Person/Person";

/*
  The Person component contains several properties such as click, name, age, key and changed. 
*/

const people = props =>
  props.persons.map((person, index) => {
    console.log("[People.js] rendering...");
    return (
      <Person
        click={() => props.clicked(index)}
        name={person.name}
        age={person.age}
        key={person.id}
        changed={event => props.changed(event, person.id)}
      />
    );
  });

export default people;
