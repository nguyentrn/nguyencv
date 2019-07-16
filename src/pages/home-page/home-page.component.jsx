import React from "react";
import {
  FaFacebookF,
  FaFileDownload,
  FaRegAddressCard,
  FaGithub
} from "react-icons/fa";
import {
  HomePageContainer,
  BackgroundContainer,
  InfoContainer,
  DescriptionContainer,
  AvatarContainer
} from "./home-page.styles";

const HomePage = props => (
  <HomePageContainer>
    <AvatarContainer>
      {console.log(window.scrollY)}
      <img src="/avatar.jpg" alt="avatar" />
    </AvatarContainer>
    <InfoContainer>
      <h1>TRẦN NGUYÊN</h1>
      <p>Front-end Developer</p>
      <h3>
        <a href="facebook.com">
          <FaFacebookF />
        </a>
        <a href="facebook.com">
          <FaGithub />
        </a>
      </h3>
    </InfoContainer>
    <DescriptionContainer>
      <a href="https://google.com">
        <div>DOWNLOAD CV</div>
        <h3>
          <FaFileDownload />
        </h3>
      </a>
      <a href="https://google.com">
        <div>CONTACT ME</div>
        <h3>
          <FaRegAddressCard />
        </h3>
      </a>
    </DescriptionContainer>
    <BackgroundContainer />
  </HomePageContainer>
);

export default HomePage;
