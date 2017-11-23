import React, { Component } from 'react';
import PostService from '../../service/PostService';
import UserSession from '../../service/UserSession';
import { savePost } from './redux/postActions';
import { connect } from 'react-redux';
import Loader from '../../common/Loader';
@connect((store) => {

})
class AddPost extends Component {
    constructor(props) {
        super(props);
        this.state = { post: '', loading: false };
    }
    changePost(event) {
        this.setState({ post: event.target.value });
    }
    savePost(event) {
        event.preventDefault();
        this.setState({loading: true});
        var user = UserSession.getSessionUser();
        PostService.savePost(this.state.post, user.id, result => {
            if(result.data){
                this.props.dispatch(savePost(result.data, user));
                
               
            }else if(result.error){
                console.log(result.error);
            }
            this.setState({post:'', loading: false});
           
        });
       // this.setState({loading: false})
        
    }
    render() {
        return (
            
                <div className="card mt-2">
                    <div className="card-body">
                        <form onSubmit={this.savePost.bind(this)}>
                            <textarea value={this.state.post} onChange={this.changePost.bind(this)} className="form-control" placeholder="what's on your mind?" />
                            {this.state.loading ? <Loader /> : ''}
                            <button type="submit" className="btn btn-sm btn-primary float-right mt-2">Post</button>
                        </form>
                    </div>
                </div>

            
            
        )
    }
}
export default AddPost;