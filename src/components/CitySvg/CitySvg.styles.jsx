import styled, { css } from "styled-components";

const fade = css`
  transition: fill .4s ease-out;
`


export const CitySvgContainer = styled.div`
  .cls-1 {
    fill: none;
  }
  .cls-1, .cls-10, .cls-11, .cls-12, .cls-13, .cls-14, .cls-15, .cls-2, .cls-3, .cls-4, .cls-5, .cls-6, .cls-7, .cls-8, .cls-9 {
    stroke: #000;
    stroke-miterlimit: 10;
    stroke-width: 4px;
  }

  #Cho_Ben_Thanh {
    cursor:pointer;
    transition: 4s;
    fill: white;
    .cls-2 {
      fill: ${props => props.isBenThanhColor ? "#ffe560" : "white"};
      ${fade}
    }
    .cls-3 {
      fill: ${props => props.isBenThanhColor ? "#f77550" : "white"};
      ${fade}
    }
    .cls-4 {
      fill: ${props => props.isBenThanhColor ? "#422" : "white"};
      ${fade}
    }
    .cls-5 {      
      fill: ${props => props.isBenThanhColor ? "#57a550" : "white"};
      ${fade}
    }
    .cls-6 {      
      fill: ${props => props.isBenThanhColor ? "#eee" : "white"};
      ${fade}
    }
    .cls-7 {      
      fill: ${props => props.isBenThanhColor ? "#ea9759" : "white"};
      ${fade}
    }
    &:hover {
      .cls-2 {
        fill: #ffe560;
      }
      .cls-3 {
        fill: #f77550;
      }
      .cls-4 {
        fill: #422;
      }
      .cls-5 {     
        fill: #57a550;
      }
      .cls-6 {      
        fill: #eee;
      }
      .cls-7 {      
        fill: #ea9759;
      }
    }
  }
#Bitexco {
  cursor:pointer;
    transition: 4s;
    fill: white;
  .cls-13 {
    fill: ${props => props.isBitexcoColor ? "#219ff6" : "white"};
      ${fade}
      }

      .cls-14 {    fill: ${props => props.isBitexcoColor ? "#41cfff" : "white"};
      ${fade}

      }

      .cls-15 {    fill: ${props => props.isBitexcoColor ? "#61cfff" : "white"};
      ${fade}

      }
      &:hover{
      
      .cls-13 {
        fill: #219ff6;
      }

      .cls-14 {
        fill: #41cfff;
      }

      .cls-15 {
        fill: #61cfff;
      }
    }
    }
   
#Nha_tho_Duc_Ba{
  cursor:pointer;
    transition: 4s;
    fill: white;
      .cls-6 {      fill: ${props => props.isDucBaColor ? "#eee" : "white"};
      ${fade}
    }
    .cls-7 {      
      fill: ${props => props.isDucBaColor ? "#ea9759" : "white"};
      ${fade}

      }
      .cls-12, .cls-7 {

        fill-rule: evenodd;
      }

      .cls-8 {fill: ${props => props.isDucBaColor ? "#da7739" : "white"};
      ${fade}
      }

      .cls-12, .cls-9 {fill: ${props => props.isDucBaColor ? "#9a3709" : "white"};
      ${fade}
      }

      .cls-10 {fill: ${props => props.isDucBaColor ? "#ea6729" : "white"};
      ${fade}
      }

      .cls-11 {fill: ${props => props.isDucBaColor ? "#ea7739" : "white"};
      ${fade}
      }
      &:hover{
      .cls-6 {
        fill: #eee;
      }

      .cls-7 {
        fill: #ea9759;
      }

      .cls-12, .cls-7 {
        fill-rule: evenodd;
      }

      .cls-8 {
        fill: #da7739;
      }

      .cls-12, .cls-9 {
        fill: #9a3709;
      }

      .cls-10 {
        fill: #ea6729;
      }

      .cls-11 {
        fill: #ea7739;
      }
    }
}
      

  /* .container {
    display: block;
    width: 80%;
    margin: 0 auto;
    height: auto;
  } */
  /* z-index: 1;

  .house {
    cursor: pointer;
    font-size: 30px;
    font-family: "Oak", "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-weight: 700;

    .bg-fill {
      opacity: 0;
      transition: opacity 0.3s ease-in;
    }

    text {
      fill: #333;
      transition: fill 0.3s ease-in;
    }

    &:hover,
    &.active {
      .bg-fill {
        opacity: 1;
      }
      text {
        fill: #333;
      }
    }
  } */
`;
