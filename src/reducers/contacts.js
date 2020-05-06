// import { ADD_CONTACT } from '../constants/ActionTypes';

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
    activities: ['id1'],
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
    activities: ['id2', 'id3'],
  },
];

export default function contacts(state = initialState, action) {
  switch (action.type) {
    case 'ADD_CONTACT':
      return [...state, action.contact];

    default:
      return state;
  }
}
