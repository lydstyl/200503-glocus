import React from 'react';
import styled from 'styled-components';

import WithContainer from '../../hocs/withContainer';

import { Nav } from '../../components/Nav/Nav';

const Form = styled.form`
  /*color: red;*/
`;

export const ContactForm = () => {
  return (
    <div>
      <Nav />

      <WithContainer id='monId'>
        <Form>
          <h2>ContactForm</h2>
          <input type='text' />
        </Form>
      </WithContainer>
    </div>
  );
};
