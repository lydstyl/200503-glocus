import { combineReducers } from 'redux';
import contacts from './contacts';
// import visibilityFilter from './visibilityFilter';

const rootReducer = combineReducers({
  contacts,
  // activities

  // visibilityFilter,
});

export default rootReducer;
