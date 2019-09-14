import React from 'react';
// import BackButton from "../../components/back-button/back-button.component";
// import NextButton from "../../components/next-button/next-button.component";
import { ResumePageContainer, Education, Skills } from './resume-page.styles';
// import { FirstButton, SecondButton } from "../../style/insideCvLayout";

const ResumePage = ({ executeScroll, prevPath, nextPath }) => {
  return (
    <ResumePageContainer executeScroll={executeScroll} prevPath={prevPath} nextPath={nextPath}>
      <h3>
        <span>Re</span>sume
      </h3>
      <Education>
        <h1>{'WORK EXPERIENCE'.toUpperCase()}</h1>
        <li>University of Science</li> <li />
        <li />
        <li />
        <li />
      </Education>
      <Education>
        <h1>{'Education '.toUpperCase()}</h1>
        <li>University of Science</li> <li />
        <li />
        <li />
        <li />
      </Education>
      <Skills>
        <h1>{'Skills'.toUpperCase()}</h1>
        <div>
          <h4>{'Programming'.toUpperCase()}</h4>
          <li>HTML</li>
          <li>CSS</li>
          <li>Javascript</li>
          <li>ReactJS</li>
          <li>Oracle/MSSQL/MySQL/PosgreSQL</li>
          <li>C/C++</li>
          <li>PHP</li>
          <ul>
            <li>C#/ASP.NET</li>
            <li>Java/Spring MVC</li>
            <li>Python</li>
            <li>Ruby/Ruby on Rails</li>
            <li>R</li>
          </ul>

          <h4>{'Design'.toUpperCase()}</h4>
          <li>Photoshop</li>
          <li>Illustrator</li>

          <h4>{'Basic Knownledge'.toUpperCase()}</h4>
          <ul>
            <li>Version Control/Git</li>
            <li>Responsive Design</li>
            <li>Testing/Unit Test/Jest</li>
            <li>Browser Developer Tools</li>
            <li>Command Line</li>
            <li>Linux</li>
            <li>Wordpress</li>
            <li>Design </li>

            <li>Web Performance</li>
            <li>
              Search Engine<span>Basic understanding</span>
            </li>
          </ul>
        </div>
      </Skills>
      <Skills>
        <h1>{'Skills'.toUpperCase()}</h1>
        <div>
          <h4>{'Programming'.toUpperCase()}</h4>
          <h4>{'Design'.toUpperCase()}</h4>
          <h4>{'Knownledge'.toUpperCase()}</h4>
        </div>
      </Skills>
      <h3>
        <span>My</span> Note
      </h3>
      <div>NotePasssssge</div> is an animation framework for React. It has basic animations such as
      fade, flip, zoom, rotate and a lot of more advanced animations. It allows you to control all
      animations with props, for example: the position, delay, distance, cascade and many others.
      You can see them here. You can also use the custom css effects. Also it has server side
      rendering and high order components. If you prefer to use animation on here. You can also use
      the custom css effects. Also it has server side rendering and high order components. If you
      prefer to use animation on here. You can also use the custom css effects. Also it has server
      side rendering and high order components. If you prefer to use animation on here. You can also
      use the custom css effects. Also it has server side rendering and high order components. If
      you prefer to use animation on here. You can also use the custom css effects. Also it has
      server side rendering and high order components. If you prefer to use animation on here. You
      can also use the custom css effects. Also it has server side rendering and high order
      components. If you prefer to use animation on here. You can also use the custom css effects.
      Also it has server side rendering and high order components. If you prefer to use animation on
      here. You can also use the custom css effects. Also it has server side rendering and high
      order components. If you prefer to use animation on here. You can also use the custom css
      effects. Also it has server side rendering and high order components. If you prefer to use
      animation on scroll this framework for you. Check out how it works. is an animation framework
      for React. It has basic animations such as fade, flip, zoom, rotate and a lot of more advanced
      animations. It allows you to control all animations with props, for example: the position,
      delay, distance, cascade and many others. You can see them here. You can also use the custom
      css effects. Also it has server side rendering and high order components. If you prefer to use
      animation on scroll this framework for you. Check out how it works. is an animation framework
      for React. It has basic animations such as fade, flip, zoom, rotate and a lot of more advanced
      animations. It allows you to control all animations with props, for example: the position,
      delay, distance, cascade and many others. You can see them here. You can also use the custom
      css effects. Also it has server side rendering and high order components. If you prefer to use
      animation on scroll this framework for you. Check out how it works.
      {/* <FirstButton onClick={() => props.history.push("/note")}>
      <NextButton name={"note"} />
    </FirstButton>
    <SecondButton onClick={() => props.history.push("/about")}>
      <BackButton name={"about"} />
    </SecondButton> */}
    </ResumePageContainer>
  );
};
export default ResumePage;
