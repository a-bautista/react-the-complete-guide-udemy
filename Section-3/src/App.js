import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  /*  state is an object property from the Component class that contains the people property. 

      state name convention cannot be modified.

      React Hooks is a collection of functions exposed by React where you can use them in functional components. 
      React Hooks usually start with the keyword use.
      React Hooks are available in React 16.8.

      Stateless vs Stateful: In stateless, there are no internal state management (usually they receive data and they
        display it).
      In stateful, we have containers that have the state of the components. 
      It is a good practice to have more stateless component than stateful components. 
  */

  state = {
    people: [
      { name: "Alex", age: 29 },
      { name: "Liz", age: 20 },
      { name: "Stephanie", age: 30 },
      { name: "Jeremiah", age: 45 }
    ]
  };

  switchNameHandler = newName => {
    /*
      The purpose of this handler is to change the state of the property people to the new values.
      newName is used to change the state of people to the one that is given with the bind() method or
      with the new name that is inside of the onClick(). 
    */

    // The following is invalid because you cannot mutate the state of a variable like -> this.state.people[0].name = 'Alejandro'
    this.setState({
      people: [
        { name: newName, age: 22 },
        { name: "Liz", age: 24 },
        { name: "Stephanie", age: 32 },
        { name: "Jeremiah", age: 40 }
      ]
    });
  };

  nameChangeHandler = event => {
    /*
      The purpose of this handler is to listen to an event (typing in the input box) and then replace the given 
      text with the new one. 
    */

    this.setState({
      people: [
        { name: "Alex", age: 29 },
        { name: event.target.value, age: 20 },
        { name: "Stephanie", age: 30 },
        { name: "Jeremiah", age: 45 }
      ]
    });
  };

  render() {
    const style = {
      backgroundColor: "white",
      font: "inherit",
      border: "3px solid blue",
      padding: "8px",
      cursor: "pointer"
    };

    return (
      /*
          In normal HTML, we use class in the divs but in JSX we use className to avoid confusion with the 
          keyword class even though the className gets converted to the class keyword.
          
          In the React return statement, everything must be contained in one root div. 
          
          The this keyword refers to the class App and we specified the property that we defined.

          Remember that the code from below is JSX (JavaScript compiled)

          In arrow functions, the return statement is not typed because they already contain that statement. 
       */

      <div className="App">
        <h1>Section 3</h1>
        <Person name={this.state.people[0].name} age={this.state.people[0].age}>
          <button
            style={style}
            onClick={() => this.switchNameHandler("Alejandro Bautista")}
          >
            Click on me to switch my name
          </button>
          <p>I am the child 1</p>
        </Person>
        <Person
          name={this.state.people[1].name}
          age={this.state.people[1].age}
          changed={this.nameChangeHandler}
        >
          <p>I am the child 2</p>
          <p>
            Type in the input box any text you want to change the original name.
          </p>
        </Person>
        <Person name={this.state.people[2].name} age={this.state.people[2].age}>
          <p>I am the child 3</p>
        </Person>
        <p>Click in any part of the text below.</p>
        <Person
          name={this.state.people[3].name}
          age={this.state.people[3].age}
          // The syntax from below is more efficient than -> this.switchNameHandler("Alejandro Bautista")}, however,
          // onClick is used for buttons whereas click is used for any part in the html file.
          click={this.switchNameHandler.bind(this, "Alejandro")}
        ></Person>
      </div>
      // html element, css, element to render
      // The commented section down below describes how React renders the html elements and it's the same as the code from above.
      // React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hello Alex!'))
    );
  }
}

export default App;
