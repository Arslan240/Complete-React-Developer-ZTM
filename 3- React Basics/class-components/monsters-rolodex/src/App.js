import React, { Component } from 'react';
import './App.css';

//we can write code in the form of functions and classes. 
// Using classes we can wrap similar functionality in a single place.


// Using Classes, We need to extend Component if we want to make our class a component.
class App extends Component {
  constructor(){
    super()

    this.state = {
      monsters: 'Class Components'
    }
  }

  // componentDidMount function runs after the component is rendered on the page.
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(users => this.setState({monsters: users}))
  }
  
  render() {
    return (
          <div className="App">
            <h1>{this.state.monsters}</h1>
          </div>
    )}
}

export default App;
