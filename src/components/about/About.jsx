import React from 'react';
import MilitaryTechOutlinedIcon from '@mui/icons-material/MilitaryTechOutlined';
import FolderCopyOutlinedIcon from '@mui/icons-material/FolderCopyOutlined';
import { useInView } from 'react-intersection-observer';
import {
  AboutSection,
  AboutContainer,
  AboutMe,
  AboutImg,
  Img,
  AboutContent,
  AboutIconBox,
  AboutCards,
  AboutCard,
  Text,
  AboutButton,
} from './AboutStyle';
import ME from '../../assets/images/about_me.jpg';

const About = () => {
  const { ref: myRef, inView: active } = useInView();

  return (
    <AboutSection id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <AboutContainer>
        <AboutMe>
          <AboutImg>
            <Img src={ME} alt="About Image" />
          </AboutImg>
        </AboutMe>

        <AboutContent ref={myRef}>
          <AboutCards>
            <AboutCard className={active ? 'active' : ''}>
              <AboutIconBox>
                <MilitaryTechOutlinedIcon />
              </AboutIconBox>
              <h5>Experience </h5>
              <small>3+ Years Experience</small>
            </AboutCard>

            <AboutCard className={active ? 'active' : ''}>
              <AboutIconBox>
                <MilitaryTechOutlinedIcon />
              </AboutIconBox>
              <h5>Experience</h5>
              <small>3+ Years Working</small>
            </AboutCard>

            <AboutCard className={active ? 'active' : ''}>
              <AboutIconBox>
                <FolderCopyOutlinedIcon />
              </AboutIconBox>
              <h5>Projects</h5>
              <small>10+ Completed</small>
            </AboutCard>
          </AboutCards>
          <Text>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Perspiciatis neque amet voluptates, corrupti necessitatibus ratione
            suscipit eveniet fugit autem animi doloribus dicta, assumenda
            provident! Recusandae amet ad debitis ipsam illo.
          </Text>

          <AboutButton
            variant="contained"
            color="primary"
            size="large"
            onClick={() => {
              window.location.href = '#contact';
            }}
          >
            Let's Talk
          </AboutButton>
        </AboutContent>
      </AboutContainer>
    </AboutSection>
  );
};

export default About;
