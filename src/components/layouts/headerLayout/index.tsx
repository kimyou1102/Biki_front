import React, { useState, useRef, useCallback, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate, Outlet } from 'react-router-dom';
import { useRecoilValue, useRecoilState } from 'recoil';
import { Img } from '@atoms';
import { useTranslation } from 'react-i18next';
// eslint-disable-next-line import/no-extraneous-dependencies
import { useMediaQuery } from 'react-responsive';
import { Nav } from '@organisms';
import { Header, MobileHeader } from '@molecules';
import { Footer } from '@layout/Footer';
import { getSectionApi } from '../../../apis/section/get-section-api';
import { languageState } from '../../../recoil/language/atom';
import { koUrlState, enUrlState } from '../../../recoil/archive/program/atom';
import { NavigationType } from '../../../models/nav';
import { navState } from '../../../recoil/mobile-nav/atome';

const NavBack = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0px;
  z-index: 100;
  background: rgba(0, 0, 0, 0.5);

  &.none {
    display: none;
  }
`;

const Main = styled.div<{ isMobile?: boolean }>`
  min-height: ${(props) => (props.isMobile ? '100vh' : 'calc(100vh - 94px - 55px)')};
  height: auto;
  padding-bottom: ${(props) => (props.isMobile ? '35px' : '100px')};
  box-sizing: border-box;
  overflow: hidden;
`;

export function HeaderLayout() {
  const isMobile = useMediaQuery({
    query: '(max-width:768px)',
  });

  const navigate = useNavigate();
  const menuRef = useRef<HTMLDivElement>(null);
  const [section, setSection] = useState([]);
  const [sectionUrl, setSectionUrl] = useState([]);
  const [koUrl, setKoUrl] = useRecoilState(koUrlState);
  const [enUrl, setEnUrl] = useRecoilState(enUrlState);
  const [navOpen, setNavOpen] = useRecoilState(navState);
  const { t } = useTranslation();
  const language = useRecoilValue(languageState);

  const sectionApi = useCallback(async () => {
    await getSectionApi()
      .then((res) => {
        // 'nameKo' 속성을 기준으로 배열 정렬
        const resKo = res.sort((a: any, b: any) => {
          if (a.nameKo < b.nameKo) return -1;
          if (a.nameKo > b.nameKo) return 1;
          return 0;
        });

        setKoUrl(resKo.map((x: any) => x.nameKo.trim()));
        setEnUrl(resKo.map((x: any) => x.nameEn.trim()));
        if (language === 'English') {
          setSection(resKo.map((x: any) => x.nameKo));
          setSectionUrl(resKo.map((x: any) => `/movie/${x.id}?title=${x.nameKo}`));
        } else {
          setSection(res.map((x: any) => x.nameEn));
          setSectionUrl(resKo.map((x: any) => `/movie/${x.id}?title=${x.nameEn}`));
        }
      })
      .catch((err) => console.log(err));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [language]);

  useEffect(() => {
    sectionApi();
  }, [sectionApi]);

  const headers: any = t(`header`, { returnObjects: true });
  const menus: NavigationType[] = [
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
      link: ['/movie/schedule', '/movie/상영관-정보', '/movie/ticket', ...sectionUrl],
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
  console.log('헤더', isMobile);

  return isMobile ? (
    <div style={{ position: 'relative' }}>
      <MobileHeader menus={menus} />
      <Main isMobile>
        <Outlet />
      </Main>
      <Footer />
      <NavBack className={!navOpen ? 'none' : ''} />
    </div>
  ) : (
    <>
      <>
        <Header />
        <Nav menus={menus} />
      </>
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </>
  );
}
