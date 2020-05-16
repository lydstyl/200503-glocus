import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
// import styled from 'styled-components';

import WithContainer from '../../hocs/withContainer';
// import { spaces } from '../../utils/cssVariables';

import { getDiffTime } from '../../utils/getDiffTime';

function sortByQualityAndLastActivity(ob1, ob2) {
  if (ob2.quality > ob1.quality) {
    return 1;
  } else if (ob2.quality < ob1.quality) {
    return -1;
  }

  // Else go to the 2nd item
  if (ob2.diffTime.diffMilliSeconds > ob1.diffTime.diffMilliSeconds) {
    return 1;
  } else if (ob2.diffTime.diffMilliSeconds < ob1.diffTime.diffMilliSeconds) {
    return -1;
  } else {
    // nothing to split them
    return 0;
  }
}

export const Home = () => {
  const settings = useSelector((state) => state.settings);
  let contacts = useSelector((state) => state.contacts);

  contacts = contacts.filter((c) => {
    // don't show bad quality contacts
    // eslint-disable-next-line
    if (c.quality == 0) return false;

    return true;
  });

  const prospectNb = contacts.length;

  contacts.map((c) => {
    // add diff time between now and last activity to contacts
    c.diffTime = getDiffTime(c.lastActivity);

    return c;
  });

  contacts = contacts.filter((c) => {
    // show new contact without any activity yet
    if (!c.lastActivity) return true;

    // do not show too recent activity contact
    if (!(c.diffTime.diffDays > settings.showContactIfLastActivityOlderThen))
      return false;

    return true;
  });

  // sort contacts by quality then by last activity older to newer
  contacts = contacts.sort(sortByQualityAndLastActivity);

  // only show firsts contacts of the list
  contacts = contacts.slice(0, settings.maxContactsToShow);

  return (
    <WithContainer title='Accueil'>
      <p>Nombre de prospects de qualité supérieur à zéro : {prospectNb}</p>

      <hr />

      <p>
        <Link to='/ajouter-ou-modifier-un-contact'>
          Ajouter un nouveau prospect
        </Link>
      </p>

      <hr />

      <p>Prospects à relancer :</p>

      {contacts.length ? (
        contacts.map((c) => (
          <li key={c.id}>
            card {c.lastName} {c.firstName} {c.company} {c.quality}{' '}
            {c.lastActivity} {c.diffTime.diffDays} {c.diffTime.diffMilliSeconds}
            <Link to={`/contact/${c.id}`}>Détail</Link>
          </li>
        ))
      ) : (
        <p>Pas de contact</p>
      )}
    </WithContainer>
  );
};
