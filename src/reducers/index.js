import { combineReducers } from 'redux';
import { reducer as firebase } from 'react-redux-firebase';
import { firestoreReducer } from 'redux-firestore'; // <- needed if using firestore

import user from './user';
import contacts from './contacts';
import settings from './settings';

const rootReducer = combineReducers({
  firebase,
  firestore: firestoreReducer, // <- needed if using firestore
  user,
  contacts,
  settings,
});

export default rootReducer;
