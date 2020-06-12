export const thunkGetSettings = () => {
  return (dispatch, getState, getFirebase) => {
    const state = getState();
    const { uid } = state.firebase.auth;

    const firebase = getFirebase();
    const firestore = firebase.firestore();

    firestore
      .collection("settings")
      .doc(uid)
      .get()
      .then(function (doc) {
        if (doc.exists) {
          console.log("Document data:", doc.data());

          dispatch(getSettings(doc.data()));
        } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
        }
      })
      .catch(function (error) {
        console.log("Error getting document:", error);
      });
  };
};

const getSettings = (settings) => {
  return { type: "GET_SETTINGS", settings };
};

export const thunkSetSettings = (settings) => {
  return (dispatch, getState, getFirebase) => {
    const firebase = getFirebase();
    const firestore = firebase.firestore();
    const uid = getState().firebase.auth.uid;

    firestore
      .collection("settings")
      .doc(uid)
      .set(settings)
      .then(function () {
        // alert(`Setting enregistrée dans la base de données.`);

        dispatch(setSettings(settings));
      })
      .catch(function (error) {
        console.error("Error writing document: ", error);
        alert(error.message);
      });
  };
};

const setSettings = (settings) => {
  return { type: "SET_SETTINGS", settings };
};

export const thunkSetSettingsCategories = (category) => {
  return (dispatch, getState, getFirebase) => {
    const firebase = getFirebase();
    const firestore = firebase.firestore();
    const uid = getState().firebase.auth.uid;
    const settings = getState().settings;

    let categories = getState().contacts.map((contact) => contact.category);
    categories = [...new Set(categories)]; // remove duplicate
    categories = categories.filter((c) => c !== undefined);

    settings.categories = categories;

    firestore
      .collection("settings")
      .doc(uid)
      .set(settings)
      .then(function () {
        // alert(`Setting enregistrée dans la base de données.`);

        dispatch(setSettings(settings));
        console.log("thunkSetSettingsCategories -> settings", settings);
      })
      .catch(function (error) {
        console.error("Error writing document: ", error);
        alert(error.message);
      });
  };
};
