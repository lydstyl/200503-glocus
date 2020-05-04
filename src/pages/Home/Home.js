import React, { useEffect } from 'react';
// import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';

import WithContainer from '../../hocs/withContainer';
// import { spaces } from '../../utils/cssVariables';

// import { GET_USER_ASYNC, GET_USER } from '../../constants/ActionTypes';
import { getUserAsync } from '../../actions/index';

export const Home = () => {
  const contacts = useSelector((state) => state.contacts);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      getUserAsync({
        id: '3',
        lastName: 'MACHIN',
        firstName: 'Jean',
        company: 'ACTEAM',
        quality: 'bonne',
        description: 'ok 80%;',
        phone: '07 81 15 45 03',
        email: 'coucou@user.com',
        linkedin: 'https://fr.linkedin.com/in/gabrielbrun',
      })
    );
  }, [dispatch]);

  return (
    <WithContainer title='Accueil'>
      <p>Nouveau prospect</p>

      <p>ou</p>

      <p>Liste à relancer</p>

      {contacts.length ? (
        contacts.map((c) => (
          <li key={c.id}>
            card {c.lastName} {c.firstName} {c.company}
          </li>
        ))
      ) : (
        <p>Pas de contact</p>
      )}
    </WithContainer>
  );
};
