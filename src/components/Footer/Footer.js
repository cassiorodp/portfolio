import React from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { RiStackOverflowFill } from 'react-icons/ri';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Whatsapp</LinkTitle>
          <LinkItem target='_blank' href='https://api.whatsapp.com/send?phone=5592988134763'>+5592988134763</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href='mailto:cassiorodp@gmail.com'>cassiorodp@gmail.com</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <SocialContainer>
          <SocialIcons target="_blank" href='https://github.com/cassiorodp'>
            <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons target="_blank" href='https://www.linkedin.com/in/cassio-rodrigues-pereira/'>
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
          <SocialIcons target="_blank" href='https://stackoverflow.com/users/17109480/c%c3%a1ssio-rodrigues-pereira'>
            <RiStackOverflowFill size="3rem" />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
