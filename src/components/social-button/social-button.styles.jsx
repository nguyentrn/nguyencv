import styled from 'styled-components';
import theme from '../../style/theme';

// ${theme.primaryColor}: #212121;
// ${theme.light}: #fff;
// 50%: 50%;
// $font-size: 25px;

/* styles for a common effect !!!YOU NEED THEM */

export const SocialButtonContainer = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;

  .effect {
    display: flex;
    align-items: center;
    justify-content: center;

    button {
      background: #fff;
      cursor: pointer;
      text-decoration: none !important;
      width: 2.4rem;
      height: 2.4rem;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      margin-right: 0.8rem;
      font-size: 1rem;
      overflow: hidden;
      position: relative;
      color: ${theme.primaryColor}; //or change to your own color
      border: 0.08rem solid ${theme.primaryColor}; //or change to your own color

      svg {
        position: relative;
        z-index: 3;
      }

      &:last-child {
        margin-right: 0;
      }

      &:before {
        content: '';
        display: inline-block;
        height: 100%;
        vertical-align: middle;
      }

      svg {
        display: inline-block;
        vertical-align: middle;
      }
    }
  }

  .effect.varrius {
    display: flex;

    button {
      transition: all 0.2s linear 0s;
      &:after {
        content: '';
        display: block;
        width: 90%;
        height: 90%;
        top: -110%;
        left: 0;
        right: 0;
        margin: auto;
        position: absolute;
        background-color: ${theme.primaryColor};

        border-radius: 50%;
      }

      &:nth-child(1) {
        &:after {
          background-color: #6e5494;
        }
      }
      &:nth-child(2) {
        &:after {
          background-color: #3c5a99;
        }
      }
      &:nth-child(3) {
        &:after {
          background-color: #0077b5;
        }
      }

      &:hover {
        color: ${theme.light};

        &:after {
          top: 5%;
          transition: all 0.2s linear 0s;
        }
      }
    }
  }
`;
