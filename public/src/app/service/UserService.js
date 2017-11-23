import Axios from '../axios/api';
class UserService{
    getAllUsers(callback){
        Axios.get("http://blogs.local/api/users").then( result => {
            callback(result.data);
        });
    }
}

export default new UserService();