import styled from 'styled-components';

export const Container = styled.div`
  width: ${props => props.theme.containerWidthSize.lg};
  margin: 0 auto;

  ${props => props.theme.device.desktop} {
    width: ${props => props.theme.containerWidthSize.md};
  }

  ${props => props.theme.device.tablet} {
    width: ${props => props.theme.containerWidthSize.sm};
  }
`;

export const TextLight = styled.h5`
  color: ${props => props.theme.colors.light};
`;

export const PrimaryText = styled.span`
  color: ${props => props.theme.colors.primary};
  font-weight: bold;
`;
