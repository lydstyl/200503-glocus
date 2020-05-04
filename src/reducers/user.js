import * as types from '../constants/ActionTypes';

const initialState = null;

export default function contacts(state = initialState, action) {
  // const newState = { ...state };

  switch (action.type) {
    case types.FETCH_USER:
      return action.payload;

    default:
      return state;
  }
}
