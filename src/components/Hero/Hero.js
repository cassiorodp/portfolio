import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hello there, <br/>
        I'm Cássio Pereira
      </SectionTitle>
      <SectionText>
        I'm a web development student. Interested in front-end development. Passionate about tools that allow you to create amazing things. <br/> Main skills: React.js, HTML, CSS, JavaScript.
      </SectionText>
      <Button onClick={() => window.location.href = "mailto:cassiorodp@gmail.com"}>
        Learn More
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;