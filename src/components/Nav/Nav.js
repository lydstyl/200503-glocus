import React, { useEffect } from 'react';
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

  const handleLogout = (evt) => {
    evt.preventDefault();
    dispatch(thunkSignOut());
  };

  useEffect(() => {
    document.querySelector('.menu').addEventListener('click', (evt) => {
      if (evt.target.tagName === 'A') {
        document.querySelector('.menu-button-container').click();
      }
    });
  }, []);

  return (
    <Ul className='menu'>
      <li>
        <Link to='/'>Accueil</Link>
      </li>

      <li>
        <Link to='/rechercher'>Rechercher</Link>
      </li>

      <li>
        <Link to='/parametres'>Paramètres</Link>
      </li>

      <li>
        <a href='!#' onClick={handleLogout}>
          Se déconnecter
        </a>
      </li>
    </Ul>
  );
};
