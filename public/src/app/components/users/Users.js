import React, { Component } from 'react';
import UserService from '../../service/UserService';
import UserItem from '../../components/users/UserItem';
class Users extends Component {
    constructor(props) {
        super(props);
        this.state = { users: [] }
    }

    componentWillMount() {
        UserService.getAllUsers(users => {
            this.setState({ users: users });
        })
    }

    render() {
        return (
            <div className="col-md-6 col-xs-12 col-sm-12">
                Friends:
                <hr />
                {
                    this.state.users.map(user => {
                        return (
                            <UserItem user={user} />
                        )

                    })

                }

            </div>
        )
    }
}

export default Users;
