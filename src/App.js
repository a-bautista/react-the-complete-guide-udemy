import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  /* state is only available in the class components. 
     state is a property and it is not recommended to use it too heavily because then your application might
     become unpredictable. You can only get access to the state by using the this keyword. 
     state changes from inside whereas props receives changes from outside.  */

  state = {
      people: [{name: 'Alex', age: 28},
               {name: 'Liz', age: 29},
               {name: 'Stephanie', age: 30}
              ]
          }

  switchNameHandler = (newName) => {
    //console.log("This was clicked!");
    // avoid using this syntax for changing state -> this.state.people[0].name = 'Alejandro'
    this.setState({
          people: [{name: newName, age: 22},
                  {name: 'Liz', age: 24},
                  {name: 'Stephanie', age: 32}
                ]})
    }

  nameChangeHandler = (event) => {
    this.setState({
      people: [{name: 'Alejandro!', age: 22},
              {name: event.target.value, age: 24},
              {name: 'Stephanie', age: 32}
            ]})
    }

  render() {
    return (
      /* This is JSX code, this is not html. We use className to avoid confusion with the keyword class even though
       the className gets converted to the class keyword. */
      <div className="App">
        <h1>React App</h1>
        <p>This is working!</p>
        <button onClick={() => this.switchNameHandler('Alejandro B.')}>Switch name</button>
        
        <Person 
            name={this.state.people[0].name} 
            age={this.state.people[0].age}>
        </Person>
        <Person 
            name={this.state.people[1].name} 
            age={this.state.people[1].age}
            //The syntax from below is more efficient than the one from above.
            click = {this.switchNameHandler.bind(this, 'Alejandro')}
            changed = {this.nameChangeHandler}>Hobbies: Racing
        </Person>
        <Person 
            name={this.state.people[2].name} 
            age={this.state.people[2].age}>
        </Person>

      </div> 
      // html element, css, element to render
      //React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hello Alex!'))
    );
  }
}

export default App;
