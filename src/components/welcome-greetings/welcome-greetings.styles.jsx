import styled, { keyframes, css } from 'styled-components'

const letterAnimation = keyframes`
    0% {
        stroke-dashoffset:2600;
    }
    100% {
        stroke-dashoffset: 0;
    }
`

const logoPath = css`
fill-rule:evenodd;
    display: block;
    margin: 0 auto;
    position: absolute;
    top: calc(20 % + 20px);
    stroke-dasharray: 2600;
    stroke-dashoffset: 2600;
`

export const WelcomeGreetingsContainer = styled.div`
	background:white;
    fill-rule:evenodd;

      display:inline-block;
  width:30%;
  height:100%;
  stroke: #333;
  fill: none;
  position: relative;

    ${logoPath}
    path {
        ${logoPath}
        stroke-width: 3;
        animation:  ${letterAnimation} 25s linear forwards;
    }
    #W, #g1, #g2,#t, #y, #N, #P2 {
        ${logoPath}
        stroke-width: 3;
        animation:  ${letterAnimation} 5s linear forwards;

    }
    
`