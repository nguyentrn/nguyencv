import React, { useContext } from 'react';
import { LanguageContext } from '../../contexts/language.context';
import {
  GetInTouchContainer,
  ContactPageContainer,
  MessageFormContainer,
} from './contact-page.styles';
// import BackButton from "../../components/back-button/back-button.component";
// import { FirstButton } from "../../style/insideCvLayout";
import Input, { TextArea, Submit } from '../../components/input/input.component';

const contactContents = [
  {
    firstHeadline: (
      <h3>
        <span>Get </span>In Touch
      </h3>
    ),
    secondHeadline: (
      <h3>
        <span>Leave </span>A Message
      </h3>
    ),
    message: 'Your message',
    yourName: 'Your name',
    yourEmail: 'Your email',
    phone: 'Your phone',
  },
  {
    firstHeadline: (
      <h3>
        <span>Thông tin </span>Liên hệ
      </h3>
    ),
    secondHeadline: (
      <h3>
        <span>Gửi </span>Tin nhắn
      </h3>
    ),
    message: 'Tin nhắn',
    yourName: 'Tên',
    yourEmail: 'Email',
    phone: 'Điện thoại',
  },
];

const ContactPage = ({ executeScroll, prevPath, nextPath }) => {
  const { isVietnamese } = useContext(LanguageContext);
  const { firstHeadline, secondHeadline, message, yourName, yourEmail } = contactContents[
    isVietnamese ? 1 : 0
  ];
  const handleSubmit = event => {
    event.preventDefault();
  };
  return (
    <ContactPageContainer executeScroll={executeScroll} prevPath={prevPath} nextPath={nextPath}>
      {firstHeadline}
      <GetInTouchContainer>
        is an animation framework for React. It has basic animations such as fade, flip, zoom,
        rotate and a lot of more advanced animations. It allows you to control all animations with
        props, for example: the position, delay, distance, cascade and many others. You can see them
        here. You can also use the custom css effects. Also it has server side rendering and high
        order components. If you prefer to use animation on scroll this framework for you. Check out
        how it works. is an animation framework for React. It has basic animations such as fade,
        flip, zoom, rotate and a lot of more advanced animations. It allows you to control all
        animations with props, for example: the position, delay, distance, cascade and many others.
        You can see them here. You can also use the custom css effects. Also it has server side
        rendering and high order components. If you prefer to use animation on scroll this framework
        for you. Check out how it works. is an animation framework for React. It has basic an
      </GetInTouchContainer>
      {secondHeadline}
      <MessageFormContainer>
        <div>
          <article>
            <div>
              <form onSubmit={handleSubmit}>
                <TextArea label={message} />
                <Input label={yourName} type="text" />
                <Input label={yourEmail} type="email" />
                <Submit />
              </form>
            </div>
          </article>
        </div>
      </MessageFormContainer>
      imations such as fade, flip, zoom, rotate and a lot of more advanced animations. It allows you
      to control all animations with props, for example: the position, delay, distance, cascade and
      many others. You can see them here. You can also use the custom css effects. Also it has
      server side rendering and high order components. If you prefer to use animation on scroll this
      framework for you. Check out how it works. is an animation framework for React. It has basic
      animations such as fade, flip, zoom, rotate and a lot of more advanced animations. It allows
      you to control all animations with props, for example: the position, delay, distance, cascade
      and many others. You can see them here. You can also use the custom css effects. Also it has
      server side rendering and high order components. If you prefer to use animation on scroll this
      framework for you. Check out how it works.
      {/* <FirstButton>
        <BackButton name={"note"} />
      </FirstButton> */}
    </ContactPageContainer>
  );
};
export default ContactPage;
