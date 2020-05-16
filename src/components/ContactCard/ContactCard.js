import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { spaces, colors } from '../../utils/cssVariables';

function exists(string) {
  if (string.startsWith('pas de')) {
    return false;
  }

  return true;
}

const CardWrapper = styled.div`
  margin: ${spaces.s80} 0;
  padding: ${spaces.s40};
  background-color: ${colors.secondary};
  border: 1px solid;

  a {
    color: ${colors.textOnS};
  }

  .star {
    font-size: 2rem;
  }
`;

export const ContactCard = ({
  contact: { id, quality, company, civility, lastName, firstName, diffTime },
}) => {
  let diffDays = 0;
  if (diffTime) {
    diffDays = diffTime.diffDays;
  }

  return (
    <CardWrapper>
      <Link to={`/contact/${id}`}>
        <p>
          {quality == 2 && <span className='star'>★</span>}{' '}
          {exists(company) && company}
        </p>

        <p>
          {civility} {exists(lastName) && lastName}{' '}
          {exists(firstName) && firstName}
        </p>

        {diffDays * 0 === 0 && <p>Pas d'activité depuis {diffDays} jour(s).</p>}
      </Link>
    </CardWrapper>
  );
};
