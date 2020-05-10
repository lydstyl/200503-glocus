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
      // .then((result) => {
      //   console.log(result);

      //   alert(`Utilisateur ${email} connecté.`);
      // })
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

export const thunkCreateUserWithEmailAndPassword = (email, password) => {
  return (dispatch, getState, getFirebase) => {
    const firebase = getFirebase();

    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((result) => {
        console.log(result);

        alert(`Utilisateur ${email} créé.`);
      })
      .catch(function (error) {
        // Handle Errors here.
        // var errorCode = error.code;
        // ...

        console.log(error);
        alert(error.message);
      });
  };
};

export const thunkSendPasswordResetEmail = (email) => {
  console.log('xxx', email);

  return (dispatch, getState, getFirebase) => {
    const firebase = getFirebase();

    firebase
      .auth()
      .sendPasswordResetEmail(email)
      .then(function () {
        // Password reset email sent.
        //console.log(result);

        alert(`E-mail envoyé à ${email}.`);
      })
      .catch(function (error) {
        // Error occurred. Inspect error.code.
        console.log(error);
        alert(error.message);
      });
  };
};
