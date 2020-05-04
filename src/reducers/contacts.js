import {
  GET_USER,
  GET_USER_ASYNC,
  ADD_CONTACT,
} from '../constants/ActionTypes';

const initialState = [
  {
    id: '1',
    lastName: 'BRUN',
    firstName: 'Gabriel',
    company: 'DEV NORD',
    quality: 'idéale', // mauvaise, bonne, idéale
    description: 'ok télétravail; ok 80%;',
    phone: '07 81 15 45 03',
    email: 'lydstyl@gmail.com',
    linkedin: 'https://fr.linkedin.com/in/gabrielbrun',
  },
  {
    id: '2',
    lastName: 'TRUC',
    firstName: 'Camille',
    company: 'ACTEAM',
    quality: 'bonne',
    description: 'ok 80%;',
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
    case GET_USER:
      newState.push(action.payload);
      return newState;

    case GET_USER_ASYNC:
      console.log('tttt', action.payload);

      setTimeout(() => {
        // Yay! Can invoke sync or async actions with `dispatch`
        action.payload({
          type: GET_USER,
          payload: 'user THUNK MAN',
        });
      }, 5000);

      return newState;

    default:
      return newState;
  }
}
