import React from 'react';
import { MainListSection } from '@atoms';
import { MainSlide, NoticeArticel, MainMovieList, MainEventList, MainYoutebeList, MainNewsBoxList } from '@organisms';
import { Footer } from '@layout/Footer';

export function MainPage() {
  return (
    <>
      <MainSlide />
      <NoticeArticel />
      <MainListSection>
        <MainMovieList />
      </MainListSection>
      <div style={{ background: '#F8F8F8', padding: '40px 0 0 0', display: 'flex', marginBottom: 'calc(117px * 0.8)' }}>
        <MainListSection bottom={60}>
          <MainEventList />
        </MainListSection>
      </div>
      <MainListSection>
        <MainYoutebeList />
      </MainListSection>
      <MainNewsBoxList />

      <Footer />
    </>
  );
}
