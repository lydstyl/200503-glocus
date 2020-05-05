import React from 'react';
import styled from 'styled-components';
// import { useDispatch } from 'react-redux';

import WithContainer from '../../hocs/withContainer';
import { spaces } from '../../utils/cssVariables';

// import { thunkCreateUser } from '../../actions/authAction';

const Form = styled.form``;

const InputField = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: ${spaces.s50};
`;

const Button = styled.button`
  margin: ${spaces.s30} 0;
  padding: ${spaces.s30};
`;

export const ContactForm = () => {
  // const dispatch = useDispatch();

  const handleAddContact = (evt) => {
    evt.preventDefault();

    const contact = {};

    document.querySelectorAll('input').forEach((i) => {
      const { name, value } = i;
      contact[name] = value;

      // empty the input
      i.value = '';
    });

    // dispatch({ type: ADD_CONTACT, payload: contact });
    // dispatch(thunkCreateUser(contact));
    alert('contact ajouté');
  };

  return (
    <WithContainer title='ContactForm'>
      <Form>
        <InputField>
          <label htmlFor='lastName'>Nom de famille</label>
          <input name='lastName' id='lastName' type='text' />
        </InputField>

        <InputField>
          <label htmlFor='firstName'>Prénom</label>
          <input name='firstName' id='firstName' type='text' />
        </InputField>

        <Button onClick={handleAddContact}>Ajouter</Button>
      </Form>
    </WithContainer>
  );
};
