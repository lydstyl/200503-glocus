export const thunkAddContact = (contact) => {
  return (dispatch, getState, getFirebase) => {
    const firebase = getFirebase();
    const firestore = firebase.firestore();

    contact.userId = getState().firebase.auth.uid;
    contact.createdAt = new Date();
    contact.activities = [];

    firestore
      .collection('contacts')
      .add(contact)
      .then((docRef) => {
        console.log('Document written with ID: ', docRef.id);
        contact.contactId = docRef.id;

        dispatch(addContact(contact));
      })
      .catch((error) => {
        console.error('Error adding document: ', error);
        //dispatch({ type: 'ADD_CONTACT_ERROR' }, err);
      });
  };
};

const addContact = (contact) => {
  alert('Contact ajouté à la base de données.');
  return { type: 'ADD_CONTACT', contact };
};
