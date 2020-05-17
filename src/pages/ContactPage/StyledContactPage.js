import styled from 'styled-components';
import {
  spaces,
  // , colors
} from '../../utils/cssVariables';

export const StyledContactPage = styled.div`
  .section {
    padding: ${spaces.s40};
    background-color: lightgray;
  }

  .contact {
    margin-bottom: ${spaces.s80};

    .contact-header {
      h3 {
        margin-bottom: ${spaces.s80};
      }
      @media screen and (min-width: 768px) {
        h3 {
          text-align: center;
        }
      }
    }

    .contact-infos {
      .left {
        margin-bottom: ${spaces.s80};
      }
      .right {
        margin-bottom: ${spaces.s80};
      }

      @media screen and (min-width: 768px) {
        display: flex;
        flex-direction: row;
        justify-content: space-between;

        .left {
          max-width: 30%;
        }

        .right {
          max-width: 70%;
        }
      }
    }

    .edit {
      display: block;

      transform: scaleY(0);
      transform-origin: 50% 0;
      transition: transform 1s ease;

      margin-bottom: ${spaces.s80};
      text-align: center;
    }
  }

  .contact:hover {
    .edit {
      transform: scaleY(1);
    }
  }

  .activities-box {
    margin-bottom: ${spaces.s80};

    .activities-header {
      display: flex;
      justify-content: space-between;

      margin-bottom: ${spaces.s80};
    }

    .activities {
      .activity-buttons {
        transform: scaleY(0);
        transform-origin: 50% 0;
        transition: transform 1s ease;

        button:first-child {
          margin-left: 0;
        }
      }
    }

    .activities textarea:hover + .activity-buttons {
      transform: scaleY(1);
    }
  }

  .contact-footer {
    .qr-code-box {
      width: 128px;
      margin: auto;
    }

    .delete-all-box {
      text-align: center;
    }
  }
`;
