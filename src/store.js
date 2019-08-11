import { createStore, combineReducers, compose } from "redux";
import firebase from "firebase";
import "firebase/firestore";
import { reactReduxFirebase, firebaseReducer } from "react-redux-firebase";
import { reduxFirestore, firestoreReducer } from "redux-firestore";
// reducers
import notifyReducer from "./reducers/notifyReducer";
import settingsReducer from "./reducers/settingsReducer";

const firebaseConfig = {
  apiKey: "AIzaSyBzHtZmVS_YE_QkkXvmr1BF_F6PznOHCGQ",
  authDomain: "react-client-panel-3b1e0.firebaseapp.com",
  databaseURL: "https://react-client-panel-3b1e0.firebaseio.com",
  projectId: "react-client-panel-3b1e0",
  storageBucket: "react-client-panel-3b1e0.appspot.com",
  messagingSenderId: "511845257003",
  appId: "1:511845257003:web:c3f01e0ebf0df3fb"
};

// React Redux Firebase Config
const rrfConfig = {
  userProfile: "users",
  useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
};

//Init Firebase instance
firebase.initializeApp(firebaseConfig);

firebase.firestore();

// Add reactReduxFirebase enhancer when making store creator
const createStoreWithFirebase = compose(
  reactReduxFirebase(firebase, rrfConfig), // firebase instance as first argument
  reduxFirestore(firebase) // <- needed if using firestore
)(createStore);

// Add firebase to reducers
const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer,
  notify: notifyReducer,
  settings: settingsReducer
});

//Check settings on local storage
if (localStorage.getItem("settings") === null) {
  const defaultSettings = {
    disableBalanceOnAdd: true,
    disableBalanceOnEdit: false,
    allowRegistration: false
  };

  // Set local storage value
  localStorage.setItem("settings", JSON.stringify(defaultSettings));
}

// Create initial state
const initialState = { settings: JSON.parse(localStorage.getItem("settings")) };

// Create Store
const store = createStoreWithFirebase(
  rootReducer,
  initialState,
  compose(reactReduxFirebase(firebase))
);

export default store;
