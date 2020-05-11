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

    const form = document.querySelector('form');

    // var isValid = form.reportValidity();

    // //form.checkValidity();
    // form.reportValidity(); // todo find why this is not working
    // ChromeSamples.setStatus(
    //   'The form ' + (isValid ? 'is' : 'is not') + ' valid.'
    // );

    const contact = {};

    form.querySelectorAll('input').forEach((i) => {
      contact[i.name] = i.value || `pas de ${i.name}`;
    });

    contact.quality =
      document.querySelector('[name=quality]').value || 'pas de qualité';
    contact.description =
      document.querySelector('textarea').value || 'pas de description';

    console.log(' handleAddContact contact', contact);

    dispatch(thunkAddContact(contact));
  };

  return (
    <WithContainer title='Ajouter ou modifier un contact'>
      <Form>
        <InputField
          name='lastName'
          label='Nom de famille'
          placeholder='DUPOND'
        />
        <InputField name='firstName' label='Prénom' placeholder='Jean' />
        <InputField name='company' label='Entreprise' />

        <InputField
          name='quality'
          label='Qualité'
          type='range'
          min='0'
          max='2'
          step='1'
        />

        <InputField
          name='description'
          label='description'
          type='textarea'
          rows='5'
          defaultValue='Informations importantes: potentiel fort; probablement le client idéal; etc.'
        />

        <InputField
          name='phone'
          label='Téléphone'
          type='tel'
          pattern='\+?[0-9]{0,2}([0-9]\s?){10,}'
          placeholder='01 23 45 67 89'
        />

        <InputField
          name='email'
          label='E-mail'
          type='email'
          pattern='.+@.+\.[a-z]{2,3}'
          //size='30'
          placeholder='example@truc.com'
        />

        <InputField
          name='linkedin'
          label='Site web'
          type='url'
          pattern='https://.*'
          placeholder='https://example.com'
        />

        <Button onClick={handleAddContact}>Ajouter</Button>
      </Form>
    </WithContainer>
  );
};
