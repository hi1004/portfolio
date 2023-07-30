import React from 'react';
import styled from 'styled-components';
import Tooltip from '@mui/material/Tooltip';
import { Link } from 'react-scroll';

const ToBeStyledTooltip = ({ className, ...props }) => (
  <Tooltip {...props} classes={{ tooltip: className }} />
);

export const NavContainer = styled.nav`
  background-color: ${props => props.theme.colors.navLight};
  width: max-content;
  padding: 0.7rem 1.7rem;
  z-index: 2;
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  bottom: 2rem;
  display: flex;
  gap: 0.8rem;
  align-items: center;
  border-radius: 3rem;
  backdrop-filter: blur(15px);
`;

export const NavTooltip = styled(ToBeStyledTooltip)`
  font-size: 1rem;
`;

export const IconBox = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border-radius: 50%;
  font-size: 1.1rem;
  cursor: pointer;
  padding: 0.9rem;
  color: ${props => props.theme.colors.primary};

  &:hover {
    background-color: ${props => props.theme.colors.navLight};
  }

  &.active {
    background-color: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.white};
  }
`;

/* SCROLL DOWN */

export const ScrollDownButton = styled(Link)`
  position: absolute;
  right: -2.3rem;
  bottom: 5rem;
  transform: rotate(90deg);
  font-weight: 300;
  font-size: 0.9rem;
  cursor: pointer;

  ${props => props.theme.device.tablet} {
    display: none;
  }
`;
