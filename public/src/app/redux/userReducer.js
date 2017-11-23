export default function reducer(state={}, action) {
    
    switch(action.type){
        case "GET_USER":
        return  {...state, user: action.payload};
        break;
        case "CLEAR_STORE":
        return {...state, users:[], posts:[], user:{}}
        break;
        default:
        return state;
        break;

    }
   
}