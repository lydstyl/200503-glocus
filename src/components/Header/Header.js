import React from 'react';
import styled from 'styled-components';

import { Nav } from '../../components/Nav/Nav';

import { colors, spaces } from '../../utils/cssVariables';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-around;
  margin-bottom: ${spaces.s80};
  padding: 0 ${spaces.s10} ${spaces.s10};
  text-align: center;
  background-color: ${colors.primary};
  color: ${colors.textOnP};
  border-top: 18px solid ${colors.dark};
  border-radius: 0;
`;

const H1 = styled.h1`
  margin-bottom: ${spaces.s50};
  font-family: 'Lobster', cursive;
  font-size: 4rem;
`;

const P = styled.p`
  font-style: italic;
`;

export const Header = () => {
  return (
    <HeaderContainer>
      <div className='title'>
        <H1>Glocus</H1>
        <P>Prospectez zen</P>
      </div>

      <Nav />
    </HeaderContainer>
  );
};
