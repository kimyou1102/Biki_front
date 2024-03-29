import React from 'react';
import styled from 'styled-components';
// eslint-disable-next-line import/no-extraneous-dependencies
import { useMediaQuery } from 'react-responsive';
import { MainListSection, Img } from '@atoms';
import { ShortcutButtonList } from '@molecules';
import { MainSlide, NoticeArticle, MainMovieList, MainEventList, MainYoutebeList, MainNewsBoxList } from '@organisms';
import { Helmet } from 'react-helmet-async';
import character1 from '../../assets/images/main_character1.png';
import character2 from '../../assets/images/main_character2.png';
import character3 from '../../assets/images/main_character3.png';
import cloud from '../../assets/images/main_cloud.png';

const Wrap = styled.div`
  position: relative;
`;

const MobileWrap = styled.div<{ left?: boolean }>`
  margin-top: 41px;
  padding-left: ${(props) => (props.left ? '12px' : '0px')};
`;

// const Section = styled.div`
//   padding: 0px 12px;
// `;

const Section = styled.div`
  padding: 0px 12px;
`;

const ImgWrap = styled.div`
  position: absolute;

  &.character1 {
    top: calc(175px * 0.8);
    left: calc(46px * 0.8);
  }

  &.cloud {
    top: 0px;
    right: 0px;
  }

  &.character2 {
    top: 0px;
    transform: translate(0px, calc(-60%));
    right: calc(320px * 0.8);
  }

  &.character3 {
    top: 15px;
    right: calc(375px * 0.8);
  }
`;

export function MainPage() {
  const isMobile = useMediaQuery({
    query: '(max-width:768px)',
  });

  const isPaint = useMediaQuery({
    query: '(max-width:1500px)',
  });

  return (
    <>
      <Helmet>
        <title>제18회 부산국제어린이청소년영화제</title>
      </Helmet>
      {isMobile ? (
        <>
          <MainSlide />
          <Section>
            <NoticeArticle />
          </Section>
          <MobileWrap left>
            <MainMovieList />
          </MobileWrap>
          <MobileWrap left>
            <MainEventList />
          </MobileWrap>
          <MobileWrap left>
            <MainYoutebeList />
          </MobileWrap>
          <Section>
            <MainNewsBoxList />
          </Section>
        </>
      ) : (
        <>
          <MainSlide />
          <ShortcutButtonList />
          <Wrap>
            <NoticeArticle />
            {!isPaint ? (
              <>
                <ImgWrap className="character1">
                  <Img width={186} height={198} alt="배경캐릭터" src={character1} />
                </ImgWrap>
                <ImgWrap className="cloud">
                  <Img width={286} height={327} alt="배경구름" src={cloud} />
                </ImgWrap>
              </>
            ) : null}
          </Wrap>
          <MainListSection>
            <MainMovieList />
          </MainListSection>
          <div
            style={{ background: '#F8F8F8', padding: '40px 0 0 0', display: 'flex', marginBottom: 'calc(117px * 0.8)' }}
          >
            <MainListSection bottom={60}>
              <MainEventList />
            </MainListSection>
          </div>
          <Wrap>
            <MainListSection>
              <ImgWrap className="character2">
                <Img width={108} height={113} alt="배경캐릭터2" src={character2} />
              </ImgWrap>
              <MainYoutebeList />
            </MainListSection>
          </Wrap>
          <MainNewsBoxList />
          <Wrap>
            <ImgWrap className="character3">
              <Img width={162} height={87} alt="배경캐릭터" src={character3} />
            </ImgWrap>
          </Wrap>
        </>
      )}
    </>
  );
}
