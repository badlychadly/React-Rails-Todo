import React from 'react'
import { Badge, Button } from 'reactstrap';


const Item = props => {

    return (
        <li>{props.item.name} <Badge onClick={() => props.deleteItem(props.list.id, props.item.id )} tag={Button} size="sm" color="danger">X</Badge>  <Badge href="#" color="success">check</Badge></li>
    )
}

export default Item