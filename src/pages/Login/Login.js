import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { StyledLogin } from './StyledForm';
import { InputField } from '../../components/InputField/InputField';

import {
  thunkSignInWithEmailAndPassword,
  thunkCreateUserWithEmailAndPassword,
  thunkSendPasswordResetEmail,
} from '../../actions/authAction';

import WithContainer from '../../hocs/withContainer';

export const Login = () => {
  const email = useSelector((state) => state.firebase.auth.email);
  const history = useHistory();

  if (email) {
    history.push('/');
  }

  const dispatch = useDispatch();

  const handleLogin = (evt) => {
    evt.preventDefault();

    const emailInput = document.querySelector('form [type=email]');
    const passwordInput = document.querySelector('form [type=password]');

    dispatch(
      thunkSignInWithEmailAndPassword(emailInput.value, passwordInput.value)
    );
  };

  const handleCreateUserWithEmailAndPassword = (evt) => {
    evt.preventDefault();

    if (
      window.confirm(
        "Pour le bon fonctionnement de cette application, je déclare que j'ai plus de 15 ans et que je donne mon consentement pour stocker les informations de mes contacts sur une base de données."
      )
    ) {
      dispatch(
        thunkCreateUserWithEmailAndPassword(
          document.querySelector('form [type=email]').value,
          document.querySelector('form [type=password]').value
        )
      );
    } else {
      alert('Dans ce cas, vous ne pouvez pas créer de compte.');
    }
  };

  const handleSendPasswordResetEmail = (evt) => {
    evt.preventDefault();

    dispatch(
      thunkSendPasswordResetEmail(
        document.querySelector('form [type=email]').value
      )
    );
  };

  return (
    <WithContainer title='Login'>
      <StyledLogin>
        <InputField name='email' label='E-mail' type='email' />

        <InputField name='password' label='Mot de passe' type='password' />

        <div className='buttons'>
          <button onClick={handleLogin}>Se connecter</button>

          <span>ou</span>
          <button onClick={handleCreateUserWithEmailAndPassword}>
            Créer un compte
          </button>

          <span>ou</span>
          <button onClick={handleSendPasswordResetEmail}>
            J'ai oublié mon mot de passe
          </button>
        </div>
      </StyledLogin>
    </WithContainer>
  );
};
