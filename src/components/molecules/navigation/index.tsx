import React, { useState, useEffect, useRef, useCallback } from 'react';
import styled from 'styled-components';
import { useRecoilValue, useRecoilState } from 'recoil';
import { Li, FlexContainer, Img, DropMenuWrap, ButtonsWrap, MenudButton } from '@atoms';
import { useFetcher, useNavigate } from 'react-router-dom';
// eslint-disable-next-line import/no-extraneous-dependencies
import { useTranslation } from 'react-i18next';
import character from '../../../assets/images/nav_menu_character.png';
import { getSectionApi } from '../../../apis/section/get-section-api';
import { languageState } from '../../../recoil/language/atom';
import { koUrlState, enUrlState } from '../../../recoil/archive/program/atom';

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

export function Navigation({ left }: Props) {
  const navigate = useNavigate();
  const menuRef = useRef<HTMLDivElement>(null);
  const [hover, setHover] = useState(true);
  const [section, setSection] = useState([]);
  const [sectionUrl, setSectionUrl] = useState([]);
  const [koUrl, setKoUrl] = useRecoilState(koUrlState);
  const [enUrl, setEnUrl] = useRecoilState(enUrlState);
  const { t } = useTranslation();
  const language = useRecoilValue(languageState);

  const sectionApi = useCallback(async () => {
    await getSectionApi()
      .then((res) => {
        setKoUrl(res.map((x: any) => x.nameKo.trim()));
        setEnUrl(res.map((x: any) => x.nameEn.trim()));

        if (language === 'English') {
          setSection(res.map((x: any) => x.nameKo));
          setSectionUrl(res.map((x: any) => `/movie/${x.id}?title=${x.nameKo}`));
        } else {
          setSection(res.map((x: any) => x.nameEn));
          setSectionUrl(res.map((x: any) => `/movie/${x.id}?title=${x.nameEn}`));
        }
      })
      .catch((err) => console.log(err));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [language]);

  useEffect(() => {
    sectionApi();
  }, [sectionApi]);

  useEffect(() => {
    let timer: any;

    if (!hover) {
      timer = setTimeout(() => setHover(true), 300);
    }

    return () => clearTimeout(timer);
  }, [hover]);

  const headers: any = t(`header`, { returnObjects: true });
  const menus: NavigationProps[] = [
    {
      id: 1,
      name: headers[0].title,
      idValue: 'biky',
      url: '/#',
      arr: [headers[0].items[0], headers[0].items[1], headers[0].items[2], headers[0].items[3], headers[0].items[4]],
      link: [
        '/articles/18-부산국제어린이청소년영화제-BIKY-',
        '/articles/페스티벌-심벌',
        '/articles/시상내역',
        '/articles/비키를-만드는-사람들',
        '/articles/스폰서-모집안내',
      ],
    },
    {
      id: 2,
      name: headers[1].title,
      idValue: 'education',
      url: '/#',
      arr: [headers[1].items[0], headers[0].items[1], headers[0].items[2], headers[0].items[3]],
      link: [
        '/articles/부설연구소',
        '/articles/배급영화-교재-활동지-교육영상',
        '/articles/비키랑-학교랑',
        '/articles/교육-프로그램',
      ],
    },
    {
      id: 3,
      name: headers[2].title,
      idValue: 'program',
      url: '/#',
      arr: [headers[2].items[0], headers[2].items[1], headers[2].items[2], ...section],
      // arr: [
      //   '상영 시간표',
      //   '상영관 정보',
      //   '티켓 안내',
      //   '개막작',
      //   '레디~액션! 12',
      //   '레디~액션! 15',
      //   '레디~액션! 18',
      //   '나를 찾아서',
      //   '너와 더불어',
      //   '다름 안에서',
      //   '경계를 넘어서' ,
      //   '특별전: 채널 1016',
      //   '바로,씽!',
      //   '야외극장 달빛별빛',
      //   '완두콩극장:</br>슈링겔국제어린이청소년영화제',
      // ],
      link: [
        '/movie/schedule',
        '/movie/상영관-정보',
        '/movie/ticket',
        ...sectionUrl,
        // '/movie/find-me-movies',
        // '/movie/together-movies',
        // '/movie/within-differences-movies',
        // '/movie/beyond-boundaries-movies',
        // '/movie/ready-action12-movies',
        // '/movie/ready-action15-movies',
        // '/movie/ready-action18-movies',
        // '/movie/outdoor-screen-movies',
        // '/movie/opening-movies',
        // '/movie/special-exhibition-movies',
        // '/movie/rightnow-movies',
        // '/movie/ready-action-movies',
        // '/#',
      ],
    },
    {
      id: 4,
      name: headers[3].title,
      idValue: 'event',
      url: '/#',
      arr: [headers[3].items[0], headers[3].items[1], headers[3].items[2], headers[3].items[3]],
      link: [
        '/articles/상영-이벤트',
        '/articles/포스터-그림-전시회',
        '/articles/어린이청소년영화인의-밤',
        '/articles/비키놀이터',
      ],
    },
    {
      id: 5,
      name: headers[6].title,
      idValue: 'forum',
      url: '/#',
      arr: [headers[6].items[0], headers[6].items[1]],
      link: ['/articles/역대-비키포럼', '/articles/인더스트리-네트워크'],
    },
    {
      id: 6,
      name: headers[7].title,
      idValue: 'news',
      url: '/#',
      arr: [headers[7].items[0], headers[7].items[1], headers[7].items[2]],
      link: ['/news/notice', '/news/newsletter', '/news/pressrelease'],
    },
    {
      id: 7,
      name: headers[4].title,
      idValue: 'archive',
      url: '/archive/distributions',
      arr: [headers[4].items[0], headers[4].items[1], headers[4].items[2], headers[4].items[3]],
      link: ['/', '/archive/distributions', '/archive/sketch', '/archive/videoclip'],
    },
    {
      id: 8,
      name: headers[5].title,
      idValue: 'contact',
      url: '/#',
      arr: [headers[5].items[0], headers[5].items[1]],
      link: ['/articles/사무국사람들', '/articles/사무국위치'],
    },
  ];

  useEffect(() => {
    if (menuRef.current) {
      console.log(menuRef.current.offsetLeft);
    }
  }, []);

  return (
    <MenuWrap id="navigation" className={!hover ? 'hover_none' : ''}>
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
                  <MenudButton
                    // eslint-disable-next-line react/no-array-index-key
                    key={i}
                    onClick={() => {
                      setHover(false);
                      navigate(menu.link[i]);
                      // setHover(true);
                    }}
                  >
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
