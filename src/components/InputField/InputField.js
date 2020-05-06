import React from 'react';
import styled from 'styled-components';

import { spaces } from '../../utils/cssVariables';

const Field = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: ${spaces.s50};

  label {
    margin-right: ${spaces.s50};
  }

  input,
  textarea {
    width: 100%;
  }

  textarea {
    padding: ${spaces.s30};
  }
`;

export const InputField = ({ name, label, type, ...other }) => {
  if (type === 'textarea') {
    return (
      <Field>
        <textarea
          id={name}
          name={name}
          defaultValue={other.defaultValue || label}
          {...other} // rows="5" cols="33" ...
        />
      </Field>
    );
  }

  return (
    <Field>
      <label htmlFor={name}>{label}</label>
      <input name={name} id={name} type={type} {...other} />
    </Field>
  );
};
