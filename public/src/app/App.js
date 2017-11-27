import React, { Component } from 'react';
import './App.css';
import SideBar from './common/SideBar';
import Header from './common/Header';
import LoginLayout from './common/LoginLayout';
import CommonLayout from './common/CommonLayout';
import Main from './Main';
import UserSession from './service/UserSession';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loggedIn: false };

  }
  handleLogout() {
    UserSession.deleteUserSession();
    this.props.history.push('/login');
  }

  componentDidMount() {

    this.setState({ loggedIn: (UserSession.getSessionUser() ? true : false) });
  }
  componentDidUpdate() {

    this.setState({ loggedIn: (UserSession.getSessionUser() ? true : false) });
  }


  render() {

    return (



      <div >
        <Header />
        <div className="container-fluid  h-100">         
              <Main />            
          </div>
        </div>
      

    );
  }
}
export default App;

