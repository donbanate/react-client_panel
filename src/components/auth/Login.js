import React, { Component } from "react";
// import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { compose } from "redux";
import { connect } from "react-redux";
import { firebaseConnect } from "react-redux-firebase";
import { notifyUser } from "../../actions/notifyActions";
import Alert from "../layouts/Alert";

class Login extends Component {
  state = {
    email: "",
    password: ""
  };

  static propTypes = {
    firebase: PropTypes.object.isRequired
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  //Login
  onSubmit = e => {
    e.preventDefault();
    const { firebase, notifyUser } = this.props;
    const { email, password } = this.state;

    firebase
      .login({
        email,
        password
      })
      .catch(err => notifyUser("Invalid login credentials", "error"));
  };

  render() {
    const { message, messageType } = this.props.notify;

    return (
      <div className="row mt-4">
        <div className="col-md-6 mx-auto">
          {messageType === "error" && (
            <Alert message={message} messageType={messageType} />
          )}
          <div className="card">
            <div className="card-body">
              <h1 className="text-center pb-4 pt-3">
                Log<span className="text-success">in</span>{" "}
              </h1>
              <form onSubmit={this.onSubmit}>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="text"
                    className="form-control"
                    name="email"
                    onChange={this.onChange}
                    value={this.state.email}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    name="password"
                    onChange={this.onChange}
                    value={this.state.password}
                  />
                </div>
                <input type="submit" className="btn btn-info" value="Sign in" />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default compose(
  firebaseConnect(),
  connect(
    state => ({
      notify: state.notify
    }),
    { notifyUser }
  )
)(Login);
