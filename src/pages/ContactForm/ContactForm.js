import React, { useState } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';

import { spaces } from '../../utils/cssVariables';
import { thunkAddContact, thunkSetContact } from '../../actions/contactActions';
import WithContainer from '../../hocs/withContainer';
import { InputField } from '../../components/InputField/InputField';

const Form = styled.form``;

const Button = styled.button`
  margin: ${spaces.s30} 0;
  padding: ${spaces.s30};
`;

export const ContactForm = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const { id } = useParams();
  // const history = useHistory();

  const contacts = useSelector((state) => state.contacts);

  // const {
  //   civility,
  //   firstName,
  //   lastName,
  //   company,
  //   quality,
  //   phone,
  //   email,
  //   description,
  //   linkedin,
  //   activities,
  // } = contact;

  const [contact, setContact] = useState(
    (id && contacts.filter((c) => c.id === id)[0]) || {
      civility: '',
      firstName: '',
      lastName: '',
      company: '',
      quality: '',
      phone: '',
      email: '',
      description: '',
      linkedin: '',
      activities: '',
    }
  );

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

    history.push('/');
  };

  const handleSetContact = (evt) => {
    evt.preventDefault();
    dispatch(thunkSetContact(id, contact));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setContact({ ...contact, [name]: value });

    console.log('setC', contact, name, value);
  };

  return (
    <WithContainer title='Ajouter ou modifier un contact'>
      <Form>
        <InputField
          onChange={handleInputChange}
          type='radio'
          name='civility'
          value='Mme'
          label='Mme'
          // checked
        />
        <InputField
          onChange={handleInputChange}
          type='radio'
          name='civility'
          value='M.'
          label='M.'
        />

        <InputField
          onChange={handleInputChange}
          name='lastName'
          label='Nom de famille'
          placeholder='DUPOND'
          value={contact.lastName}
        />
        <InputField
          onChange={handleInputChange}
          value={(contact && contact.firstName) || ''}
          name='firstName'
          label='Prénom'
          placeholder='Jean'
        />

        <InputField
          onChange={handleInputChange}
          name='company'
          label='Entreprise'
        />

        <InputField
          onChange={handleInputChange}
          name='quality'
          label='Qualité'
          type='range'
          min='0'
          max='2'
          step='1'
        />

        <InputField
          onChange={handleInputChange}
          name='description'
          label='description'
          type='textarea'
          placeholder='Informations importantes: potentiel fort; probablement le client idéal; etc.'
          rows='5'
          // defaultValue='Informations importantes: potentiel fort; probablement le client idéal; etc.'
        />

        <InputField
          onChange={handleInputChange}
          name='phone'
          label='Téléphone'
          type='tel'
          pattern='\+?[0-9]{0,2}([0-9]\s?){10,}'
          placeholder='01 23 45 67 89'
        />

        <InputField
          onChange={handleInputChange}
          name='email'
          label='E-mail'
          type='email'
          pattern='.+@.+\.[a-z]{2,3}'
          //size='30'
          placeholder='example@truc.com'
        />

        <InputField
          onChange={handleInputChange}
          name='linkedin'
          label='Site web'
          type='url'
          pattern='https://.*'
          placeholder='https://example.com'
        />
        {contact ? (
          <Button onClick={handleSetContact}>Modifier</Button>
        ) : (
          <Button onClick={handleAddContact}>Ajouter</Button>
        )}
      </Form>
    </WithContainer>
  );
};
