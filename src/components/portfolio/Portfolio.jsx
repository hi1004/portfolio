import React from 'react';
import {
  DemoButton,
  GitHubButton,
  Image,
  Item,
  TAG,
  YearTAG,
  ItemCTA,
  PortfolioContainer,
  PortfolioSection,
} from './PortfolioStyle';
import IMG0 from '../../assets/images/portfolio0.png';
import IMG1 from '../../assets/images/portfolio1.jpg';
import IMG2 from '../../assets/images/portfolio2.jpg';
import IMG3 from '../../assets/images/portfolio3.jpg';
import IMG4 from '../../assets/images/portfolio4.jpg';
import IMG5 from '../../assets/images/portfolio5.jpg';
import IMG6 from '../../assets/images/portfolio6.jpg';
import IMG7 from '../../assets/images/portfolio7.jpg';
import disney from '../../assets/images/disney_plus.png';

const dummyData = [
  {
    id: -1,
    title: 'React Disney Plus App',
    dec: 'FireBaseのログイン、TMDB APIを活用した映画検索サービス',
    tag: 'TOY',
    year: '2023',
    src: disney,
    github: 'https://github.com/hi1004/react-disney-plus-app',
    demo: 'http://bit.ly/3JGApJn',
  },
  {
    id: 0,
    title: 'OMDbAPI.COM',
    dec: 'OMDB API を活用した VanillaJs 映画検索サービス',
    tag: 'TOY',
    year: '2023',
    src: IMG0,
    github: 'https://github.com/hi1004/vanillajs-movie-app',
    demo: 'https://bit.ly/3I7thE2',
  },
  {
    id: 1,
    title: 'Food Search App',
    dec: 'OPEN APIを活用した食物アレルギー食品検索サービス',
    tag: 'TEAM',
    year: '2022',
    src: IMG1,
    github: 'https://bit.ly/3uuERTG',
    demo: 'https://food-search-app-gold.vercel.app/',
  },
  {
    id: 2,
    title: 'Jbit United IT',
    tag: 'TEAM',
    year: '2021',
    dec: '2021年、大学ITサークルの広報サイト',
    src: IMG2,
    github: 'https://bit.ly/3ysvpRP',
    demo: 'https://bit.ly/3yNto4e',
  },
  {
    id: 3,
    title: 'ICHIGOICHIE',
    tag: 'TEAM',
    year: '2021',
    dec: '大学ITサークルの2グループホームページ',
    src: IMG3,
    github: 'https://bit.ly/3al3DPr',
    demo: 'https://bit.ly/3NM3RN6',
  },
  {
    id: 4,
    title: 'Typing Game',
    tag: 'TEAM',
    year: '2022',
    dec: '大学授業で二人で作ったタイピングゲーム',
    src: IMG4,
    github: 'https://bit.ly/3c1cpm3',
    demo: 'https://bit.ly/3uxTy8u',
  },
  {
    id: 5,
    title: 'YULP',
    tag: 'TOY',
    year: '2020',
    dec: 'YULPリニューアルサイト',
    src: IMG5,
    github: 'https://bit.ly/3c4IkCg',
    demo: 'https://bit.ly/3PdYaIR',
  },
  {
    id: 6,
    title: 'Lotte',
    tag: 'TOY',
    year: '2020',
    dec: 'Lotteリニューアルサイト',
    src: IMG6,
    github: 'https://bit.ly/3OYE31B',
    demo: 'https://bit.ly/3RosuTc',
  },
  {
    id: 7,
    title: 'MARUGAME',
    tag: 'TOY',
    year: '2020',
    dec: 'MARUGAMEリニューアルサイト',
    src: IMG7,
    github: 'https://bit.ly/3PeOyxq',
    demo: 'https://bit.ly/3P62rOI',
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
              <TAG tag={data.tag}>#{data.tag} </TAG>
              <YearTAG tag={data.year}>#{data.year} </YearTAG>
              <Image src={data.src} />
              <h3>{data.title}</h3>
              <p>{data.dec}</p>
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
                  Demo
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
