import React from 'react';
import CheckIcon from '@mui/icons-material/Check';
import {
  AboutDetailsContainer,
  Detail,
  DetailHead,
  DetailList,
  Details,
  List,
  IconBox,
} from './AboutStyle';

const aboutData = [
  {
    id: 1,
    title: 'エンジニア',
    list: [
      '持続可能な製品の開発に集中するエンジニアです。',
      '個人と組織の生産性を重視するエンジニアです。',
      '新しい技術を学んで、どこでもよく適応するエンジニアです。',
      '愚直に学習 / 成長するエンジニアです。',
    ],
  },
  {
    id: 2,
    title: '組織',
    list: [
      '構成員間の信頼を基盤に、自律的に働く組織が好きです。',
      '意思決定が透明に行われ、そのための情報が水平的に共有される組織が好きです。',
      '構成員が組織のビジョンを共に想像し具体化し、これに共感できる組織が好きです。',
    ],
  },
];

const AboutDetails = () => {
  return (
    <Details>
      <AboutDetailsContainer>
        {aboutData.map(({ id, title, list }) => {
          return (
            <Detail key={id}>
              <DetailHead>
                <h3>{title}</h3>
              </DetailHead>
              <DetailList>
                {list.map(text => {
                  return (
                    <List key={Math.random()}>
                      <IconBox>
                        <CheckIcon />
                      </IconBox>
                      <p>{text}</p>
                    </List>
                  );
                })}
              </DetailList>
            </Detail>
          );
        })}
      </AboutDetailsContainer>
    </Details>
  );
};

export default AboutDetails;
