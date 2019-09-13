import React, { useState, useContext } from "react";
import { LanguageContext } from "../../contexts/language.context";
import {
  AboutPageContainer,
  DetailMe,
  CallInAction,
  DetailThis,
  Fade
} from "./about-page.styles";
import Line from "../../components/line/line.component";
// import NextButton from "../../components/next-button/next-button.component";
// import { FirstButton } from "../../style/insideCvLayout";
import { aboutPageContents, stuffsUsed, myAge } from './about-page.contents'
import { SwitchTransition, Transition } from "react-transition-group";
// import { SeparatorBottom } from "../../components/separator/separator.component";

const AboutPage = (props) => {
  console.log(props)
  const { isVietnamese } = useContext(LanguageContext);
  const [isMouseEnter, setIsMouseEnter] = useState(false);
  const {
    firstHeading,
    hello,
    aboutMe,
    callInAction,
    ctaComment,
    age,
    exactAge,
    phone,
    email,
    address,
    myAddress,
    exactAddress,
    primaryHeading2,
    secondaryHeading2
  } = aboutPageContents[isVietnamese ? 1 : 0];

  const contact = [{ name: age, value: exactAge }, { name: age, value: exactAge }, { name: age, value: exactAge }, { name: age, value: exactAge }]

  return (
    <AboutPageContainer executeScroll={props.executeScroll}>
      {firstHeading}
      <DetailMe>
        <div>
          <h4>{hello}</h4>
          <div>{aboutMe}</div>
        </div>
        {[age, phone, email, address].map(() =>
          <React.Fragment>
            <h5>
              <span>{phone} </span> <span>(+84) 869 222 048</span>
            </h5>
            <Line />
          </React.Fragment>
        )}
        {/* <div>
          <h5>
            <span>{age}</span>
          </h5>
          <Line />
          <h5>
            <span>{phone} </span> <span>(+84) 869 222 048</span>
          </h5>
          <Line />
          <h5>
            <span>{email} </span> <span>nguyentran0113@gmail.com</span>
          </h5>
          <Line />
          <h5>
            <span>{address} </span>

          </h5>
          <Line />
        </div> */}
      </DetailMe>
      {/* <CallInAction>
        {callInAction}
        <h4>
          <em>{ctaComment}</em>
        </h4>
      </CallInAction>
      <Line />
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
                <i>{isVietnamese ? " của " : " by "}</i>
                <strong>{credit.author}</strong>
              </a>
            </li>
          ))}
        </ul>
      </DetailThis> */}
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
