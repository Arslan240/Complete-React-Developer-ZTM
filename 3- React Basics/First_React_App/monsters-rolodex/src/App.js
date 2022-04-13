import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//we can write code in the form of functions and classes. 
// Using classes we can wrap similar functionality in a single place.


// Using Classes, We need to extend Component if we want to make our class a component.
class App extends Component {
  
  render() {
    return (
          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <p>
                Edit <code>src/App.js</code> and save to reload.
              </p>
              <button>Change Text</button>
            </header>
          </div>
  }
}

// Using Function
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           My Name is Arslan Jamil
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
