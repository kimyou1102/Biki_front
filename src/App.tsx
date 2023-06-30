import React from 'react';
import { Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import {
  Nav,
  NoticeArticel,
  MainMovieList,
  MainSlide,
  ContentBoxs,
  MovieBox,
  ArchiveMovieList,
  ArchiveMovieSection,
  NewsSection,
} from '@organisms';
import { Header } from '@molecules';
import { Section, Div, Input, H3, Th, Tr, THead, A } from '@atoms';
import { useSetRecoilState } from 'recoil';
import { NewsTemplates } from '@templates';
import {
  BikyPage,
  FestivalSymbolPage,
  AwardsPage,
  CreatorsPage,
  SponsorPage,
  ResearchPage,
  EducationScreeningPage,
  SchoolPage,
  ProgramPage,
  EventLivePage,
  EventPosterPage,
  EventNightPage,
  EventPlaygroundPage,
  ForumHistoryPage,
  ForumIndustryPage,
  ContactOfficePage,
  ContactPositionPage,
  ContactIndustryPage,
  ArchiveMoviePage,
  ArchiveSketchPage,
  NewsNotice,
  Newsletter,
  NewsDetail,
  MainPage,
  JudgesPage,
  OpeningMoviesPage,
  FindMeMoviesPage,
  TogetherMoviesPage,
  WithinDifferencesMoviesPage,
  BeyondBoundariesMoviesPage,
  SpecialExhibitionMoviesPage,
  RightNowMoviesPage,
  OutdoorScreenMovies,
  ReadyActionMovies12Page,
  ReadyActionMovies15Page,
  ReadyActionMovies18Page,
  ReadyActionMoviesPage,
  LoginPage,
  VideoClipPage,
  PressReleasePage,
  TheaterInformationPage,
  ScheduleInfoPage,
  SignupPage,
  ArchiveDetail,
  HistoryPage,
  NewsRelease,
} from '@pages';
import { HeaderLayout } from '@layout';
// import { ScheduleInfoPage } from '@pages/movieSchedule';
import { MoviePage } from '@pages/2023program/MoviePage';
import { TicketInformationPage } from '@pages/2023program/TicketInformationPage';
import { OnlineMoviePage } from '@pages/2023program/OnlineScreeningPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HeaderLayout />}>
          <Route path="/" element={<MainPage />} />
          <Route path="/articles/18-부산국제어린이청소년영화제-BIKY-" element={<BikyPage />} />
          <Route path="/articles/페스티벌-심벌" element={<FestivalSymbolPage />} />
          <Route path="/articles/시상내역" element={<AwardsPage />} />
          <Route path="/articles/비키를-만드는-사람들" element={<CreatorsPage />} />
          <Route path="/articles/스폰서-모집안내" element={<SponsorPage />} />
          <Route path="/articles/부설연구소" element={<ResearchPage />} />
          <Route path="/articles/배급영화-교재-활동지-교육영상" element={<EducationScreeningPage />} />
          <Route path="/articles/비키랑-학교랑" element={<SchoolPage />} />
          <Route path="/articles/교육-프로그램" element={<ProgramPage />} />
          <Route path="/articles/상영-이벤트" element={<EventLivePage />} />
          <Route path="/articles/포스터-그림-전시회" element={<EventPosterPage />} />
          <Route path="/articles/어린이청소년영화인의-밤" element={<EventNightPage />} />
          <Route path="/articles/비키놀이터" element={<EventPlaygroundPage />} />
          <Route path="/articles/역대-비키포럼" element={<ForumHistoryPage />} />
          <Route path="/articles/인더스트리-네트워크" element={<ForumIndustryPage />} />
          <Route path="/articles/사무국사람들" element={<ContactOfficePage />} />
          <Route path="/articles/사무국위치" element={<ContactPositionPage />} />
          <Route path="/articles/contact/인더스트리-네트워크" element={<ContactIndustryPage />} />
          <Route path="/archive/distributions" element={<ArchiveMoviePage />} />
          <Route path="/archive/distributions/detail/:id" element={<ArchiveDetail />} />
          <Route path="/archive/sketch" element={<ArchiveSketchPage />} />
          <Route path="/archive/videoclip" element={<VideoClipPage />} />
          <Route path="/archive/history" element={<HistoryPage />} />
          <Route path="/news/notice" element={<NewsNotice />} />
          <Route path="/news/notice/:id" element={<NewsDetail type="notice" />} />
          <Route path="/news/newsletter" element={<Newsletter />} />
          <Route path="/news/newsletter/:id" element={<NewsDetail type="newsletter" />} />
          <Route path="/news/pressrelease" element={<PressReleasePage />} />
          <Route path="/news/pressrelease/:id" element={<NewsDetail type="pressrelease" />} />
          <Route path="/news/newsrelease" element={<NewsRelease />} />
          <Route path="/news/newsrelease/:id" element={<NewsDetail type="newsrelease" />} />
          <Route path="/judges" element={<JudgesPage />} />
          <Route path="/movie/:id" element={<MoviePage />} />
          <Route path="/movie/schedule" element={<ScheduleInfoPage />} />
          <Route path="/movie/상영관-정보" element={<TheaterInformationPage />} />
          <Route path="/movie/ticket" element={<TicketInformationPage />} />
          <Route path="/movie/online/:id" element={<OnlineMoviePage />} />
          {/* <Route path="/movie/opening-movies" element={<OpeningMoviesPage />} />
          <Route path="/movie/find-me-movies" element={<FindMeMoviesPage />} />
          <Route path="/movie/together-movies" element={<TogetherMoviesPage />} />
          <Route path="/movie/within-differences-movies" element={<WithinDifferencesMoviesPage />} />
          <Route path="/movie/beyond-boundaries-movies" element={<BeyondBoundariesMoviesPage />} />
          <Route path="/movie/special-exhibition-movies" element={<SpecialExhibitionMoviesPage />} />
          <Route path="/movie/rightnow-movies" element={<RightNowMoviesPage />} />
          <Route path="/movie/outdoor-screen-movies" element={<OutdoorScreenMovies />} />
          <Route path="/movie/ready-action12-movies" element={<ReadyActionMovies12Page />} />
          <Route path="/movie/ready-action15-movies" element={<ReadyActionMovies15Page />} />
          <Route path="/movie/ready-action18-movies" element={<ReadyActionMovies18Page />} />
          <Route path="/movie/ready-action-movies" element={<ReadyActionMoviesPage />} /> */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
