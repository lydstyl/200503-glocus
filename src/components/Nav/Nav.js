import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { thunkSignOut } from '../../actions/authAction';

import { colors } from '../../utils/cssVariables';

const Ul = styled.ul`
  list-style-type: none;

  a {
    color: ${colors.textOnP};
    text-decoration: none;
  }
`;

export const Nav = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(thunkSignOut());
  };

  return (
    <nav>
      <Ul>
        <li>
          <Link to='/'>Accueil</Link>
        </li>

        <li>
          <Link to='/ajouter-ou-modifier-un-contact'>Ajouter</Link>
        </li>

        <li>
          <Link to='/rechercher'>Rechercher</Link>
        </li>

        <li>
          <Link to='/parametres'>Paramètres</Link>
        </li>
      </Ul>

      <button onClick={handleLogout}>logout</button>
    </nav>
  );
};
