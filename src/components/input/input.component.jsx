import React from "react";
import {
  InputContainer,
  TextAreaContainer,
  SubmitContainer
} from "./input.styles";

const Input = props => (
  <InputContainer width={props.width}>
    <label for={props.label ? props.label : "No label"} class="inp">
      <input
        type={props.type ? props.type : "text"}
        id={props.label ? props.label : "No label"}
        placeholder="&nbsp;"
      />
      <span class="label"> {props.label ? props.label : "No label"}</span>
      <span class="border" />
    </label>
  </InputContainer>
);

export const TextArea = props => (
  <TextAreaContainer>
    <label for={props.label ? props.label : "No label"} class="inp">
      <textarea
        id={props.label ? props.label : "No label"}
        placeholder="&nbsp;"
        rows="6"
      />
      <span class="label"> {props.label ? props.label : "No label"}</span>
      <span class="border" />
    </label>
  </TextAreaContainer>
);

export const Submit = props => (
  <SubmitContainer>
    <label for="submit">
      <input type="submit" id="submit" placeholder="Submit" />
    </label>
  </SubmitContainer>
);

export default Input;
