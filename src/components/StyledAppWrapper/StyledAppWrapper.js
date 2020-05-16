import styled from 'styled-components';
import { spaces, colors } from '../../utils/cssVariables';

export const StyledAppWrapper = styled.div`
  a {
    padding: ${spaces.s6};
    margin: ${spaces.s6};
    color: ${colors.dark};
    text-decoration: none;
  }
  a:hover {
    background-color: ${colors.secondary};
    color: ${colors.textOnS};
  }

  li {
    list-style-type: none;
  }

  input,
  textarea {
    padding: 0 ${spaces.s6};
  }

  textarea {
    box-shadow: inset 1px 2px 1px 0px rgba(0, 0, 0, 0.6);
  }

  button,
  input[type='submit'] {
    margin: ${spaces.s30} 0 ${spaces.s30} ${spaces.s30};
    padding: ${spaces.s30};
    background-color: ${colors.secondary};
    color: ${colors.textOnS};
    border: none;
    box-shadow: 2px 5px 5px 2px rgba(0, 0, 0, 0.5);
    /* transition: box-shadow 1s cubic-bezier(0.29, 1.01, 1, -0.68) 0s; */
    transition: box-shadow 0.2s ease 0s;
  }

  button:hover,
  input[type='submit']:hover {
    box-shadow: 4px 10px 10px 4px rgba(0, 0, 0, 0.4);
  }

  button:active,
  input[type='submit']:hover {
    box-shadow: 1px 1px 3px 1px rgba(0, 0, 0, 0.6);
  }
`;
