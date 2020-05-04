import React from 'react';
import styled from 'styled-components';

// import { spaces } from '../utils/cssVariables';

const Main = styled.main`
  max-width: 320px;
  margin: auto;
`;

export const WithContainer = ({ className, children, ...others }) => {
  return (
    <Main className={className ? className : 'container'} {...others}>
      {children}
    </Main>
  );
};

export default WithContainer;
