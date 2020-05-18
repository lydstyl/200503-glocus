import styled from 'styled-components';
import { spaces } from '../../utils/cssVariables';

export const StyledLogin = styled.form`
  label {
    min-width: 100px;
  }

  span {
    display: block;
  }

  button,
  span {
    margin: ${spaces.s50} ${spaces.s50} 0 0;
  }

  @media (min-width: 768px) {
    .buttons {
      display: flex;
      justify-content: space-between;

      button {
        margin-right: 0;
      }
    }

    span {
      margin-right: 0;
      align-self: center;
    }
  }
`;
