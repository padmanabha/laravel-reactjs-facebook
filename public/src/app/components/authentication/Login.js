import React, { Component } from 'react';
import AuthService from '../../service/AuthService';
import UserSession from '../../service/UserSession';
import { Link, Redirect } from 'react-router-dom';
import {InlineError} from '../../common/Messages';
import { connect } from 'react-redux';
import { getUser } from '../../redux/userAction';
import store from '../../redux/store';
import Loader from '../../common/Loader';

@connect((store) => {

    return {
        user: store.user
    }
})

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {
                email: '',
                password: ''
            },
            errors: {

            },
            loading: false,
            redirectTohome: false
        };
    }

    handleChange(event) {
        this.setState({
            data: { ...this.state.data, [event.target.name]: event.target.value }
        });
    }

    validate = (data) => {
        const errors = {}
        if (!data.email) {
            errors.email = "Enter email";
        }
        if (!data.password) {
            errors.password = "Enter Password";
        }

        return errors;
    }

    componentWillMount() {
        this.props.dispatch(getUser());

    }


    handleSubmit(event) {
        event.preventDefault();
        let errors = this.validate(this.state.data);
        this.setState({ errors });

        if (Object.keys(errors).length == 0) {
            this.setState({loading: true});
            AuthService.login(this.state.data.email, this.state.data.password, result => {
                if (result.message) {
                    errors.loginFailed = result.message;
                    this.setState({ errors: { ...this.state.errors, loginFailed: result.message } })
                    //console.log(result.message);
                } else {
                    UserSession.setSessionUser(result[0]);

                    this.setState({ redirectToHome: true });
                }
                this.setState({loading: false});
            });
        }



    }


    render() {
        
        const { data, errors, loading } = this.state;
        return (
            <div>
                
                {this.state.redirectToHome ? (<Redirect to={"/home/posts"} />) : ""}
                
                <form method="post" id="login_form" onSubmit={this.handleSubmit.bind(this)}>
               
                <div className="form-group row" >
                    <div class="col-xs-2">
                    {loading ? <Loader /> : ''}
                        </div>
                             <div className="col-xs-2">
                            <input type="text" name="email" value={data.email} onChange={this.handleChange.bind(this)}  placeholder="Email or Phone" className="form-control form-control-sm" />
                        </div>
                        <div className="col-xs-2 mx-1">
                            <input type="password" name="password" value={data.password} onChange={this.handleChange.bind(this)}  placeholder="Password" className="form-control form-control-sm" />
                        </div>
                        <div className="col-xs-2">
                            <button type="submit" className="btn btn-sm btn-primary">Login</button>
                        </div>
                    
                </div>
                </form>
                <div className="row">
                    <div className="col-xs-6">
                        
                        
                        {errors.loginFailed ? <InlineError errorMessage={errors.loginFailed} /> : ""}
                        {errors.email ? <InlineError errorMessage={errors.email} /> : ""}
                        {errors.password ? <InlineError errorMessage={errors.password} /> : ""}
                    </div>
                </div>


            </div>
        )
    }
}

export default Login;