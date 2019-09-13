import React from "react";
import { WelcomeContainer, BackgroundContainer } from "./welcome-page.styles";
import CitySvg from "../../components/CitySvg/CitySvg.component";
import Input from "../../components/input/input.component";

const WelcomePage = (props) => {
  return (
    <WelcomeContainer >
      <Input label="Test" type="password" />
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dignissim
      faucibus pretium. Suspendisse porttitor pulvinar quam vel aliquet. Duis
      mattis leo vitae justo dignissim fringilla. Pellentesque risus tellus,
      maximus sit amet neque id, lobortis blandit libero. Nam eget iaculis augue,
      quis maximus massa. Vestibulum quis velit sit amet leo tempus vestibulum.
      Fusce tempor mattis tortor, sodales tempor elit rhoncus id. Cras eget massa
      semper, aliquam erat sed, luctus ipsum. Cras quis eros eget massa mattis
      tincidunt non id tortor. Cras eu bibendum ex, ac tempus ipsum. Nam enim
      nisl, ullamcorper sit amet ligula a, egestas rutrum sem. Aliquam eget
      finibus metus. Duis eget tincidunt ex, eget suscipit nisl. Ut ornare dolor
      sit amet facilisis pretium. Nam id conse
    <BackgroundContainer>
        <CitySvg />
      </BackgroundContainer>
    </WelcomeContainer>
  )
};

export default WelcomePage;
