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
  const c = {};
  const toDestructure = [
    'firstName',
    'lastName',
    'company',
    'quality',
    'phone',
    'email',
    'description',
    'linkedin',
    'activities',
  ];

  toDestructure.forEach((varName) => {
    c[varName] = `pas de ${varName}`;
  });

  if (contact) {
    toDestructure.forEach((varName) => {
      if (contact[varName]) {
        c[varName] = contact[varName];
      }
    });
  }

  const {
    firstName,
    lastName,
    company,
    quality,
    phone,
    email,
    description,
    linkedin,
    activities,
  } = c;

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
      <p>
        Manque civilité {firstName} {lastName}, {company}, qualité {quality} sur
        2
      </p>
      <p>QR Code ici !!!</p>

      <p>
        {/* <a href='tel:+33781154503'>+33781154503</a> */}
        <a href={`tel:${phone}`}>{phone}</a>

        <a href={`mailto:${email}`}>{email}</a>
      </p>

      <p>{description}</p>

      <p>
        <a href={linkedin} target='_blank' rel='noopener noreferrer'>
          Linkedin
        </a>
      </p>

      <p>
        Activités : <pre>{JSON.stringify(activities, null, 4)}</pre>
      </p>

      {/* https://en.wikipedia.org/wiki/VCard --> 4.0 */}

      <QRCode
        value={`BEGIN:VCARD
VERSION:4.0
FN:${`${firstName} ${lastName}`}
ORG:${company}
TEL:${phone}
EMAIL:${email}
END:VCARD`}
      />

      <p>
        Debug : <pre>{JSON.stringify(contact, null, 4)}</pre>
      </p>

      <button onClick={handleDeleteContact}>Supprimer le contact</button>
    </WithContainer>
  );
};
