import React, { Component } from 'react';

import PostService from '../service/PostService';
import AuthService from '../service/AuthService';
import UserSession from '../service/UserSession';
import Login from '../components/authentication/Login';
import UserInfo from '../components/authentication/UserInfo';




class Header extends Component {

  constructor(props) {
    super(props);
    this.state = { view: [], user: '', isLoggedIn: false };

  }
  getInitialState() {
    return { view: { showModal: false } }
  }
  handleHideModal() {
    this.setState({ view: { showModal: false } })
  }
  handleShowModal() {
    this.setState({ view: { showModal: true } })
  }
  componentDidMount() {
    var user = UserSession.getSessionUser();
    this.setState({ user: user });
  }

  componentDidUpdate() {
    var user = UserSession.getSessionUser();
    this.setState({ user: user });
    if (user) {
      this.setState({ isLoggedIn: true });
    } else {
      this.setState({ isLoggedIn: false });
    }
  }

  handleSave(post) {
    PostService.savePost(post);
  }



  render() {
    return (
      <div>
        <header>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
              <a className="navbar-brand">ReactJS Demo</a>

              {this.state.isLoggedIn ? <UserInfo /> : <Login />}

            </div>
          </nav>
        </header>
      </div>
    );
  }
}

export default Header;