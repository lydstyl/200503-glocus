import { combineReducers } from 'redux';
import { reducer as firebase } from 'react-redux-firebase';

import user from './user';
import contacts from './contacts';

const rootReducer = combineReducers({
  firebase,
  user,
  contacts,
  // activities
});

export default rootReducer;
