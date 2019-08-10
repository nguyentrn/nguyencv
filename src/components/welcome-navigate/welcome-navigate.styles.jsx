import styled from "styled-components";
import LinkWithScroll from "../link-with-scroll/link-with-scroll.component";

export const WelcomeNavigateContainer = styled.div`
  .wrap {
    position: relative;
    width: 80vmin;
    height: 80vmin;
    margin: 0 auto;
    background: inherit;
    transform: scale(0.2) translatez(0px);
    opacity: 0;
    transition: transform 0.5s, opacity 0.5s;
  }
  button {
    position: absolute;
    left: 0;
    top: 0;
    width: 47.5%;
    height: 47.5%;
    overflow: hidden;
    transform: scale(0.5) translateZ(0px);
    background: #585247;
  }
  button div {
    height: 100%;
    background-size: cover;
    opacity: 0.5;
    transition: opacity 0.5s;
    border-radius: inherit;
  }
  button:nth-child(1) {
    border-radius: 40vmin 0 0 0;
    transform-origin: 110% 110%;
    transition: transform 0.4s 0.15s;
  }
  button:nth-child(1) div {
    background-image: url("https://farm3.staticflickr.com/2827/10384422264_d9c7299146.jpg");
  }
  button:nth-child(2) {
    border-radius: 0 40vmin 0 0;
    left: 52.5%;
    transform-origin: -10% 110%;
    transition: transform 0.4s 0.2s;
  }
  button:nth-child(2) div {
    background-image: url("https://farm7.staticflickr.com/6083/6055581292_d94c2d90e3.jpg");
  }
  button:nth-child(3) {
    border-radius: 0 0 0 40vmin;
    top: 52.5%;
    transform-origin: 110% -10%;
    transition: transform 0.4s 0.25s;
  }
  button:nth-child(3) div {
    background-image: url("https://farm7.staticflickr.com/6092/6227418584_d5883b0948.jpg");
  }
  button:nth-child(4) {
    border-radius: 0 0 40vmin 0;
    top: 52.5%;
    left: 52.5%;
    transform-origin: -10% -10%;
    transition: transform 0.4s 0.3s;
  }
  button:nth-child(4) div {
    background-image: url("https://farm8.staticflickr.com/7187/6895047173_d4b1a0d798.jpg");
  }
  button:nth-child(5) {
    width: 55%;
    height: 55%;
    left: 22.5%;
    top: 22.5%;
    border-radius: 50vmin;
    box-shadow: 0 0 0 5vmin #e3dfd2;
    transform: scale(1);
  }
  button:nth-child(5) div {
    background-image: url("https://farm4.staticflickr.com/3766/12953056854_b8cdf14f21.jpg");
  }
  span {
    position: relative;
    display: block;
    margin: 0 auto;
    top: 45vmin;
    width: 10vmin;
    height: 10vmin;
    border-radius: 100%;
    background: #585247;
    transform: translateZ(0px);
  }
  span span {
    position: absolute;
    width: 60%;
    height: 3px;
    background: #aca696;
    left: 20%;
    top: 50%;
    border-radius: 0;
  }
  span span:after,
  span span:before {
    content: "";
    position: absolute;
    left: 0;
    top: -1.5vmin;
    width: 100%;
    height: 100%;
    background: inherit;
  }
  span span:after {
    top: 1.5vmin;
  }
  span:hover + .wrap,
  .wrap:hover {
    transform: scale(0.8) translateZ(0px);
    opacity: 1;
  }
  span:hover + .wrap a,
  .wrap:hover button {
    transform: scale(1) translatez(0px);
  }
  button:hover div {
    opacity: 1;
    transform: translatez(0px);
  }
`;

export const StyledNavigate = styled(LinkWithScroll)``;
