export function getUser(){
    return {
        type: "GET_USER",
        payload: {'username': 'pady', 'email': 'pady@gmail.com', 'password': 'pady'}
    }
}

export function saveUser(){
    return {
        type: 'SAVE_USER',
        payload: {'username': 'pady', 'email': 'pady@gmail.com', 'password': 'pady'}
    }
}

export function clearUserStore(){
    return {
        type: 'CLEAR_STORE'
    }
}