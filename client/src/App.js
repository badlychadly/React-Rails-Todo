import React, { Component } from 'react';
// import logo from './logo.svg';
import { Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import './App.css';
import ShowList from './ShowList'
import RenderLists from './RenderLists'
import { getLists, deleteList, addList, addItem, deleteItem, checkItem } from './actions/listActions'
import ListForm from './containers/ListForm'
import { ShowListRoute } from './routeFunctions/ShowListRoute'

class App extends Component {
  
  
  componentDidMount() {
    this.props.getLists()
  }

  


  render() {
    // debugger;
    return !!Object.keys(this.props.lists).length ? (
      <div className="">
        <ListForm addList={this.props.addList} />
        <Switch>
        <ShowListRoute path={`/lists/:listId`} deleteItem={this.props.deleteItem} addItem={this.props.addItem} component={ShowList} checkItem={this.props.checkItem} lists={this.props.lists} />

        {/* <Route exact path={`/lists/:listId`} render={routerProps => <ShowList lists={this.props.lists} {...routerProps} />} /> */}
        <Route exact path='/' render={routerProps => <RenderLists lists={this.props.lists} deleteList={this.props.deleteList} {...routerProps} />} />

        </Switch>
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

export default connect(mapStateToProps, {getLists, deleteList, addList, addItem, deleteItem, checkItem})(App);
