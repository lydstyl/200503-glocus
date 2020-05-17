import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { spaces, colors } from '../../utils/cssVariables';
import { exists } from '../../utils/exists';

const CardWrapper = styled.div`
  padding: ${spaces.s40};
  background-color: ${colors.secondary};
  border: 1px solid;

  a {
    color: ${colors.textOnS};
  }

  .star {
    font-size: 2rem; /* ★ */
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
          {quality === '2' && (
            <span className='star' role='img' aria-label='best quality'>
              🎯
            </span>
          )}{' '}
          {exists(company) && company.toUpperCase()}
        </p>

        <p>
          {civility} {exists(lastName) && lastName.toUpperCase()}{' '}
          {exists(firstName) && firstName}
        </p>

        {diffDays * 0 === 0 && <p>Activité depuis {diffDays} jour(s).</p>}
      </Link>
    </CardWrapper>
  );
};
