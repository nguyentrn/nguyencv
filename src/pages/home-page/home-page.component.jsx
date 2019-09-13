import React, { useContext } from "react";
import { LanguageContext } from "../../contexts/language.context";
import { FaFileDownload, FaRegAddressCard } from "react-icons/fa";
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
// import LinkWithScroll from "../../components/link-with-scroll/link-with-scroll.component";
import SocialButtons from "../../components/social-button/social-button.component";

const HomePage = props => {
  const { isVietnamese } = useContext(LanguageContext);

  return (
    <HomePageContainer>
      <AvatarContainer>
        <img src="/avatar.jpg" alt="avatar" />
      </AvatarContainer>
      <InfoContainer>
        <StyledTypist>
          <h1>TRẦN NGUYÊN</h1> <h1>Front-end Developer</h1>
        </StyledTypist>
        <SocialButtons />
        <div>
          <TypingText infinite="8">It will never be perfect.</TypingText>
          <TypingText delay="5000ms">Stop thinking. Just do more!</TypingText>
        </div>
      </InfoContainer>
      <DescriptionContainer>
        <React.Fragment>
          {/* <LinkWithScroll link={"cv"} download> */}
          <div>{isVietnamese ? "TẢI CV" : "DOWNLOAD CV"}</div>
          <h3>
            <FaFileDownload />
          </h3>
          {/* </LinkWithScroll> */}

          {/* <LinkWithScroll link={"contact"}> */}
          <div>{isVietnamese ? "LIÊN HỆ" : "CONTACT ME"}</div>
          <h3>
            <FaRegAddressCard />
          </h3>
          {/* </LinkWithScroll> */}
        </React.Fragment>
      </DescriptionContainer>
      <BackgroundContainer />
      <SeparatorBottom />
    </HomePageContainer>
  );
};

export default HomePage;
