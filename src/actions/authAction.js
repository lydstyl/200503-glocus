// const loading = () => {
//   return {
//     type: 'LOADING',
//   };
// };

const createUserAsnc = (user) => {
  return { type: 'CREATE_USER', value: user };
};

export const thunkCreateUser = (user) => {
  return (dispach) => {
    //dispach(loading());
    setTimeout(() => {
      dispach(createUserAsnc(user));
    }, 5000);
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
