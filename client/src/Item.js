import React from 'react'
import { Badge, Button } from 'reactstrap';


const Item = props => {

    return (
        <li>
            {props.item.checked ? <del>{props.item.name}</del> : props.item.name} 
            <Badge onClick={() => props.deleteItem(props.list.id, props.item.id )} tag={Button} size="sm" color="danger">X</Badge>  
            
            <Badge onClick={() => props.checkItem(props.list.id, props.item.id)} tag={Button} color="success">{props.item.checked ? "uncheck" : "check"}</Badge></li>
    )
}

export default Item