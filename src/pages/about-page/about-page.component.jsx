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
import NextButton from "../../components/next-button/next-button.component";
import { FirstButton } from "../../style/insidePage";
import * as moment from "moment";
import { SwitchTransition, Transition } from "react-transition-group";
import { SeparatorBottom } from "../../components/separator/separator.component";
import LinkWithScroll from "../../components/link-with-scroll/link-with-scroll.component";

const myBirthday = moment("01/13/1996", "MM/DD/YYYY");
const currentTime = moment();

let years = currentTime.diff(myBirthday, "year");
myBirthday.add(years, "years");
let months = currentTime.diff(myBirthday, "months");
myBirthday.add(months, "months");
let date = currentTime.diff(myBirthday, "days");

const myAge = { years, months, date };

// I have experience in frontend like website design and building and
const contents = [
  {
    primaryHeading1: "About",
    secondaryHeading1: "Me",
    hello: "Hello! I am Nguyên",
    aboutMe: (
      <div>
        A <strong>Web Developer</strong> from Ho Chi Minh City. I'm{" "}
        <strong>
          focusing on expanding my solid experience in Frontend and Single Page
          App
        </strong>{" "}
        development, also I have a <strong>basic knowledge in Backend</strong>{" "}
        which I learned from university.
        <br />
        My passion is applying what did I know about technology to build
        something useful (for me and for everyone). That motivates me to learn
        new stuffs day by day and to{" "}
        <strong>become a Senior Fullstack Developer</strong> one day !
      </div>
    ),
    callInAction: (
      <h1>
        Fall in love with Javascript, ReactJS, SPA, Node*, Python*{" "}
        <span>and I</span> would like to marry one<span> (</span>or many 😉) of
        them in the near future. <br />
        Would you mind telling me if you see them around? Leave a message{" "}
        <LinkWithScroll link={"contact"}>
          <strong>here</strong>
        </LinkWithScroll>
        <span> and I </span>
        will response to you soon! <br /> Thank for visiting !
      </h1>
    ),
    ctaComment:
      "About *: I love Node and Python but can't afford to meet these girls's conditions for now. But I would pleasefully try for a date in case they give me a chance !",

    age: "Age :",
    exactAge: `${myAge.years} years ${myAge.months} months ${
      myAge.date < 0 ? myAge.date + 30 : myAge.date
    } days old`,
    phone: "Phone :",
    email: "Email :",
    address: "Address :",
    myAddress: "Binh Chanh, Ho Chi Minh City",
    exactAddress: "14th Street, Trung Son,",
    primaryHeading2: "About",
    secondaryHeading2: "This"
  },

  {
    primaryHeading1: "Mô tả",
    secondaryHeading1: "Bản thân",
    hello: "Xin chào! Mình là Nguyên",
    aboutMe: (
      <div>
        <strong>Lập trình viên Web</strong> đến từ TP Hồ Chí Minh. Hiện tại mình{" "}
        <strong>
          đang tập trung phát triển kỹ năng Frontend và Single Page App
        </strong>
        . Mình cũng có <strong>kiến thức Backend cơ bản</strong> tích lũy từ
        trường đại học.
        <br />
        Đam mê việc ứng dụng công nghệ để xây dựng những ứng dụng có giá trị
        thực tiễn. Đó là động lực giúp mình yêu thích và duy trì việc lập trình
        hằng ngày.{" "}
        <strong>Mong muốn trở thành một lập trình viên Fullstack</strong> trong
        tương lai gần !
      </div>
    ),
    callInAction: (
      <h1>
        <span>Mình</span> rất thích Javascript, SPA, Node*, Python*
        <span> và </span>mong muốn tham gia các dự án của công nghệ này{" "}
        <span>
          {" "}
          trong tương lai. <br />
          Bạn có thể
        </span>{" "}
        liên hệ với mình{" "}
        <LinkWithScroll link={"contact"}>
          <strong>tại đây.</strong>
        </LinkWithScroll>{" "}
        <br /> Rất cảm ơn bạn đã ghé thăm !
      </h1>
    ),
    ctaComment:
      "Về *: Mình rất thích Node và Python nhưng chỉ có kiến thức sơ khai. Sẽ nghiên cứu kỹ hơn nếu có nhu cầu công việc.",

    age: "Tuổi :",
    exactAge: `${myAge.years} năm ${myAge.months} tháng ${
      myAge.date < 0 ? myAge.date + 30 : myAge.date
    } ngày `,
    phone: "Điện thoại :",
    email: "Email :",
    address: "Địa chỉ :",
    myAddress: "Bình Chánh, TP. Hồ Chí Minh",
    exactAddress: "Đường 14, KDC Trung Sơn,",
    primaryHeading2: "Về",
    secondaryHeading2: "Trang web này"
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
      name: "CSS Scroll Bars",
      author: "Ghost Rider",
      link: "https://codepen.io/GhostRider/pen/GHaFw"
    },
    {
      name: "Pure Css Animated Background",
      author: "Mohammad Abdul Mohaiman",
      link: "https://codepen.io/mohaiman/pen/MQqMyo"
    },
    {
      name: "Gradient color by HSL",
      author: "wakamsha",
      link: "https://codepen.io/wakamsha/pen/GpxJmg"
    }
  ]
};

const AboutPage = props => {
  const { isVietnamese } = useContext(LanguageContext);
  const [isMouseEnter, setIsMouseEnter] = useState(false);
  const {
    primaryHeading1,
    secondaryHeading1,
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
  } = contents[isVietnamese ? 1 : 0];

  return (
    <AboutPageContainer>
      <h3>
        <span>{primaryHeading1}</span> {secondaryHeading1}
      </h3>
      <DetailMe>
        <div>
          <h4>{hello}</h4>
          <div>{aboutMe}</div>
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
          <Line />
        </div>
      </DetailMe>
      <CallInAction>
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
      </DetailThis>
      <FirstButton>
        <NextButton name={"Resume"} />
      </FirstButton>
      <div>
        <SeparatorBottom />
      </div>
    </AboutPageContainer>
  );
};

export default AboutPage;
