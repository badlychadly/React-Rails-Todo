import React from 'react'
import { Link } from 'react-router-dom'
import { Badge } from 'reactstrap';

const RenderLists = props => {

  

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
        {renderLists(props.lists)}
        </ul>
    )
}

export default RenderLists