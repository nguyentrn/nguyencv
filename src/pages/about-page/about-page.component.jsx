import React, { useState, useContext } from "react";
import { LanguageContext } from "../../contexts/language.context";
import {
  AboutPageContainer,
  DetailMe,
  CallInAction,
  DetailThis,
  Fade
} from "./about-page.styles";
import LineContainer from "../../components/line/line.component";
import NextButton from "../../components/next-button/next-button.component";
import { FirstButton } from "../../style/insidePage";
import * as moment from "moment";
import { SwitchTransition, Transition } from "react-transition-group";

const myBirthday = moment("01/13/1996", "MM/DD/YYYY").toObject();
const currentTime = moment().toObject();

const myAge = {
  years: currentTime.years - myBirthday.years,
  months: currentTime.months - myBirthday.months,
  date: currentTime.date - myBirthday.date
};

const B = (props) => <span style={{fontWeight: 'bold'}}>{props.children}</span>


const contents = [
  {
    primaryHeading: "About",
    secondaryHeading: "Me",
    hello: "Hello! I am Nguyên",
    aboutMe1:
      `A junior ${<B>bold</B>} developer from Ho Chi Minh City. I have experience in frontend like web site design and building and customization, also I have a basic knowledge in backend (my major at university).`,
    aboutMe2:
      " I am eager to be challenged in order to grow and further improve my IT skills. My greatest passion in life is using my technical know-how to benefit other people and organisations. That's my motiviated to learn new stuffs day by day and become a fullstack developer one day !",
    callInAction:
      "I fall in love with Javascript, SPA, Node and Python. I would like to marry one (or many 😉) of them in the near future. Would you mind telling me if you see them around? Leave a message here and I will response to you soon!",
    ctaComment:
      "I can't afford to meet their conditions for now. But I would happily try for a date in case they give me a chance !",

    age: "Age :",
    exactAge: `${myAge.years} years ${myAge.months} months ${
      myAge.date
    } days old `,
    phone: "Phone :",
    email: "Email :",
    address: "Address :",
    myAddress: "Binh Chanh, Ho Chi Minh City",
    exactAddress: "14th Street, Trung Son,"
  },

  {
    primaryHeading: "Giới",
    secondaryHeading: "thiệu",
    hello: "Xin chào! Mình là Nguyên",
    aboutMe1: "Some",
    aboutMe2:
      "Hiện tại mình đang tập trung vào phát triển kỹ năng lập trình front-end và muốn trở thành một lập trình viên full-stack trong tương lai gần.",
    callInAction:
      "I fall in love with Javascript, SPA, Node, Python and I would like to marry one (or many :)) of them in the near future. Would you mind noticing me if you see them around? Then leave a message here and I will response to you soon! But I will happily afford for a date! ",
    ctaComment:
      " But I will happily afford for a date in case they give me a chance!",

    age: "Tuổi :",
    exactAge: `${myAge.years} năm ${myAge.months} tháng ${myAge.date} ngày `,
    phone: "Điện thoại :",
    email: "Email :",
    address: "Địa chỉ :",
    myAddress: "Bình Chánh, TP. Hồ Chí Minh",
    exactAddress: "Đường 14, KDC Trung Sơn,"
  }
];
const stuffsUsed = {
  libraries: [
    "react-router",
    "react-use",
    "react-scroll",
    "react-transition-group",
    "react-icons",
    "styled-components"
  ],
  credits: [
    {
      name: "Shining Text Animation Effects",
      author: "FrankieDoodie",
      link: "https://codepen.io/FrankieDoodie/pen/dgVGad"
    },
    {
      name: "CSS BUTTON HOVER",
      author: "Imran Pardes",
      link: "https://codepen.io/ImranPardes/pen/YvmRpz"
    },
    {
      name: "Reactjs switch button",
      author: "Edgar",
      link: "https://codepen.io/BuiltByEdgar/pen/jWOVYQ"
    },
    {
      name: "Typewriter Text Animation",
      author: "Aakhya Singh",
      link: "https://codepen.io/aakhya/pen/EOxqOV"
    },
    {
      name: "heart beat",
      author: "Richard Liu",
      link: "https://codepen.io/lzl124631x/pen/pbGppZ"
    },
    {
      name: "CSS Scroll Bars ",
      author: "Ghost Rider",
      link: "https://codepen.io/GhostRider/pen/GHaFw"
    }

    // {
    //   name: "",
    //   author: "",
    //   link: ""
    // }
  ]
};

const AboutPage = props => {
  const { isVietnamese } = useContext(LanguageContext);
  const [isMouseEnter, setIsMouseEnter] = useState(false);
  const {
    primaryHeading,
    secondaryHeading,
    hello,
    aboutMe1,
    aboutMe2,
    callInAction,
    ctaComment,
    age,
    exactAge,
    phone,
    email,
    address,
    myAddress,
    exactAddress
  } = contents[isVietnamese ? 1 : 0];
  return (
    <AboutPageContainer>
      <h3>
        <span>{primaryHeading}</span> {secondaryHeading}
      </h3>
      <DetailMe>
        <div>
          <h4>{hello}</h4>
          <div>{aboutMe1}</div> <div>{aboutMe2}</div>
        </div>
        <div
          onMouseEnter={() => setIsMouseEnter(!isMouseEnter)}
          onMouseLeave={() => setIsMouseEnter(!isMouseEnter)}
        >
          <h5>
            <span>{age}</span>

            <SwitchTransition>
              <Transition
                key={isMouseEnter ? exactAge : myAge.years}
                timeout={100}
                unmountOnExit
                mountOnEnter
              >
                {state => (
                  <Fade state={state}>
                    {isMouseEnter ? exactAge : myAge.years}
                  </Fade>
                )}
              </Transition>
            </SwitchTransition>
          </h5>
          <LineContainer />
          <h5>
            <span>{phone} </span> <span>(+84) 869 222 048</span>
          </h5>
          <LineContainer />
          <h5>
            <span>{email} </span> <span>nguyentran0113@gmail.com</span>
          </h5>
          <LineContainer />
          <h5>
            <span>{address} </span>
            <SwitchTransition>
              <Transition
                key={isMouseEnter ? exactAddress : myAddress}
                timeout={100}
                unmountOnExit
                mountOnEnter
              >
                {state => (
                  <Fade state={state}>
                    {isMouseEnter ? (
                      <span>
                        <div>{exactAddress}</div>
                        <div>{myAddress}</div>
                      </span>
                    ) : (
                      myAddress
                    )}
                  </Fade>
                )}
              </Transition>
            </SwitchTransition>
          </h5>
          <LineContainer />
        </div>
      </DetailMe>

      <CallInAction>
        <h2>{callInAction}</h2> <p>{ctaComment}</p>
      </CallInAction>
      <LineContainer />

      <h3>
        <span>{primaryHeading}</span> This
      </h3>
      <DetailThis>
        <p>This website is built from scratch with React and some library</p>
        <ul>
          {stuffsUsed.libraries.map(library => (
            <li>{library}</li>
          ))}
          {stuffsUsed.credits.map(credit => (
            <li>
              <a href={credit.link}>
                <strong>{credit.name}</strong>
                <i
                  style={{
                    fontSize: "0.8rem",
                    marginLeft: "0.2rem",
                    marginRight: "0.4rem"
                  }}
                >
                  {isVietnamese ? "của" : "by"}
                </i>
                <strong>{credit.author}</strong>
              </a>
            </li>
          ))}
        </ul>
      </DetailThis>
      <FirstButton>
        <NextButton name={"Resume"} />
      </FirstButton>
    </AboutPageContainer>
  );
};

export default AboutPage;
