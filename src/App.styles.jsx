import styled from "styled-components";
import { devices } from "./ultilities/devices";

export const AppContainer = styled.div`
  height: 100vh;
  background: url("https://i.pinimg.com/originals/44/6e/3b/446e3b79395a287ca32f7977dd83b290.jpg")
    center center / cover;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const PageContainer = styled.div`
  /* background: #fff; */
  display: flex;
  flex-direction: column;
  border-radius: 0.5rem;
  width: 95%;
  height: 95%;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 1px;
    background-color: #f5f5f5;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #777;
    border-radius: 1rem;
  }
  @media only screen and ${devices.mobile} {
    margin: auto;
    width: 400px;

    height: 95%;
  }
  @media only screen and ${devices.tablet} {
    margin: auto;
    width: 500px;
    height: 90%;
  }
  @media only screen and ${devices.laptop} {
    flex-direction: row;
    width: 950px;
    overflow: hidden;
  }
  @media only screen and ${devices.widescreen} {
    width: 1100px;
  }
`;
