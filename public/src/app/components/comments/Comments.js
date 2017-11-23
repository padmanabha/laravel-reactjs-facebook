import React,{Component} from 'react';
import CommentItem from './CommentItem';
import CommentService from '../../service/CommentService';

class Comments extends Component{

    constructor(props){
        super(props);
        this.state = {
            "comments": []
        }
    }

   
    
    render(){
        const {comments} = this.props;
        let commentsCount = comments.length;
        return(
            <div className="comments">
                <div>
                    <h5>{commentsCount} Comments</h5>
                </div>
                <ul className="comments-list">
                    {
                       comments.map(comment => {
                            return (
                                <CommentItem comment={comment} />
                            );
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default Comments;