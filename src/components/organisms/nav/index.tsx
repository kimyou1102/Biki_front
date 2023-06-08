import React from 'react';
import styled from 'styled-components';
import { Img, A } from '@atoms';
import { Navigation } from '@molecules';
import logo from '../../../assets/images/Biky_Logo_season.png';

const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  /* padding: 32px 0px 30px 0px; */
  border-bottom: 1px solid #dbdbdb;

  img {
    width: calc(152px * 0.8);
    height: calc(74px * 0.8);
  }

  .wrap {
    display: flex;
    max-width: calc(1280px * 0.8);
    min-width: calc(1280px * 0.8);
    /* margin: 32px 0px 30px 0; */
    margin: auto;
    margin-top: 32px;
    margin-bottom: 30px;
    align-items: center;
  }
`;

export function Nav() {
  return (
    <StyledNav>
      <div className="wrap">
        <A url="/">
          <Img src={logo} alt="로고" />
        </A>
        <Navigation />
      </div>
    </StyledNav>
  );
}
