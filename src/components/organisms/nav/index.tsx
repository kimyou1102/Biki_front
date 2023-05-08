import React from 'react';
import styled from 'styled-components';
import { Img } from '@atoms';
import { Navigation } from '@molecules';
import logo from '../../../assets/images/Biky_Logo.png';

const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  padding: 40px 0px 38px 0px;
`;

export function Nav() {
  return (
    <StyledNav>
      <Img src={logo} alt="로고" />
      <Navigation />
    </StyledNav>
  );
}
