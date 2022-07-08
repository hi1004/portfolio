import styled from 'styled-components';
import { Button } from '@mui/material';
import { Container } from '../../styles/CommonSyle';

export const AboutSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
export const AboutContainer = styled(Container)`
  display: grid;
  grid-template-columns: 35% 50%;
  gap: 15%;

  ${props => props.theme.device.desktop} {
    grid-template-columns: 1fr;
    gap: 0;
  }
`;
export const AboutMe = styled.div`
  width: 50%;
  aspect-ratio: 1/1;
  border-radius: 2rem;
  transition: 1s;

  background: linear-gradient(
    45deg,
    transparent,
    ${props => props.theme.colors.primary},
    transparent
  );
  display: grid;
  place-items: center;

  &.active {
    width: 100%;
  }

  ${props => props.theme.device.desktop} {
    width: 50%;
    margin: 2rem auto 4rem;
  }

  ${props => props.theme.device.tablet} {
    width: 65%;
    margin: 0 auto 3rem;
  }
`;

export const AboutImg = styled.div`
  border-radius: 2rem;
  overflow: hidden;
  transform: rotate(10deg);
  transition: var(--transition);

  &:hover {
    transform: rotate(0);
  }
`;

export const Img = styled.img``;

export const AboutContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  p {
    margin: 2rem 0 2.6rem;
    color: ${props => props.theme.colors.light};

    ${props => props.theme.device.desktop} {
      margin: 1rem 0 1.5rem;
    }

    ${props => props.theme.device.tablet} {
      margin: 1.5rem 0;
    }
  }

  ${props => props.theme.device.tablet} {
    text-align: center;
  }
`;

export const AboutCards = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;

  ${props => props.theme.device.tablet} {
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
  }
`;

export const AboutCard = styled.article`
  background-color: ${props => props.theme.colors.bgVariant};
  border: 1px solid transparent;
  border-radius: 1rem;
  padding: 2rem;
  text-align: center;
  transform: translateY(100px);
  visibility: hidden;
  opacity: 0;
  transition: var(--transition);

  &.active {
    visibility: visible;
    opacity: 1;
    transform: translateY(0);
  }

  &:hover {
    background-color: transparent;
    border-color: ${props => props.theme.colors.primaryVariant};
    cursor: default;
  }

  h5 {
    font-size: 0.95rem;
    color: ${props => props.theme.colors.light};
  }

  small {
    font-size: 0.7rem;
    color: ${props => props.theme.colors.light};
  }
`;

export const AboutIconBox = styled.div`
  color: ${props => props.theme.colors.primary};
  font-size: 1.4rem;
  margin-bottom: 1rem;
`;
export const Text = styled.p``;
export const AboutButton = styled(Button)`
  max-width: 150px;
`;
