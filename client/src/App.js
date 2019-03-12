import React, { Component } from 'react';
// import logo from './logo.svg';
import { Link, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import './App.css';
import ShowList from './ShowList'
import RenderLists from './RenderLists'
import { getLists } from './actions/listActions'

class App extends Component {
  
  
  componentDidMount() {
    this.props.getLists()
  }

  


  render() {
    return !!this.props.lists.length ? (
      <div className="App">
        {/* <ul>
          {this.renderLists(this.state.lists)}
        </ul> */}
        <Route exact path={`/lists/:listId`} render={routerProps => <ShowList {...routerProps} />} />
        <Route exact path='/' render={routerProps => <RenderLists lists={this.props.lists} {...routerProps} />} />
      </div>
    ) :
    <p>No data</p>;
  }
}

const mapStateToProps = (state) => {
  return ({
    lists: state.lists
  })
}

export default connect(mapStateToProps, {getLists})(App);
