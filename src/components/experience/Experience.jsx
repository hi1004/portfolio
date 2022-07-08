import React from 'react';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { TextLight } from '../../styles/CommonSyle';
import {
  ExperienceSection,
  ExperienceContainer,
  FrontEnd,
  Content,
  Details,
  IconBox,
  Text,
} from './ExperienceStyle';

const Experience = () => {
  return (
    <ExperienceSection id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>
      <ExperienceContainer>
        <FrontEnd>
          <h3>Frontend Development</h3>
          <Content>
            <Details>
              <IconBox>
                <CheckCircleIcon />
              </IconBox>
              <Text>
                <h4>HTML</h4>
                <TextLight>Experienced</TextLight>
              </Text>
            </Details>
            <Details>
              <IconBox>
                <CheckCircleIcon />
              </IconBox>
              <Text>
                <h4>CSS</h4>
                <TextLight>Experienced</TextLight>
              </Text>
            </Details>
            <Details>
              <IconBox>
                <CheckCircleIcon />
              </IconBox>
              <Text>
                <h4>JavaScript</h4>
                <TextLight>Experienced</TextLight>
              </Text>
            </Details>
            <Details>
              <IconBox>
                <CheckCircleIcon />
              </IconBox>
              <Text>
                <h4>React</h4>
                <TextLight>Experienced</TextLight>
              </Text>
            </Details>
            <Details>
              <IconBox>
                <CheckCircleIcon />
              </IconBox>
              <Text>
                <h4>VUE</h4>
                <TextLight>Experienced</TextLight>
              </Text>
            </Details>
            <Details>
              <IconBox>
                <CheckCircleIcon />
              </IconBox>
              <Text>
                <h4>Node JS</h4>
                <TextLight>Experienced</TextLight>
              </Text>
            </Details>
          </Content>
        </FrontEnd>
      </ExperienceContainer>
    </ExperienceSection>
  );
};

export default Experience;
