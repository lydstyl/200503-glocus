// import { ADD_CONTACT } from '../constants/ActionTypes';

const initialState = [];

export default function contacts(state = initialState, action) {
  switch (action.type) {
    case 'ADD_CONTACT':
      return [...state, action.contact];

    case 'GET_CONTACT':
      return action.contacts;

    case 'DELETE_CONTACT':
      return [...state.filter((contact) => contact.id !== action.id)];

    case 'SET_CONTACT':
      return [
        ...state.map((contact) => {
          if (contact.id === action.id) {
            return action.contact;
          }
          return contact;
        }),
      ];

    default:
      return state;
  }
}
