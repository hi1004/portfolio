import styled from 'styled-components';

const Container = styled.div`
  width: ${props => props.theme.containerWidthSize.lg};
  margin: 0 auto;

  /* MEDIA QUERIES */
  ${props => props.theme.device.desktop} {
    width: ${props => props.theme.containerWidthSize.md};
  }

  ${props => props.theme.device.tablet} {
    width: ${props => props.theme.containerWidthSize.sm};
  }
`;

export default Container;
