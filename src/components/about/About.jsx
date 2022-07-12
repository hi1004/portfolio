import React from 'react';
import MilitaryTechOutlinedIcon from '@mui/icons-material/MilitaryTechOutlined';
import FolderCopyOutlinedIcon from '@mui/icons-material/FolderCopyOutlined';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-scroll';
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
import AboutDetails from './AboutDetails';

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
              <small>2+ Years Experience</small>
            </AboutCard>

            {/* <AboutCard className={active ? 'active' : ''}>
              <AboutIconBox>
                <MilitaryTechOutlinedIcon />
              </AboutIconBox>
              <h5>Experience</h5>
              <small>3+ Years Working</small>
            </AboutCard> */}

            <AboutCard className={active ? 'active' : ''}>
              <AboutIconBox>
                <FolderCopyOutlinedIcon />
              </AboutIconBox>
              <h5>Projects</h5>
              <small>10+ Completed</small>
            </AboutCard>
          </AboutCards>
          <Text>
            <p>
              HTML & CSS & JavaScript / React & Vue で
              <span>2年以上の開発経験</span>
              があります。そして、フロントエンドエンジニアとして、これからも徐々に成長していく開発者になりたいです。
            </p>
            <p>
              <span>現在は大学のITサークルの会長</span>
              としてチームプロジェクト活動や部員募集などの運営を行っています。
              去年の部員募集は効率的にサークルの広報をするため、チームでサイトを作り上げた結果、
              <strong>10人</strong>の部員を増やすことができました。
            </p>
            <p>
              個人がしたいことよりは、
              <span>会社(サークル)やチームに役立つこと</span>
              がしたかったので、WEBスタディーやプロジェクト発表会を開くなど
              <span>チームとして活躍できるよう</span>
              に愚直にサークルの運営をしてきました。
            </p>
          </Text>

          <Link to="contact" spy>
            <AboutButton variant="contained" size="large">
              Let's Talk
            </AboutButton>
          </Link>
        </AboutContent>
      </AboutContainer>

      <AboutDetails />
    </AboutSection>
  );
};

export default About;
