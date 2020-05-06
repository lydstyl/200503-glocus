import React from 'react';
import styled from 'styled-components';

import { spaces } from '../../utils/cssVariables';

const Field = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: ${spaces.s50};
`;

export const InputField = ({ name, label }) => {
  return (
    <Field>
      <label htmlFor={name}>{label}</label>
      <input name={name} id={name} type='text' />
    </Field>
  );
};
