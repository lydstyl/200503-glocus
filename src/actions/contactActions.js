// CONTACT
export const thunkAddContact = (contact) => {
  return (dispatch, getState, getFirebase) => {
    const firebase = getFirebase();
    const firestore = firebase.firestore();

    contact.userId = getState().firebase.auth.uid;
    contact.createdAt = new Date();
    contact.editedAt = new Date();
    contact.activities = [];

    firestore
      .collection('contacts')
      .add(contact)
      .then((docRef) => {
        console.log('Document written with ID: ', docRef.id);
        contact.id = docRef.id;

        dispatch(addContact(contact));
      })
      .catch((error) => {
        console.error('Error adding document: ', error);
        //dispatch({ type: 'ADD_CONTACT_ERROR' }, err);
      });
  };
};

const addContact = (contact) => {
  // alert('Contact ajouté à la base de données.');
  return { type: 'ADD_CONTACT', contact };
};

export const thunkGetContact = () => {
  return (dispatch, getState, getFirebase) => {
    const state = getState();
    const { uid } = state.firebase.auth;

    const firebase = getFirebase();
    const firestore = firebase.firestore();

    const contacts = [];

    firestore
      .collection('contacts')
      .where('userId', '==', uid)
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          console.log(`${doc.id} => ${doc.data()}`, doc.data());

          const contact = { id: doc.id, ...doc.data() };

          contacts.push(contact);
        });

        dispatch(getContact(contacts));

        // TODO catch, dispatch and toast (make a thunk for this with set time out) success and error
      });
  };
};

const getContact = (contacts) => {
  // alert('Contacts récupérés de la base de données.');
  return { type: 'GET_CONTACT', contacts };
};

export const thunkDeleteContact = (id) => {
  return (dispatch, getState, getFirebase) => {
    const firebase = getFirebase();
    const firestore = firebase.firestore();

    firestore
      .collection('contacts')
      .doc(id)
      .delete()
      .then(function () {
        alert('Contact supprimé de la base de données.');

        dispatch(deleteContact(id));
      })
      .catch(function (error) {
        console.error('Error removing document: ', error);
      });
  };
};

const deleteContact = (id) => {
  return { type: 'DELETE_CONTACT', id };
};

export const thunkSetContact = (id, contact) => {
  return (dispatch, getState, getFirebase) => {
    const firebase = getFirebase();
    const firestore = firebase.firestore();

    contact.editedAt = new Date().toString();

    firestore
      .collection('contacts')
      .doc(id)
      .set(contact)
      .then(function () {
        alert('Contact modifié dans la base de données.');

        dispatch(setContact(id, contact));
      })
      .catch(function (error) {
        console.error('Error writing document: ', error);
      });
  };
};

const setContact = (id, contact) => {
  return { type: 'SET_CONTACT', id, contact };
};

// ACTIVITY
export const thunkAddActivity = (contact) => {
  return (dispatch, getState, getFirebase) => {
    const activity = {
      activityId: Math.random() * 1000000000000000000,
      createdAt: new Date().toString(),
      editedAt: new Date().toString(),
      text: 'Ajouter votre activité ici !',
    };

    contact.activities = [...contact.activities, activity];

    dispatch(thunkSetContact(contact.id, contact));
  };
};

export const thunkSetActivity = (contact, activity) => {
  return (dispatch, getState, getFirebase) => {
    contact.activities.map((a) => {
      if (a.activityId === activity.activityId) {
        activity.editedAt = new Date().toString();

        contact.lastActivity = new Date().toString();

        return activity;
      } else {
        return a;
      }
    });

    dispatch(thunkSetContact(contact.id, contact));
  };
};

export const thunkDeleteActivity = (contact, activityId) => {
  return (dispatch, getState, getFirebase) => {
    contact.activities = [
      ...contact.activities.filter((a) => a.activityId !== activityId),
    ];

    dispatch(thunkSetContact(contact.id, contact));
  };
};
