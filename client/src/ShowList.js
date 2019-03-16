import React from 'react'

const ShowList = (props) => {
    // debugger;
    // const list = props.lists.find(({ id }) => id === props.match.params.listId)
    const hStyle = {
        color: 'black'
    }
    // debugger;
    const renderItems = !!props.list.items ? props.list.items.map(item => <li key={item.id}>{item.name}</li>) : <h3>No Items</h3>

    return (
        <div>
            {renderItems}
        </div>
    )
}

export default ShowList