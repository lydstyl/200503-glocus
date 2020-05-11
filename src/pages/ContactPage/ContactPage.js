import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import QRCode from 'qrcode.react';

import { thunkDeleteContact } from '../../actions/contactActions';
import WithContainer from '../../hocs/withContainer';

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

      <h3>Activités</h3>
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

      <button onClick={handleDeleteContact}>Supprimer le contact</button>
    </WithContainer>
  );
};
