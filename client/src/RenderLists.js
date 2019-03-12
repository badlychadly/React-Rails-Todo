import React from 'react'
import { Link } from 'react-router-dom'

const RenderLists = props => {

    const renderLists = (lists) => {
        return (
          lists.map(list => {
            return (
            <Link key={list.id} to={`/lists/${list.id}`}>
            <li>{list.title}</li>
            </Link>
            )
          })
        )
      }

    return (
        <ul>
        {renderLists(props.lists)}
        </ul>
    )
}

export default RenderLists