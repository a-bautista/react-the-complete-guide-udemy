import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  /*  state is an object property from the Component class that contains the people property. 
      state name convention cannot be modified.
  */

  state = {
    people: [
      { name: "Alex", age: 29 },
      { name: "Liz", age: 20 },
      { name: "Stephanie", age: 30 }
    ]
  };

  switchNameHandler = newName => {
    //console.log("This was clicked!");
    // avoid using the following syntax for changing a state -> this.state.people[0].name = 'Alejandro'
    this.setState({
      people: [
        { name: newName, age: 22 },
        { name: "Liz", age: 24 },
        { name: "Stephanie", age: 32 }
      ]
    });
  };

  nameChangeHandler = event => {
    this.setState({
      people: [
        { name: "Alejandro Bautista Ramos", age: 29 },
        { name: event.target.value, age: 24 },
        { name: "Stephanie", age: 32 }
      ]
    });
  };

  render() {
    const style = {
      backgroundColor: "white",
      font: "inherit",
      border: "1px solid blue",
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
          <p>I am a child 1</p>
        </Person>
        <Person name={this.state.people[1].name} age={this.state.people[1].age}>
          <p>I am a child 2</p>
        </Person>
        <Person name={this.state.people[2].name} age={this.state.people[2].age}>
          <p>I am a child 3</p>
        </Person>
        <Person
          //The syntax from below is more efficient than the one from above.
          click={this.switchNameHandler.bind(this, "Alejandro")}
          changed={this.nameChangeHandler}
        >
          Click here!!!
        </Person>
      </div>
      // html element, css, element to render
      // The commented section describes how React renders the html elements and it's the same as the code from above.
      // React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hello Alex!'))
    );
  }
}

export default App;
