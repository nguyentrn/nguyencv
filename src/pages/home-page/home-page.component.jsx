import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
// import { motion } from 'framer-motion';
// import { FaFileDownload, FaRegAddressCard } from 'react-icons/fa';
import { LanguageContext } from '../../contexts/language.context';
import {
  HomePageContainer,
  BackgroundContainer,
  InfoContainer,
  StyledTypist,
  DescriptionContainer,
  AvatarContainer,
  HomePageButton,
} from './home-page.styles';
import TypingText from '../../components/typing-text/typing-text.component';
import { SeparatorBottom } from '../../components/separator/separator.component';
import SocialButtons from '../../components/social-button/social-button.component';

const HomePage = () => {
  const { isVietnamese } = useContext(LanguageContext);

  return (
    <HomePageContainer>
      <AvatarContainer>
        <img src="/avatar.jpg" alt="avatar" />
      </AvatarContainer>
      <InfoContainer>
        <StyledTypist>
          <h1>TRẦN NGUYÊN</h1>
          <h1>Front-end Developer</h1>
        </StyledTypist>
        <div>
          <SocialButtons />
        </div>
        <div>
          <TypingText infinite="8">It will never be perfect.</TypingText>
          <TypingText delay="5000ms">Stop thinking. Just do more!</TypingText>
        </div>
      </InfoContainer>
      <DescriptionContainer>
        <Link to="/cv">
          <HomePageButton>
            <span>{isVietnamese ? 'TẢI CV' : 'DOWNLOAD CV'}</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150 45">
              <polyline points="0 0, 150 0, 150 45, 0 45, 0 0" />
              <polyline points="0 0, 150 0, 150 45, 0 45, 0 0" />
            </svg>
          </HomePageButton>
        </Link>
        <Link to="/contact">
          <HomePageButton>
            <span>{isVietnamese ? 'LIÊN HỆ' : 'CONTACT ME'}</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150 45">
              <polyline points="0 0, 150 0, 150 45, 0 45, 0 0" />
              <polyline points="0 0, 150 0, 150 45, 0 45, 0 0" />
            </svg>
          </HomePageButton>
        </Link>

        {/* <div>
          <div>{isVietnamese ? 'TẢI CV' : 'DOWNLOAD CV'}</div>
          <h3>
            <FaFileDownload />
          </h3>
        </div>
        <div>
          <div>{isVietnamese ? 'LIÊN HỆ' : 'CONTACT ME'}</div>
          <h3>
            <FaRegAddressCard />
          </h3>
        </div> */}
      </DescriptionContainer>
      <BackgroundContainer />
      <SeparatorBottom />
    </HomePageContainer>
  );
};

export default HomePage;
