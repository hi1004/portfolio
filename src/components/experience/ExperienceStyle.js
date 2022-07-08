import styled from 'styled-components';
import { Container } from '../../styles/CommonSyle';

export const ExperienceSection = styled.section``;

export const ExperienceContainer = styled(Container)`
  display: grid;
  grid-template-columns: 1fr;
  width: 60%;
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
  grid-template-columns: 1fr 1fr;
  row-gap: 2rem;
`;

export const Details = styled.article`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

export const IconBox = styled.div`
  margin-top: 6px;
  color: ${props => props.theme.colors.primary};
`;

export const Text = styled.div``;
