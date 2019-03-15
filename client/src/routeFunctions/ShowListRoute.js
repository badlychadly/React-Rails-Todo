
import React from 'react'
import { Route, Redirect } from 'react-router-dom'


export function ShowListRoute({component: Component, path, lists, ...rest}) {
    let {computedMatch} = rest

    let list = lists.find(({ id }) => computedMatch.params.listId === String(id))
        
    return (
        <Route path={path} {...rest} render={routerProps => <Component list={list} {...routerProps} />} />
    )

}