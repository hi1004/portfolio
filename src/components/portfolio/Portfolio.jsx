import React from 'react';
import {
  DemoButton,
  GitHubButton,
  Image,
  Item,
  TAG,
  ItemCTA,
  PortfolioContainer,
  PortfolioSection,
} from './PortfolioStyle';
import IMG1 from '../../assets/images/portfolio1.jpg';
import IMG2 from '../../assets/images/portfolio2.jpg';
import IMG3 from '../../assets/images/portfolio3.jpg';
import IMG4 from '../../assets/images/portfolio4.jpg';
import IMG5 from '../../assets/images/portfolio5.jpg';
import IMG6 from '../../assets/images/portfolio6.jpg';
import IMG7 from '../../assets/images/portfolio7.jpg';
import IMG8 from '../../assets/images/portfolio8.jpg';
import IMG9 from '../../assets/images/portfolio9.jpg';

const dummyData = [
  {
    id: 1,
    title: 'Food Search App',
    tag: 'TEAM',
    src: IMG1,
    github: 'https://bit.ly/3uuERTG',
    demo: 'https://bit.ly/3ytDaqK',
  },
  {
    id: 2,
    title: 'Jbit United IT',
    tag: 'TEAM',
    src: IMG2,
    github: 'https://bit.ly/3ysvpRP',
    demo: 'https://bit.ly/3yNto4e',
  },
  {
    id: 3,
    title: 'Jbit United IT Group2',
    tag: 'TEAM',
    src: IMG3,
    github: 'https://bit.ly/3al3DPr',
    demo: 'https://bit.ly/3NM3RN6',
  },
  {
    id: 4,
    title: 'Typing Game',
    tag: 'TEAM',
    src: IMG4,
    github: 'https://bit.ly/3c1cpm3',
    demo: 'https://bit.ly/3uxTy8u',
  },
  {
    id: 5,
    title: 'YULP',
    tag: 'TOY',
    src: IMG5,
    github: 'https://bit.ly/3c4IkCg',
    demo: 'https://bit.ly/3PdYaIR',
  },
  {
    id: 6,
    title: 'Lotte',
    tag: 'TOY',
    src: IMG6,
    github: 'https://bit.ly/3OYE31B',
    demo: 'https://bit.ly/3RosuTc',
  },
  {
    id: 7,
    title: 'MARUGAME',
    tag: 'TOY',
    src: IMG7,
    github: 'https://bit.ly/3PeOyxq',
    demo: 'https://bit.ly/3P62rOI',
  },
  {
    id: 8,
    title: 'KUMHO',
    tag: 'TOY',
    src: IMG8,
    github: 'https://bit.ly/3OVenmn',
    demo: 'https://bit.ly/3Az3nqA',
  },
  {
    id: 9,
    title: 'number9',
    tag: 'TOY',
    src: IMG9,
    github: 'https://bit.ly/3NR4apR',
    demo: 'https://bit.ly/3IDSIx3',
  },
];

const Portfolio = () => {
  return (
    <PortfolioSection id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <PortfolioContainer>
        {dummyData.map(data => {
          return (
            <Item key={data.id}>
              <TAG tag={data.tag}>#{data.tag}</TAG>
              <Image src={data.src} />
              <h3>{data.title}</h3>
              <ItemCTA>
                <GitHubButton
                  href={data.github}
                  variant="outlined"
                  target="_blank"
                >
                  Github
                </GitHubButton>
                <DemoButton
                  href={data.demo}
                  variant="contained"
                  target="_blank"
                >
                  Live Demo
                </DemoButton>
              </ItemCTA>
            </Item>
          );
        })}
      </PortfolioContainer>
    </PortfolioSection>
  );
};

export default Portfolio;
