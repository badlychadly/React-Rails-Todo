import React from 'react'
import ItemsForm from './ItemsForm'
import { Badge } from 'reactstrap';

const ShowList = (props) => {
    // debugger;
    // const list = props.lists.find(({ id }) => id === props.match.params.listId)
    const handleOnClick = (e) => {
        e.preventDefault()
        debugger
    }

    const renderItems = !!props.list.items ? props.list.items.map(item => <li key={item.id}>{item.name} <Badge onClick={handleOnClick} href="#" color="danger">X</Badge></li>) : <h3>No Items</h3>

    return (
        <div>
            <h1>{props.list.title}</h1>
            {renderItems}
            <ItemsForm list={props.list} addItem={props.addItem} />
        </div>
    )
}

export default ShowList