import React from "react";
import {
  TypingTextContainer,
  TypingTextElement
} from "../../components/typing-text/typing-text.styles";

const TypingText = props => (
  <TypingTextContainer>
    <TypingTextElement infinite={props.infinite} delay={props.delay}>
      {props.children}
    </TypingTextElement>
  </TypingTextContainer>
);

export default TypingText;
