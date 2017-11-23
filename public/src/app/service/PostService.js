import Axios from '../axios/api';

class PostsService {
    constructor() {

    }
    getPosts(start, length,callback) {
        Axios.get('http://blogs.local/api/posts?start='+start+'&length='+length).then(
            result => {
                callback(result.data);
            }
        )
    }

    savePost(post, userId, callback) {
        Axios.post('http://blogs.local/api/posts',
            {
                "user_id": userId,
                "post": post
            }).then(
            result => {
                callback({ data: result.data });
            }
            ).catch(
            function (error) {
                callback({ error: error });
            }
            )
    }

    getPost(postId, callback) {
        Axios.get('https://jsonplaceholder.typicode.com/posts/' + postId).then(
            result => {
                callback(result);
            }
        )
    }
}
export default new PostsService;