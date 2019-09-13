/* eslint-disable max-len */
import React from 'react';
import * as moment from 'moment';

const myBirthday = moment('01/13/1996', 'MM/DD/YYYY');
const currentTime = moment();
const years = currentTime.diff(myBirthday, 'year');
myBirthday.add(years, 'years');
const months = currentTime.diff(myBirthday, 'months');
myBirthday.add(months, 'months');
const date = currentTime.diff(myBirthday, 'days');

export const myAge = { years, months, date };

export const aboutPageContents = [
  {
    firstHeading: (
      <h3>
        <span>About</span> Me
      </h3>
    ),
    secondaryHeading1: 'Me',
    hello: 'Hello! I am Nguyên',
    aboutMe: (
      <div>
        A<strong> Web Developer </strong>
        from Ho Chi Minh City. I`&apos;m
        <strong>
          {' '}
          focusing on expanding and improving my extensive experience in Frontend and Single Page
          App{' '}
        </strong>
        development. I also have a <strong>basic knowledge in Backend</strong> which I learned from
        university.
        <br />
        My passion is applying what did I know about technology to build something useful (for me
        and everyone). That motivates me to learn new stuff day by day and to
        <strong> become a Senior Fullstack Developer </strong> one day !
      </div>
    ),
    callInAction: (
      <h1>
        Fall in love with Javascript, ReactJS, SPA, Node*, Python* <span>and I</span> would like to
        marry one
        <span> (</span>
        or many 😉) of them in the near future. <br />
        Would you mind telling me if you see them around? Leave a message{' '}
        {/* <LinkWithScroll link={"contact"}>
            <strong>here</strong>
          </LinkWithScroll> */}
        <span> and I </span>
        will respond to you soon! <br /> Thank for visiting !
      </h1>
    ),
    ctaComment:
      "About *: I love Node and Python but can't afford to meet these girls's conditions for now. But I would be willing to try for a date in case they give me a chance !",

    age: 'Age :',
    exactAge: `${myAge.years}   years ${myAge.months} months ${
      myAge.date < 0 ? myAge.date + 30 : myAge.date
    } days old`,
    phone: 'Phone :',
    email: 'Email :',
    address: 'Address :',
    myAddress: 'Binh Chanh, Ho Chi Minh City',
    exactAddress: '14th Street, Trung Son,',
    primaryHeading2: 'About',
    secondaryHeading2: 'This',
  },

  {
    firstHeading: (
      <h3>
        <span>Mô tả </span>
        Bản thân
      </h3>
    ),
    secondaryHeading1: '',
    hello: 'Xin chào! Mình là Nguyên',
    aboutMe: (
      <div>
        <strong>Lập trình viên Web</strong> đến từ TP Hồ Chí Minh. Hiện tại mình{' '}
        <strong>đang tập trung phát triển kỹ năng Frontend và Single Page App</strong>. Mình cũng có{' '}
        <strong>kiến thức Backend cơ bản</strong> tích lũy từ trường đại học.
        <br />
        Đam mê việc ứng dụng công nghệ để xây dựng những ứng dụng có giá trị thực tiễn. Đó là động
        lực giúp mình yêu thích và duy trì việc lập trình hằng ngày.{' '}
        <strong>Mong muốn trở thành một lập trình viên Fullstack</strong> trong tương lai gần !
      </div>
    ),
    callInAction: (
      <h1>
        <span>Mình</span> rất thích Javascript, SPA, Node*, Python*
        <span> và </span>
        mong muốn tham gia các dự án của công nghệ này{' '}
        <span>
          {' '}
          trong tương lai. <br />
          Bạn có thể
        </span>{' '}
        liên hệ với mình{' '}
        {/* <LinkWithScroll link={"contact"}>
            <strong>tại đây.</strong>
          </LinkWithScroll>{" "} */}
        <br /> Rất cảm ơn bạn đã ghé thăm !
      </h1>
    ),
    ctaComment:
      'Về *: Mình rất thích Node và Python nhưng chỉ có kiến thức sơ khai. Sẽ nghiên cứu kỹ hơn nếu có nhu cầu công việc.',

    age: 'Tuổi :',
    exactAge: `${myAge.years} năm ${myAge.months} tháng ${
      myAge.date < 0 ? myAge.date + 30 : myAge.date
    } ngày `,
    phone: 'Điện thoại :',
    email: 'Email :',
    address: 'Địa chỉ :',
    myAddress: 'Bình Chánh, TP. Hồ Chí Minh',
    exactAddress: 'Đường 14, KDC Trung Sơn,',
    primaryHeading2: 'Về',
    secondaryHeading2: 'Trang web này',
  },
];
export const stuffsUsed = {
  libraries: [
    'react-router',
    'react-use',
    'react-scroll',
    'react-transition-group',
    'react-icons',
    'styled-components',
  ],
  credits: [
    {
      name: 'Shining Text Animation Effects',
      author: 'FrankieDoodie',
      link: 'https://codepen.io/FrankieDoodie/pen/dgVGad',
    },
    {
      name: 'CSS BUTTON HOVER',
      author: 'Imran Pardes',
      link: 'https://codepen.io/ImranPardes/pen/YvmRpz',
    },
    {
      name: 'Reactjs switch button',
      author: 'Edgar',
      link: 'https://codepen.io/BuiltByEdgar/pen/jWOVYQ',
    },
    {
      name: 'Typewriter Text Animation',
      author: 'Aakhya Singh',
      link: 'https://codepen.io/aakhya/pen/EOxqOV',
    },
    {
      name: 'heart beat',
      author: 'Richard Liu',
      link: 'https://codepen.io/lzl124631x/pen/pbGppZ',
    },
    {
      name: 'CSS Scroll Bars',
      author: 'Ghost Rider',
      link: 'https://codepen.io/GhostRider/pen/GHaFw',
    },
    {
      name: 'Pure Css Animated Background',
      author: 'Mohammad Abdul Mohaiman',
      link: 'https://codepen.io/mohaiman/pen/MQqMyo',
    },
    {
      name: 'Gradient color by HSL',
      author: 'wakamsha',
      link: 'https://codepen.io/wakamsha/pen/GpxJmg',
    },
  ],
};
