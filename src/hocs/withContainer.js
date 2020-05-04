import React from 'react';
import styled from 'styled-components';

import { spaces } from '../utils/cssVariables';

const Main = styled.main`
  max-width: 320px;
  margin: auto;

  h2 {
    font-size: 2.4rem;
    margin-bottom: ${spaces.s80};
  }
`;

export const WithContainer = ({ className, title, children, ...others }) => {
  return (
    <Main className={className ? className : 'container'} {...others}>
      <h2>{title}</h2>

      {children}
    </Main>
  );
};

export default WithContainer;
