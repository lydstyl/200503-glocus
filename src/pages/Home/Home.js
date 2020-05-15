import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
// import styled from 'styled-components';

import WithContainer from '../../hocs/withContainer';
// import { spaces } from '../../utils/cssVariables';

export const Home = () => {
  let contacts = useSelector((state) => state.contacts);

  contacts = contacts.filter((c) => {
    if (c.quality == 0) return false; // don't show bad quality contacts

    // nb of day between now and last activity ?

    // do not show too recent last activity contact

    return true;
  });

  // sort contact by quality then by last activity older to newer

  return (
    <WithContainer title='Accueil'>
      <p>
        <Link to='/ajouter-ou-modifier-un-contact'>
          Ajouter un nouveau prospect
        </Link>
      </p>

      <p>ou</p>

      <p>Liste à relancer</p>

      {contacts.length ? (
        contacts.map((c) => (
          <li key={c.id}>
            card {c.lastName} {c.firstName} {c.company} {c.quality}{' '}
            {c.lastActivity}
            <Link to={`/contact/${c.id}`}>Détail</Link>
          </li>
        ))
      ) : (
        <p>Pas de contact</p>
      )}
    </WithContainer>
  );
};
