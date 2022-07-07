import React from 'react';

import { CtaContainer, DownloadCV, TalkButton } from './HeaderSyle';

const CV = '';
const CTA = () => {
  return (
    <CtaContainer>
      <DownloadCV href={CV} download variant="outlined">
        Download CV
      </DownloadCV>
      <TalkButton
        onClick={() => {
          window.location.href = '#contact';
        }}
        variant="contained"
      >
        Let's Talk
      </TalkButton>
    </CtaContainer>
  );
};

export default CTA;
