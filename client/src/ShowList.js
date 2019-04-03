import React from 'react'
import ItemsForm from './ItemsForm'
import { Col } from 'reactstrap';
import Item from './Item'

const ShowList = (props) => {
    // debugger;
    // const list = props.lists.find(({ id }) => id === props.match.params.listId)
    // const handleOnClick = (e) => {
    //     e.preventDefault()
    //     debugger
    // }

const renderItems = !!props.list.items ? props.list.items.map(item => <Item key={item.id} item={item} deleteItem={props.deleteItem} checkItem={props.checkItem} list={props.list} />) : <h3>No Items</h3>

    return (
        <div>
            <h1>{props.list.title}</h1>
            <Col sm={{size: 6, offset: 3}}>
            {renderItems}
            </Col>
            <ItemsForm list={props.list} addItem={props.addItem} />
        {/* <div className="example animated">me</div> */}
            
        </div>
    )
}

export default ShowList


