import React from 'react'
import ItemsForm from './ItemsForm'

const ShowList = (props) => {
    // debugger;
    // const list = props.lists.find(({ id }) => id === props.match.params.listId)
    const hStyle = {
        color: 'black'
    }
    const renderItems = !!props.list.items ? props.list.items.map(item => <li key={item.id}>{item.name}</li>) : <h3>No Items</h3>
    // debugger;

    return (
        <div>
            {renderItems}
            <ItemsForm list={props.list} addItem={props.addItem} />
        </div>
    )
}

export default ShowList