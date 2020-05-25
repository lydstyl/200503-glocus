import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams, useHistory } from 'react-router-dom';
import QRCode from 'qrcode.react';
import { exists } from '../../utils/exists';

import {
  thunkDeleteContact,
  thunkAddActivity,
} from '../../actions/contactActions';
import WithContainer from '../../hocs/withContainer';
import { StyledContactPage } from './StyledContactPage';
import { ActivityItem } from '../../components/ActivityItem/ActivityItem';

export const ContactPage = () => {
  const dispatch = useDispatch();
  const settings = useSelector((state) => state.settings);
  const contacts = useSelector((state) => state.contacts);
  const { id } = useParams();
  const history = useHistory();

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
  } = contact;

  let { activities } = contact;

  activities = activities
    .sort((a, b) => {
      if (new Date(a.createdAt) > new Date(b.createdAt)) {
        return -1;
      } else {
        return 1;
      }
    })
    .slice(0, settings.maxActivitiesToShow);

  const handleDeleteContact = () => {
    dispatch(thunkDeleteContact(id));

    history.push('/');
  };

  const handleAddactivity = () => {
    dispatch(thunkAddActivity(contact));
  };

  return (
    <WithContainer title='Détail du contact'>
      <StyledContactPage>
        <div className='section contact'>
          <div className='contact-header'>
            <h3>
              {quality === '2' && (
                <span className='star' role='img' aria-label='best quality'>
                  🎯
                </span>
              )}{' '}
              {exists(company) && company.toUpperCase()} {civility}{' '}
              {exists(firstName) && firstName}{' '}
              {exists(lastName) && lastName.toUpperCase()}
            </h3>
          </div>

          <div className='contact-infos'>
            <div className='left'>
              {exists(phone) && (
                <p>
                  <a href={`tel:${phone}`}>{phone}</a>
                </p>
              )}

              {exists(email) && (
                <p>
                  <a href={`mailto:${email}`}>{email}</a>
                </p>
              )}

              {exists(linkedin) && (
                <p>
                  <a href={linkedin} target='_blank' rel='noopener noreferrer'>
                    Site web
                  </a>
                </p>
              )}
            </div>

            <div className='right'>
              <p>{description}</p>
            </div>
          </div>

          <Link className='edit' to={`/ajouter-ou-modifier-un-contact/${id}`}>
            Modifier le contact
          </Link>
        </div>

        <div className='section  activities-box'>
          <div className='activities-header'>
            <h3>Activités</h3>

            <button onClick={handleAddactivity}>Ajouter</button>
          </div>

          <div className='activities'>
            {activities &&
              activities.map((a) => (
                <ActivityItem
                  key={a.createdAt}
                  contact={contact}
                  activity={a}
                ></ActivityItem>
              ))}
          </div>
        </div>

        <div className='section contact-footer'>
          <div className='qr-code-box'>
            <QRCode
              value={`BEGIN:VCARD
VERSION:4.0
FN:${`${civility}${exists(firstName) && ' ' + firstName}${
                exists(lastName) && ' ' + lastName.toUpperCase()
              }`}
${exists(company) && `ORG:${company.toUpperCase()}`}
${exists(phone) && `TEL:${phone}`}
${exists(email) && `EMAIL:${email}`}
${exists(linkedin) && `URL:${linkedin}`}
END:VCARD`}
            />
          </div>

          <hr />

          <div className='delete-all-box'>
            <button onClick={handleDeleteContact}>Supprimer tout</button>
          </div>
        </div>
      </StyledContactPage>
    </WithContainer>
  );
};
