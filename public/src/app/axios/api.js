import Axios from 'axios';

class AxiosApi{
    constructor(){

    }

    get(url, params){
        return Axios.get(url);
    }
    
    post(url,postObj){
        return Axios.post(url,postObj);
    }
}

export default new AxiosApi;