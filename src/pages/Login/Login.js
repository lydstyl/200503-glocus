import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { InputField } from '../../components/InputField/InputField';

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

  const handleLogin = (email) => {};
  const handleCreateUser = (email) => {};
  const handleForgotPassword = (email) => {};

  return (
    <WithContainer title='Login'>
      <h3>{email}</h3>
      <button onClick={handleLoginSam}>login sam</button>
      <button>createUser</button>
      <p>
        dans la page Login formulaire e-mail mot de passe et bouton [se
        connecter] et [ou créer un compte] et [j\'ai oublié mont mot de passe]
      </p>

      <form>
        <InputField name='firstName' label='Prénom' placeholder='Jean' />
        <InputField name='firstName' label='Mot de passe' />
        <button onClick={handleLogin}>Se connecter</button>
        <button onClick={handleCreateUser}>Créer un compte</button>
        <button onClick={handleForgotPassword}>
          J'ai oublié mon mot de passe
        </button>
      </form>
    </WithContainer>
  );
};
