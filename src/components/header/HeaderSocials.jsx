import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import { HeaderSocialsContainer, IconBox } from './HeaderSyle';

const HeaderSocials = () => {
  return (
    <HeaderSocialsContainer>
      <IconBox href="https://github.com/hi1004" target="_blank">
        <GitHubIcon />
      </IconBox>
      <IconBox href="https://www.instagram.com/byeongheonn/" target="_blank">
        <InstagramIcon />
      </IconBox>
      <IconBox href="https://twitter.com/buorusia" target="_blank">
        <TwitterIcon />
      </IconBox>
    </HeaderSocialsContainer>
  );
};

export default HeaderSocials;
