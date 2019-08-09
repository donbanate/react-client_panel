import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { compose } from "redux";
import { connect } from "react-redux";
import { firebaseConnect } from "react-redux-firebase";

class AppNavBar extends Component {
  state = {
    isAuthenticated: false,
    activeLoginNav: true,
    activeRegisterNav: false
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

  onChangeActive = () => {
    const { activeLoginNav, activeRegisterNav } = this.state;

    if (activeLoginNav) {
      this.setState({
        activeLoginNav: !activeLoginNav,
        activeRegisterNav: !activeRegisterNav
      });
    }
  };

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
        <nav className="navbar navbar-expand-lg mt-1 navbar-dark bg-success rounded">
          {isAuthenticated ? (
            <Link to="/" className="navbar-brand">
              Client Panel
            </Link>
          ) : (
            <a className="navbar-brand" href="#!">
              Client Panel
            </a>
          )}
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarsExample09"
            aria-controls="navbarsExample09"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-piggy-bank" />
          </button>

          <div className="collapse navbar-collapse" id="navbarsExample09">
            {isAuthenticated ? (
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <Link className="nav-link" to="/">
                    Dashboard <span className="sr-only">(current)</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/settings" className="nav-link">
                    Settings
                  </Link>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#!"
                    id="dropdown09"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    {auth.email}
                  </a>
                  <div className="dropdown-menu" aria-labelledby="dropdown09">
                    <a
                      className="dropdown-item"
                      href="#!"
                      onClick={this.onLogoutClick}
                    >
                      <i className="fas fa-sign-out-alt" /> Sign out
                    </a>
                  </div>
                </li>
              </ul>
            ) : null}
            {allowRegistration && !isAuthenticated ? (
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active" onClick={this.onChangeActive}>
                  <Link to="/login" className="nav-link">
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/register"
                    className="nav-link"
                    onClick={this.onChangeActive}
                  >
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
