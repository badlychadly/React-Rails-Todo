import React from 'react'

const ShowList = (props) => {
    // debugger;
    // const list = props.lists.find(({ id }) => id === props.match.params.listId)
    const hStyle = {
        color: 'black'
    }

    const items = props.list.items.map(item => <li key={item.id}>{item.name}</li>)

    return (
        <div>
            {items}
        </div>
    )
}

export default ShowList