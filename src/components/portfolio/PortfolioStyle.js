import { Button } from '@mui/material';
import styled from 'styled-components';
import { Container } from '../../styles/CommonSyle';

export const PortfolioSection = styled.section`
  height: auto;
`;

export const PortfolioContainer = styled(Container)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2.5rem;

  ${props => props.theme.device.desktop} {
    grid-template-columns: 1fr 1fr;
    gap: 1.2rem;
  }

  ${props => props.theme.device.tablet} {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

export const Item = styled.article`
  background-color: ${props => props.theme.colors.bgVariant};
  padding: 1.3rem;
  border-radius: 2rem;
  border: 1px solid transparent;
  transition: var(--transition);

  &:hover {
    border-color: ${props => props.theme.colors.primaryVariant};
    background-color: transparent;
  }

  h3 {
    margin: 1.2rem 0 2rem;
  }
`;

export const TAG = styled.span`
  font-weight: 500;
  padding: 5px 10px;
  margin: 10px;
  border-radius: 3rem;
  color: #fff;
  background-color: ${({ tag }) => (tag === 'TEAM' ? '#fc6c9c' : '#e6913c')};
`;

export const ItemCTA = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
`;

export const Image = styled.img`
  border-radius: 1.5rem;
  overflow: hidden;
  margin: 1rem 0;
`;
export const GitHubButton = styled(Button)``;
export const DemoButton = styled(Button)``;
