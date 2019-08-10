import styled from "styled-components";

export const CitySvgContainer = styled.div`
  /* .container {
    display: block;
    width: 80%;
    margin: 0 auto;
    height: auto;
  } */
  z-index: 1;

  .house {
    cursor: pointer;
    font-size: 30px;
    font-family: "Oak", "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-weight: 700;

    .bg-fill {
      opacity: 0;
      transition: opacity 0.3s ease-in;
    }

    text {
      fill: #333;
      transition: fill 0.3s ease-in;
    }

    &:hover,
    &.active {
      .bg-fill {
        opacity: 1;
      }
      text {
        fill: #333;
      }
    }
  }
`;
