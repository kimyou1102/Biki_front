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
  ArchiveMoviePage,
  ArchiveSketchPage,
  NewsNotice,
  Newsletter,
  NewsDetail,
  MainPage,
  FestivalSymbolPage,
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
} from '@pages';
import { HeaderLayout } from '@layout';
import { ScheduleInfoPage } from '@pages/movieSchedule';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HeaderLayout />}>
          <Route path="/" element={<MainPage />} />
          <Route path="/archive/distributions" element={<ArchiveMoviePage />} />
          <Route path="/archive/sketch" element={<ArchiveSketchPage />} />
          <Route path="/archive/videoclip" element={<VideoClipPage />} />
          <Route path="/news/notice/:id" element={<NewsDetail type="notice" />} />
          <Route path="/news/notice" element={<NewsNotice />} />
          <Route path="/news/newsletter" element={<Newsletter />} />
          <Route path="/news/pressrelease" element={<PressReleasePage />} />
          <Route path="/news/newsletter/:id" element={<NewsDetail type="newsletter" />} />
          <Route path="/festival" element={<FestivalSymbolPage />} />
          <Route path="/judges" element={<JudgesPage />} />
          <Route path="/movie/schedule" element={<ScheduleInfoPage />} />
          <Route path="/movie/opening-movies" element={<OpeningMoviesPage />} />
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
          <Route path="/movie/ready-action-movies" element={<ReadyActionMoviesPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
