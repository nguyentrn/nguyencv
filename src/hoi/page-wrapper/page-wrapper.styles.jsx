import styled from "styled-components";
import { devices } from "../../ultilities/devices";

export const DetailContainer = styled.div`
  background: #fff;
  width: 100%;
  padding: 0.5rem;

  @media ${devices.mobile} {
  }
  @media ${devices.tablet} {
  }
  @media ${devices.laptop} {
    &::-webkit-scrollbar {
      width: 6px;
      background-color: #f5f5f5;
    }
    &::-webkit-scrollbar-thumb {
      background-color: #777;
      border-radius: 1rem;
    }
    /* display: flex;
    flex-direction: column;
    flex-wrap: wrap; */
    height: 90%;
    width: 100%;
    margin: auto;
    overflow-y: scroll;
    border-radius: 0 0.1rem 0.1rem 0;
    box-shadow: 0.2rem 0.2rem 1rem 1rem rgba(0, 0, 0, 0.5);
  }
  @media ${devices.widescreen} {
  }
`;
