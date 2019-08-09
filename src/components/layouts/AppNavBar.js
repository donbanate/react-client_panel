import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { compose } from "redux";
import { connect } from "react-redux";
import { firebaseConnect } from "react-redux-firebase";

class AppNavBar extends Component {
  state = {
    isAuthenticated: false
  };

  static propTypes = {
    firebase: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired,
    settings: PropTypes.object.isRequired
  };

  static getDerivedStateFromProps(props, state) {
    const { auth } = props;

    if (auth.uid) {
      return { isAuthenticated: true };
    } else {
      return { isAuthenticated: false };
    }
  }
  onLogoutClick = e => {
    e.preventDefault();

    const { firebase } = this.props;
    firebase.logout();
  };

  render() {
    const { auth } = this.props;
    const { isAuthenticated } = this.state;
    const { allowRegistration } = this.props.settings;

    return (
      <Fragment>
        <nav className="navbar navbar-expand-lg navbar-light bg-success">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarsExample10"
            aria-controls="navbarsExample10"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-piggy-bank text-white" />
          </button>

          <div
            className="collapse navbar-collapse justify-content-md-center"
            id="navbarsExample10"
          >
            <ul className="navbar-nav">
              <li className="nav-item active">
                {isAuthenticated ? (
                  <Link to="/" className="nav-link text-white">
                    <strong style={{ fontSize: "2em" }}>Client Panel</strong>
                  </Link>
                ) : (
                  <strong
                    className="nav-link text-white"
                    style={{ fontSize: "2em" }}
                  >
                    Client Panel
                  </strong>
                )}
              </li>
              {isAuthenticated && (
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <a href="#!" className="nav-link">
                      {auth.email}
                    </a>
                  </li>
                  <li className="nav-item">
                    <Link to="/settings" className="nav-link">
                      Settings
                    </Link>
                  </li>
                  <li className="nav-item">
                    <a
                      href="#!"
                      className="nav-link"
                      onClick={this.onLogoutClick}
                    >
                      <i className="fas fa-sign-out-alt" />{" "}
                      <small>Sign out</small>
                    </a>
                  </li>
                </ul>
              )}
            </ul>
            {allowRegistration && !isAuthenticated ? (
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link to="/login" className="nav-item mr-2 text-white">
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/register" className="nav-item text-white">
                    Register
                  </Link>
                </li>
              </ul>
            ) : null}
          </div>
        </nav>
      </Fragment>
    );
  }
}

export default compose(
  firebaseConnect(),
  connect((state, props) => ({
    auth: state.firebase.auth,
    settings: state.settings
  }))
)(AppNavBar);
