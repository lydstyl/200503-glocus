import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import styled from 'styled-components';

import { spaces } from '../../utils/cssVariables';
import { thunkAddContact, thunkSetContact } from '../../actions/contactActions';
import WithContainer from '../../hocs/withContainer';
import { Form } from './Form';
import { InputField } from '../../components/InputField/InputField';

const Button = styled.button`
  margin: ${spaces.s30} 0;
  padding: ${spaces.s30};
`;

export const ContactForm = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const { id } = useParams();

  const contacts = useSelector((state) => state.contacts);

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

    const contact = {};

    form.querySelectorAll('input').forEach((i) => {
      contact[i.name] = i.value || `pas de ${i.name}`;
    });

    contact.quality =
      document.querySelector('[name=quality]').value || 'pas de qualité';
    contact.description =
      document.querySelector('textarea').value || 'pas de description';

    if (document.querySelector('[value=Mme]').checked) {
      contact.civility = 'Mme';
    }

    dispatch(thunkAddContact(contact));

    history.push('/');
  };

  const handleSetContact = (evt) => {
    evt.preventDefault();

    dispatch(thunkSetContact(id, contact));

    history.push(`/contact/${id}`);
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
          checked={id && contact.civility === 'Mme'}
        />
        <InputField
          onChange={handleInputChange}
          type='radio'
          name='civility'
          value='M.'
          label='M.'
          checked={id && contact.civility === 'M.'}
        />

        <InputField
          onChange={handleInputChange}
          name='lastName'
          label='Nom de famille'
          placeholder='DUPOND'
          value={id && contact.lastName}
        />

        <InputField
          onChange={handleInputChange}
          value={id && contact.firstName}
          name='firstName'
          label='Prénom'
          placeholder='Jean'
        />

        <InputField
          onChange={handleInputChange}
          name='company'
          label='Entreprise'
          value={id && contact.company}
        />

        <InputField
          onChange={handleInputChange}
          name='quality'
          label='Qualité'
          type='range'
          min='0'
          max='2'
          step='1'
          value={id && contact.quality}
        />

        <InputField
          onChange={handleInputChange}
          name='description'
          label='description'
          type='textarea'
          rows='5'
          placeholder='Informations importantes: potentiel fort; probablement le client idéal; etc.'
          value={id && contact.description}
          // defaultValue='Informations importantes: potentiel fort; probablement le client idéal; etc.'
        />

        <InputField
          onChange={handleInputChange}
          name='phone'
          label='Téléphone'
          type='tel'
          pattern='\+?[0-9]{0,2}([0-9]\s?){10,}'
          placeholder='01 23 45 67 89'
          value={id && contact.phone}
        />

        <InputField
          onChange={handleInputChange}
          name='email'
          label='E-mail'
          type='email'
          pattern='.+@.+\.[a-z]{2,3}'
          //size='30'
          placeholder='example@truc.com'
          value={id && contact.email}
        />

        <InputField
          onChange={handleInputChange}
          name='linkedin'
          label='Site web'
          type='url'
          pattern='https://.*'
          placeholder='https://example.com'
          value={id && contact.linkedin}
        />

        {id ? (
          <Button onClick={handleSetContact}>Modifier</Button>
        ) : (
          <Button onClick={handleAddContact}>Ajouter</Button>
        )}
      </Form>
    </WithContainer>
  );
};
