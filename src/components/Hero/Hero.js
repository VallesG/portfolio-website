import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br />
        Gil's Portfolio
      </SectionTitle>
      <SectionText>
         I am a recent graduate at University of California Irvine in the cybersecurity continued education program. As an energetic self-starter and team-player I bring a broad knowledge of network security components along with industry certifications. This is my project portfolio. 
      </SectionText>
    </LeftSection>
  </Section>
);

export default Hero;