import React from 'react';
import styled from 'styled-components';

import { Menu } from './Menu';
import { Nav } from '../Nav/Nav';
import { colors } from '../../utils/cssVariables';

const HeaderWrapper = styled.div`
  height: 70px;
  background: linear-gradient(to left, ${colors.dark}, ${colors.primary});
  border-radius: 0;

  .menu-wrapper {
    max-width: 768px;
    margin: auto;

    .menu li {
      a {
        margin: 0;
        padding: 0;
        color: ${colors.textOnP};
      }

      :hover {
        background-color: ${colors.secondary};
        a {
          color: ${colors.textOnS};
        }
      }
    }
  }

  a {
    color: white;
  }
`;

export const Header = () => {
  return (
    <HeaderWrapper>
      <div className='menu-wrapper'>
        <Menu className='top-nav'>
          <div className='logo-box'>
            <h1>Glocus</h1>
            <p>Prospectez zen</p>
          </div>
          <input id='menu-toggle' type='checkbox' />
          <label className='menu-button-container' htmlFor='menu-toggle'>
            <div className='menu-button'></div>
          </label>

          <Nav />
        </Menu>
      </div>
    </HeaderWrapper>
  );
};
