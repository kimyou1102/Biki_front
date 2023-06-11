import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { Li, FlexContainer, Img, DropMenuWrap, ButtonsWrap, MenudButton } from '@atoms';
import { useNavigate } from 'react-router-dom';
import character from '../../../assets/images/nav_menu_character.png';

interface NavigationProps {
  id: number;
  name: string;
  url: string;
  arr: string[];
  link: string[];
  idValue: string;
}

interface Props {
  left: number;
}

const MenuWrap = styled.ul`
  display: flex;
  width: calc(916px * 0.8);
`;

// const NavItemWrap = styled.div`
//   display: flex;
//   align-items: center;
//   height: calc(118px * 0.8);
//   padding: 0 calc(23px * 0.8);
// `;

export function Navigation({ left }: Props) {
  const navigate = useNavigate();
  const menuRef = useRef<HTMLDivElement>(null);
  const menus: NavigationProps[] = [
    {
      id: 1,
      name: 'BIKY',
      idValue: 'biky',
      url: '/#',
      arr: ['제18회 BIKY', '페스티벌 심벌', '시상내역', '비키를 만드는 사람들', '스폰서 모집안내'],
      link: ['/', '/festival', '/', '/', '/'],
    },
    {
      id: 2,
      name: '교육',
      idValue: 'education',
      url: '/#',
      arr: ['부설연구소', '배급영화 교재,</br>활동지, 교육영상', '비키랑 학교랑', '교육 프로그램'],
      link: ['/', '/', '/', '/', '/'],
    },
    {
      id: 3,
      name: '2023 프로그램',
      idValue: 'program',
      url: '/#',
      arr: [
        '상영 시간표',
        '상영관 정보',
        '티켓 안내',
        '개막작',
        '레디~액션! 12',
        '레디~액션! 15',
        '레디~액션! 18',
        '나를 찾아서',
        '너와 더불어',
        '다름 안에서',
        '경계를 넘어서',
        '특별전: 채널 1016',
        '바로,씽!',
        '야외극장 달빛별빛',
        '완두콩극장:</br>슈링겔국제어린이청소년영화제',
      ],
      link: [
        '/movie/schedule',
        '/#',
        '/#',
        '/movie/opening-movies',
        '/movie/ready-action12-movies',
        '/movie/ready-action15-movies',
        '/movie/ready-action18-movies',
        '/movie/find-me-movies',
        '/movie/together-movies',
        '/movie/within-differences-movies',
        '/movie/beyond-boundaries-movies',
        '/movie/special-exhibition-movies',
        '/movie/rightnow-movies',
        '/movie/outdoor-screen-movies',
        '/movie/ready-action-movies',
      ],
    },
    {
      id: 4,
      name: '이벤트',
      idValue: 'event',
      url: '/#',
      arr: ['상영이벤트', '포스터그림전시회', '어린이청소년영화인의 밤', '비키놀이터'],
      link: ['/', '/', '/', '/'],
    },
    {
      id: 5,
      name: '비키포럼',
      idValue: 'forum',
      url: '/#',
      arr: ['역대 비키포럼', '인더스트리 네트워크'],
      link: ['/', '/'],
    },
    {
      id: 6,
      name: '비키소식',
      idValue: 'news',
      url: '/#',
      arr: ['공지사항', '뉴스레터', '보도자료'],
      link: ['/news/notice', '/news/newsletter', '/'],
    },
    {
      id: 7,
      name: '아카이브',
      idValue: 'archive',
      url: '/archive/distributions',
      arr: ['비키가 걸어온 길', '배급작품', '현장스케치', '영상클립', '상영작검색'],
      link: ['/', '/archive/distributions', '/archive/sketch', '/archive/videoclip', '/'],
    },
    {
      id: 8,
      name: 'Contact',
      idValue: 'contact',
      url: '/#',
      arr: ['사무국사람들', '사무국위치'],
      link: ['/', '/'],
    },
  ];

  useEffect(() => {
    if (menuRef.current) {
      console.log(menuRef.current.offsetLeft);
    }
  }, []);

  return (
    <MenuWrap>
      {menus.map((menu) => (
        <Li key={menu.id} weight="bold" id={menu.idValue}>
          {/* <NavItemWrap style={{ height: 'calc(118px * 0.8)' }}>{menu.name}</NavItemWrap> */}
          <FlexContainer align="center" height={118} padding="0 calc(23px * 0.8)">
            {menu.name}
          </FlexContainer>
          <DropMenuWrap id="menu_wrap">
            <FlexContainer align="center" justify="center" width={left / 0.8}>
              <Img alt="캐릭터" src={character} width={282} height={223} margin="0 0 0 calc(127px * 0.8))" />
            </FlexContainer>
            <ButtonsWrap>
              {menu.arr.map((item, i) => {
                const [text1, text2] = item.split('</br>');
                return (
                  // eslint-disable-next-line react/no-array-index-key
                  <MenudButton key={i} onClick={() => navigate(menu.link[i])}>
                    {text1}
                    <br />
                    {text2}
                  </MenudButton>
                );
              })}
            </ButtonsWrap>
          </DropMenuWrap>
        </Li>
      ))}
    </MenuWrap>
  );
}
