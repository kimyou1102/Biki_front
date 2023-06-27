import React, { useState, useRef, useCallback, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue, useRecoilState } from 'recoil';
import { Img, Li, FlexContainer, StyledNav } from '@atoms';
import { useTranslation } from 'react-i18next';
import { getSectionApi } from '../../../apis/section/get-section-api';
import { languageState } from '../../../recoil/language/atom';
import { koUrlState, enUrlState } from '../../../recoil/archive/program/atom';
import menuClose from '../../../assets/images/menuClose.png';
import { NavigationType } from '../../../models/nav';
import { ButtonsProps } from '../../../models/headerButton';

interface Props {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  menus: NavigationType[];
  accountMenus: ButtonsProps[];
}

const Container = styled.div`
  width: 260px;
  height: auto;
  border-radius: 8px 0px 0px 8px;
  background: #f4f4f4;
  position: absolute;
  top: 0px;
  right: 0px;
  padding-bottom: 10px;
  z-index: 101;
`;

const MenuWrap = styled.ul`
  display: flex;
  flex-direction: column;
`;

const Menu = styled.li`
  /* padding: 12px 16px; */
  border-bottom: 1px solid #dbdbdb;
  display: flex;
  flex-direction: column;
  cursor: pointer;
`;

const DropMenuWrap = styled.div`
  width: 100%;
  height: auto;
  display: none;
  left: 0px;
  z-index: 10;
  padding: 12px 16px;
  border-top: 1px solid #dbdbdb;
  box-sizing: border-box;
`;

const ButtonsWrap = styled.ul`
  width: calc(916px * 0.8);
  display: flex;
  flex-wrap: wrap;
  /* grid-template-columns: 1fr 1fr 1fr 1fr; */
  grid-gap: 10px;
  flex-direction: column;
  padding-left: 27px;
`;

const SubMenu = styled.li`
  border: none;
  color: black;
  font-size: 0.8rem;
  cursor: pointer;

  &:hover {
    color: var(--main-color);
  }
`;

export function MobileNav({ setOpen, menus, accountMenus }: Props) {
  const navigate = useNavigate();

  return (
    <Container id="navigation">
      <StyledNav isMobile className="mobile">
        <div
          style={{ borderBottom: '1px solid #DBDBDB', padding: '20px 16px', display: 'flex', justifyContent: 'right' }}
        >
          <Img
            src={menuClose}
            alt="메뉴닫기"
            width={24 / 0.8}
            height={24 / 0.8}
            onClick={() => {
              setOpen(false);
              document.querySelector('body')?.classList.remove('none');
            }}
            className="cursor"
          />
        </div>
        <MenuWrap>
          {menus.map((menu) => (
            <Menu key={menu.id} id={menu.idValue}>
              <FlexContainer align="center" padding="12px 16px" id="name">
                {menu.name}
              </FlexContainer>
              <DropMenuWrap id="menu_wrap">
                <ButtonsWrap>
                  {menu.arr.map((item, i) => {
                    const [text1, text2] = item.split('</br>');
                    return (
                      <SubMenu
                        // eslint-disable-next-line react/no-array-index-key
                        key={i}
                        onClick={() => {
                          setOpen(false);
                          navigate(menu.link[i]);
                          document.querySelector('body')?.classList.remove('none');
                        }}
                      >
                        {text1}
                        <br />
                        {text2}
                      </SubMenu>
                    );
                  })}
                </ButtonsWrap>
              </DropMenuWrap>
            </Menu>
          ))}
          {accountMenus.map((menu) => (
            <Menu key={menu.id} onClick={() => (menu.onClick ? menu.onClick() : navigate(menu.url ? menu.url : '/'))}>
              <FlexContainer align="center" padding="12px 16px" id="name">
                {menu.name}
              </FlexContainer>
            </Menu>
          ))}
        </MenuWrap>
      </StyledNav>
    </Container>
  );
}
