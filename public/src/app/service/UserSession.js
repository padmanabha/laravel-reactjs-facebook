class UserSession{
    getSessionUser(){
        if(sessionStorage.getItem('user')){
            return JSON.parse(sessionStorage.getItem('user'));
        }else{
            return false;
        }
        
    }

    setSessionUser(userObj){
        sessionStorage.setItem('user',JSON.stringify(userObj));
    }

    deleteUserSession(){
        sessionStorage.clear('user');
    }

    isAuthenticated(){
        
    }
}
export default new UserSession;