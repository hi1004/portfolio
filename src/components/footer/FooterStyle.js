import { Link } from 'react-scroll';
import styled from 'styled-components';

export const FooterSection = styled.footer`
  margin-top: 10rem;
  font-size: 0.9rem;
  text-align: center;
  padding: 3rem 0;
  background-color: ${props => props.theme.colors.bgVariant};
`;

export const Logos = styled.div``;
export const Logo = styled.img`
  width: 80px;
  margin-bottom: 2rem;
  display: inline-block;
`;
export const Permalinks = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  margin: 0 auto 3rem;

  ${props => props.theme.device.tablet} {
    gap: 1.5rem;
    flex-direction: column;
  }
`;

export const List = styled.li``;

export const Item = styled(Link)`
  cursor: pointer;
`;

export const Socials = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 2rem;

  ${props => props.theme.device.tablet} {
    margin-bottom: 2.6rem;
  }
`;

export const IconBox = styled.a`
  background-color: ${props => props.theme.colors.bg};
  color: ${props => props.theme.colors.text};
  padding: 0.8rem;
  border-radius: 0.7rem;
  display: flex;
  border: 1px solid transparent;
  &:hover {
    background-color: transparent;
    color: ${props => props.theme.colors.primary};
    border-color: ${props => props.theme.colors.primary};
  }
`;
export const Copyright = styled.div`
  margin-bottom: 6rem;
  color: ${props => props.theme.colors.text};
`;
