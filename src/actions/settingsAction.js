import {
  DISABLE_BALANCE_ON_ADD,
  DISABLE_BALANCE_ON_EDIT,
  ALLOW_REGISTRATION
} from "../actions/types";
import { actionTypes } from "redux-firestore";

const initialState = {
  disableBalanceOnAdd: true,
  disableBalanceOnEdit: false,
  allowRegistration: false
};

export default function(state = initialState) {
  switch (actionTypes.type) {
    case DISABLE_BALANCE_ON_ADD:
      return {
        ...state,
        disableBalanceOnAdd: !disableBalanceOnAdd
      };
    case DISABLE_BALANCE_ON_EDIT:
      return {
        ...state,
        disableBalanceOnEdit: !disableBalanceOnEdit
      };
    case ALLOW_REGISTRATION:
      return {
        ...state,
        allowRegistration: !allowRegistration
      };

    default:
      return state;
  }
}
