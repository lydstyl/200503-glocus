import styled from 'styled-components';
import { spaces } from '../../utils/cssVariables';

export const StyledHome = styled.div`
  .add-contact {
    display: block;
    margin: ${spaces.s60} 0;
    padding: 0;
  }

  .contact-to-work {
    p {
      margin-bottom: ${spaces.s60};
    }
  }

  @media screen and (min-width: 1024px) {
    .contact-to-work p {
      margin-bottom: ${spaces.s80};
    }
  }
`;

export const ContactsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${spaces.s40};

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (min-width: 1024px) {
    gap: ${spaces.s80};
  }
`;
