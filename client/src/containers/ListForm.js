import React, { Component } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input, Label, Form, FormGroup, Col } from 'reactstrap';
import { Redirect } from 'react-router-dom'

class ListForm extends Component {

    state = {
        toNewList: false,
        modal: false,
        backdrop: false,
        list: {title: ''}
      };

    toggle = () => {
        this.setState(prevState => ({
          modal: !prevState.modal
        }));
      }

      changeBackdrop = (e) => {
        let value = e.target.value;
        if (value !== 'static') {
          value = JSON.parse(value);
        }
        this.setState({ backdrop: value });
      }

      handleOnChange = (e) => {
          this.setState({list: {title: e.target.value}})
      }


      handleOnSubmit = (e) => {
        //   console.log(this.state.list)
          e.preventDefault()
        //   fetch('http://10.0.0.99:3001/lists', {
        //       method: 'POST',
        //       headers: {'Content-Type': 'application/json'},
        //       body: JSON.stringify(this.state.list)
        //   })
        //   .then(resp => resp.json())
          this.props.addList(this.state.list).then(action => this.setState({list: action.list, toNewList: true}) 
        )
      }

      resetState = () => {
          this.setState({toNewList: false})
      }


    render() {
        // debugger;
        if (this.state.toNewList) {
            // FIND way to reset toNewList state on submission
            // this.resetState()
            return <Redirect to={`/lists/${this.state.list.id}`} />
        }
        return (
            <div>
                <Button color="danger" onClick={this.toggle}>new list</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className} backdrop={this.state.backdrop}>
                    <ModalHeader toggle={this.toggle}>List title</ModalHeader>
                    <Form onSubmit={this.handleOnSubmit}>
                        <ModalBody>
                            <Col sm={10}>
                                <Input 
                                    type="text" 
                                    name="title" 
                                    id="exampleEmail" 
                                    onChange={this.handleOnChange}
                                    value={this.state.list.title} 
                                    placeholder="with a placeholder" />
                            </Col>

                        </ModalBody>
                        <ModalFooter>
                            <Button color="primary">Submit</Button>
                            {/* <Button color="secondary" onClick={this.toggle}>Cancel</Button> */}
                        </ModalFooter>
                    </Form>
                </Modal>
            </div>
        );
    }
}

export default ListForm