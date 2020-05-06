import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';

import { spaces } from '../../utils/cssVariables';
import { thunkAddContact } from '../../actions/contactActions';
import WithContainer from '../../hocs/withContainer';
import { InputField } from '../../components/InputField/InputField';

const Form = styled.form``;

const Button = styled.button`
  margin: ${spaces.s30} 0;
  padding: ${spaces.s30};
`;

export const ContactForm = () => {
  const dispatch = useDispatch();

  const handleAddContact = (evt) => {
    evt.preventDefault();

    const contact = {};

    document.querySelectorAll('input').forEach((i) => {
      const { name, value } = i;
      contact[name] = value;

      i.value = ''; // empty the input
    });

    dispatch(thunkAddContact(contact));
  };

  return (
    <WithContainer title='Ajouter ou modifier un contact'>
      <Form>
        <InputField name='lastName' label='Nom de famille' />
        <InputField name='firstName' label='Prénom' />
        <InputField name='company' label='Entreprise' />

        {/* <InputField name='quality' label='Qualité' /> */}

        {/* <InputField name='description' label='description' /> */}

        {/* <InputField name='phone' label='Téléphone' /> */}
        {/* <InputField name='email' label='E-mail' /> */}
        {/* <InputField name='linkedin' label='Linkedin' /> */}

        <Button onClick={handleAddContact}>Ajouter</Button>
      </Form>
    </WithContainer>
  );
};
