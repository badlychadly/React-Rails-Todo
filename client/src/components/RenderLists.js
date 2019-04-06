import React from 'react'
import { Link } from 'react-router-dom'
import { Badge } from 'reactstrap';

const RenderLists = props => {

  // debugger;

  // const listsArray = Object.keys(props.lists).map(id => props.lists[id]);
  

    const renderLists = (lists) => {
        return (
          lists.map(list => {
            return (
              <li key={list.id}>
                <Link to={`/lists/${list.id}`}>{list.title}</Link>
                <Badge onClick={() => props.deleteList(list)} color="danger">X</Badge>
              </li>
            
            )
          })
        )
      }

  return (
      <ul>
      {renderLists(Object.keys(props.lists).map(id => props.lists[id]))}
      </ul>
  )
}

export default RenderLists