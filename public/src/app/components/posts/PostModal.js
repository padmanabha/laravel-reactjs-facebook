import React,{Component} from 'react';
import ReactDOM from 'react-dom';

import {Modal, Button} from 'react-bootstrap';




class PostModal extends Component{
  constructor(props){
    super(props);

    this.state = {showModal: true}
  }

  componentDidMount() {
    const element = ReactDOM.findDOMNode(this);
  }

  getInitialState() {
    return { showModal: true };
  }

  close() {
    this.setState({ showModal: false });
  }

  open() {
    this.setState({ showModal: true });
  }
    render(){
        	return (
            <div className="static-modal">
              <Modal show={this.state.showModal} onHide={this.close.bind(this)}>
                <Modal.Header closeButton>
                  <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <hr />
                  <h4>Overflowing text to show scroll behavior</h4>
                  <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam.</p>
                </Modal.Body>
                <Modal.Footer>
                  <Button onClick={this.close}>Close</Button>
                </Modal.Footer>
              </Modal>
            </div>
            )
        }
}

export default PostModal;