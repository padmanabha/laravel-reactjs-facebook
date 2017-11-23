export default function reducer(state={posts:[]}, action){
    switch(action.type){
        case "GET_ALL_POSTS":
        return {...state, posts: [...state.posts, ...action.payload], loading:false, stop_fetch:false }
        break;

        case "SAVE_POST":
        return {...state, posts: [action.payload,...state.posts], post:'' }
        break;

        case "STOP_FETCH":
        return {...state, stop_fetch:true, loading:false}
        break;

        case "CLEAR_POSTS":
        return {...state, posts:[],stop_fetch:false}
        break;

        default:
        return state;
        break;
    }
        
    
}