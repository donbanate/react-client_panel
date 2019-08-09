import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  setDisableBalanceOnAdd,
  setDisableBalanceOnEdit,
  allowRegistration
} from "../../actions/settingsAction";

class Settings extends Component {
  static propTypes = {
    settings: PropTypes.object.isRequired,
    setDisableBalanceOnAdd: PropTypes.func.isRequired,
    setDisableBalanceOnEdit: PropTypes.func.isRequired,
    allowRegistration: PropTypes.func.isRequired
  };

  render() {
    const {
      disableBalanceOnAdd,
      disableBalanceOnEdit,
      allowRegistration
    } = this.props.settings;
    return (
      <Fragment>
        <div className="row">
          <div className="col-md-6">
            <Link to="/" className="btn btn-link">
              <i className="fas fa-arrow-circle-left" /> Back
            </Link>
          </div>
        </div>
        <div className="card">
          <div className="card-header">Edit Settings</div>
          <div className="card-body">
            <form>
              <div className="form-group">
                <input
                  type="checkbox"
                  className="ml-2 mr-3"
                  name="allowRegistration"
                  checked={!!allowRegistration}
                  onChange={this.allowRegistrationChange}
                />
                <label htmlFor="allowRegistration">
                  {allowRegistration ? (
                    "Allow Registration"
                  ) : (
                    <span className="text-muted">Allow Registration</span>
                  )}
                </label>
              </div>
              <div className="form-group">
                <input
                  type="checkbox"
                  className="ml-2 mr-3"
                  name="allowRegistration"
                  checked={!!disableBalanceOnAdd}
                  onChange={this.disableBalanceOnAddChange}
                />
                <label htmlFor="allowRegistration">
                  {disableBalanceOnAdd ? (
                    "Disable Balance on add"
                  ) : (
                    <span className="text-muted">Disable Balance on add</span>
                  )}
                </label>
              </div>
              <div className="form-group">
                <input
                  type="checkbox"
                  className="ml-2 mr-3"
                  name="allowRegistration"
                  checked={!!disableBalanceOnEdit}
                  onChange={this.disableBalanceOnEditChange}
                />
                <label htmlFor="allowRegistration">
                  {disableBalanceOnEdit ? (
                    "Disable Balance on edit"
                  ) : (
                    <span className="text-muted">Disable Balance on edit</span>
                  )}
                </label>
              </div>
            </form>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default connect(
  state => ({
    auth: state.firebase.auth,
    settings: state.settings
  }),
  {
    allowRegistration,
    setDisableBalanceOnAdd,
    setDisableBalanceOnEdit
  }
)(Settings);
