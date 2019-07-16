import styled from "styled-components";
import { devices } from "../../ultilities/devices";

export const HomePageContainer = styled.div`
  background: #fff;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #333;
  min-height: 89%;

  @media ${devices.mobile} {
  }
  @media ${devices.tablet} {
  }
  @media ${devices.laptop} {
    border-radius: 0.3rem;
    box-shadow: 0.1rem 0.1rem 2rem 0.5rem rgba(0, 0, 0, 0.2);

    width: 35%;
    min-width: 35%;
  }
  @media ${devices.widescreen} {
    width: 30%;
    min-width: 30%;
  }
`;

// console.log(`${props}`);

export const BackgroundContainer = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  background: url("https://i.pinimg.com/originals/44/6e/3b/446e3b79395a287ca32f7977dd83b290.jpg")
    center center / cover;
  clip-path: polygon(0 0, 100% 0, 100% 32%, 50% 40%, 0 32%);
`;

export const AvatarContainer = styled.div`
  width: 50%;
  /* height: 10rem; */
  z-index: 1;

  img {
    border-radius: 50%;
    box-shadow: 0.5rem 0.5rem 1rem 0.3rem rgba(0, 0, 0, 0.1);
  }
`;

export const InfoContainer = styled.div`
  text-align: center;
  margin-top: 5%;
  z-index: 1;

  h1 {
    letter-spacing: 0.2rem;
    font-weight: 300;
    margin-bottom: 1rem;
  }

  a {
    margin: 0 0.3rem;
  }

  h3 {
    margin-top: 1rem;
  }
`;

export const DescriptionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  position: absolute;
  bottom: 0;
  border-top: 1px solid #777;

  a {
    margin: 1rem 1.2rem;
    font-size: 0.9rem;
    font-weight: bold;
    display: flex;
    justify-content: center;
    div {
      margin-right: 0.5rem;
    }
    h3 {
      vertical-align: top;
    }
  }
`;
