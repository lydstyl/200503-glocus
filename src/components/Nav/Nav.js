import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { colors } from '../../utils/cssVariables';

const Ul = styled.ul`
  list-style-type: none;

  a {
    color: ${colors.textOnP};
    text-decoration: none;
  }
`;

export const Nav = () => {
  return (
    <nav>
      <Ul>
        <li>
          <Link to='/'>Accueil</Link>
        </li>
        <li>
          <Link to='/rechercher'>Rechercher</Link>
        </li>
        <li>
          <Link to='/parametres'>Paramètres</Link>
        </li>
      </Ul>
    </nav>
  );
};
