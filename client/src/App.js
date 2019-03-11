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
      // debugger;
      this.setState({ lists })
    })
  }

  renderLists = (lists) => {
    return (
      lists.map(list => {
        return (<li key={list.id}>{list.title}</li>)
      })
    )
  }


  render() {
    return !!this.state.lists.length ? (
      <div className="App">
        <ul>
          {this.renderLists(this.state.lists)}
        </ul>
      </div>
    ) :
    <p>No data</p>;
  }
}

export default App;
