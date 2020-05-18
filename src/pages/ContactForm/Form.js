import styled from 'styled-components';
import { spaces } from '../../utils/cssVariables';

export const Form = styled.form`
  label {
    width: 110px;
  }

  section {
    margin-bottom: ${spaces.s90};
  }

  section.one {
    margin-top: ${spaces.s90};

    .civility-box {
      display: flex;
      justify-content: space-between;

      label {
        width: 60px;
      }

      input {
        width: auto;
      }

      div:last-child {
        margin-left: ${spaces.s80};
      }
    }
  }
  section.two {
    .right {
      min-width: 60%;
    }
  }

  button {
    margin-left: 0;
  }

  @media screen and (min-width: 768px) {
    section.one {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-gap: ${spaces.s90};

      .civility-box {
        justify-content: unset;

        div:last-child {
          margin-left: 70px;
        }
      }
    }

    section.one > div {
      justify-content: unset;
    }

    section.two {
      display: flex;

      .left {
        margin-right: ${spaces.s90};

        input {
          margin-bottom: ${spaces.s90};
        }
      }

      .right {
        div {
          height: 264px;
        }
      }
    }

    button {
      display: block;
      margin: auto;
    }
  }
`;
