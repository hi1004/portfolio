import React from 'react';
import { ThemeProvider } from 'styled-components';
import {
  Button,
  ThemeProvider as MuiThemeProvider,
  createTheme,
} from '@mui/material';
import GlobalStyle from './styles/GlobalStyle';
import Header from './components/header/Header';
import Experience from './components/experience/Experience';
import About from './components/about/About';
import Footer from './components/footer/Footer';
import Contact from './components/contact/Contact';
import { lightTheme, darkTheme } from './styles/theme';
import { useTheme } from './hooks/useTheme';

const MuiDarkTheme = createTheme({
  palette: {
    type: 'dark',
    primary: {
      main: darkTheme.colors.primary, // This is an orange looking color: ;
    },
  },
});
const MuiLightTheme = createTheme({
  palette: {
    type: 'dark',
    primary: {
      main: lightTheme.colors.primary, // This is an orange looking color: ;
    },
  },
});

function App() {
  const [themeMode, toggleTheme] = useTheme(); // 테마 모드 세팅
  const theme = themeMode === 'light' ? lightTheme : darkTheme;
  const MUItheme = themeMode === 'light' ? MuiLightTheme : MuiDarkTheme;
  return (
    <MuiThemeProvider theme={MUItheme}>
      <ThemeProvider theme={theme}>
        <GlobalStyle themeMode={themeMode} />

        <Header toggleTheme={toggleTheme} themeMode={themeMode} />
        <Experience />
        <About />
        <Contact />
        <Footer />
      </ThemeProvider>
    </MuiThemeProvider>
  );
}

export default App;
