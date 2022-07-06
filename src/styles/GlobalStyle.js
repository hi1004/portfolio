import styled, { createGlobalStyle, css } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}

  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100;300;400;500;700;900&family=Poppins:ital,wght@0,400;0,500;1,300&display=swap');  html {
    scroll-behavior: smooth;
  }
  :root {
    --transition: all 0.4s ease;
  }

  ::-webkit-scrollbar {
    display: none;
  }
 
  body {
    font-size: 14px;
    line-height: 1.7;
    background-color: ${props => props.theme.colors.bg};
    color: ${props => props.theme.colors.text};
    font-family: 'Poppins','Noto Sans JP', sans-serif;
  }

  /* GENEARL STYLES */

  h1,h2,h3,h4,h5 {
    font-weight: 500;
  }

  h1 {
    font-size: 2.5rem;
  }

  section {
    margin-top: 8rem;

    ${props => props.theme.device.desktop} {
      margin-top: 6rem;
    }

    ${props => props.theme.device.tablet} {
      &>h2 {
        margin-bottom: 2rem;
      }
  }
  }

  section > h2, 
  section > h5 {
    text-align: center;
    color: ${props => props.theme.colors.light};
  }

  section > h2 {
    color: ${props => props.theme.colors.primary};
    margin-bottom: 3rem;
  }

  .text-light {
    color: ${props => props.theme.colors.light};
  }

  a {
    color: ${props => props.theme.colors.light};
    transition: var(--transition);
    &:hover {
      color: ${props =>
        props.themeMode === 'light'
          ? props.theme.colors.black
          : props.theme.colors.white};
    }
  }

  button {
    width: max-content;
    display: inline-block;
    color:  ${props => props.theme.colors.primary};
    padding: 0.75rem 1.2rem;
    cursor: pointer;
    border-radius: 0.4rem;
    border: 1px solid ${props => props.theme.colors.primary};
    transition: var(--transition);

    &:hover {
      background-color: ${props =>
        props.themeMode === 'light'
          ? props.theme.colors.black
          : props.theme.colors.white};
      color: ${props => props.theme.colors.primary};
      border-color: transparent;
    }

    ${props =>
      props.primary &&
      css`
        background-color: ${props => props.theme.colors.primary};
        color: ${props => props.theme.colors.bg};
      `}
  }
  img {
    display: block;
    width: 100%;
    object-fit: cover;
  }


  
 
`;

export default GlobalStyle;
