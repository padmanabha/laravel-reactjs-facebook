import React,{Component} from 'react';
import UserSession from '../../service/UserSession';
import {clearUserStore} from '../../redux/userAction';
import {connect} from 'react-redux';

@connect((store)=>{
    return{

    }
})
class Logout extends Component{
    constructor(props){
        super(props);
    }
    componentWillMount(){
        UserSession.deleteUserSession();
        this.props.dispatch(clearUserStore());
        this.props.history.push('/');
    }
    render(){
        return(<span>User session cleared successfully</span>);
    }
}

export default Logout;