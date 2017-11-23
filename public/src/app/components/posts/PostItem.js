import React, { Component } from 'react';
import Comments from '../comments/Comments'

class PostItem extends Component {

    componentDidMount() {

    }

    render() {
        const user_icon = "https://randomuser.me/api/portraits/men/"+this.props.postItem.user.id+".jpg"
        return (
            
                <div className="card mt-2">
                    <div className="card-body">

                        <h6 className="card-title">
                        <img src={user_icon} width="30" height="30" className="img img-fluid  mr-1"
                            alt="..." />
                                {this.props.postItem.user.first_name} {this.props.postItem.user.last_name}</h6>
                        <p className="card-text">
                         {this.props.postItem.post}
                        </p>

                    </div>
                    <div className="card-footer">
                        <ul className="nav">
                            <li className="nav-item">
                                <a className="nav-link">
                                    <i className="fa fa-thumbs-o-up mr-1"></i>Like
                                </a>

                            </li>
                            <li className="nav-item">
                                <a className="nav-link">
                                    <i className="fa fa-share-alt mr-1"></i>Share
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link">
                                    <i className="fa fa-comment mr-1"></i>Comment
                                </a>
                            </li>
                        </ul>
                        
                    </div>
                </div>


        )


    }
}

export default PostItem;