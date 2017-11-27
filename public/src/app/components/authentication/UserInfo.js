import React, { Component } from 'react';
import UserSession from '../../service/UserSession';
import { Link, Redirect } from 'react-router-dom';
class UserInfo extends Component {
    constructor(props) {
        super(props);
        this.state = { user: '' }
    }

    componentDidMount() {
        var sessUser = UserSession.getSessionUser();
        if (sessUser) {
            this.setState({ user: sessUser })
        }
    }
    render() {
        const user_icon = "https://randomuser.me/api/portraits/men/"+this.state.user.id+".jpg"
        return (
            <div>
                {this.state.redirectToLogin ? (<Redirect to={"/logout"} />) : ""}
                <ul className="navbar-nav">
                    <li className="nav-item">

                        <Link className="nav-link" to={"/timeline"}><img src={user_icon} width="30" height="30" className="img img-fluid rounded-circle mr-1"
                            alt="..." />{this.state.user.first_name} {this.state.user.last_name}</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to={"/logout"}>Logout</Link>
                    </li>

                </ul>

            </div>
        )
    }
}

export default UserInfo;