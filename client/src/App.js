import React, { Component } from 'react';
// import logo from './logo.svg';
import { Link, Route } from 'react-router-dom'
import './App.css';
import ShowList from './ShowList'
import RenderLists from './RenderLists'

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

  


  render() {
    return !!this.state.lists.length ? (
      <div className="App">
        {/* <ul>
          {this.renderLists(this.state.lists)}
        </ul> */}
        <Route exact path='/' render={routerProps => <RenderLists lists={this.state.lists} {...routerProps} />} />
        <Route exact path={`lists/:listId`} render={routerProps => <ShowList {...routerProps} />} />
      </div>
    ) :
    <p>No data</p>;
  }
}

export default App;
