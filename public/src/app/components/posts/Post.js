import React, { Component } from 'react';
import PostService from '../../service/PostService';
import CommentService from '../../service/CommentService';
import CommentItem from '../comments/CommentItem';

class Post extends Component {
    constructor(props) {
        super(props);
        this.state = { postId: 1, post:{}, comments: [] };
        
        
    }
    componentDidMount() {

        this.state ={post: {}, comments: []};
        
        this.setState({postId: this.props.match.params.postId});
        PostService.getPost(this.props.match.params.postId, result => {
            this.setState({ post : result.data});
            CommentService.getComments(this.props.match.params.postId, (comments) => {
                    this.setState({ "comments" : comments});
            });
            
        });
    }

    render() {
       console.log(this.state.comments);

        return (
            <div>
                {
                    <div>
                        <h3 className="media-heading">{this.state.post.title}</h3>
                        <p>{this.state.post.body}</p>
                        
                        Comments
                        
                        <ul className="comments-list">
                            {
                               this.state.comments.map(comment => {
                                   return(
                                       <CommentItem comment={comment} />
                                   );
                               })
                            }
                        </ul>
                    </div>

                }
            </div>
        )
    }
}

export default Post;