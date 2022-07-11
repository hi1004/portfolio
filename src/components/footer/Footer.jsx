import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import {
  Copyright,
  FooterSection,
  IconBox,
  Item,
  List,
  Logo,
  Logos,
  Permalinks,
  Socials,
} from './FooterStyle';

const PermalinkData = [
  { id: 1, link: '#', title: 'Home' },
  { id: 2, link: '#about', title: 'About' },
  { id: 3, link: '#experience', title: 'Experience' },
  { id: 4, link: '#portfolio', title: 'Portfolio' },
  { id: 5, link: '#contact', title: 'Contact' },
];

const Footer = ({ themeMode }) => {
  return (
    <FooterSection>
      <Logos href="#">
        {themeMode === 'light' ? (
          <Logo src="/images/white_logo.png" />
        ) : (
          <Logo src="/images/dark_logo.png" />
        )}
      </Logos>
      <Permalinks>
        {PermalinkData.map(({ id, link, title }) => {
          return (
            <List key={id}>
              <Item href={link}> {title}</Item>
            </List>
          );
        })}
      </Permalinks>

      <Socials>
        <IconBox href="https://github.com/hi1004" target="_blank">
          <GitHubIcon />
        </IconBox>
        <IconBox href="https://www.instagram.com/byeongheonn/" target="_blank">
          <InstagramIcon />
        </IconBox>
        <IconBox href="https://twitter.com/buorusia" target="_blank">
          <TwitterIcon />
        </IconBox>
      </Socials>

      <Copyright>
        <small>&copy; Oh ByeongHeon. All rights reserved.</small>
      </Copyright>
    </FooterSection>
  );
};

export default Footer;
