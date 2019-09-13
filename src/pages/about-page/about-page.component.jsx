import React, { useContext } from 'react';
import { LanguageContext } from '../../contexts/language.context';
import { AboutPageContainer, DetailMe, CallInAction, DetailThis } from './about-page.styles';
import Line from '../../components/line/line.component';
// import NextButton from "../../components/next-button/next-button.component";
// import { FirstButton } from "../../style/insideCvLayout";
import { aboutPageContents, stuffsUsed, myAge } from './about-page.contents';
// import { SeparatorBottom } from "../../components/separator/separator.component";

const AboutPage = ({ executeScroll }) => {
  const { isVietnamese } = useContext(LanguageContext);
  // const [isMouseEnter, setIsMouseEnter] = useState(false);
  const {
    firstHeading,
    hello,
    aboutMe,
    callInAction,
    ctaComment,
    age,
    // exactAge,
    phone,
    email,
    address,
    myAddress,
    // exactAddress,
    primaryHeading2,
    secondaryHeading2,
  } = aboutPageContents[isVietnamese ? 1 : 0];

  const info = [
    { name: age, value: myAge.years },
    { name: phone, value: '(+84) 869 222 048' },
    { name: email, value: 'nguyentran0113@gmail.com' },
    { name: address, value: myAddress },
  ];

  return (
    <AboutPageContainer executeScroll={executeScroll}>
      {firstHeading}
      <div>
        <DetailMe>
          <div>
            <h4>{hello}</h4>
            <div>{aboutMe}</div>
          </div>
          <div>
            {info.map(inf => (
              <div>
                <h5>
                  <span>{inf.name}</span>
                  <span>{inf.value}</span>
                </h5>
                <Line />
              </div>
            ))}
          </div>
        </DetailMe>
      </div>
      <CallInAction>
        {callInAction}
        <h4>{ctaComment}</h4>
      </CallInAction>
      <h3>
        <span>{primaryHeading2}</span> {secondaryHeading2}
      </h3>
      <DetailThis>
        <p>This website is built from scratch with React and some library</p>
        <ul>
          {stuffsUsed.libraries.map((library, id) => (
            <li key={id}>{library}</li>
          ))}
          {stuffsUsed.credits.map((credit, id) => (
            <li key={id}>
              <a href={credit.link}>
                <strong>{credit.name}</strong>
                <i>{isVietnamese ? ' của ' : ' by '}</i>
                <strong>{credit.author}</strong>
              </a>
            </li>
          ))}
        </ul>
      </DetailThis>
      {/* <FirstButton>
        <NextButton name={"Resume"} />
      </FirstButton> */}
      {/* <div>
        <SeparatorBottom />
      </div> */}
    </AboutPageContainer>
  );
};

export default AboutPage;
