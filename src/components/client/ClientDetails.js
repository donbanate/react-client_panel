import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import Spinner from "../layouts/Spinner";
import classnames from "classnames";

class ClientDetails extends Component {
  state = {
    updateBalance: true
  };

  handleEdit = () =>
    this.setState({ updateBalance: !this.state.updateBalance });

  render() {
    const { client } = this.props;

    if (client) {
      return (
        <Fragment>
          <div className="row mt-3">
            <div className="col-md-2 col-sm-3">
              <Link to="/" className="btn btn-link">
                <i className="fas fa-arrow-circle-left" /> Back
              </Link>
            </div>
            <div className="col-md-9 col-sm-9">
              <div className="btn-group float-right">
                <Link to={`/client/edit/${client.id}`} className="btn btn-dark">
                  Edit
                </Link>
                <button className="btn btn-danger">Delete</button>
              </div>
            </div>
          </div>
          <hr />
          <div className="card">
            <h3 className="card-header">
              Balance:{" "}
              <span
                className={classnames({
                  "text-danger": client.balance > 0,
                  "text-success": client.balance === 0
                })}
              >
                ${parseFloat(client.balance).toFixed(2)}
              </span>{" "}
              <i
                className="fas fa-pen-alt fa-sm"
                data-toggle="tooltip"
                data-placement="top"
                title="Edit balance"
                onClick={this.handleEdit}
              />
            </h3>
            <div className="card-body">
              <div className="row">
                <div className="col-md-8 col-sm-12">
                  <div className="table-responsive">
                    <table className="table table-bordered">
                      <tbody>
                        <tr>
                          <th scope="row">Client ID</th>
                          <td>{client.id}</td>
                        </tr>
                        <tr>
                          <th scope="row">Name</th>
                          <td>
                            {client.firstName} {client.lastName}
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">Email</th>
                          <td>{client.email}</td>
                        </tr>
                        <tr>
                          <th scope="row">Phone</th>
                          <td>{client.phone}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="col-md-4 col-sm-12">
                  <form>
                    <div className="form">
                      <label htmlFor="balance">Balance</label>
                      <input
                        type="text"
                        name="balance"
                        readOnly={this.state.updateBalance}
                        className="form-control"
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </Fragment>
      );
    } else {
      return <Spinner />;
    }
  }
}

export default compose(
  firestoreConnect(props => [
    { collection: "clients", storeAs: "client", doc: props.match.params.id }
  ]),
  connect(({ firestore: { ordered } }) => ({
    client: ordered.client && ordered.client[0]
  }))
)(ClientDetails);
