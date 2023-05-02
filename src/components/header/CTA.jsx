import React from 'react';
import { Link } from 'react-scroll';

import { CtaContainer, DownloadCV, TalkButton } from './HeaderSyle';

const CV = '/cv.pdf';
const CTA = () => {
  return (
    <CtaContainer>
      <a href={CV} download>
        <DownloadCV variant="outlined" size="large">
          Download CV
        </DownloadCV>
      </a>

      <Link to="contact" spy>
        <TalkButton variant="contained" size="large">
          Let's Talk
        </TalkButton>
      </Link>
    </CtaContainer>
  );
};

export default CTA;
