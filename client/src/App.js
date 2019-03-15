import React, { Component } from 'react';
// import logo from './logo.svg';
import { Link, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import './App.css';
import ShowList from './ShowList'
import RenderLists from './RenderLists'
import { getLists } from './actions/listActions'
import ListForm from './containers/ListForm'
import { ShowListRoute } from './routeFunctions/ShowListRoute'

class App extends Component {
  
  
  componentDidMount() {
    this.props.getLists()
  }

  


  render() {
    return !!this.props.lists.length ? (
      <div className="">
        <ListForm />

        <ShowListRoute path={`/lists/:listId`} component={ShowList} lists={this.props.lists} />

        {/* <Route exact path={`/lists/:listId`} render={routerProps => <ShowList lists={this.props.lists} {...routerProps} />} /> */}
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
