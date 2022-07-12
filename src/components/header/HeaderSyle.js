import styled from 'styled-components';
import { Button } from '@mui/material';
import { Link } from 'react-scroll';
import { Container } from '../../styles/CommonSyle';

/* HEADER */

export const StyledHeader = styled.div`
  height: 100vh;
`;

export const HeaderContainer = styled(Container)`
  height: 100%;
  padding-top: 7rem;
  position: relative;
`;

export const FixedHeader = styled.header`
  position: fixed;
  width: 100%;
  height: 90px;
  top: 0;
  left: 0;
  z-index: 99;
  background-color: ${props => props.theme.colors.navLight};
  backdrop-filter: blur(10px);
`;

export const FixedContainer = styled(Container)`
  height: 90px;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logos = styled(Link)`
  max-width: 80px;
  cursor: pointer;

  ${props => props.theme.device.tablet} {
    max-width: 50px;
  }
`;

export const Logo = styled.img`
  width: 100%;
`;

export const ToggleButton = styled(Button)``;

/* TEXT CONTAINER */
export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-top: 10rem;
  margin-left: 3rem;
  line-height: 1.4;
  h3 {
    font-size: 2rem;
  }
  h1 {
    font-size: 5rem;
  }

  ${props => props.theme.device.desktop} {
    text-align: center;
    margin-top: 0;
    margin-left: 0;
    h3 {
      font-size: 1.17em;
    }
    h1 {
      font-size: 2rem;
    }
  }
`;

/* CTA */
export const CtaContainer = styled.div`
  margin-top: 2.5rem;
  display: flex;
  gap: 1.2rem;

  ${props => props.theme.device.desktop} {
    justify-content: center;
  }
`;

export const DownloadCV = styled(Button)``;

export const TalkButton = styled(Button)``;

/* IMAGE CONTAINER */
export const ImageContainer = styled.div`
  background: linear-gradient(
    ${props => props.theme.colors.primary},
    transparent
  );
  width: 22rem;
  height: 30rem;
  position: absolute;
  right: 50px;
  bottom: 0;
  margin-top: 4rem;
  border-radius: 12rem 12rem 0 0;
  overflow: hidden;
  padding-top: 2rem;

  @media screen and (max-width: 1440px) {
    display: none;
  }

  ${props => props.theme.device.desktop} {
    display: block;
    left: 50%;
    transform: translate(-50%);
  }

  ${props => props.theme.device.tablet} {
    bottom: unset;
  }
`;

export const Image = styled.img``;

/* HEADER SOCIAL */

export const HeaderSocialsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.8rem;
  position: absolute;
  left: 0;
  bottom: 3rem;

  &::after {
    content: '';
    width: 1px;
    height: 2rem;
    background-color: ${props => props.theme.colors.primary};
  }

  ${props => props.theme.device.tablet} {
    display: none;
  }
`;

export const IconBox = styled.a``;
