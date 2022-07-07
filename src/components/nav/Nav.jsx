import React, { useState } from 'react';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
import {
  NavContainer,
  IconBox,
  NavTooltip,
  ScrollDownButton,
} from './NavStyle';
import { Container } from '../../styles/CommonSyle';

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');

  return (
    <>
      <NavContainer>
        <NavTooltip arrow title="Home" placement="top-start">
          <IconBox
            href="#"
            onClick={() => setActiveNav('#')}
            className={activeNav === '#' ? 'active' : ''}
          >
            <HomeOutlinedIcon />
          </IconBox>
        </NavTooltip>

        <NavTooltip arrow title="About" placement="top-start">
          <IconBox
            href="#about"
            onClick={() => setActiveNav('#about')}
            className={activeNav === '#about' ? 'active' : ''}
          >
            <PersonOutlineOutlinedIcon />
          </IconBox>
        </NavTooltip>

        <NavTooltip arrow title="Experience" placement="top-start">
          <IconBox
            href="#experience"
            onClick={() => setActiveNav('#experience')}
            className={activeNav === '#experience' ? 'active' : ''}
          >
            <MenuBookOutlinedIcon />
          </IconBox>
        </NavTooltip>

        <NavTooltip arrow title="Portfolio" placement="top-start">
          <IconBox
            href="#portfolio"
            onClick={() => setActiveNav('#portfolio')}
            className={activeNav === '#portfolio' ? 'active' : ''}
          >
            <WorkOutlineOutlinedIcon />
          </IconBox>
        </NavTooltip>

        <NavTooltip arrow title="Contact" placement="top-start">
          <IconBox
            href="#contact"
            onClick={() => setActiveNav('#contact')}
            className={activeNav === '#contact' ? 'active' : ''}
          >
            <MailOutlinedIcon />
          </IconBox>
        </NavTooltip>
      </NavContainer>

      <Container>
        <ScrollDownButton
          href="#contact"
          onClick={() => setActiveNav('#contact')}
          className={activeNav === '#contact' ? 'active' : ''}
        >
          Scroll down
        </ScrollDownButton>
      </Container>
    </>
  );
};

export default Nav;
