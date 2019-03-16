
import React from 'react'
import { Route, Redirect } from 'react-router-dom'


export function ShowListRoute({component: Component, path, lists, ...rest}) {
    let {computedMatch} = rest

    let list = lists.find(({ id }) => {
        // debugger;
        return computedMatch.params.listId === String(id)
    })
    // let items = list.items.map(item => <li key={item.id}>{item.name}</li>)
    // debugger;
    return (
        <Route path={path} {...rest} render={routerProps => <Component list={list} {...routerProps} />} />
    )

}