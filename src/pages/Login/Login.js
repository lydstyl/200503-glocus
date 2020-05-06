import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  //thunkSignOut,
  thunkSignInWithEmailAndPassword,
} from '../../actions/authAction';

import WithContainer from '../../hocs/withContainer';

export const Login = () => {
  const email = useSelector((state) => state.firebase.auth.email);

  const dispatch = useDispatch();

  const handleLoginSam = () => {
    console.log('handleLoginSam');

    dispatch(thunkSignInWithEmailAndPassword('sam@gmail.com', '123456'));
  };

  return (
    <WithContainer title='Login'>
      <h3>{email}</h3>

      <button onClick={handleLoginSam}>login sam</button>

      <button>createUser</button>
    </WithContainer>
  );
};
