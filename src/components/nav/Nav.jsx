import React from 'react';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';

import {
  NavContainer,
  IconBox as Link,
  NavTooltip,
  ScrollDownButton,
} from './NavStyle';
import { Container } from '../../styles/CommonSyle';

const Nav = () => {
  return (
    <>
      <NavContainer>
        <Link to="home" spy>
          <NavTooltip arrow title="Home" placement="top-start">
            <HomeOutlinedIcon />
          </NavTooltip>
        </Link>

        <Link to="about" spy>
          <NavTooltip arrow title="About" placement="top-start">
            <PersonOutlineOutlinedIcon />
          </NavTooltip>
        </Link>

        <Link to="experience" spy>
          <NavTooltip arrow title="Experience" placement="top-start">
            <MenuBookOutlinedIcon />
          </NavTooltip>
        </Link>

        <Link to="portfolio" spy>
          <NavTooltip arrow title="Portfolio" placement="top-start">
            <WorkOutlineOutlinedIcon />
          </NavTooltip>
        </Link>

        <Link to="contact" spy>
          <NavTooltip arrow title="Contact" placement="top-start">
            <MailOutlinedIcon />
          </NavTooltip>
        </Link>
      </NavContainer>

      <Container>
        <ScrollDownButton href="#contact">Scroll down</ScrollDownButton>
      </Container>
    </>
  );
};

export default Nav;
