
import React from 'react'
import { Route, Redirect } from 'react-router-dom'


export function ShowListRoute({component: Component, path, lists, addItem, deleteItem, ...rest}) {
    let {computedMatch} = rest

    let list = lists[computedMatch.params.listId]

    return (
        <Route path={path} {...rest} render={routerProps => <Component list={list} deleteItem={deleteItem} addItem={addItem} {...routerProps} />} />
    )

}