import React from 'react';
import {
  DemoButton,
  GitHubButton,
  Image,
  Item,
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
  { id: 1, title: 'number1', src: IMG1, github: '', demo: '' },
  { id: 2, title: 'number2', src: IMG2, github: '', demo: '' },
  { id: 3, title: 'number3', src: IMG3, github: '', demo: '' },
  { id: 4, title: 'number4', src: IMG4, github: '', demo: '' },
  { id: 5, title: 'number5', src: IMG5, github: '', demo: '' },
  { id: 6, title: 'number6', src: IMG6, github: '', demo: '' },
  { id: 7, title: 'number7', src: IMG7, github: '', demo: '' },
  { id: 8, title: 'number8', src: IMG8, github: '', demo: '' },
  { id: 9, title: 'number9', src: IMG9, github: '', demo: '' },
];
// test
const Portfolio = () => {
  return (
    <PortfolioSection id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <PortfolioContainer>
        {dummyData.map(data => {
          return (
            <Item key={data.id}>
              <Image src={data.src} />
              <h3>{data.title}</h3>
              <ItemCTA>
                <GitHubButton variant="outlined" target="_blank">
                  Github
                </GitHubButton>
                <DemoButton variant="contained" target="_blank">
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
