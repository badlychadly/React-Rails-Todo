import React from 'react'
import ItemsForm from './ItemsForm'
import { Badge, Button } from 'reactstrap';

const ShowList = (props) => {
    // debugger;
    // const list = props.lists.find(({ id }) => id === props.match.params.listId)
    // const handleOnClick = (e) => {
    //     e.preventDefault()
    //     debugger
    // }

    const renderItems = !!props.list.items ? props.list.items.map(item => <li key={item.id}>{item.name} <Badge onClick={() => props.deleteItem(props.list.id, item.id )} tag={Button} size="sm" color="danger">X</Badge>  <Badge href="#" color="success">check</Badge></li>) : <h3>No Items</h3>

    return (
        <div>
            <h1>{props.list.title}</h1>
            {renderItems}
            <ItemsForm list={props.list} addItem={props.addItem} />
        </div>
    )
}

export default ShowList