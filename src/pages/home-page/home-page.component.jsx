import React, { useContext } from "react";
import { LanguageContext } from "../../contexts/language.context";
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
  AvatarContainer
} from "./home-page.styles";
import TypingText from "../../components/typing-text/typing-text.component";
import { SeparatorBottom } from "../../components/separator/separator.component";
import LinkWithScroll from "../../components/link-with-scroll/link-with-scroll.component";
import ScrollDown from "../../components/scroll-down/scroll-down.component";

const HomePage = props => {
  const { isVietnamese } = useContext(LanguageContext);

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
      <LinkWithScroll link={"about"}>
        <ScrollDown />
      </LinkWithScroll>
      <DescriptionContainer>
        <React.Fragment>
          <LinkWithScroll link={"cv"} download>
            <div>{isVietnamese ? "TẢI CV" : "DOWNLOAD CV"}</div>
            <h3>
              <FaFileDownload />
            </h3>
          </LinkWithScroll>

          <LinkWithScroll link={"contact"}>
            <div>{isVietnamese ? "LIÊN HỆ" : "CONTACT ME"}</div>
            <h3>
              <FaRegAddressCard />
            </h3>
          </LinkWithScroll>
        </React.Fragment>
      </DescriptionContainer>
      <BackgroundContainer />
      <SeparatorBottom />
    </HomePageContainer>
  );
};

export default HomePage;
