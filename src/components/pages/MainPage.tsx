import React from 'react';
import styled from 'styled-components';
import { MainListSection, Img } from '@atoms';
import { ShortcutButtonList } from '@molecules';
import { MainSlide, NoticeArticel, MainMovieList, MainEventList, MainYoutebeList, MainNewsBoxList } from '@organisms';
import { Footer } from '@layout/Footer';
import character1 from '../../assets/images/main_character1.png';
import character2 from '../../assets/images/main_character2.png';
import character3 from '../../assets/images/main_character3.png';
import cloud from '../../assets/images/main_cloud.png';

const Wrap = styled.div`
  position: relative;
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
    top: 0px;
    transform: translate(0px, -110%);

    right: calc(375px * 0.8);
  }
`;

export function MainPage() {
  return (
    <>
      <MainSlide />
      <ShortcutButtonList />
      <Wrap>
        <NoticeArticel />
        <ImgWrap className="character1">
          <Img width={186} height={198} alt="배경캐릭터" src={character1} />
        </ImgWrap>
        <ImgWrap className="cloud">
          <Img width={286} height={327} alt="배경구름" src={cloud} />
        </ImgWrap>
      </Wrap>
      <MainListSection>
        <MainMovieList />
      </MainListSection>
      <div style={{ background: '#F8F8F8', padding: '40px 0 0 0', display: 'flex', marginBottom: 'calc(117px * 0.8)' }}>
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
        {/* <Footer /> */}
      </Wrap>
    </>
  );
}
