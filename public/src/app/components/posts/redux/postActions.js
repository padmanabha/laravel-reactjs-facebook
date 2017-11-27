import PostService from '../../../service/PostService';

export function getPosts(start, length) {
    return function (dispatch) {
        PostService.getPosts(start, length,posts => {
            if(posts.length){
                dispatch({
                    type: "GET_ALL_POSTS",
                    payload:posts
                })
    
            }else{
                dispatch({
                    type: "STOP_FETCH"
                })
            }
            

        });
    }
}

export function savePost(post, user){
    return {
        type: "SAVE_POST",
        payload: {...post , user: user, comments:[]}
    }
}

export function clearPosts(){
    return{
        type: "CLEAR_POSTS"
    }
}