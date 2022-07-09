import styled from 'styled-components';
import { Container, TextLight } from '../../styles/CommonSyle';

export const ExperienceSection = styled.section`
  height: calc(100vh - 90px);
`;

export const ExperienceContainer = styled(Container)`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;

  ${props => props.theme.device.tablet} {
    width: 90%;
    gap: 1rem;
  }
`;

export const FrontEnd = styled.div`
  background-color: ${props => props.theme.colors.bgVariant};
  padding: 2.4rem 5rem;
  border-radius: 2rem;
  border: 1px solid transparent;
  transition: var(--transition);

  > h3 {
    text-align: center;
    margin-bottom: 2rem;
    font-size: 1.4rem;
    color: ${props => props.theme.colors.primary};
  }

  ${props => props.theme.device.desktop} {
    padding: 2rem;
  }

  ${props => props.theme.device.tablet} {
    width: 100%;
    padding: 2rem 1rem;
  }

  &:hover {
    background-color: transparent;
    border-color: ${props => props.theme.colors.primaryVariant};
    cursor: default;
  }
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  row-gap: 2rem;
  place-items: center;
  ${props => props.theme.device.desktop} {
    padding: 2rem;
    grid-template-columns: 1fr 1fr;
  }

  ${props => props.theme.device.tablet} {
    padding: 1rem;
    grid-template-columns: 1fr;
  }
`;

export const Details = styled.article`
  display: flex;
  align-items: center;
  gap: 1rem;
  width: 50%;
`;

export const IconBox = styled.div`
  margin-top: 6px;
  color: ${props => props.theme.colors.primary};
`;

export const Text = styled.div`
  h4 {
    font-size: 2rem;
    ${props => props.theme.device.desktop} {
      font-size: 1.5rem;
    }
  }
`;

export const styledTextLight = styled(TextLight)`
  font-size: 1rem;
`;
