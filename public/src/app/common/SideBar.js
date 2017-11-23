import React, { Component } from 'react';
import UserSession from '../service/UserSession';
import './sidebar.css';
import {Link} from 'react-router-dom';

class SideBar extends Component {

    render() {

        return (
                    <div className="col-md-2 col-sm-12 col-xs-12" id="sidebar">
                        <ul className="nav flex-column">
                            <li className="nav-item">
                                <Link to={"/home/posts"} className="nav-link active">
                                    <i className="fa fa-feed mr-1"></i>News feed</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={"/home/users"} className="nav-link">
                                    <i className="fa fa-users mr-1"></i>Friends List</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={"/home/photos"} className="nav-link">
                                    <i className="fa fa-photo mr-1"></i>Photos</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={"/home/events"} className="nav-link">
                                    <i className="fa fa-calendar mr-1"></i>Events</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={"/home/groups"} className="nav-link">
                                    <i className="fa fa-group mr-1"></i>Groups</Link>
                            </li>
                        </ul>
                </div>

        )

    }
}

export default SideBar;