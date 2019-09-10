const size = {
  mobile: "480px",
  tablet: "768px",
  laptop: "1024px",
  widescreen: "1200px",
  superwidescreen: "1600px",
  fuckheight: "300px"
};

export const devices = {
  mobile: `(min-width: ${size.mobile})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  widescreen: `(min-width: ${size.widescreen})`,
  superwidescreen: `(min-width: ${size.superwidescreen})`,
  maxHeight: `(max-height: ${size.fuckheight})`
};
