import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/GlobalStyle';
import Header from './components/header/Header';
import Experience from './components/experience/Experience';

import About from './components/about/About';
import Footer from './components/footer/Footer';
import Contact from './components/contact/Contact';
import { lightTheme, darkTheme } from './styles/theme';
import { useTheme } from './hooks/useTheme'; // 환경별 테마 정보 가져오기

const Button = styled.button`
  background-color: ${props => props.theme.body};
`;

function App() {
  const [themeMode, toggleTheme] = useTheme(); // 테마 모드 세팅
  const theme = themeMode === 'light' ? lightTheme : darkTheme;
  console.log(themeMode);
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle themeMode={themeMode} />
      <Header />
      <a href="#">dfdf</a>
      <Experience />
      <About />
      <Contact />
      <Footer />
      <Button onClick={toggleTheme}>dfdfs</Button>
    </ThemeProvider>
  );
}

export default App;
