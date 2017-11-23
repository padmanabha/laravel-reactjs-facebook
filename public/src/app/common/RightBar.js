import React, { Component } from 'react';

class RightBar extends Component {
    render() {
        return (
            <div className="col-md-3 col-sm-12 col-xs-12">
                <div className="card mt-2">
                    <div className="card-header">
                        Featured
                    </div>
                    <div className="card-body">
                        <h4 className="card-title">Special title treatment</h4>
                        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default RightBar;