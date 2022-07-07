import React from 'react';
import MilitaryTechOutlinedIcon from '@mui/icons-material/MilitaryTechOutlined';
import FolderCopyOutlinedIcon from '@mui/icons-material/FolderCopyOutlined';
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

        <AboutContent>
          <AboutCards>
            <AboutCard>
              <AboutIconBox>
                <MilitaryTechOutlinedIcon />
              </AboutIconBox>
              <h5>Experience</h5>
              <small>3+ Years Working</small>
            </AboutCard>

            <AboutCard>
              <AboutIconBox>
                <MilitaryTechOutlinedIcon />
              </AboutIconBox>
              <h5>Experience</h5>
              <small>3+ Years Working</small>
            </AboutCard>

            <AboutCard>
              <AboutIconBox>
                <FolderCopyOutlinedIcon />
              </AboutIconBox>
              <h5>Projects</h5>
              <small>3+ Years Working</small>
            </AboutCard>
          </AboutCards>
          <Text>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Perspiciatis neque amet voluptates, corrupti necessitatibus ratione
            suscipit eveniet fugit autem animi doloribus dicta, assumenda
            provident! Recusandae amet ad debitis ipsam illo.
          </Text>

          <AboutButton variant="contained" color="primary">
            Let's Talk
          </AboutButton>
        </AboutContent>
      </AboutContainer>
    </AboutSection>
  );
};

export default About;
