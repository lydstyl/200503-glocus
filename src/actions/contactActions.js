export const thunkAddContact = (contact) => {
  return (dispatch, getState, getFirebase) => {
    const firebase = getFirebase();
    const firestore = firebase.firestore();

    const userId = getState().firebase.auth.uid;

    firestore
      .collection('contacts')
      .add({
        ...contact,
        userId,
        createdAt: new Date(),
      })
      .then((docRef) => {
        console.log('Document written with ID: ', docRef.id);
        //dispatch({ type: 'ADD_CONTACT_SUCCESS' });
      })
      .catch((error) => {
        console.error('Error adding document: ', error);
        //dispatch({ type: 'ADD_CONTACT_ERROR' }, err);
      });
  };
};
