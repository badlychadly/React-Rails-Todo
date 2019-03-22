import React, { Component } from 'react'
import { Button, Form, InputGroup, InputGroupAddon, Input } from 'reactstrap';

class ItemsForm extends Component {

    state = {
        name: ''
    }

    handleOnChange = e => {
        this.setState({name: e.target.value})
    }

    handleOnSubmit = e => {
        e.preventDefault()

        this.props.addItem(this.props.list, this.state)
        this.setState({name: ''})
    }



    render() {
        return (
            <Form onSubmit={this.handleOnSubmit}>
                <InputGroup>
                    <Input name="name" onChange={this.handleOnChange} value={this.state.name} placeholder="add item" />
                    
                    <InputGroupAddon addonType="append"><Button type="submit">+</Button></InputGroupAddon>
                </InputGroup>
            </Form>
        )
    }
}

export default ItemsForm