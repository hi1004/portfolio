import React from 'react';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import { TextLight, PrimaryText } from '../../styles/CommonSyle';
import CTA from './CTA';
import HeaderSocials from './HeaderSocials';
import ME from '../../assets/images/me.png';
import {
  Image,
  HeaderContainer,
  ImageContainer,
  FixedHeader,
  FixedContainer,
  Logo,
  Logos,
  StyledHeader,
  TextContainer,
  ToggleButton,
} from './HeaderSyle';

const Header = ({ toggleTheme, themeMode }) => {
  return (
    <StyledHeader id="home">
      <HeaderContainer>
        <FixedHeader>
          <FixedContainer>
            <Logos to="home">
              {themeMode === 'light' ? (
                <Logo src="/images/white_logo.png" />
              ) : (
                <Logo src="/images/dark_logo.png" />
              )}
            </Logos>
            <ToggleButton onClick={toggleTheme} variant="outlined">
              {themeMode === 'light' ? (
                <DarkModeOutlinedIcon />
              ) : (
                <LightModeOutlinedIcon />
              )}
            </ToggleButton>
          </FixedContainer>
        </FixedHeader>

        <TextContainer>
          <h3>Hello I'm</h3>
          <h1>Oh ByeongHeon</h1>

          <TextLight>Web Frontend Developer</TextLight>
          <h3>
            人々が<PrimaryText>必要とするサービスを、</PrimaryText> <br />
            仲間と<PrimaryText>一緒に作る時に幸せを感じます。</PrimaryText>
          </h3>
          <CTA />
        </TextContainer>

        <HeaderSocials />

        <ImageContainer>
          <Image src={ME} alt="me" />
        </ImageContainer>
      </HeaderContainer>
    </StyledHeader>
  );
};

export default Header;
