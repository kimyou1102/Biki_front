import React, { useState } from 'react';
import styled from 'styled-components';
import { Li, A } from '@atoms';

interface NavigationProps {
  id: number;
  name: string;
  url: string;
  arr: string[];
  link: string[];
  idValue: string;
}

const StyledUl = styled.ul`
  display: flex;
  width: calc(870px * 0.8);
  justify-content: space-between;
  margin-left: 114px;
`;

const ButtonWrap = styled.div`
  width: 100%;
  background-color: gray;
  height: calc(368px * 0.8);
  display: none;
  /* display: block; */
  /* &:hover {
    display: block;
  } */
`;

const Container = styled.div`
  position: relative;

  #BIKI:hover {
    color: var(--main-color);
  }

  #BIKI:hover #BIKI_content {
    position: absolute;
    top: 20px;
    z-index: 100;
    display: block;
  }

  #biki:hover,
  #education:hover,
  #program:hover,
  #event:hover,
  #forum:hover,
  #news:hover,
  #archive:hover,
  #contact:hover {
    color: var(--main-color);
  }

  #biki:hover .content {
    position: absolute;
    /* top: 20px; */
    z-index: 100;
    display: block;
  }

  #education:hover {
    color: var(--main-color);
  }

  #program:hover {
    color: var(--main-color);
  }
`;

const StyledButton = styled.button`
  background-color: #d9d9d9;
  border: none;
  color: black;
  /* width: calc(250px * 0.8); */
  padding: 18px 57px;
  border-radius: 5px;

  &:hover {
    background-color: var(--main-color);
    color: white;
  }
`;

export function Navigation() {
  const menus: NavigationProps[] = [
    {
      id: 1,
      name: 'BIKI',
      idValue: 'biki',
      url: '/#',
      arr: ['제18회 BIKY', '페스티벌 심벌', '시상내역', '비키를 만드는 사람들', '스폰서 모집안내'],
      link: ['/news/notice', '/', '/', '/', '/'],
    },
    {
      id: 2,
      name: '교육',
      idValue: 'education',
      url: '/#',
      arr: ['부설연구소', '배급영화 교재, 활동지, 교육영상', '비키랑 학교랑', '교육 프로그램'],
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
        '완두콩극장: 슈링겔국제어린이청소년영화제',
      ],
      link: ['/', '/', '/', '/', '/'],
    },
    {
      id: 4,
      name: '이벤트',
      idValue: 'event',
      url: '/#',
      arr: ['상영이벤트', '포스터그림전시회', '어린이청소년영화인의 밤', '비키놀이터'],
      link: ['/', '/', '/', '/', '/'],
    },
    {
      id: 5,
      name: '비키포럼',
      idValue: 'forum',
      url: '/#',
      arr: ['역대 비키포럼', '인더스트리 네트워크'],
      link: ['/', '/', '/', '/', '/'],
    },
    {
      id: 6,
      name: '비키소식',
      idValue: 'news',
      url: '/news/notice',
      arr: ['공지사항', '뉴스레터', '보도자료'],
      link: ['/', '/', '/', '/', '/'],
    },
    {
      id: 7,
      name: '아카이브',
      idValue: 'archive',
      url: '/archive/distributions',
      arr: ['비키가 걸어온 길', '배급작품', '현장스케치', '영상클립', '상영작검색'],
      link: ['/', '/', '/', '/', '/'],
    },
    {
      id: 8,
      name: 'Contact',
      idValue: 'contact',
      url: '/#',
      arr: ['사무국사람들', '사무국위치'],
      link: ['/#', '/#'],
    },
  ];

  const [nav, setNav] = useState([]);

  return (
    <Container>
      <StyledUl>
        {menus.map((menu) => (
          <div id={menu.idValue}>
            <Li key={menu.id} weight="bold" id={menu.idValue}>
              <A url={menu.url} id={menu.idValue}>
                {menu.name}
              </A>
            </Li>
            <ButtonWrap id={`${menu.idValue}_content`}>
              {menu.arr.map((item, i) => (
                <StyledButton>
                  <A url={menu.link[i]}>{item}</A>
                </StyledButton>
              ))}
            </ButtonWrap>
          </div>
        ))}
      </StyledUl>
    </Container>
  );
}
