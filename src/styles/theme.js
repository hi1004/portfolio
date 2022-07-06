const colors = {
  black: '#000',
  white: '#fff',
};
const lightThemeColors = {
  ...colors,
  bg: '#F9F7F7',
  bgVariant: '#112D4E',
  primary: '#3F72AF',
  primaryVariant: 'rgba(63, 114, 175, 0.4)',
  light: 'rgba(0,0,0,0.6)',
  text: '#202124',
};
const darkThemeColors = {
  ...colors,
  bg: '#1f1f38',
  bgVariant: '#2c2c6c',
  primary: '#46d5ff',
  primaryVariant: 'rgba(77, 181,255,0.4)',
  light: 'rgba(255,255,255,0.6)',
  text: '#fff',
};
const size = {
  mobile: '425px',
  tablet: '768px',
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
