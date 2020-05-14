export const thunkSetSettings = (settings) => {
  return (dispatch, getState, getFirebase) => {
    const firebase = getFirebase();
    const firestore = firebase.firestore();
    const uid = getState().firebase.auth.uid;

    firestore
      .collection('settings')
      .doc(uid)
      .set(settings)
      .then(function () {
        alert(`Setting enregistrée dans la base de données.`);

        dispatch(setSettings(settings));
      })
      .catch(function (error) {
        console.error('Error writing document: ', error);
        alert(error.message);
      });
  };
};

const setSettings = (settings) => {
  return { type: 'SET_SETTINGS', settings };
};
