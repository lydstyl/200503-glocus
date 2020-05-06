import { thunkGetContact } from './contactActions';

export const thunkOnAuthStateChanged = () => {
  // return (dispatch, getState, { getFirebase }) => {
  return (dispatch, getState, getFirebase) => {
    const firebase = getFirebase();

    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        console.log(`user =>`, user);

        dispatch(thunkGetContact());

        // TODO we ill need to get ACTIVITIES
        // TODO set loading, dispatch and toast success and errors for every thunks
      } else {
        alert("Il n'y a pas d'utilisateur connecté.");
      }
    });
  };
};

export const thunkSignOut = () => {
  // return (dispatch, getState, { getFirebase }) => {
  return (dispatch, getState, getFirebase) => {
    const firebase = getFirebase();

    firebase
      .auth()
      .signOut()
      .then(() => {
        dispatch(signOut);
      });
  };
};

const signOut = () => {
  return { type: 'SIGN_OUT' };
};

export const thunkSignInWithEmailAndPassword = (email, password) => {
  return (dispatch, getState, getFirebase) => {
    const firebase = getFirebase();

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        if (errorCode === 'auth/wrong-password') {
          alert('Wrong password.');
        } else {
          alert(errorMessage);
        }
        console.log(error);
      });
  };
};
