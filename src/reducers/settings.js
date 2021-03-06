const initialState = {
  maxContactsToShow: 9,
  showContactIfLastActivityOlderThen: 0,
  maxActivitiesToShow: 5,
};

export default function settings(state = initialState, action) {
  switch (action.type) {
    case 'SET_SETTINGS':
      return action.settings;

    case 'GET_SETTINGS':
      return action.settings;

    default:
      return state;
  }
}
