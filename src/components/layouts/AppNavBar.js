import React, { Component, Fragment } from "react";

class AppNavBar extends Component {
  render() {
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
            <span className="navbar-toggler-icon" />
          </button>

          <div
            className="collapse navbar-collapse justify-content-md-center"
            id="navbarsExample10"
          >
            <ul className="navbar-nav">
              <li className="nav-item active">
                <a className="nav-link text-white" href="/">
                  <strong>Client Panel</strong>{" "}
                  <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="/"
                  id="dropdown10"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Dashboard
                </a>
                <div className="dropdown-menu" aria-labelledby="dropdown10">
                  <a className="dropdown-item" href="/">
                    Action
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </nav>
      </Fragment>
    );
  }
}

export default AppNavBar;
