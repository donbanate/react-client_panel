import React, { Component } from "react";
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
    return (
      <div>
        <h1>Settings</h1>
      </div>
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
