import React from "react";
import {
  InputContainer,
  TextAreaContainer,
  SubmitContainer
} from "./input.styles";

const Input = props => (
  <InputContainer width={props.width}>
    <label htmlFor={props.label ? props.label : "No label"} className="inp">
      <input
        type={props.type ? props.type : "text"}
        id={props.label ? props.label : "No label"}
        placeholder="&nbsp;"
      />
      <span className="label"> {props.label ? props.label : "No label"}</span>
      <span className="border" />
    </label>
  </InputContainer>
);

export const TextArea = props => (
  <TextAreaContainer>
    <label htmlFor={props.label ? props.label : "No label"} className="inp">
      <textarea
        id={props.label ? props.label : "No label"}
        placeholder="&nbsp;"
        rows="6"
      />
      <span className="label"> {props.label ? props.label : "No label"}</span>
      <span className="border" />
    </label>
  </TextAreaContainer>
);

export const Submit = props => (
  <SubmitContainer>
    <label htmlFor="submit">
      <input type="submit" id="submit" placeholder="Submit" />
    </label>
  </SubmitContainer>
);

export default Input;
