import Axios from '../axios/api';
class AuthService{
    constructor(){

    }

    login(email, password, callback){
        Axios.post('http://blogs.local/api/login', {'email':email, 'password': password}).then(
            result => callback(result.data)
        )
    }

    register(fname, lname,email, password, rpassword, callback){
        Axios.post('http://blogs.local/api/register',
        {first_name: fname, last_name: lname, password: password,email: email, password_confirmation: rpassword}).then(
            result => {
                callback({data: result.data});
            }
        ).catch(error=>{
            callback({error: error});
        })
    }
}

export default new AuthService;
