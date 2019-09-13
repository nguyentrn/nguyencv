import styled from "styled-components";
// import { devices } from "../../style/devices";
// import { theme } from "../../style/theme";
import InsideCvLayout from "../../style/inside-cv-layout/inside-cv-layout.component";

export const ResumePageContainer = styled(InsideCvLayout)`
  position: relative;

`;
export const Education = styled.div`
  & > h1 {
    font-size: 1.3rem;
    font-weight: 300;
  }
`;
export const Skills = styled.div`
  & > h1 {
    font-size: 1.3rem;
    font-weight: 300;
  }
`;
