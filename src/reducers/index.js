import { combineReducers } from 'redux';
import user from './user';
import contacts from './contacts';

const rootReducer = combineReducers({
  user,
  contacts,
  // activities
});

export default rootReducer;
