import React from 'react';
import { TypingTextContainer, TypingTextElement } from './typing-text.styles';

const TypingText = ({ children, infinite, delay }) => (
  <TypingTextContainer>
    <TypingTextElement infinite={infinite} delay={delay}>
      {children}
    </TypingTextElement>
  </TypingTextContainer>
);

export default TypingText;
