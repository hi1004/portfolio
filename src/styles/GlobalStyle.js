import { createGlobalStyle, css } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`

  ${reset}
  
  html {
    scroll-behavior: smooth;
  }
  :root {
    --transition: all 0.4s ease;
  }

  ::-webkit-scrollbar {
    display: none;
  }

  * {
    box-sizing: border-box;
    border: 0;
    outline: 0;
    text-decoration: none;
  }
 
  body {
    font-size: 14px;
    line-height: 1.7;
    background-image: ${props => props.theme.colors.bgImg};
    background-color: ${props => props.theme.colors.bg};
    color: ${props => props.theme.colors.text};
    font-family: 'Poppins','Noto Sans JP', sans-serif;
  }

  /* GENEARL STYLES */

  h1, h2, h3, h4, h5 {
    font-weight: 500;
  }

  h1 {
    font-size: 2.5rem;
  }
  h5 {
    font-size: 1rem;
  }

  section {
    margin-top: 8rem;
    height: 100vh;
    h2, h5 {
      text-align: center;
      color: ${props => props.theme.colors.light};
    } 
    h2 {
      color: ${props => props.theme.colors.primary};
      margin-bottom: 3rem;
    }

    ${props => props.theme.device.desktop} {
      margin-top: 6rem;
    }

    ${props => props.theme.device.tablet} {
      h2 {
        margin-bottom: 2rem;
      }
    }
  }

  a {
    text-decoration: none;
    color: ${props => props.theme.colors.primary};
    transition: var(--transition);

    &:hover {
      color: ${props =>
        props.themeMode === 'light'
          ? props.theme.colors.black
          : props.theme.colors.white};
    }


  }

  img {
    display: block;
    width: 100%;
    object-fit: cover;
  }


  
 
`;

export default GlobalStyle;
