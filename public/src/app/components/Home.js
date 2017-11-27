import React, {Component} from 'react';
import Posts from './posts/Posts';
import Users from './users/Users';
import Photos from './photos/Photos';
import Groups from './groups/Groups';
import Events from './events/Events';
import SideBar from '../common/SideBar';
import RightBar from '../common/RightBar';
import {Switch, Route} from 'react-router-dom';

class Home extends Component{
    constructor(props){
        super(props);
    }
    

    componentDidMount(){
    }

    render(){
       
        return (
            <div className="row justify-content-md-center" id="router">
                <SideBar />
                    
                    <Route exact path="/home/posts" component={Posts} />
                    <Route exact path="/home/users" component={Users} />
                    <Route exact path="/home/photos" component={Photos} />
                    <Route exact path="/home/events" component={Events} />
                    <Route exact path="/home/groups" component={Groups} />
                <RightBar />
            </div>
        )
    }
}

export default Home;
