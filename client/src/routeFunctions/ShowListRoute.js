
import React from 'react'
import { Route, Redirect } from 'react-router-dom'


export function ShowListRoute({component: Component, path, lists, addItem, ...rest}) {
    let {computedMatch} = rest

    let list = lists[computedMatch.params.listId]
    // debugger;

    // let listsArray = Object.keys(lists).map(id => lists[id]);

    // let list = listsArray.find(({ id }) => {
    //     // debugger;
    //     return computedMatch.params.listId === String(id)
    // })
    // let items = list.items.map(item => <li key={item.id}>{item.name}</li>)
    // debugger;
    return (
        <Route path={path} {...rest} render={routerProps => <Component list={list} addItem={addItem} {...routerProps} />} />
    )

}