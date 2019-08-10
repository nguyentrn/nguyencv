import styled from "styled-components";

export const TypingTextTransitionContainer = styled.div`
  svg {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0px;
    left: 0px;
    z-index: 0;
  }

  .input {
    position: absolute;
    z-index: 1;
    bottom: 0px;
    font-size: 20px;
    text-align: center;
    left: 50%;
    transform: translateX(-50%);
    font-family: helvetica, sans-serif;
    bottom: 20px;
    background: none;
    border: 1px solid #ddd;
    color: #eee;
  }

  .text,
  .offscreen-text {
    width: 100%;
    top: 50%;
    transform: translateY(-50%);
    display: block;
    position: absolute;
    margin: 0;
  }

  .offscreen-text {
    text-align: center;
    top: -9999px;
  }

  .text span {
    position: absolute;
  }
`;
