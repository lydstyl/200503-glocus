import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams, useHistory } from 'react-router-dom';
import QRCode from 'qrcode.react';
import styled from 'styled-components';

import {
  thunkDeleteContact,
  thunkAddactivity,
} from '../../actions/contactActions';
import WithContainer from '../../hocs/withContainer';

const Activity = styled.textarea`
  width: 100%;
`;

export const ContactPage = () => {
  const { id } = useParams();
  const history = useHistory();

  const contacts = useSelector((state) => state.contacts);
  const contact = contacts.filter((c) => c.id === id)[0];

  const {
    civility,
    firstName,
    lastName,
    company,
    quality,
    phone,
    email,
    description,
    linkedin,
    activities,
  } = contact;

  const dispatch = useDispatch();
  const handleDeleteContact = () => {
    dispatch(thunkDeleteContact(id));

    history.push('/');
  };
  const handleUpdateContact = () => {
    // dispatch(thunkDeleteContact(id));
    // history.push('/');
  };

  const handleAddactivity = () => {
    // dispatch(thunkDeleteContact(id));
    // history.push('/');

    const contactId = id;

    dispatch(thunkAddactivity(contactId));
  };

  return (
    <WithContainer
      title='Détail du contact'
      style={{ backgroundColor: 'lightgrey' }}
    >
      <h3>
        {civility} {firstName} {lastName}, {company}, qualité {quality} sur 2
      </h3>

      <p>
        <a href={`tel:${phone}`}>{phone}</a>

        <a href={`mailto:${email}`}>{email}</a>
      </p>

      <p>{description}</p>

      <p>
        <a href={linkedin} target='_blank' rel='noopener noreferrer'>
          Site web
        </a>
      </p>

      <button onClick={handleUpdateContact}>Modifier</button>
      <Link to='/contact/:id/modifier'>Accueil</Link>

      <h3>Activités</h3>

      <button onClick={handleAddactivity}>Ajouter</button>

      <p>
        Au click ou au hover sur une activité faire apparaitre les boutons
        Sauver et Supprimer
      </p>

      <div className='activities'>
        <Activity name='activity' id='' rows='4'></Activity>
        <Activity name='activity' id='' rows='4'></Activity>
        <Activity name='activity' id='' rows='4'></Activity>
      </div>

      <pre> {JSON.stringify(activities, null, 4)}</pre>

      <QRCode
        value={`BEGIN:VCARD
VERSION:4.0
FN:${`${civility} ${`${firstName && firstName} `}${lastName}`}
${company && `ORG:${company}`}
${phone && `TEL:${phone}`}
${email && `EMAIL:${email}`}
${linkedin && `URL:${linkedin}`}
END:VCARD`}
      />

      <pre>Debug : {JSON.stringify(contact, null, 4)}</pre>

      <button onClick={handleDeleteContact}>Supprimer tout</button>
    </WithContainer>
  );
};
