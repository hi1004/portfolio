import styled from 'styled-components';
import { Button } from '@mui/material';
import { Container } from '../../styles/CommonSyle';

/* HEADER */

export const StyledHeader = styled.div`
  height: 100vh;
  overflow: hidden;
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

export const FixedContainer = styled.div`
  width: 90%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logos = styled.a`
  max-width: 80px;
`;

export const Logo = styled.img`
  width: 100%;
`;

export const ToggleButton = styled(Button)``;
export const ImageContainer = styled.div`
  background: linear-gradient(
    ${props => props.theme.colors.primary},
    transparent
  );
  width: 22rem;
  height: 30rem;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  margin-top: 4rem;
  border-radius: 12rem 12rem 0 0;
  overflow: hidden;
  padding: 5rem 1.5rem 1.5rem 1.5rem;
`;

export const Image = styled.img``;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 0.5rem;
`;
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

/* CTA */

export const CtaContainer = styled.div`
  margin-top: 2.5rem;
  display: flex;
  gap: 1.2rem;
  justify-content: center;
`;

export const DownloadCV = styled(Button)``;

export const TalkButton = styled(Button)``;
