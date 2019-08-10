import React, { useContext } from "react";
import { LanguageContext } from "../../contexts/language.context";
import {
  ContactPageContainer,
  MessageFormContainer
} from "./contact-page.styles";
import BackButton from "../../components/back-button/back-button.component";
import { FirstButton } from "../../style/insidePage";
import Input, {
  TextArea,
  Submit
} from "../../components/input/input.component";

const contactContents = [
  {
    message: "Your message",
    name: "Your name",
    email: "Your email",
    phone: "Your phone"
  },
  {
    message: "Tin nhắn",
    name: "Tên",
    email: "Email",
    phone: "Điện thoại"
  }
];

const ContactPage = props => {
  const { isVietnamese } = useContext(LanguageContext);
  const { message, name, email } = contactContents[isVietnamese ? 1 : 0];
  const handleSubmit = event => {
    event.preventDefault();
    console.log(props);
  };
  return (
    <ContactPageContainer>
      <h3>
        <span>Get</span> In Touch
      </h3>{" "}
      is an animation framework for React. It has basic animations such as fade,
      flip, zoom, rotate and a lot of more advanced animations. It allows you to
      control all animations with props, for example: the position, delay,
      distance, cascade and many others. You can see them here. You can also use
      the custom css effects. Also it has server side rendering and high order
      components. If you prefer to use animation on scroll this framework for
      you. Check out how it works. is an animation framework for React. It has
      basic animations such as fade, flip, zoom, rotate and a lot of more
      advanced animations. It allows you to control all animations with props,
      for example: the position, delay, distance, cascade and many others. You
      can see them here. You can also use the custom css effects. Also it has
      server side rendering and high order components. If you prefer to use
      animation on scroll this framework for you. Check out how it works. is an
      animation framework for React. It has basic an
      <h3>
        <span>Leave</span> A Message
      </h3>
      <MessageFormContainer>
        <div class="wrapper centered">
          <article class="letter">
            <div class="side">
              <form onSubmit={handleSubmit}>
                <TextArea label={message} />
                <Input label={name} type="text" />
                <Input label={email} type="email" />
                <Submit />
              </form>
            </div>
          </article>
        </div>
      </MessageFormContainer>
      imations such as fade, flip, zoom, rotate and a lot of more advanced
      animations. It allows you to control all animations with props, for
      example: the position, delay, distance, cascade and many others. You can
      see them here. You can also use the custom css effects. Also it has server
      side rendering and high order components. If you prefer to use animation
      on scroll this framework for you. Check out how it works. is an animation
      framework for React. It has basic animations such as fade, flip, zoom,
      rotate and a lot of more advanced animations. It allows you to control all
      animations with props, for example: the position, delay, distance, cascade
      and many others. You can see them here. You can also use the custom css
      effects. Also it has server side rendering and high order components. If
      you prefer to use animation on scroll this framework for you. Check out
      how it works.
      <FirstButton>
        <BackButton name={"note"} />
      </FirstButton>
    </ContactPageContainer>
  );
};
export default ContactPage;
