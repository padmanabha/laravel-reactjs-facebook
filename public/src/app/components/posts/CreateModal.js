import React, { Component } from 'react';
import $ from 'jquery';
import 'bootstrap/dist/js/bootstrap';
import ReactDOM from 'react-dom';
import Service from '../../service/PostService';

class CreateModal extends Component {

  constructor(props) {
    super(props);
    this.state = { title: '', description: '' }
  }

  componentDidMount() {
    const element = ReactDOM.findDOMNode(this);
    $(element).modal('show');
    $(element).on('hidden.bs.modal', this.props.handleHideModal);
  }

  savePost(event) {
    //console.log(this.state.title, this.state.description);
    Service.savePost({
      "userId": 1,
      "title": this.state.title,
      "body": this.state.description
    }, result => {
      console.log(result);
    });
  }

  updateTitle(event) {
    this.setState({ title: event.target.value });
  }

  updateDescription(event) {
    this.setState({ description: event.target.value });
    //this.state.description = event.target.value;
  }
  render() {
    return (

      <div className="modal fade">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
              <h4 className="modal-title">Add Post</h4>
            </div>
            <div >
              <form>
                <label>Title</label>
                <input className="form-control" onChange={this.updateTitle.bind(this)} value={this.state.title} type="text" />
                <label >Description</label>
                <textarea className="form-control" onChange={this.updateDescription.bind(this)}>{this.state.description}</textarea>
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary" onClick={this.savePost.bind(this)}>Save changes</button>
            </div>
          </div>
        </div>
      </div>
    )
  }

}

export default CreateModal;