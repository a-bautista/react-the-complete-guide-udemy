<b>Summary:</b> This repo contains the exercises and useful notes taken from the React Course taught by Maximilian Schwarzmuller. 

### Table of contents

|No| folder name               | Content description |
|--|:--------------------------|:--------------------|
|1 | section-3  | This folder contains the basics about setting up your first react app and useful notes to understand the basics of props and state.|
|1.1 | section-3-Assignment  | This folder contains the first assignment of the course. |
|n | Reference notes         | Useful commands to know in Docker.|

### 1. section-3

First you need to execute `npm install` to download and install all the required dependencies from the package.json file and then you can run your react app by executing `npm start`. 

Remember how this app works.

     -----------        ---------         -----------
    | index.js | ----> |  App.js | ----> | Person.js |
     -----------        ---------         -----------

#### Render process

index.js renders the content of the file App.js with `ReactDOM.render(<App />, document.getElementById('root'));`. App.js has a Person component which used to render the `<Person>` tags. 

#### state and event handlers

App.js contains a state for the 3 `<Person>` tags and 2 event handlers that listen to the users' actions (the nameChangeHandler is not used).

A <b>state</b> is a property only available to the class components and what it does is to hold a state that changes inside of the class as in contrast with <b>props</b> which changes from outside - more information will be covered later on; furthermore, you can manipulate the state property with the `<b>this</b>` keyword. It is not recommended to use it too heavily because applications might become unpredictable. 

    // states being hold

    state = {

        people: [{name: 'Alex', age: 28},

        {name: 'Liz', age: 29},

        {name: 'Stephanie', age: 30}

        ]
    }

    // event handler
    switchNameHandler = (newName) => {
    
    this.setState({
          
          people: [{name: newName, age: 22},
                  
                  {name: 'Liz', age: 24},

                  {name: 'Stephanie', age: 32}
                
                ]})
    }

When the user clicks on the button the switchNameHandler event listener goes into its definition and sets the new state for the class component. 

    <button  style={style}
        onClick={() => this.switchNameHandler('Alejandro B.')}>Switch name</button>




### 1.1. section-3-Assignment


#### simpleweb
