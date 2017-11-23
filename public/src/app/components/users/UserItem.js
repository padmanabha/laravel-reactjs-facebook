import React, { Component } from 'react';

class UserItem extends Component {
    constructor(props) {
        super(props);
       
    }
    render() {
        var {user} = this.props;
        const img_url = "https://randomuser.me/api/portraits/med/men/"+user.id+".jpg";
        return (
            <div className="card mt-2">
                <div className="card-body">
                    <img className="img-thumbnail float-left mr-1" src={img_url} />
                    <h6 className="card-title mt-1">{user.first_name} {user.last_name}</h6>
                    <h6>Joined on: {user.created_at}</h6>
                </div>
            </div>

        )
    }
}
export default UserItem;