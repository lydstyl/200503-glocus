import { ADD_CONTACT } from '../constants/ActionTypes';

const initialState = [
  {
    lastName: 'BRUN',
    firstName: 'Gabriel',
    company: 'DEV NORD',
    quality: 'idéale', // mauvaise, bonne, idéale
    description: 'ok télétravail; ok 80%; ',
    phone: '07 81 15 45 03',
    email: 'lydstyl@gmail.com',
    linkedin: 'https://fr.linkedin.com/in/gabrielbrun',
  },
];

export default function contacts(state = initialState, action) {
  const newState = [...state];

  switch (action.type) {
    case ADD_CONTACT:
      newState.push(action.payload);
      return newState;

    // case DELETE_CONTACT:
    //   return state.filter((todo) => todo.id !== action.id);

    default:
      return newState;
  }
}
