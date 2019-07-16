const size = {
  mobile: "480px",
  tablet: "768px",
  laptop: "1024px",
  widescreen: "1200px"
};

export const devices = {
  mobile: `(min-width: ${size.mobile})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  widescreen: `(min-width: ${size.widescreen})`
};

// -- Responsive
// import { devices } from "./ultilities/devices";
// @media only screen and ${devices.mobile} {
//
// }
// @media only screen and ${devices.tablet} {
//
// }
// @media only screen and ${devices.laptop} {
//
// }
// @media only screen and ${devices.widescreen} {
//
// }
