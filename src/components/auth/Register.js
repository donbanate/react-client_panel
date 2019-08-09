import React, { Component } from "react";
import PropTypes from "prop-types";
import { compose } from "redux";
import { connect } from "react-redux";
import { firebaseConnect } from "react-redux-firebase";
import { notifyUser } from "../../actions/notifyActions";
import Alert from "../layouts/Alert";

class Register extends Component {
  state = {
    email: "",
    password: ""
  };

  static propTypes = {
    firebase: PropTypes.object.isRequired,
    notify: PropTypes.object.isRequired,
    notifyUser: PropTypes.func.isRequired
  };

  componentWillMount() {
    const { allowRegistration } = this.props.settings;

    if (!allowRegistration) {
      this.props.history.push("/");
    }
  }

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  //Login
  onSubmit = e => {
    e.preventDefault();
    const { firebase, notifyUser } = this.props;
    const { email, password } = this.state;

    //Register User
    firebase
      .createUser({ email, password })
      .catch(err => notifyUser("Please use another info..", "error"));
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
                Register <span className="text-success">now</span>{" "}
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
                <input
                  type="submit"
                  className="btn btn-success"
                  value="Sign Up"
                />
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
      notify: state.notify,
      settings: state.settings
    }),
    { notifyUser }
  )
)(Register);
