import React,{Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Register from './components/authentication/Register';
import Logout from './components/authentication/Logout';
import Home from './components/Home';
import Post from './components/posts/Post';
import Users from './components/users/Users';

import store from './redux/store';

class Main extends Component {
 render(){
     
       return(
           

                               <Switch>
                                   <Route name="Register" exact path='/' component={Register} />
                                   <Route name="logout" exact path='/logout' component={Logout} />
                                   <Route name="home" exact path='/home/:page' component={Home} />
                                   <Route name="post" path='/posts/:postId' component={Post} />
                               </Switch>
                 
       ); 
 }    
}

export default Main;