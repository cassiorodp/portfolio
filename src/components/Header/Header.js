import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';
import { RiStackOverflowFill } from 'react-icons/ri'

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href='/'>
        <a style={{ display: "flex", alignItens: "center", color: "white", marginBottom: "20px" }}>
          <DiCssdeck size="3rem"/> <Span>Portfolio</Span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>Technologies</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons target="_blank" href='https://github.com/cassiorodp'>
        <AiFillGithub size="3rem"/>
      </SocialIcons>
      <SocialIcons target="_blank" href='https://www.linkedin.com/in/cassio-rodrigues-pereira/'>
        <AiFillLinkedin size="3rem"/>
      </SocialIcons>
      <SocialIcons target="_blank" href='https://stackoverflow.com/users/17109480/c%c3%a1ssio-rodrigues-pereira'>
        <RiStackOverflowFill size="3rem"/>
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
