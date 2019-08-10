import React from "react";
import BackButton from "../../components/back-button/back-button.component";

import NextButton from "../../components/next-button/next-button.component";
import { NotePageContainer } from "./note-page.styles";
import { FirstButton, SecondButton } from "../../style/insidePage";

const NotePage = () => (
  <NotePageContainer>
    <h3>
      <span>My</span> Note
    </h3>
    <div>NotePasssssge</div> is an animation framework for React. It has basic
    animations such as fade, flip, zoom, rotate and a lot of more advanced
    animations. It allows you to control all animations with props, for example:
    the position, delay, distance, cascade and many others. You can see them
    here. You can also use the custom css effects. Also it has server side
    rendering and high order components. If you prefer to use animation on here.
    You can also use the custom css effects. Also it has server side rendering
    and high order components. If you prefer to use animation on here. You can
    also use the custom css effects. Also it has server side rendering and high
    order components. If you prefer to use animation on here. You can also use
    the custom css effects. Also it has server side rendering and high order
    components. If you prefer to use animation on here. You can also use the
    custom css effects. Also it has server side rendering and high order
    components. If you prefer to use animation on here. You can also use the
    custom css effects. Also it has server side rendering and high order
    components. If you prefer to use animation on here. You can also use the
    custom css effects. Also it has server side rendering and high order
    components. If you prefer to use animation on here. You can also use the
    custom css effects. Also it has server side rendering and high order
    components. If you prefer to use animation on here. You can also use the
    custom css effects. Also it has server side rendering and high order
    components. If you prefer to use animation on scroll this framework for you.
    Check out how it works. is an animation framework for React. It has basic
    animations such as fade, flip, zoom, rotate and a lot of more advanced
    animations. It allows you to control all animations with props, for example:
    the position, delay, distance, cascade and many others. You can see them
    here. You can also use the custom css effects. Also it has server side
    rendering and high order components. If you prefer to use animation on
    scroll this framework for you. Check out how it works. is an animation
    framework for React. It has basic animations such as fade, flip, zoom,
    rotate and a lot of more advanced animations. It allows you to control all
    animations with props, for example: the position, delay, distance, cascade
    and many others. You can see them here. You can also use the custom css
    effects. Also it has server side rendering and high order components. If you
    prefer to use animation on scroll this framework for you. Check out how it
    works.
    <FirstButton>
      <NextButton name={"contact"} />
    </FirstButton>
    <SecondButton>
      <BackButton name={"resume"} />
    </SecondButton>
  </NotePageContainer>
);

export default NotePage;
