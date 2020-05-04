import { auth } from '../firebase/firebase';
import * as types from '../constants/ActionTypes';

// ACTIONS
function getUser(payload) {
  return { type: types.GET_USER, payload };
}

// THUNKS
// export function getUserAsync(contactWithUserEmail) {
//   return function (dispatch) {
//     auth.onAuthStateChanged(function (user) {
//       if (user) {
//         // User is signed in.
//         console.log('user !!');
//         dispatch(getUser(email));
//       } else {
//         console.log('no user');
//         dispatch(
//           getUser({
//             id: '3',
//           })
//         );
//         // No user is signed in.
//       }
//     });
//     const email = 'sam@gmail.com';
//     const password = '123456';
//     auth
//       .createUserWithEmailAndPassword(email, password)
//       .catch(function (error) {
//         // Handle Errors here.
//         var errorCode = error.code;
//         var errorMessage = error.message;
//         // ...
//       });
//     setTimeout(() => {
//       dispatch(getUser(contactWithUserEmail));
//     }, 5000);
//   };
// }

export const fetchUser = () => async (dispatch) => {
  try {
    await auth.onAuthStateChanged((currentUser) => {
      if (currentUser) {
        localStorage.setItem('isAuthenticated', true);

        dispatch({
          type: types.FETCH_USER,
          payload: currentUser.toJSON(),
        });
      } else {
        localStorage.removeItem('isAuthenticated');

        dispatch({
          type: types.FETCH_USER,
          payload: null,
        });
      }
    });
  } catch (error) {
    throw error;
  }
};
