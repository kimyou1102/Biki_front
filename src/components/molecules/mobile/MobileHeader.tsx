import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue, useRecoilState } from 'recoil';
import { Img } from '@atoms';
import { MobileNav } from './MobileNav';
import logo from '../../../assets/images/Biky_Logo_season.png';
import menu from '../../../assets/images/BurgerMenu.png';
import { NavigationType } from '../../../models/nav';
import { navState } from '../../../recoil/mobile-nav/atome';

interface Props {
  menus: NavigationType[];
}

const Contianer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 14px 16px;
`;

export function MobileHeader({ menus }: Props) {
  //   const [open, setOpen] = useState<boolean>(false);
  const [navOpen, setNavOpen] = useRecoilState(navState);
  const navigate = useNavigate();

  return (
    <Contianer>
      <Img
        src={logo}
        alt="메인로고"
        width={76 / 0.8}
        height={37 / 0.8}
        className="cursor"
        onClick={() => navigate('/')}
      />
      <Img
        src={menu}
        alt="메뉴"
        width={24 / 0.8}
        height={24 / 0.8}
        onClick={() => {
          setNavOpen(true);
          document.querySelector('body')?.classList.add('none');
        }}
        className="cursor"
      />
      {navOpen ? <MobileNav menus={menus} setOpen={setNavOpen} /> : null}
    </Contianer>
  );
}
