import React, { useState, useEffect } from 'react'
import { Card, CardText, Row, Col  } from 'reactstrap';


const Item = props => {
    const [itemCheck, setItemCheck] = useState(props.item.checked)
    const [animateItem, setAnimateItem] = useState("")

    useEffect(() => {
        setItemCheck(props.item.checked)
        props.item.checked ? setAnimateItem("animated example") : setAnimateItem("")
    })

    return (
        // <li>
        //     {props.item.checked ? <del>{props.item.name}</del> : props.item.name} 
        //     <Badge onClick={() => props.deleteItem(props.list.id, props.item.id )} tag={Button} size="sm" color="danger">X</Badge>  
            
        //     <Badge onClick={() => props.checkItem(props.list.id, props.item.id)} tag={Button} color="success">{props.item.checked ? "uncheck" : "check"}</Badge>
        // </li>
        <Card className="p-3 m-2 myCard" onClick={() => props.checkItem(props.list.id, props.item.id)}>
                <CardText tag="h4">
                <Row>
                    <Col>
                        <div className="ml-5">{props.item.name}</div>
                    </Col>
                    <Col sm="4">
                    {itemCheck &&
                    <div className={`${animateItem} bg-success text-white`}>&#10003;</div>
                    } 
                    </Col>

                </Row>
                </CardText>

        </Card>
    )
}

export default Item