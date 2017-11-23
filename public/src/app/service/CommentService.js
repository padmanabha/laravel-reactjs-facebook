import Axios from '../axios/api';

class CommentService{
    Constructor(){

    }

    getComments(postId, callback){
         Axios.get("https://jsonplaceholder.typicode.com/comments?postId="+postId).then(
            result => {
                callback(result.data);
            }
        )
    }
}

export default new CommentService;