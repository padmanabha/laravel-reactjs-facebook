import React, { Component } from 'react';
import AuthService from '../../service/AuthService';
import UserSession from '../../service/UserSession';
import UserService from '../../service/AuthService';
import {InlineError,SuccessMessage} from '../../common/Messages';
import Loader from '../../common/Loader';

class Register extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: {
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        rpassword: ''

      },
      errors: {

      },
      messages: {

      },
      loading: false
    }

  }

  componentDidMount() {
    var user = UserSession.getSessionUser();
    if (user.name) {
      this.props.history.push('/home');
    }
  }

  handleSubmit(event) {
    event.preventDefault();


    const errors = this.validate(this.state.data);
    this.setState({ errors });
    
    if (Object.keys(errors).length == 0) {
      this.setState({loading:true});
      AuthService.register(this.state.data.firstname, this.state.data.lastname, this.state.data.email, this.state.data.password, this.state.data.rpassword,
        result => {
          if(result.data){
            this.setState({
              messages: {
                ...this.state.messages, SuccessMessage: "Successfully Registered!! please Login !!"
              }
            });
          }else if(result.error){
            console.log(error);
          }

          this.setState({loading: false});
          
        });
    }
  }

  handleChange(event) {
    this.setState({
      data: { ...this.state.data, [event.target.name]: event.target.value }
    });
  }

  validate = data => {
    const errors = {};
    if (!data.firstname) {
      errors.firstname = "Enter First Name"
    }
    if (!data.lastname) {
      errors.lastname = "Enter Last Name";
    }
    if (!data.email) {
      errors.email = "Enter Email";
    }
    if (!data.password) {
      errors.password = "Enter Password";
    }
    if (!data.rpassword) {
      errors.rpassword = "Re Enter Password";
    }

    return errors;
  }
  render() {
    const { data, errors, messages, loading } = this.state;
    return (





      <div className="row justify-content-md-center" id="router">
            <div className="col-md-6">
              <div className="card top-margin">
                <div className="card-body">
                  <h3 className="card title">Welcome to facebook</h3>
                  {loading ? <Loader /> : ''}
                  <form id="register" method="post" onSubmit={this.handleSubmit.bind(this)}>

                    <div className="col-lg-12">
                      <h6 className="text-center align-content-center text-justify">
                        Connect with friends and the world around you.
                            </h6>
                      <div className="form-group">
                        {messages.SuccessMessage? <SuccessMessage message={messages.SuccessMessage} />:''}
                        <input type="text" value={data.firstName} onChange={this.handleChange.bind(this)} id="firstname" name="firstname" className="form-control" placeholder="First Name" />
                        {errors.firstname ? <InlineError errorMessage={errors.firstname} /> : ""}
                      </div>
                      <div className="form-group">
                        <input type="text" value={data.lastName} onChange={this.handleChange.bind(this)} id="lastname" name="lastname" className="form-control" placeholder="Last Name" />
                        {errors.lastname ? <InlineError errorMessage={errors.lastname} /> : ""}

                      </div>
                      <div className="form-group">
                        <input type="text" value={data.email} onChange={this.handleChange.bind(this)} id="email" name="email" className="form-control" placeholder="Email" />
                        {errors.email ? <InlineError errorMessage={errors.email} /> : ""}
                      </div>
                      <div className="form-group">
                        <input type="password" value={data.password} onChange={this.handleChange.bind(this)} id="password" name="password" className="form-control" placeholder="Password" />
                        {errors.password ? <InlineError errorMessage={errors.password} /> : ""}
                      </div>
                      <div className="form-group">
                        <input type="password" value={data.rpassword} onChange={this.handleChange.bind(this)} id="rpassword" name="rpassword" className="form-control" placeholder="Re Enter Password" />
                        {errors.rpassword ? <InlineError errorMessage={errors.rpassword} /> : ""}
                      </div>


                      <div className="form-group">
                        <button className="btn btn-lg btn-primary form-control" type="submit">Sign Up for Facebook</button>
                      </div>

                    </div>
                  </form>
                </div>
              </div>
            </div>
            </div>

         

    );
  }
}

export default Register;