import Axios from '../axios/api';
import config from '../config/config';

class PostsService {
    constructor() {

    }
    getPosts(start, length,callback) {
        Axios.get(config.api_base_url+'/api/posts?start='+start+'&length='+length).then(
            result => {
                callback(result.data);
            }
        )
    }

    savePost(post, userId, callback) {
        Axios.post(config.api_base_url + '/api/posts',
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