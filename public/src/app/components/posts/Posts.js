import React, { Component } from 'react';
import PostItem from './PostItem';
import PostService from '../../service/PostService';
import AddPost from '../../components/posts/AddPost';
import { getPosts, clearPosts } from './redux/postActions';
import { connect } from 'react-redux';
import Loader from '../../common/Loader';

@connect((store) => {
    return {
        posts: store.posts.posts,
        stop_fetch: store.posts.stop_fetch,
    }
})

class Posts extends Component {

    constructor(props) {
        super(props);
        this.state = { posts: [], loading: false, start:0, length:3 };
    }

    componentDidMount() {
        this.props.dispatch(getPosts(this.state.start, this.state.length))
        this.setState({start: this.state.start+this.state.length});
        window.addEventListener('scroll', this.handleScroll.bind(this));
    }

    componentWillUnmount(){
        this.setState({start:0, length:3})
        this.props.dispatch(clearPosts());
    }

    handleScroll(){
        var scrollTop = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
        var scrollHeight = (document.documentElement && document.documentElement.scrollHeight) || document.body.scrollHeight;
        var clientHeight = document.documentElement.clientHeight || window.innerHeight;
        var scrolledToBottom = Math.ceil(scrollTop + clientHeight) >= scrollHeight;
    
        if (scrolledToBottom && !this.props.stop_fetch) {
            this.props.dispatch(getPosts(this.state.start, this.state.length));
            this.setState({start: this.state.start+this.state.length, loading:true});
        }else{
            this.setState({loading: false});
        }
    }

    render() {

        return (
            <div className="col-md-6 col-sm-12 col-xs-12 ">
                <AddPost />
                <hr />
                {
                    this.props.posts.map(post => {
                        return (
                            <PostItem postItem={post} />
                        )
                    })

                }
                <div className="d-flex justify-content-center mt-2 mb-4">{this.state.loading && !this.props.stop_fetch ? <Loader />: ''}</div>
                <div className="d-flex justify-content-center mt-2 mb-2">{this.props.stop_fetch ? 'End Results': ''}</div>     
            </div>
        )





    }
}

export default Posts;