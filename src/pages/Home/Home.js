import React from 'react';
// import styled from 'styled-components';
import { useSelector } from 'react-redux';

import WithContainer from '../../hocs/withContainer';
// import { spaces } from '../../utils/cssVariables';

export const Home = () => {
  const contacts = useSelector((state) => state.contacts);

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

      <p>Créer aussi une page contact pour afficher un contact voir papier</p>
    </WithContainer>
  );
};
