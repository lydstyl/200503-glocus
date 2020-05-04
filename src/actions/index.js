// import { GET_USER_ASYNC, GET_USER } from '../constants/ActionTypes';
import * as types from '../constants/ActionTypes';

// import { auth } from '../firebase/firebase';

// export const addTodo = text => ({ type: types.ADD_TODO, text })
// export const deleteTodo = id => ({ type: types.DELETE_TODO, id })
// export const editTodo = (id, text) => ({ type: types.EDIT_TODO, id, text })
// export const completeTodo = id => ({ type: types.COMPLETE_TODO, id })
// export const completeAllTodos = () => ({ type: types.COMPLETE_ALL_TODOS })
// export const clearCompleted = () => ({ type: types.CLEAR_COMPLETED })
// export const setVisibilityFilter = filter => ({ type: types.SET_VISIBILITY_FILTER, filter})

// ACTIONS
function getUser(payload) {
  return { type: types.GET_USER, payload };
}

// THUNKS
export function getUserAsync(contactWithUserEmail) {
  return function (dispatch) {
    // auth.onAuthStateChanged(function (user) {
    //   if (user) {
    //     // User is signed in.
    //     console.log('user !!');
    //     dispatch(getUser(email));
    //   } else {
    //     console.log('no user');
    //     dispatch(
    //       getUser({
    //         id: '3',
    //       })
    //     );
    //     // No user is signed in.
    //   }
    // });
    // const email = 'sam@gmail.com';
    // const password = '123456';
    // auth
    //   .createUserWithEmailAndPassword(email, password)
    //   .catch(function (error) {
    //     // Handle Errors here.
    //     var errorCode = error.code;
    //     var errorMessage = error.message;
    //     // ...
    //   });
    setTimeout(() => {
      dispatch(getUser(contactWithUserEmail));
    }, 5000);
  };
}
