import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  thunkSignOut,
  thunkSignInWithEmailAndPassword,
} from '../../actions/authAction';

import WithContainer from '../../hocs/withContainer';

export const Test = () => {
  const email = useSelector((state) => state.firebase.auth.email);

  const dispatch = useDispatch();

  const handleLogout = () => {
    console.log('handleLogout');

    dispatch(thunkSignOut());
  };
  const handleLoginSam = () => {
    console.log('handleLoginSam');

    dispatch(thunkSignInWithEmailAndPassword('sam@gmail.com', '123456'));
  };

  return (
    <WithContainer title='Test'>
      <h3>{email}</h3>

      <button onClick={handleLogout}>logout</button>
      <button onClick={handleLoginSam}>login sam</button>

      <button>createUser</button>
    </WithContainer>
  );
};
