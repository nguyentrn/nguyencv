import React from "react";
import { Link } from "react-router-dom";
import { Link as Scroll } from "react-scroll";
import {
  FaLinkedin,
  FaFacebookF,
  FaFileDownload,
  FaRegAddressCard,
  FaGithub
} from "react-icons/fa";
import {
  HomePageContainer,
  BackgroundContainer,
  InfoContainer,
  StyledTypist,
  DescriptionContainer,
  AvatarContainer,
  TypingDivider,
  ViewMoreButton
} from "./home-page.styles";
import TypingText from "../../components/typing-text/typing-text.component";
import { SeparatorBottom } from "../../components/separator/separator.component";

import { useWindowSize } from "react-use";

const Wdow = () => {
  const { width, height } = useWindowSize();
  return { width, height };
};

const HomePage = props => {
  return (
    <HomePageContainer>
      <AvatarContainer>
        <img src="/avatar.jpg" alt="avatar" />
      </AvatarContainer>
      <InfoContainer>
        <StyledTypist>
          <h1>TRẦN NGUYÊN</h1> <p>Front-end Developer</p>
        </StyledTypist>
        <h3>
          <FaGithub
            onClick={() =>
              window.open("https://github.com/nguyentrn/", "_blank")
            }
          />
          <FaFacebookF
            onClick={() =>
              window.open(
                "https://www.facebook.com/nguyen.tran.0113/",
                "_blank"
              )
            }
          />
          <FaLinkedin
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/nguyen-tran-1231b0180/",
                "_blank"
              )
            }
          />
        </h3>
      </InfoContainer>
      <TypingText infinite="8">It will never be perfect.</TypingText>
      <TypingText delay="5000ms">Stop thinking. Just do more!</TypingText>
      <TypingDivider>
        <div className="mask" />
        <Scroll
          activeClass="active"
          to="detailContainer"
          offset={-50}
          spy={true}
          smooth={true}
          duration={800}
          containerId="containerElement"
        >
          <Link to="/about">
            <span>
              <ViewMoreButton>
                <span />
              </ViewMoreButton>
            </span>
          </Link>
        </Scroll>
      </TypingDivider>
      <DescriptionContainer>
      
        {Wdow().width < 1024 ? (
          <Scroll
            activeClass="active"
            to="detailContainer"
            offset={-55}
            spy={true}
            smooth={true}
            duration={800}
            containerId="containerElement"
          >
            <Link to="/resume">
              <div>DOWNLOAD CV</div>
              <h3>
                <FaFileDownload />
              </h3>
            </Link>
            <Link to="/contact">
              <div>CONTACT ME</div>
              <h3>
                <FaRegAddressCard />
              </h3>
            </Link>
          </Scroll>
        ) : (
          <Scroll
            activeClass="active"
            to="detailNavigate"
            offset={-100}
            spy={true}
            smooth={true}
            duration={800}
            containerId="navigate"
          >
            <Link to="/resume">
              <div>DOWNLOAD CV</div>
              <h3>
                <FaFileDownload />
              </h3>
            </Link>
            <Link to="/contact">
              <div>CONTACT ME</div>
              <h3>
                <FaRegAddressCard />
              </h3>
            </Link>
          </Scroll>
        )}
      </DescriptionContainer>
      <BackgroundContainer />
      <SeparatorBottom />
    </HomePageContainer>
  );
};

export default HomePage;
