import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";

class AddClient extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    balance: ""
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    return (
      <Fragment>
        <div className="row">
          <div className="col-md-3">
            <Link to="/" className="btn btn-link">
              <i className="fas fa-arrow-alt-circle-left" />
              Back to dashboard
            </Link>
          </div>
        </div>
        <div className="card col-md-12">
          <div className="card-header">Add Client</div>
          <div className="card-body">
            <form>
              <div className="form-group">
                <label htmlFor="firstName">First Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="firstName"
                  minLength="2"
                  required
                  onChange={this.onChange}
                  value={this.state.firstName}
                />
              </div>
              <div className="form-group">
                <label htmlFor="firstName">Last Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="lastName"
                  minLength="2"
                  required
                  onChange={this.onChange}
                  value={this.state.lastName}
                />
              </div>
              <div className="form-group">
                <label htmlFor="firstName">Email</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  minLength="2"
                  required
                  onChange={this.onChange}
                  value={this.state.email}
                />
              </div>
              <div className="form-group">
                <label htmlFor="firstName">Phone</label>
                <input
                  type="text"
                  className="form-control"
                  name="phone"
                  minLength="2"
                  required
                  onChange={this.onChange}
                  value={this.state.phone}
                />
              </div>
              <div className="form-group">
                <label htmlFor="firstName">Balance</label>
                <input
                  type="text"
                  className="form-control"
                  name="balance"
                  minLength="2"
                  required
                  onChange={this.onChange}
                  value={this.state.balance}
                />
              </div>
            </form>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default AddClient;
