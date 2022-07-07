const colors = {
  black: '#000',
  white: '#fff',
};
const lightThemeColors = {
  ...colors,
  bg: '#fff',
  bgVariant: '#112D4E',
  primary: '#0074ff',
  primaryVariant: 'rgba(63, 114, 175, 0.4)',
  navLight: 'rgba(0, 115, 255, 0.1)',
  light: 'rgba(0,0,0,0.6)',
  text: '#202124',
  bgImg: `url(/images/white_pattern.png)`,
};
const darkThemeColors = {
  ...colors,
  bg: '#1f1f38',
  bgVariant: '#2c2c6c',
  primary: '#46d5ff',
  primaryVariant: 'rgba(77, 181,255,0.4)',
  navLight: 'rgba(70, 212, 255, 0.1)',
  light: 'rgba(255,255,255,0.6)',
  text: '#fff',
  bgImg: `url(/images/dark_pattern.png)`,
};
const size = {
  mobile: '425px',
  tablet: '600px',
  desktop: '1024PX',
};

const device = {
  mobile: `@media only screen and (max-width: ${size.mobile})`,
  tablet: `@media only screen and (max-width: ${size.tablet})`,
  desktop: `@media only screen and (max-width: ${size.desktop})`,
};

const containerWidthSize = {
  lg: '75%',
  md: '86%',
  sm: '90%',
};

const defaultTheme = {
  containerWidthSize,
  device,
};

export const darkTheme = {
  ...defaultTheme,
  colors: darkThemeColors,
};

export const lightTheme = {
  ...defaultTheme,
  colors: lightThemeColors,
};
