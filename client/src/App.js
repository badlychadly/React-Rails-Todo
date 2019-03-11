import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    lists: []
  }
  
  
  componentDidMount() {
    fetch('http://10.0.0.99:3001/lists').then(resp => resp.json())
    .then(lists => {
      debugger;
    })
  }


  render() {
    return (
      <div className="App">
        <ul>
          <li></li>
        </ul>
      </div>
    );
  }
}

export default App;
