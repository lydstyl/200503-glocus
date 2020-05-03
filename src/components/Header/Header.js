import React from 'react';
import styled from 'styled-components';

import { Nav } from '../../components/Nav/Nav';

import { colors, spaces } from '../../utils/cssVariables';

const HeaderContainer = styled.header`
  margin-bottom: ${spaces.s80};
  padding: 0 ${spaces.s10} ${spaces.s10};
  text-align: center;
  background-color: ${colors.primary};
  color: ${colors.textOnP};
  border-top: 18px solid ${colors.dark};
`;

const Title = styled.h1`
  margin-bottom: ${spaces.s50};
  font-family: 'Lobster', cursive;
  font-size: 4rem;
`;

const P = styled.p`
  margin-bottom: ${spaces.s80};
  font-style: italic;
`;

export const Header = () => {
  return (
    <HeaderContainer>
      <Title>Glocus</Title>
      <P>Prospectez zen</P>

      <Nav />
    </HeaderContainer>
  );
};
